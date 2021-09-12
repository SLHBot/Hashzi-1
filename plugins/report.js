/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('AsenaPlug');

if (Config.WORKTYPE == 'private') {
    SlHackers.addCMD({ pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, Lang.REPLY, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    SlHackers.addCMD({ pattern: 'report ?(.*)', fromMe: false, desc: Lang.REPORT }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, Lang.REPLY, MessageType.text);
        }
    }));
    SlHackers.addCMD({ pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT, dontaddCMDList: true }, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0], MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })

        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid, Lang.USER + '@' + message.reply_message.jid.split('@')[0] + Lang.REASON + `${match[1]}`, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid, Lang.REPLY, MessageType.text);
        }
    }));
}
