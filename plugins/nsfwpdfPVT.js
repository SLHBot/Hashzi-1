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
const XN_DESC = "NSFU වීඩියෝ බාගත කරයි"
const XN_NEED = "*Link අවශ්‍යයි!*"
const XN_D = "*🙇ඔබේ වීඩියෝ බාගැනීම*"
const XN_UP = "*TITLE:* *🔞නදී - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEN_UP = "*TITLE:* *🔞සමන්ති - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEXN_UP = "*TITLE:* *🔞කින්නරාවි - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEEEN_UP = "*TITLE:* *🔞December Holiday - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEEEXN_UP = "*TITLE:* *🔞Xmas - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEEEEEN_UP = "*TITLE:* *🔞යදම් - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
const EEEEEEXN_UP = "*TITLE:* *🔞පට්ටන්දර - සම්පූර්ණ කතාව*\n*📂TYPE:* *Pdf*\n*Uploading..📵*"
// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"

if (Config.NEOA == 'bimsaraapi') {

      SlHackers.addCMD({ pattern: '1xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36614`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, XN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '2xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36618`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '3xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36628`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEXN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '4xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36630`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEEEN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '5xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36632`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEEEXN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '6xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36634`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEEEEEN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

      SlHackers.addCMD({ pattern: '7xst ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {

            var webimage = await axios.get(`https://netfiletolink.herokuapp.com/36636`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, EEEEEEXN_UP, MessageType.text);

            await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf })

      }));

}
