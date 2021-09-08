/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('conventer');
const XN_N = "```වීඩියෝව 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const XN_D = "```📥වීඩියෝව 𝕌𝕡𝕝𝕠𝕒𝕕𝕚𝕟𝕘...```"
const NEED_WORD = "*ඔබ 📥වීඩියෝවක URL ඇතුළත් කළ යුතුය*"


Asena.addCommand({ on: 'text', fromMe: false, deleteCommand: false }, (async (message, match) => {
    var antilink_var = 'true'

    var ldc = ''
    if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
    if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
    if (Config.LANG == 'EN') ldc = '*Link Found!*'
    if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!*'
    if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
    if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
    if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
    if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
    if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
    if (antilink_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            await message.client.sendMessage(message.jid, ldc, MessageType.text, { quoted: message.data })
        }
        else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid, ldc, MessageType.text, { quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            await message.client.sendMessage(message.jid, ldc, MessageType.text, { quoted: message.data })
        }
    }
}));
