/* Copyright (C) 2021 Hirusha Dayarathne.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const { promisify } = require('util');

const pipeline = promisify(stream.pipeline);

const Language = require('../language');
const Lang = Language.getString('removebg');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'removebg ?(.*)', fromMe: true, desc: Lang.REMOVEBG_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid, Lang.NEED_PHOTO, MessageType.text, { quoted: message.data });
        if (Config.RBG_API_KEY === false) return await message.client.sendMessage(message.jid, Lang.NO_API_KEY, MessageType.text, { quoted: message.data });

        var load = await message.reply(Lang.RBGING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        });

        await pipeline(
            rbg,
            fs.createWriteStream('rbg.png')
        );

        await message.client.sendMessage(message.jid, fs.readFileSync('rbg.png'), MessageType.document, { filename: 'SLHackers.png', mimetype: Mimetype.png });
        await load.delete();
    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'removebg ?(.*)', fromMe: false, desc: Lang.REMOVEBG_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid, Lang.NEED_PHOTO, MessageType.text, { quoted: message.data });
        if (Config.RBG_API_KEY === false) return await message.client.sendMessage(message.jid, Lang.NO_API_KEY, MessageType.text, { quoted: message.data });

        var load = await message.reply(Lang.RBGING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');

        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {
                'X-Api-Key': Config.RBG_API_KEY
            }
        });

        await pipeline(
            rbg,
            fs.createWriteStream('rbg.png')
        );

        await message.client.sendMessage(message.jid, fs.readFileSync('rbg.png'), MessageType.document, { filename: 'SLHackers.png', mimetype: Mimetype.png });
        await load.delete();
    }));
}
