/* Copyright (C) 2020 2021 Hirusha Dayarathne
CODDED BY 2021 Hirusha Dayarathne
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
SLHackersTeamBot - HIRUSHA
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

// Sentances
const QR_DESC = "It Converts Text to Ninja Logo"
const NEED_TEXT = "*🪐Must Enter Some Words*"

SlHackers.addCommand({ pattern: 'grass ?(.*)', fromMe: false, dontaddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=${Config.LLHAPI}&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by ⚡Hirusha*' })

}));
