const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

SlHackers.addCommand({ pattern: 'feetggif ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/feetg?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCommand({ pattern: 'pussygif ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/pussy?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCommand({ pattern: 'kunigif ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/kuni?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCommand({ pattern: 'analgif ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/anal?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));

SlHackers.addCommand({ pattern: 'spankgif ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/spank?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.document, { mimetype: Mimetype.gif, caption: Config.BOT_NAME })

}));
