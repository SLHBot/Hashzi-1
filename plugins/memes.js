/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
Coded by @KursadHD
*/

const SlHackers = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCMD({ pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC }, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
        else {
            topText = match[1];
            bottomText = '';
        }

        var info = await message.reply(Lang.DOWNLOADING);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        memeMaker({
            image: location,
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function (err) {
            if (err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, { filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.BOT_NAAAAAME });
            await info.delete();
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCMD({ pattern: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC }, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
        else {
            topText = match[1];
            bottomText = '';
        }

        var info = await message.reply(Lang.DOWNLOADING);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        memeMaker({
            image: location,
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function (err) {
            if (err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, { filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.BOT_NAAAAAME });
            await info.delete();
        });
    }));
    SlHackers.addCMD({ pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, dontaddCMDList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
        else {
            topText = match[1];
            bottomText = '';
        }

        var info = await message.reply(Lang.DOWNLOADING);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        memeMaker({
            image: location,
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function (err) {
            if (err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, { filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.BOT_NAAAAAME });
            await info.delete();
        });
    }));
}
