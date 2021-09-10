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
    var link_finder = 'true'

    var adc = ''
    if (Config.LANG == 'EN') adc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'
    if (Config.LANG == 'SI') adc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'

    var bdc = ''
    if (Config.LANG == 'EN') bdc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'
    if (Config.LANG == 'SI') bdc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'

    var cdc = ''
    if (Config.LANG == 'EN') cdc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'
    if (Config.LANG == 'SI') cdc = '🌹🍃 *Good* \n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷\n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Night* \n┆┆┆┆🍃\n┆┆┆🌹\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n┆🍃\n┆🌼\n┆┆🍃\n┆┆🌷 *Sweet* \n┆┆┆🍃\n┆┆┆🌹\n┆┆┆┆\n┆┆┆┆\n┆┆┆┆\n┆┆┆🌹 *Dreams* \n┆┆┆┆🍃\n┆┆┆🌻\n┆┆┆🍃\n┆┆🌷\n┆┆🍃\n┆🌼\n┆🌹🍃\n🌹🍃\n'

    var ddc = ''
    if (Config.LANG == 'EN') ddc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'
    if (Config.LANG == 'SI') ddc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'

    var edc = ''
    if (Config.LANG == 'EN') edc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'
    if (Config.LANG == 'SI') edc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'

    var fdc = ''
    if (Config.LANG == 'EN') fdc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'
    if (Config.LANG == 'SI') fdc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'

    var gdc = ''
    if (Config.LANG == 'EN') gdc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'
    if (Config.LANG == 'SI') gdc = '💚 *Good* 💚\n   💚 *Morning* 💚\n  ===>♡☕️☕️♡<===\n        ┈┈╭╯╯╯┈\n     ┈┈┏━━━━┓\n     ┈╭┫╭▅╭▅┃\n     ┈┃┃┳╭╮┳┃\n     ┈╰┫╰━━╯┃\n     ▔▔╰━━━━╯\n🌸 *This coffee is for you* 🌸\n🌸 *Have a nice day* 🌸'


    if (link_finder == 'true' && message.jid !== '94755681782@s.whatsapp.net') {
        let regex1 = new RegExp('GOOD NIGHT')
        let regex2 = new RegExp('Good Night')
        let regex3 = new RegExp('good night')
        let regex4 = new RegExp('GN')
        let regex5 = new RegExp('GOOD MORNING')
        let regex6 = new RegExp('Good Morning')
        let regex7 = new RegExp('GM')
        let regex8 = new RegExp('good morning')
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
            await message.client.sendMessage(message.jid, abc, MessageType.text, { quoted: message.data })
        }
    }
}));
