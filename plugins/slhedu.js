/* උස්සන්න එපා බේසිකෙ කොල්ලො අහලා ගනිම්
Codded BY teenuX
Wa.me/+94755681800
*/

const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇Downloading Your Video*"
const EDU_AJA = "*TITLE:* *AJantha Sir කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XEDU_AJA = "*TITLE:* *�සමන්ති - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXEDU_AJA = "*TITLE:* *�කින්නරාවි - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXEDU_AJA = "*TITLE:* *�December Holiday - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXEDU_AJA = "*TITLE:* *�Xmas - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXEDU_AJA = "*TITLE:* *�යදම් - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const XXXXXXEDU_AJA = "*TITLE:* *�පට්ටන්දර - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'aca83a4354ac') {

    Asena.addCommand({ pattern: '1aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39003`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '2aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39005`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '3aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39041`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '4aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36630`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '5aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36632`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '6aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36634`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXXEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

    Asena.addCommand({ pattern: '7aja ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36636`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXXXEDU_AJA, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

    }));

}
