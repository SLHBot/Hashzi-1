/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY Hirusha Dayarathne
Wa.me/+94755681782
*/

const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const EDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:01*\n*📂TYPE:* *Video*\n*Uploading..🎦*"
const EEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:02*\n*📂TYPE:* *video*\n*Uploading..🎦*"
const EEEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:03*\n*📂TYPE:* *video*\n*Uploading..🎦*"
const EEEEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:04*\n*📂TYPE:* *video*\n*Uploading..🎦*"
const EEEEEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:05*\n*📂TYPE:* *video*\n*Uploading..🎦*"
const EEEEEEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:06*\n*📂TYPE:* *video*\n*Uploading..🎦*"
const EEEEEEEDU_SLHEDU = "*TITLE:* *☣MOTIVATION Video No:07*\n*📂TYPE:* *video*\n*Uploading..🎦*"

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '1motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39049`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '2motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39050`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '3motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39053`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '4motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39055`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '5motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39056`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '6motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39059`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '7motivate ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39061`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

}


else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '1motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39049`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '2motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39050`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '3motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39053`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '4motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39055`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '5motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39056`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '6motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39059`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

    SlHackers.addCommand({ pattern: '7motivate ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39061`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EEEEEEEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.BOT_NAAAAAAAAME })

    }));

}
