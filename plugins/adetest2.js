
const SlHackers = require('../events');
const { MessageType, GroupSettingChange, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('slhackers');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

SlHackers.addCommand({ pattern: 'menu', fromMe: true, desc: Lang.MENU }, (async (message, match) => {
    // send a list message!
    const rows = [
        { title: '📑මූලික උදව් | MAIN HELP!', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.", rowId: "rowid1" },
        { title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | ALL COMMANDS!', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId: "rowid2" },
        { title: '📑Logo සැකසීම | LOGO CMD!', description: "⚙Logo සැකසීමෙ විධාන.", rowId: "rowid3" },
        { title: '📑මාධ්‍ය මෙවලම් | MEDIA CMD!', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.", rowId: "rowid4" },
        { title: '📑බාගත කිරීම් | DOWNLOAD CMD!', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId: "rowid5" },
        { title: '📑පරිපාලක විධාන | ADMIN LIST!', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.", rowId: "rowid6" },
        { title: '📑ඇනිම් ලැයිස්තුව | ANIME PACK!', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.", rowId: "rowid7" },
        { title: '📑මීම් ලැයිස්තුව   | MEME PACK!', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.", rowId: "rowid8" },
        { title: '📑Ttp ලැයිස්තුව   | TTP LIST!', description: "⚙TTP ලැයිස්තුව.", rowId: "rowid9" }
    ]

    const sections = [{ title: "Command Panel", rows: rows }]

    const button = {
        buttonText: 'Click Me!',
        description: "👩‍🦰SlHackers Team මූලික විධාන ලැයිස්තු",
        sections: sections,
        listType: 1
    }

    await message.client.sendMessage(message.jid, button, MessageType.listMessage)

}));

if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: 'menu', fromMe: false, desc: Lang.MENU }, (async (message, match) => {
        // send a list message!
        const rows = [
            { title: '📑මූලික උදව් | MAIN HELP!', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.", rowId: "rowid1" },
            { title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | ALL COMMANDS!', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId: "rowid2" },
            { title: '📑Logo සැකසීම | LOGO CMD!', description: "⚙Logo සැකසීමෙ විධාන.", rowId: "rowid3" },
            { title: '📑මාධ්‍ය මෙවලම් | MEDIA CMD!', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.", rowId: "rowid4" },
            { title: '📑බාගත කිරීම් | DOWNLOAD CMD!', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId: "rowid5" },
            { title: '📑පරිපාලක විධාන | ADMIN LIST!', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.", rowId: "rowid6" },
            { title: '📑ඇනිම් ලැයිස්තුව | ANIME PACK!', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.", rowId: "rowid7" },
            { title: '📑මීම් ලැයිස්තුව   | MEME PACK!', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.", rowId: "rowid8" },
            { title: '📑Ttp ලැයිස්තුව   | TTP LIST!', description: "⚙TTP ලැයිස්තුව.", rowId: "rowid9" }
        ]

        const sections = [{ title: "Command Panel", rows: rows }]

        const button = {
            buttonText: 'Click Me!',
            description: "👩‍🦰SlHackers Team මූලික විධාන ලැයිස්තු",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
}