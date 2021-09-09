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
    if (Config.LANG == 'EN') adc = '*🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻*'
    if (Config.LANG == 'SI') adc = '*👊👊👊👊👊👊👊*'

    if (link_finder == 'true' && message.jid !== '94755681782@s.whatsapp.net') {
        let regex1 = new RegExp('fuck')
        if (regex1.test(message.message)) {
            await message.client.sendMessage(message.jid, adc, MessageType.text, { quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            await message.client.sendMessage(message.jid, abc, MessageType.text, { quoted: message.data })
        }
    }
}));
