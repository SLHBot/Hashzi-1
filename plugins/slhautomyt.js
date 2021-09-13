/* 
*/


const SlHackers = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_eva = ''

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.lasijson())
        .then(lasijson => lasijson._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

SlHackers.addCommand({ on: 'text', fromMe: wk, dontaddCommandList: true, deleteCommand: false }, (async (message, match) => {
    if (message.message.startsWith('https://youtu.be') && conf.FULLEVA !== 'true') {
        var finm = message.message.replace('https://youtu.be', '').replace('https://youtu.be', '')
        var ldet = lngDetector.detect(finm)
        var trmsg = finm

        var uren = encodeURI(trmsg)
        await axios.get('https://api.lolhuman.xyz/api/ytvideo?apikey=https://github.com/BlackAmda&url=' + uren).then(async (response) => {
            var fins = ''
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.result.title, { from: 'auto', to: 'si' });
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.result.title }
            await message.client.sendMessage(message.jid, fins, MessageType.text, { quoted: message.data })
        })
    }
}));