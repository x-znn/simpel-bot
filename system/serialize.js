/* 
CREATED BY WINN & SURYA 
wa.me/6283897387848
wa.me/62895415497664
*/

const fs = require('fs')
const chalk = require('chalk')
const { proto, downloadContentFromMessage, jidDecode, areJidsSameUser, generateForwardMessageContent, getContentType, generateWAMessage } = global.baileys

const dlMessage = async(message) => {
try {
let mime = (message.msg || message).mimetype || '';
let messageType = message.mtype ? message.mtype.replace(/Message/gi, ''): mime.split('/')[0];
const stream = await downloadContentFromMessage(message,messageType);
let buffer = Buffer.from([]);
for await(const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
return buffer
}catch(e){console.log(e)}
}

const Serialize = (surya, m, store) => {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = surya.decodeJid(m.fromMe && surya.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = surya.decodeJid(m.key.participant) || ''
}

if (m.message) {
let mtype = Object.keys(m.message)
m.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || 
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || mtype[mtype.length - 1] 
m.content = JSON.stringify(m.message)
m.msg = (m.mtype == 'viewOnceMessageV2' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
}

if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = surya.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === surya.decodeJid(surya.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, surya)
return Serialize(surya, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => surya.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => surya.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => surya.downloadMediaMessage(m.quoted)
}
}
if (m.msg?.url) m.download = () => dlMessage(m.msg)
m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || '';
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? surya.sendMedia(chatId, text, 'file', '', m, { ...options }) : surya.sendText(chatId, text, m, { ...options })
m.copy = () => Serialize(surya, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => surya.copyNForward(jid, m, forceForward, options)

surya.appenTextMessage = async(text, chatUpdate) => {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: surya.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, surya.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
surya.ev.emit('messages.upsert', msg)
}

return m
}

module.exports = Serialize