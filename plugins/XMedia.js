/* Codded by @Hirusha
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const SlHackers = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { execFile } = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');

const sin = `💠🔮 *මාධ්‍ය සංස්කාරක* 🔮💠\n\n` +
    `🔮 විධානය : *.mp4enhance*\n` +
    `💠🔮 * මාධ්ය සංස්කාරක* 🔮💠\n\n` +
    `🔮 විධානය : *.mp4enhance*\n` +
    `📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.\n\n` +
    `🔮 විධානය : *.interp*\n` +
    `📄 විස්තර : වීඩියෝවේ FPS වැඩි කරයි.\n\n` +
    `🔮 විධානය : *.mp4slowmo*\n` +
    `📄 විස්තර : වීඩියෝ සඳහා slow-motion සාදනු ඇත.\n\n` +
    `🔮 විධානය : *.x4mp4*\n` +
    `📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.\n\n` +
    `🔮 විධානය : *.x2mp4*\n` +
    `📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.\n\n` +
    `🔮 විධානය : *.gif*\n` +
    `📄 විස්තර : වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.agif*\n` +
    `📄 විස්තර : වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.mp4blur*\n` +
    `📄 විස්තර : වීඩියෝ පටයේ පසුබිම බොඳ කරයි.\n\n` +
    `🔮 විධානය : *.mp4stab*\n` +
    `📄 විස්තර : වීඩියෝවේ කම්පනය අඩු කරයි.\n\n` +
    `🔮 විධානය : *.mp4rainbow*\n` +
    `📄 විස්තර : දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.\n\n` +
    `🔮 විධානය : *.mp4color*\n` +
    `📄 විස්තර : වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.\n\n` +
    `🔮 විධානය : *.mp4art*\n` +
    `📄 විස්තර : වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.\n\n` +
    `🔮 විධානය : *.mp4negative*\n` +
    `📄 විස්තර : වීඩියෝවට සෘණ වර්ණ filter යොදයි.\n\n` +
    `🔮 විධානය : *.mp4vintage*\n` +
    `📄 විස්තර : වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.\n\n` +
    `🔮 විධානය : *.mp4bw*\n` +
    `📄 විස්තර : වීඩියෝ සඳහා black and white effect යොදයි.\n\n` +
    `🔮 විධානය : *.mp4reverse*\n` +
    `📄 විස්තර : වීඩියෝව reverse කරන්න.\n\n` +
    `🔮 විධානය : *.mp4edge*\n` +
    `📄 විස්තර : වීඩියෝ පටයට edge effect යොදයි.\n\n` +
    `🔮 විධානය : *.mp4image*\n` +
    `📄 විස්තර : ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.\n\n` +
    `🔮 විධානය : *.spectrum*\n` +
    `📄 විස්තර : ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.waves*\n` +
    `📄 විස්තර : ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.frequency*\n` +
    `📄 විස්තර : ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.avec*\n` +
    `📄 විස්තර : ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.volumeaudio*\n` +
    `📄 විස්තර : ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.cqtaudio*\n` +
    `📄 විස්තර : CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.\n\n` +
    `🔮 විධානය : *.mp3eq*\n` +
    `📄 විස්තර : ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.\n\n` +
    `🔮 විධානය : *.mp3crusher*\n` +
    `📄 විස්තර : ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.\n\n` +
    `🔮 විධානය : *.mp3reverse*\n` +
    `📄 විස්තර : ශබ්දය reverse වාදනය කරයි.\n\n` +
    `🔮 විධානය : *.mp3pitch*\n` +
    `📄 විස්තර : ශබ්දය තුනී හා වේගවත් කරයි.\n\n` +
    `🔮 විධානය  *.mp3low*\n` +
    `📄 විස්තර : ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.\n\n` +
    `🔮 විධානය : *.x2mp3*\n` +
    `📄 විස්තර : ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.\n\n` +
    `🔮 විධානය : *.mp3volume*\n` +
    `📄 විස්තර : ශබ්ද මට්ටම එතරම් වැඩි කරන්න.\n\n` +
    `🔮 විධානය : *.bwimage*\n` +
    `📄 විස්තර : රූපයට black and white effect යොදයි.\n\n` +
    `🔮 විධානය : *.vintageimage*\n` +
    `📄 විස්තර : වීඩියෝ පටයට vintage effect යොදයි.\n\n` +
    `🔮 විධානය : *.edgeimage*\n` +
    `📄 විස්තර : ඡායාරූපයෙහි edge effect යොදයි.\n\n` +
    `🔮 විධානය : *.enhanceimage*\n` +
    `📄 විස්තර : ඡායාරූපය වඩාත් පැහැදිලි කරයි.\n\n` +
    `🔮 විධානය : *.blurimage*\n` +
    `📄 විස්තර : ඡායාරූපයේ පසුබිම බොඳ කරයි.\n\n` +
    `🔮 විධානය : *.grenimage*\n` +
    `📄 විස්තර : ඡායාරූපය සඳහා grain effect යොදයි.\n\n` +
    `🔮 විධානය : *.negativeimage*\n` +
    `📄 විස්තර : ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.\n\n` +
    `🔮 විධානය : *.rainbowimage*\n` +
    `📄 විස්තර : ඡායාරූපය සඳහා දේදුන්න filter යොදයි.\n\n` +
    `🔮 විධානය : *.colorimage*\n` +
    `📄 විස්තර : එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.\n\n` +
    `🔮 විධානය : *.artimage*\n` +
    `📄 විස්තර : ඡායාරූපය සඳහා art effect යොදයි.`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        SlHackers.addCommand({ pattern: 'editor', fromMe: true, deleteCommand: false, desc: Lang.XMEDİA_DESC }, (async (message, match) => {
            await message.sendMessage(message.jid, sin, MessageType.text, { quoted: message.data });
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        SlHackers.addCommand({ pattern: 'editor', fromMe: false, desc: Lang.XMEDİA_DESC }, (async (message, match) => {
            await message.sendMessage(message.jid, sin, MessageType.text, { quoted: message.data });
        }));
    }
}

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'nmedia', fromMe: true, desc: Lang.XMEDİA_DESC }, (async (message, match) => {

        await message.sendMessage('💠🔮 *මාධ්‍ය සංස්කාරක* 🔮💠\n\n' +
            '🔮 විධානය : *.mp4enhance*\n' +
            '💠🔮 * මාධ්ය සංස්කාරක* 🔮💠\n\n' +
            '🔮 විධානය : *.mp4enhance*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.\n\n' +
            '🔮 විධානය : *.interp*\n' +
            '📄 විස්තර : වීඩියෝවේ FPS වැඩි කරයි.\n\n' +
            '🔮 විධානය : *.mp4slowmo*\n' +
            '📄 විස්තර : වීඩියෝ සඳහා slow-motion සාදනු ඇත.\n\n' +
            '🔮 විධානය : *.x4mp4*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.\n\n' +
            '🔮 විධානය : *.x2mp4*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.\n\n' +
            '🔮 විධානය : *.gif*\n' +
            '📄 විස්තර : වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.agif*\n' +
            '📄 විස්තර : වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.mp4blur*\n' +
            '📄 විස්තර : වීඩියෝ පටයේ පසුබිම බොඳ කරයි.\n\n' +
            '🔮 විධානය : *.mp4stab*\n' +
            '📄 විස්තර : වීඩියෝවේ කම්පනය අඩු කරයි.\n\n' +
            '🔮 විධානය : *.mp4rainbow*\n' +
            '📄 විස්තර : දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.\n\n' +
            '🔮 විධානය : *.mp4color*\n' +
            '📄 විස්තර : වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.\n\n' +
            '🔮 විධානය : *.mp4art*\n' +
            '📄 විස්තර : වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.\n\n' +
            '🔮 විධානය : *.mp4negative*\n' +
            '📄 විස්තර : වීඩියෝවට සෘණ වර්ණ filter යොදයි.\n\n' +
            '🔮 විධානය : *.mp4vintage*\n' +
            '📄 විස්තර : වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.\n\n' +
            '🔮 විධානය : *.mp4bw*\n' +
            '📄 විස්තර : වීඩියෝ සඳහා black and white effect යොදයි.\n\n' +
            '🔮 විධානය : *.mp4reverse*\n' +
            '📄 විස්තර : වීඩියෝව reverse කරන්න.\n\n' +
            '🔮 විධානය : *.mp4edge*\n' +
            '📄 විස්තර : වීඩියෝ පටයට edge effect යොදයි.\n\n' +
            '🔮 විධානය : *.mp4image*\n' +
            '📄 විස්තර : ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.\n\n' +
            '🔮 විධානය : *.spectrum*\n' +
            '📄 විස්තර : ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.waves*\n' +
            '📄 විස්තර : ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.frequency*\n' +
            '📄 විස්තර : ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.avec*\n' +
            '📄 විස්තර : ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.volumeaudio*\n' +
            '📄 විස්තර : ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.cqtaudio*\n' +
            '📄 විස්තර : CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.mp3eq*\n' +
            '📄 විස්තර : ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.\n\n' +
            '🔮 විධානය : *.mp3crusher*\n' +
            '📄 විස්තර : ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.\n\n' +
            '🔮 විධානය : *.mp3reverse*\n' +
            '📄 විස්තර : ශබ්දය reverse වාදනය කරයි.\n\n' +
            '🔮 විධානය : *.mp3pitch*\n' +
            '📄 විස්තර : ශබ්දය තුනී හා වේගවත් කරයි.\n\n' +
            '🔮 විධානය  *.mp3low*\n' +
            '📄 විස්තර : ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.\n\n' +
            '🔮 විධානය : *.x2mp3*\n' +
            '📄 විස්තර : ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.\n\n' +
            '🔮 විධානය : *.mp3volume*\n' +
            '📄 විස්තර : ශබ්ද මට්ටම එතරම් වැඩි කරන්න.\n\n' +
            '🔮 විධානය : *.bwimage*\n' +
            '📄 විස්තර : රූපයට black and white effect යොදයි.\n\n' +
            '🔮 විධානය : *.vintageimage*\n' +
            '📄 විස්තර : වීඩියෝ පටයට vintage effect යොදයි.\n\n' +
            '🔮 විධානය : *.edgeimage*\n' +
            '📄 විස්තර : ඡායාරූපයෙහි edge effect යොදයි.\n\n' +
            '🔮 විධානය : *.enhanceimage*\n' +
            '📄 විස්තර : ඡායාරූපය වඩාත් පැහැදිලි කරයි.\n\n' +
            '🔮 විධානය : *.blurimage*\n' +
            '📄 විස්තර : ඡායාරූපයේ පසුබිම බොඳ කරයි.\n\n' +
            '🔮 විධානය : *.grenimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා grain effect යොදයි.\n\n' +
            '🔮 විධානය : *.negativeimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.\n\n' +
            '🔮 විධානය : *.rainbowimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා දේදුන්න filter යොදයි.\n\n' +
            '🔮 විධානය : *.colorimage*\n' +
            '📄 විස්තර : එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.\n\n' +
            '🔮 විධානය : *.artimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා art effect යොදයි.');

    }));

    SlHackers.addCommand({ pattern: 'x4mp4', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.video) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'x2mp4', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.video) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4image', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.image) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'spectrum', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'waves', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'frequency', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'avec', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'volumeaudio', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'cqtaudio', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3eq', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3crusher', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3reverse', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4vintage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4reverse', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4bw', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'bwimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'vintageimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4enhance', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'blurimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4blur', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3pitch', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4edge', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```Edging Video..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3low', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'x2mp3', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'edgeimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid, '```Edging Image..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'enhanceimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3volume', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'gif', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('වීඩියෝ අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම to Gif..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, { mimetype: Mimetype.gif, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'agif', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('වීඩියෝ අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම to Gif..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, { mimetype: Mimetype.gif, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'grenimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('ඡායාරූපය අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```Adding Gren..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'interp ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')

        var downloading = await message.client.sendMessage(message.jid, '```Interpolating..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: `*🔰SLHαcĸerѕ Teαм Boт🔰*\n_Interpolated to ${match[1]} FPS_` });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'rainbowimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4rainbow', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'negativeimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4negative', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4art', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'artimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4stab', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4color', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'colorimage', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4slowmo', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.video) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```Motion Render Interpolating..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text, { quoted: message.data });

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, { caption: 'True Slow-Motion by *🔰SLHαcĸerѕ Teαм Boт🔰*' });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'nmedia', fromMe: false, desc: Lang.XMEDİA_DESC }, (async (message, match) => {

        await message.sendMessage('💠🔮 *මාධ්‍ය සංස්කාරක* 🔮💠\n\n' +
            '🔮 විධානය : *.mp4enhance*\n' +
            '💠🔮 * මාධ්ය සංස්කාරක* 🔮💠\n\n' +
            '🔮 විධානය : *.mp4enhance*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය වැඩි දියුණු කරන්න.\n\n' +
            '🔮 විධානය : *.interp*\n' +
            '📄 විස්තර : වීඩියෝවේ FPS වැඩි කරයි.\n\n' +
            '🔮 විධානය : *.mp4slowmo*\n' +
            '📄 විස්තර : වීඩියෝ සඳහා slow-motion සාදනු ඇත.\n\n' +
            '🔮 විධානය : *.x4mp4*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 75%කින් අඩු කරන්න.\n\n' +
            '🔮 විධානය : *.x2mp4*\n' +
            '📄 විස්තර : වීඩියෝ ගුණාත්මකභාවය 50%කින් අඩු කරන්න.\n\n' +
            '🔮 විධානය : *.gif*\n' +
            '📄 විස්තර : වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.agif*\n' +
            '📄 විස්තර : වීඩියෝව voiced gif බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.mp4blur*\n' +
            '📄 විස්තර : වීඩියෝ පටයේ පසුබිම බොඳ කරයි.\n\n' +
            '🔮 විධානය : *.mp4stab*\n' +
            '📄 විස්තර : වීඩියෝවේ කම්පනය අඩු කරයි.\n\n' +
            '🔮 විධානය : *.mp4rainbow*\n' +
            '📄 විස්තර : දේදුනු බලපෑමක් වීඩියෝ පටයට යොදයි.\n\n' +
            '🔮 විධානය : *.mp4color*\n' +
            '📄 විස්තර : වීඩියෝවේ වර්ණ වඩාත් විචිත්ර හා ලස්සන කරයි.\n\n' +
            '🔮 විධානය : *.mp4art*\n' +
            '📄 විස්තර : වීඩියෝව සඳහා කලාත්මක බලපෑමක් යොදයි.\n\n' +
            '🔮 විධානය : *.mp4negative*\n' +
            '📄 විස්තර : වීඩියෝවට සෘණ වර්ණ filter යොදයි.\n\n' +
            '🔮 විධානය : *.mp4vintage*\n' +
            '📄 විස්තර : වීඩියෝ පටයට විකාර හැඟීමක් යෙදේ.\n\n' +
            '🔮 විධානය : *.mp4bw*\n' +
            '📄 විස්තර : වීඩියෝ සඳහා black and white effect යොදයි.\n\n' +
            '🔮 විධානය : *.mp4reverse*\n' +
            '📄 විස්තර : වීඩියෝව reverse කරන්න.\n\n' +
            '🔮 විධානය : *.mp4edge*\n' +
            '📄 විස්තර : වීඩියෝ පටයට edge effect යොදයි.\n\n' +
            '🔮 විධානය : *.mp4image*\n' +
            '📄 විස්තර : ඡායාරූපය තත්පර 5 ක වීඩියෝවක් බවට පරිවර්තනය කරන්න.\n\n' +
            '🔮 විධානය : *.spectrum*\n' +
            '📄 විස්තර : ශබ්ද වල වර්ණාවලිය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.waves*\n' +
            '📄 විස්තර : ශබ්දයේ තරංග පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.frequency*\n' +
            '📄 විස්තර : ශබ්දයේ සංඛ්යාත පරාසය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.avec*\n' +
            '📄 විස්තර : ශබ්දයේ හිස්ටෝග්රෑම් වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.volumeaudio*\n' +
            '📄 විස්තර : ශබ්දයේ ඩෙසිබල් අගය වීඩියෝ බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.cqtaudio*\n' +
            '📄 විස්තර : CQT අගය වීඩියෝ පටයක් බවට පරිවර්තනය කරයි.\n\n' +
            '🔮 විධානය : *.mp3eq*\n' +
            '📄 විස්තර : ශබ්දය පැහැදිලි පැහැදිලි මට්ටමකට සකසන්න.\n\n' +
            '🔮 විධානය : *.mp3crusher*\n' +
            '📄 විස්තර : ශබ්දය විකෘති කරයි, හාස්ය උපදවයි.\n\n' +
            '🔮 විධානය : *.mp3reverse*\n' +
            '📄 විස්තර : ශබ්දය reverse වාදනය කරයි.\n\n' +
            '🔮 විධානය : *.mp3pitch*\n' +
            '📄 විස්තර : ශබ්දය තුනී හා වේගවත් කරයි.\n\n' +
            '🔮 විධානය  *.mp3low*\n' +
            '📄 විස්තර : ශබ්දය ගැඹුරු හා මන්දගාමී කරයි.\n\n' +
            '🔮 විධානය : *.x2mp3*\n' +
            '📄 විස්තර : ශබ්දය මෙන් දෙගුණයක් වේගවත් කරයි.\n\n' +
            '🔮 විධානය : *.mp3volume*\n' +
            '📄 විස්තර : ශබ්ද මට්ටම එතරම් වැඩි කරන්න.\n\n' +
            '🔮 විධානය : *.bwimage*\n' +
            '📄 විස්තර : රූපයට black and white effect යොදයි.\n\n' +
            '🔮 විධානය : *.vintageimage*\n' +
            '📄 විස්තර : වීඩියෝ පටයට vintage effect යොදයි.\n\n' +
            '🔮 විධානය : *.edgeimage*\n' +
            '📄 විස්තර : ඡායාරූපයෙහි edge effect යොදයි.\n\n' +
            '🔮 විධානය : *.enhanceimage*\n' +
            '📄 විස්තර : ඡායාරූපය වඩාත් පැහැදිලි කරයි.\n\n' +
            '🔮 විධානය : *.blurimage*\n' +
            '📄 විස්තර : ඡායාරූපයේ පසුබිම බොඳ කරයි.\n\n' +
            '🔮 විධානය : *.grenimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා grain effect යොදයි.\n\n' +
            '🔮 විධානය : *.negativeimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා සෘණ වර්ණ filter යොදන්න.\n\n' +
            '🔮 විධානය : *.rainbowimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා දේදුන්න filter යොදයි.\n\n' +
            '🔮 විධානය : *.colorimage*\n' +
            '📄 විස්තර : එමඟින් ඡායාරූපයේ වර්ණ වඩාත් විචිත්ර හා ආකර්ෂණීය කරයි.\n\n' +
            '🔮 විධානය : *.artimage*\n' +
            '📄 විස්තර : ඡායාරූපය සඳහා art effect යොදයි.');

    }));

    SlHackers.addCommand({ pattern: 'x4mp4', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'x2mp4', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4image', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'spectrum', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'waves', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'frequency', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'avec', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'volumeaudio', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'cqtaudio', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3eq', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3crusher', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3reverse', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4vintage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4reverse', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4bw', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'bwimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'vintageimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4enhance', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'blurimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4blur', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3pitch', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4edge', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```Edging Video..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3low', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'x2mp3', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'edgeimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid, '```Edging Image..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'enhanceimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp3volume', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*Audio file අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: false });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'gif', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('වීඩියෝ අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම to Gif..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, { mimetype: Mimetype.gif, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'agif', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('වීඩියෝ අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```පරිවර්තනය කිරීම to Gif..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, { mimetype: Mimetype.gif, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'grenimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('ඡායාරූපය අවශ්‍යයි!');
        var downloading = await message.client.sendMessage(message.jid, '```Adding Gren..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'interp ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')

        var downloading = await message.client.sendMessage(message.jid, '```Interpolating..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { caption: `*🔰SLHαcĸerѕ Teαм Boт🔰*\n_Interpolated to ${match[1]} FPS_` });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'rainbowimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4rainbow', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'negativeimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4negative', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4art', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'artimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4stab', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4color', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, { mimetype: Mimetype.mpeg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'colorimage', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message === false) return await message.sendMessage('*ඡායාරූපය අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```සංස්කරණය වෙමින් පවති..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));

    SlHackers.addCommand({ pattern: 'mp4slowmo', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (message.reply_message.video === false) return await message.sendMessage('*වීඩියෝ අවශ්‍යයි!*');
        var downloading = await message.client.sendMessage(message.jid, '```Motion Render Interpolating..```', MessageType.text, { quoted: message.data });
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text, { quoted: message.data });

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, { caption: 'True Slow-Motion by *🔰SLHαcĸerѕ Teαм Boт🔰*' });
            });
        return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })
    }));
}
