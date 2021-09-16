/* උස්සන්න හදන්න එපා බේසික් සන්ස්ලා රිටන් දෙනවා
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

SlHackers.addCMD({ pattern: 'feetggif ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/feetg?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCMD({ pattern: 'pussygif ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/pussy?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCMD({ pattern: 'kunigif ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/kuni?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCMD({ pattern: 'analgif ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/anal?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCMD({ pattern: 'spankgif ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/spank?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));
