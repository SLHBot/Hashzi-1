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
const EDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:01*\n*📂TYPE:* *Video*\n*Uploading..📵*"
const XEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:02*\n*📂TYPE:* *video*\n*Uploading..📵*"
const XXEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:03*\n*📂TYPE:* *video*\n*Uploading..📵*"
const XXXEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:04*\n*📂TYPE:* *video*\n*Uploading..📵*"
const XXXXEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:05*\n*📂TYPE:* *video*\n*Uploading..📵*"
const XXXXXEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:06*\n*📂TYPE:* *video*\n*Uploading..📵*"
const XXXXXXEDU_SLHEDU = "*TITLE:* *�MOTIVATION Video No:07*\n*📂TYPE:* *video*\n*Uploading..📵*"
// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'aca83a4354ac') {

    Asena.addCommand({ pattern: '1slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39049`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, EDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '2slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39050`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '3slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39053`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '4slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39055`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '5slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39056`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '6slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39059`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXXEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

    Asena.addCommand({ pattern: '7slhedu ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/39061`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, XXXXXXEDU_SLHEDU, MessageType.text);

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by 𝒮𝐿𝐻𝒶𝒸𝓀𝑒𝓇𝓈 𝒯𝑒𝒶𝓂 𝐵❁𝓉' })

    }));

}
