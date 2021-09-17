/* Copyright (C) 2021 Hirusha.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 Project
*/

const { MessageType, GroupSettingChange, ChatModification, WAConnectionTest } = require('@adiwajshing/baileys');
const SlHackers = require('../events');
const DEL = "Delet all messages from you"
const Language = require('../language');
const Lang = Language.getString('AsenaPlug');
const axios = require('axios');

SlHackers.addCommand({ pattern: 'delall', fromMe: true, desc: DEL }, (async (message, match) => {

    await message.sendMessage(Lang.DELETING);
    await message.client.modifyChat(message.jid, ChatModification.delete);
    await message.sendMessage('.setvar AUTO_BİO:true');
    await message.sendMessage('```🕊All deleted....```');
}));