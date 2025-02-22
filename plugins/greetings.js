/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');

const Language = require('../language');
const Lang = Language.getString('greetings');

SlHackers.addCommand({ pattern: 'welcome$', fromMe: true, desc: Lang.WELCOME_DESC }, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid, Lang.NOT_SET_WELCOME, MessageType.text);
    } else {
        await message.client.sendMessage(message.jid, Lang.WELCOME_ALREADY_SETTED + hg.message + '```', MessageType.text);
    }
}));

SlHackers.addCommand({ pattern: 'welcome (.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid, Lang.NEED_WELCOME_TEXT);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid, Lang.WELCOME_DELETED, MessageType.text); return await sql.deleteMessage(message.jid, 'welcome'); }
        await sql.setMessage(message.jid, 'welcome', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid, Lang.WELCOME_SETTED, MessageType.text)
    }
}));

SlHackers.addCommand({ pattern: 'goodbye$', fromMe: true, desc: Lang.GOODBYE_DESC }, (async (message, match) => {
    var hg = await sql.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.client.sendMessage(message.jid, Lang.NOT_SET_GOODBYE, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid, Lang.GOODBYE_ALREADY_SETTED + hg.message + '```', MessageType.text);
    }
}));

SlHackers.addCommand({ pattern: 'goodbye (.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid, Lang.NEED_GOODBYE_TEXT, MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid, Lang.GOODBYE_DELETED, MessageType.text); return await sql.deleteMessage(message.jid, 'goodbye'); }
        await sql.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid, Lang.GOODBYE_SETTED, MessageType.text)
    }
}));
