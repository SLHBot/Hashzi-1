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

// List
const QUOTE_DESC = "It Sends Random Quote"
const NEED_LOCATIONA = "*Invalid Request*"
const QUOTE = "Quote :"
const AUTHOR = "Author :"
const NOT_FOUNDA = "```Sorry,I could not find a quote. 😖```"

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
    if (message.message.startsWith('q') && conf.FULLEVA !== 'true') {
        var unique_ident = message.client.user.jid.split('@')[0]
        var finm = message.message.replace('q', '').replace(' ', '')
        var ldet = lngDetector.detect(finm)
        var trmsg = finm

        var uren = encodeURI(trmsg)
        await axios.get('https://api.quotable.io/random').then(async (response) => {
            var fins = ''
            if (conf.LANG !== 'SI') {
                ceviri = await translatte(response.data.content, { from: 'auto', to: 'si' });
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.content }

            var ains = ''
            if (conf.LANG !== 'SI') {
                seviri = await translatte(response.data.author, { from: 'auto', to: 'si' });
                if ('text' in seviri) {
                    ains = seviri.text
                }
            } else { ains = response.data.author }

            await message.client.sendMessage(message.jid, '*📌 ' + QUOTE + '* ```' + fins + '```\n\n' +
                '*✒️' + AUTHOR + '* ```' + ains + '```\n', MessageType.text, { quoted: message.data })
        })
    }
}));