/*Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');

SlHackers.addCommand({ pattern: 'workingbot', fromMe: false }, (async (message, match) => {

    await message.sendMessage("*Bang!! Bang!! My Bot is SLHackers Team Bot🎭🙇*");

}));
