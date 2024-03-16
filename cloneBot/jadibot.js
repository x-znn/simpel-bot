require('../settings');
require('../system/functions')
//MODULE
const { default: WASocket, Browsers, DisconnectReason, makeInMemoryStore, PHONENUMBER_MCC, useMultiFileAuthState, fetchLatestBaileysVersion, generateWAMessage, getContentType, downloadContentFromMessage, generateWAMessageFromContent, generateForwardMessageContent, jidDecode, proto, areJidsSameUser, delay } = global.baileys
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const qrcode = require('qrcode')
const fs = require('fs')
const chalk = require('chalk')
const pino = require('pino')
const rimraf = require('rimraf')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require('path')
const FileType = require('file-type')
const Jimp = require('jimp')
//LIB
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/exif')
const { db } = require('./database');
const { initDatabase } = require('./database');

const makeWASocket = (connectionOptions, options = {}) => {
try {
const znn = WASocket(connectionOptions)

znn.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
}

znn.decodeJid = (chat) => {
let decode = jidDecode(chat)
if (/:\d+@/gi.test(chat)) return decode.user && decode.server && decode.user + '@' + decode.server || chat;
else return chat;
}

znn.sendteks = (from, teks, q = '', options = {}) => {
return znn.sendMessage(from, {text: teks, mentions: znn.ments(teks), ...options }, { quoted: q });
}

znn.sendimage = async (from, path, caption = '', quoted, options) => {
let buffer = Buffer.isBuffer(path) ? path : await getBuffer(path)
return await znn.sendMessage(from, { image: buffer, caption: caption, ...options }, { quoted: quoted})
}

znn.copyNForward = async (jid, message, forwardingScore = true, options = {}) => {
let m = generateForwardMessageContent(message, !!forwardingScore)
let mtype = Object.keys(m)[0]
if (forwardingScore && typeof forwardingScore == 'number' && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
m = generateWAMessageFromContent(jid, m, { ...options, userJid: znn.user.id })
await znn.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options }})
return m
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
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

znn.sendkontak = (from, teks, arr = [...[satu = "", dua = "", tiga = ""]], quoted = '', opts = {}) => {
return znn.sendMessage(from, { contacts: { displayName: teks, contacts: arr.map(i => ({displayName: '', vcard: 'BEGIN:VCARD\n'+'VERSION:3.0\n'+'FN:'+i[0]+'\n'+'ORG:'+i[2]+';\n'+'TEL;type=CELL;type=VOICE;waid='+i[1]+':'+i[1]+'\n'+'END:VCARD' })) }, ...opts}, {quoted})
}

znn.resize = async(buff) => {
const jimp = await Jimp.read(buff);
const crop = jimp.crop(0, 0, (await jimp.getWidth()), (await jimp.getHeight()));
return {img: await crop.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),preview: await crop.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)}
}

znn.createprofile = async(from, buff) => {
const { img } = await znn.resize(buff);
return znn.query({ tag: 'iq', attrs: { to: from, type:'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }] })
}

znn.getName = (jid, withoutContact= false) => {
id = znn.decodeJid(jid)
withoutContact = znn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = znn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {id, name: 'WhatsApp'} : id === znn.decodeJid(znn.user.id) ? znn.user : (store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
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
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./.npm/' + filename + '.' + type.ext) : './.npm/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

znn.sendMedia = async (from, path, quoted, options = {}) => {
let { ext, mime, data } = await znn.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await znn.sendMessage(from, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}

znn.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename) (filename = path.join(__dirname, '../.npm/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}

znn.sendFile = async(from, PATH, fileName, quoted = {}, options = {}) => {
let types = await znn.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('../lib/sticker')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await znn.sendMessage(from, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
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

// FUNCTION DOWNLOAD
znn.dlMessage = async(message) => {
try {
let mime = (message.msg || message).mimetype || '';
let messageType = message.mtype ? message.mtype.replace(/Message/gi, ''): mime.split('/')[0];
const stream = await downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await(const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
return buffer
}catch(e){console.log(e)}
}

znn.downloadM = async(m, type, filename = '') => {
if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
const stream = await downloadContentFromMessage(m, type)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
if (filename) await fs.promises.writeFile(filename, buffer)
return filename && fs.existsSync(filename) ? filename : buffer
}

return znn

} catch (e) {
console.log(e);
}

}

const parsingMessages = (znn, m, store) => {
if (m == undefined) return console.log("Invalid Update message baileys");
if (znn == undefined) return console.log("Invalid connection from baileys");
if (!m) return m
let M = proto.WebMessageInfo
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = znn.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.now = m.messageTimestamp
m.isGc = m.chat.endsWith('@g.us')
m.isPc = m.chat.endsWith('@s.whatsapp.net')
m.sender = znn.decodeJid(m.key.fromMe && znn.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe //|| areJidsSameUser(m.sender, znn.user.id)
m.from = m.key.remoteJid
}
m.getContentType = (content) => {
if (content) {
const keys = Object.keys(content);
const key = keys.find(k => (k === 'conversation' || k.endsWith('Message')) && k !== 'senderKeyDistributionMessage');
return key;
}
}
if (m.message) {
if (m.message?.messageContextInfo) delete m.message.messageContextInfo;
if (m.message?.senderKeyDistributionMessage) delete m.message.senderKeyDistributionMessage;
m.type = m.getContentType(m.message);
m.content = JSON.stringify(m.message)
m.botNumber = znn.user.id ? znn.user.id.split(":")[0]+"@s.whatsapp.net" : znn.user.jid
m.senderNumber = m.sender.split('@')[0]
m.pushname = m.pushName || 'No Name'
m.msg = (m.type == 'viewOnceMessageV2' ? m.message[m.type].message[m.getContentType(m.message[m.type].message)] : m.message[m.type])
m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || ''
m.budy = (typeof m.text == 'string' ? m.text : '')
m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
m.quoted.type = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = znn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
m.quoted.sender = znn.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === znn.user.jid
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => znn.downloadM(m.quoted, m.quoted.type.replace(/message/i, ''), saveToFile)
m.quoted.fakeObj = M.fromObject({
key: {
fromMe: m.quoted.fromMe,
remoteJid: m.quoted.chat,
id: m.quoted.id
},
message: quoted,
...(m.isGc ? { participant: m.quoted.sender } : {})
})
}
if (m.msg?.url) m.download = () => znn.dlMessage(m.msg)
m.reply = (text, chatid, options) => znn.sendteks(chatid ? chatid : m.chat, text, m, options)
}

return m
}

const znn = {};

async function jadibot(znn, jid, m, number) {
const { state, saveCreds } = await useMultiFileAuthState(`./userclone/${jid}`);
const { version, isLatest } = await fetchLatestBaileysVersion();
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

const connectionOptions = {
version: version,
printQRInTerminal: true,
browser: ['Darwin UserBot', 'Chrome', '1.0.0'],
markOnlineOnConnect: true,
logger: pino({ level: 'silent' }),
getMessage: async(key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg.message || undefined
}
return !0;
}
}


znn[jid] = makeWASocket(Object.assign(connectionOptions, { auth: state }));
store.bind(znn[jid].ev)
initDatabase()


const nomore = m.sender.replace(/[^0-9]/g, '')
// SETTING JADIBOT
db.jadibot = {
jid: nomore,
prefix: '.',
cover: 'https://telegra.ph/file/92005c44a728b4ae906ae.jpg',
autoreadsw: true,
anticall: true,
self: false,
}


// DATABASE GAME
znn[jid].suit = {};
znn[jid].tictactoe = {};
znn[jid].petakbom = {};
znn[jid].kuis = {};
znn[jid].siapakahaku = {};
znn[jid].asahotak = {};
znn[jid].susunkata = {};
znn[jid].caklontong = {};
znn[jid].family100 = {};
znn[jid].tebaklirik = {};
znn[jid].tebaklagu = {};
znn[jid].tebakgambar = {};
znn[jid].tebakkimia = {};
znn[jid].tebakkata = {};
znn[jid].tebakkalimat = {};
znn[jid].tebakbendera = {};
znn[jid].tebakanime = {};
znn[jid].tebakkabupaten = {};
znn[jid].kuismath = {};


let settings = db.jadibot[jid] !== undefined ? db.jadibot[jid] : {}

// Menangani koneksi
znn[jid].ev.on('connection.update', async(update) => {
let { lastDisconnect, connection, qr } = update
const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (qr) {
let scanner = await znn.sendMessage(jid, {image: await qrcode.toBuffer(qr, { scale: 8 }), caption: "Scan QR ini untuk jadi bot \n\n1. Klik titik tiga di pojok kanan atas\n2. Klik Perangkat tertaut\n3. Klik Tautkan Perangkat\n4. Scan QR Ini\n\nsilahkan ketik *.stopjadibot* untuk membatalkan"})
setTimeout(async() => {await znn.sendMessage(jid, {delete: scanner.key})}, 30000)
}
if (connection == "connecting") {
console.log('Connecting. . .');
} else if (connection == "open") {
console.log('Connected ✓');
let user = znn.decodeJid(znn[jid].user.id);

await znn.sendteks(m.chat, `Nomor Yang Mendaftar Jadibot: @${jid.split('@')[0]},\n\nNomor Yang Jadibot : @${user.split('@')[0]}\n\n*Aruna Bot* Sekarang tersambung ke koneksi server WhatsApp web [!]`, global.f1('[!] Notifikasi Connection Aruna', thumb))

await znn[jid].sendteks(m.chat, `@${user.split('@')[0]} telah tersambung ke koneksi server whatsapp web`, global.f1('[!] Notifikasi Connection *Aruna*', thumb))
settings.jid = user
} else if (connection === "close") {
if (reason === DisconnectReason.restartRequired) {
jadibot(znn, jid)
console.log("Restart Required, Restarting...");
} else if (reason === DisconnectReason.timedOut) {
jadibot(znn, jid)
console.log("Connection TimedOut, Reconnecting...");
} else {
return znn.sendMessage(jid, {text: 'Anda sudah tidak lagi menjadi bot.'});
}
}
})

// Simpan credensial login
znn[jid].ev.on('creds.update', saveCreds);

// Menangani acara { pesan, update, autoreadsw }
znn[jid].ev.on('messages.upsert', async(update) => {
try {
let msg = update.messages[0];
if (!msg.message) return;
msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
let m = parsingMessages(znn[jid], msg, store)
require('./case')(znn[jid], m, update, store, settings)
if (settings?.autoreadsw && msg.key.remoteJid === 'status@broadcast') {
if (msg.message?.protocolMessage) return
await znn[jid].readMessages([msg.key])
}
} catch (err){
console.log(err)
}
})

// Menangani Panggilan
znn[jid].ev.on('call', async(json) => {
try {
const { from, id, status } = json[0]
if (from == global.owner) return
if (settings?.anticall && status == 'offer') {
const stanza = {
tag: 'call',
attrs: {
from: znn[jid].user.id,
to: from,
id: znn[jid].generateMessageTag(),
},
content: [{
tag: 'reject',
attrs: {
'call-id': id,
'call-creator': from,
count: '0',
},
content: undefined,
},
],
}
await znn[jid].query(stanza)
}
} catch (e){
console.log(e)
}
})

znn[jid].ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = znn[jid].decodeJid(contact.id);
if (store && store.contacts)
store.contacts[id] = { id, name: contact.notify };
}
});

}

async function stopjadibot(znn, jid, m) {
if (!Object.keys(znn).includes(jid)) {
return znn.sendteks(m.chat, 'Kamu tidak ada di list jadi bot.', m);
}
try {
znn[jid].end('stop');
} catch {}
try {
znn[jid].logout();
} catch {}
delete znn[jid];
delete db.jadibot[jid];
rimraf.sync(`./userclone/${jid.split('@')[0]}`);
return znn.sendteks(m.chat, 'Sukses stop jadi bot.', m);
};

module.exports = { jadibot, stopjadibot }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright("[ UPDATE ]"), chalk.whiteBright(`${__filename}`) )
delete require.cache[file]
require(file)
})