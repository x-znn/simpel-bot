/* 
CREATED BY WINN
wa.me/6283897387848
*/

const fs = require('fs')
const chalk = require('chalk')

module.exports = async(znn, json) => {
const { from, id, status } = json[0]
let virus = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {})}, message: {contactMessage: {displayName: "Winn WhatsApp ©️", vcard: "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:Winn WhatsApp ©️\nORG:Winn WhatsApp ©️\nTITLE:\nitem1.TEL;waid=+6282143067466:+6282143067466\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:Winn WhatsApp ©️\nEND:VCARD"}}}
try {
if (global.autoreject && status == 'offer') {
const stanza = {
tag: 'call',
attrs: {
from: znn.user.id,
to: from,
id: znn.generateMessageTag(),
},
content: [
{
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
await znn.query(stanza)
await znn.sendMessage(from, {text: `*AUTO REJECT PANGGILAN*\n\nTerdeteksi Panggilan Dari @${from.split('@')[0]}\nAnda di blokir karna telah menelfon bot!`, mentions: [from] }, {quoted: virus})
await znn.updateBlockStatus(froms, 'block')
if (from !== global.owner) return znn.sendMessage(global.owner, {text: `Terdeteksi @${from.split('@')[0]} telah menelfon bot`, mentions: [from]}, {quoted: global.f1('Notifikasi Panggilan', '')})
}
} catch (e){console.log(e)}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright("[ UPDATE ]"), chalk.whiteBright(`${__filename}`) )
delete require.cache[file]
require(file)
})