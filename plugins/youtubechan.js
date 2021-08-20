/* Copyright (C) 2020 TOXIC DEVIL
CODDED BY TOXIC DEVIL
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaPublic - TEENUH
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

// Sentances
const QR_DESC = "It Converts Text to mobile legends Logo"
const NEED_TEXT = "*🪐Must Enter Some Words*"

Asena.addCommand({ pattern: 'chansl ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/youtube-channel-search?channel=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.text,)

}));
