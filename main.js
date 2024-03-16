require('./settings')
require('./system/functions')
process.on('uncaughtException', console.error)
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, getAggregateVotesInPollMessage, PHONENUMBER_MCC } = global.baileys
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const cfonts = require('cfonts')
const path = require('path')
const { exec } = require('child_process')
const colors = require('colors')
const { fromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const readline = require('readline');

// LIB
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif } = require('./lib/exif')
const { color, bgcolor, mycolor } = require('./lib/color')
const { start } = require('./lib/spinner')
const Serialize = require('./system/serialize')
async function connect() {
cfonts.say('PROJECT znn', {
font: 'shade',
align: 'center',
colors: ['yellow']
})

// Read line interface by darwin
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
const useMobile = process.argv.includes('--mobile')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)

/* FUNCTION DATABASE BY SURYA */
global.database = new (require('./system/database'))()
/* read database */
const content = await database.read()
/* load database */
if (content && Object.keys(content).length === 0) {
global.db = {
users: {}, 
groups: {}, 
jadibot: {},
settings : {},
anonymous:{},
sewa: [],
listall: {}, 
stickercmd: {},
...(content || {}),
}
await database.write(global.db)
} else {
global.db = content
}

const configConnection = {
/* jangan di ubah ntar pairing kode nya salah */
browser: ["Ubuntu","Chrome","20.0.04"],
syncFullHistory: true,
printQRInTerminal: !global.usePairingCode,
mobile: useMobile,
logger: pino({ level: 'silent' }),
generateHighQualityLinkPreview: true,
markOnlineOnConnect: true,
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg.message || undefined
}
return {conversation: 'WinTheBot WhatsApp LLc'}
}
}

const znn = makeWASocket(Object.assign(configConnection, { auth: state }));
store.bind(znn.ev)
znn.ev.on('creds.update', saveCreds)


if (global.usePairingCode && !znn.authState.creds.registered) {
if (useMobile) throw new Error('Cannot use pairing code with mobile api')

let phoneNumber
if (!!global.pairingNumber) {
phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '')

if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))
process.exit(0)
}
} else {
phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))

phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
rl.close()
}
}

setTimeout(async () => {
let code = await znn.requestPairingCode(phoneNumber)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgYellow(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
}, 3000)
}

if (useMobile && !znn.authState.creds.registered) {
const { registration } = znn.authState.creds || { registration: {} }

if (!registration.phoneNumber) {
let phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Gunakan dengan Nomor Negara, Contoh : 62838xxxx")))

phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
}

registration.phoneNumber = "+" + phoneNumber
}

const phoneNumber = parsePhoneNumber(registration.phoneNumber)
if (!phoneNumber.isValid()) throw new Error('Invalid phone number: ' + registration.phoneNumber)

registration.phoneNumber = phoneNumber.format("E.164")
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber

const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]
registration.phoneNumberMobileCountryCode = mcc

async function enterCode() {
try {
const code = await question(chalk.bgBlack(chalk.greenBright(`Please Enter Your OTP Code : `)))
const response = await znn.register(code.replace(/[^0-9]/g, '').trim().toLowerCase())
console.log(chalk.bgBlack(chalk.greenBright("Successfully registered your phone number.")))
console.log(response)
rl.close()
} catch (e) {
console.error('Failed to register your phone number. Please try again.\n', e)
await askOTP()
}
}

async function askOTP() {
let code = await question(chalk.bgBlack(chalk.greenBright('What method do you want to use? "sms" or "voice"')))
code = code.replace(/[""]/g, '').trim().toLowerCase()

if (code !== 'sms' && code !== 'voice') return await askOTP()

registration.method = code

try {
await znn.requestRegistrationCode(registration)
await enterCode()
} catch (e) {
console.error('Failed to request registration code. Please try again.\n', e)
await askOTP()
}
}

await askOTP()
}


znn.ev.on('connection.update', async (update) => {
	const {
		connection, 
		isOnline,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				connect()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				connect();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				connect();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				connect()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				connect();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				connect();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				connect();
			} else znn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n[ Conneting ] loading pack`, 'blue'))
			if (isOnline == true) console.log(chalk.green('Status Aktif'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            console.log(color(`[ Connected ] connetion update`))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  connect();
	}
})
znn.ev.on('creds.update', saveCreds)
znn.ev.on("messages.upsert",  () => { })

znn.ev.on('call', async (node) => require('./system/anticall')(znn, node))

znn.ev.on('messages.upsert', async (upsert) => {
try {
let msg = upsert.messages[0]
if (!msg.message) return
msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
let m1 = Serialize(znn, msg, store)
require('./system/loadDatabase')(znn, msg)
require('./case')(znn, m1, upsert, store)
} catch (err) {
console.log(err)
}
})
znn.ev.on('messages.upsert', async (upsert) => {
try {
let msg = upsert.messages[0]
if (!msg.message) return
msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
let m1 = Serialize(znn, msg, store)
require('./system/loadDatabase')(znn, msg)
require('./creator')(znn, m1, upsert, store)
} catch (err) {
console.log(err)
}
})
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: 'Created by znn.'}
}


znn.ev.on('messages.update', async(chatUpdate) => {
if (global.self && !global.owner) return !0;
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = "." + command
znn.appenTextMessage(comand, chatUpdate)
}
}
}
})


// detect group update
		znn.ev.on("groups.update", async (json) => {
			if (global.welcome) {
			try {
ppgroup = await znn.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0]
			if (res.announce == true) {
				await delay(2000)
				znn.sendMessage(res.id, {
					text: `*[ System Notice ]* group di senyapkan oleh admin!`,
				})
			} else if (res.announce == false) {
				await delay(2000)
				znn.sendMessage(res.id, {
					text: `*[ System Notice ]* group telah dibuka!`,
				})
			} else if (res.restrict == true) {
				await delay(2000)
				znn.sendMessage(res.id, {
					text: `*[ System Notice ]* suksess membatasi akses member!`,
				})
			} else if (res.restrict == false) {
				await delay(2000)
				znn.sendMessage(res.id, {
					text: `*[ System Notice ]* group telah dibuka!`,
				})
			} else if(!res.desc == ''){
				await delay(2000)
				znn.sendMessage(res.id, { 
					text: `*[ System Notice ]* deskripsi di ubah ke\n\n${res.desc}`,
				})
      } else {
				await delay(2000)
				znn.sendMessage(res.id, {
					text: `*[ System Notice ]* group telah di *${res.subject}*`,
				})
			} 
			}
		})
        
//OPSI GROUP/GC
znn.ev.on('group-participants.update', async (anu) => {
/*console.log(anu)*/
try {
let metadata = await znn.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
var ppuser = await znn.profilePictureUrl(num, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await getBuffer(ppuser)


//Get Profile Picture Group\\
try {
ppgroup = await znn.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://telegra.ph/file/320b066dc81928b782c7b.png'
}
let nama = await znn.getName(num)
let memb = metadata.participants.length

//VERSI SIMPLE
if (global.welcome && anu.action == 'add') {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: znn.waUploadToServer })
var catalog = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "343056591714248",
    "title": `Welcome To ${metadata.subject}`,
    "description": `Selamat datang ${nama} (⁠ ͡⁠°⁠ᴥ⁠ ͡⁠°⁠ ⁠ʋ⁠)`,
    "currencyCode": "YURO",
    "productImageCount": 1,
    },
    "businessOwnerJid": global.owner,
    }
    }), { userJid: anu.id })
   await znn.relayMessage(anu.id, catalog.message, { messageId: catalog.key.id })
} else if (global.welcome && anu.action == 'remove') {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: znn.waUploadToServer })
var catalog = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "343056591714248",
    "title": `${nama} Telah Keluar`,
    "description": `Alasan : Di Invite Tuhan`,
    "currencyCode": "YURO",
    "productImageCount": 1,
    },
    "businessOwnerJid": global.owner,
    }
    }), { userJid: anu.id })
   await znn.relayMessage(anu.id, catalog.message, { messageId: catalog.key.id })
}

//DETEKSI PROMOTE/DEMOTE
if (global.welcome && anu.action == 'promote') {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: znn.waUploadToServer })
var catalog = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "343056591714248",
    "title": `${znn.getName(num)}`,
    "description": `Jadi Atmin Ygy`,
    "currencyCode": "YURO",
//    "priceAmount1000": "200000000",
    "productImageCount": 1,
//    "firstImageId": 1,
//    "salePriceAmount1000": "180000000",
//    "retailerId": `Nomor Owner Di Atas`,
//    "url": `https://wa.me/6283896302781`
    },
    "businessOwnerJid": global.owner,
    }
    }), { userJid: anu.id })
   await znn.relayMessage(anu.id, catalog.message, { messageId: catalog.key.id })
} else if (global.welcome && anu.action == 'demote') {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: znn.waUploadToServer })
var catalog = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "343056591714248",
    "title": `${znn.getName(num)}`,
    "description": `Jadi Npc Ygy`,
    "currencyCode": "YURO",
//    "priceAmount1000": "200000000",
    "productImageCount": 1,
//    "firstImageId": 1,
//    "salePriceAmount1000": "180000000",
//    "retailerId": `Nomor Owner Di Atas`,
//    "url": `https://wa.me/6283896302781`
    },
    "businessOwnerJid": global.owner,
    }
    }), { userJid: anu.id })
   await znn.relayMessage(anu.id, catalog.message, { messageId: catalog.key.id })
}

}
} catch (err) {
console.log(err)
}
})    

znn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

znn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = znn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

znn.getName = (jid, withoutContact  = false) => {
id = znn.decodeJid(jid)
withoutContact = znn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = znn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === znn.decodeJid(znn.user.id) ?
znn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

znn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await znn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await znn.getName(i + '@s.whatsapp.net')}\nFN:${await znn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${youtube}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
znn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}


znn.setStatus = (status) => {
znn.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

znn.serializeM = (m) => Serialize(znn, m, store)
znn.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
znn.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return znn.sendMessage(chatId, { text: text, mentions: await znn.ments(text), ...opts}, {quoted:quoted})
};
znn.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return znn.sendMessage(jid, {poll: { name, values, selectableCount }})
};

znn.sendText = (jid, text, quoted = '', options) => znn.sendMessage(jid, { text: text, ...options }, { quoted })
znn.send5ButMessage = async (id, text1, desc1, but = [], options) => {return znn.sendMessage(id, {text: text1, footer: desc1, templateButtons: but, headerType: 1}, {quoted: options})};
znn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await znn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

znn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
znn.sendMessage(jid, buttonMessage, { quoted, ...options })
}


znn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await znn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

znn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await znn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}
znn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
znn.sendkontak = (from, teks, arr = [...[satu = "", dua = "", tiga = ""]], quoted = '', opts = {}) => {
return znn.sendMessage(from, { contacts: { displayName: teks, contacts: arr.map(i => ({displayName: '', vcard: 'BEGIN:VCARD\n'+'VERSION:3.0\n'+'FN:'+i[0]+'\n'+'ORG:'+i[2]+';\n'+'TEL;type=CELL;type=VOICE;waid='+i[1]+':'+i[1]+'\n'+'END:VCARD' })) }, ...opts}, {quoted})
}

znn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await znn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

znn.cMod = (jid, copy, text = '', sender = znn.user.id, options = {}) => {
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === znn.user.id
return proto.WebMessageInfo.fromObject(copy)
}

znn.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}
}

// FUNCTION MAKE STICKER
znn.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await znn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

znn.vidToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await znn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

znn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await fromBuffer(buffer)
let trueFileName = attachExtension ? ('./.npm/' + filename + '.' + type.ext) : './.npm/' + filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

znn.sendMedia = async (jid, path, quoted, options = {}) => {
let { ext, mime, data } = await znn.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await znn.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}

znn.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await znn.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : config.exif.packname, author: options.author ? options.author : config.exif.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await znn.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

znn.sendImageAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await znn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

znn.sendVideoAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await znn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

znn.sendimage = async (from, path, caption = '', quoted, options) => {
let buffer = Buffer.isBuffer(path) ? path : await getBuffer(path)
return await znn.sendMessage(from, { image: buffer, caption: caption, ...options }, { quoted: quoted})
}

/* save database every 5 seconds */
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 5 * 1000)

return znn
}

connect();

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})