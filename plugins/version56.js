/*Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');

Asena.addCommand({ pattern: 'version', fromMe: true }, (async (message, match) => {

    await message.sendMessage("*⚜SLHACKERS VERSION CHECKER🙇*\n\n*🧚‍♂️SLHackers ▻5.2.4*\n*Global Stable*");

}));
