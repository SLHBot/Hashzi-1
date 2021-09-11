/* 🆕Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}


if (config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: 'trt', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true }, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, { from: en === '' ? 'auto' : en, to: si === '' ? config.LANG : si });
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (en === '' ? 'auto' : en) + '```\n'
                + '*◀️ ' + Lang.FROM + '*: ```' + (si === '' ? config.LANG : si) + '```\n'
                + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid, Lang.TRANSLATE_ERROR, MessageType.text)
        }
    }));
}

else if (config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'trt', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false }, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, { from: en === '' ? 'auto' : en, to: si === '' ? config.LANG : si });
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (en === '' ? 'auto' : en) + '```\n'
                + '*◀️ ' + Lang.FROM + '*: ```' + (si === '' ? config.LANG : si) + '```\n'
                + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid, Lang.TRANSLATE_ERROR, MessageType.text)
        }
    }));
}