/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('conventer');


SlHackers.addCommand({ on: 'text', fromMe: false, deleteCommand: false }, (async (message, match) => {
    var my_link_detector = 'true'

    var adc = ''
    if (Config.LANG == 'EN') adc = '*Thank you so much for informing me of this message.*'
    if (Config.LANG == 'SI') adc = '*Thank you so much for informing me of this message.*'

    var bdc = ''
    if (Config.LANG == 'EN') bdc = '*මේ පණිවිඩය ලබාදි මාව දැනුවත් කල ඔබට බොහොමත්ම ස්තූති.*'
    if (Config.LANG == 'SI') bdc = '*මේ පණිවිඩය ලබාදි මාව දැනුවත් කල ඔබට බොහොමත්ම ස්තූති.*'

    var cdc = ''
    if (Config.LANG == 'EN') cdc = '*👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻*'
    if (Config.LANG == 'SI') cdc = '*👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻*'

    var ddc = ''
    if (Config.LANG == 'EN') ddc = '*👊👊👊👊👊👊👊*'
    if (Config.LANG == 'SI') ddc = '*👊👊👊👊👊👊👊*'

    var edc = ''
    if (Config.LANG == 'EN') edc = '*Thank you so much for informing me of this message.*'
    if (Config.LANG == 'SI') edc = '*Thank you so much for informing me of this message.*'

    var fdc = ''
    if (Config.LANG == 'EN') fdc = '!🎲'
    if (Config.LANG == 'SI') fdc = '!🎲'

    var gdc = ''
    if (Config.LANG == 'EN') gdc = '*Why?*'
    if (Config.LANG == 'SI') gdc = '*ai*'

    if (my_link_detector == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://gagana.lk')
        let regex3 = new RegExp('https://meemassoo.lk')
        let regex4 = new RegExp('https://slbreakingnews.com')
        let regex5 = new RegExp('https://dailymirror.lk')
        let regex6 = new RegExp('https://www.facebook.com')
        let regex7 = new RegExp('hiruwa')
        let regex8 = new RegExp('ado')
        if (regex1.test(message.message)) {
            await message.client.sendMessage(message.jid, edc, MessageType.text, { quoted: message.data })
        }
        else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid, adc, MessageType.text, { quoted: message.data })
        }
        else if (regex3.test(message.message)) {
            await message.client.sendMessage(message.jid, bdc, MessageType.text, { quoted: message.data })
        }
        else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid, cdc, MessageType.text, { quoted: message.data })
        }
        else if (regex5.test(message.message)) {
            await message.client.sendMessage(message.jid, ddc, MessageType.text, { quoted: message.data })
        }
        else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid, edc, MessageType.text, { quoted: message.data })
        }
        else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid, fdc, MessageType.text, { quoted: message.data })
        }
        else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid, gdc, MessageType.text, { quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            await message.client.sendMessage(message.jid, ebc, MessageType.text, { quoted: message.data })
        }
    }
}));
