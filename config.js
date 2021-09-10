/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v5.5.4 Global Stable',
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    CHANNEL: 'https://t.me/MCCMaths',
    SESSION: process.env.SLHACKERS_SESSION === undefined ? '' : process.env.SLHACKERS_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'true' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/7645d42ee46a3017ac88f.jpg' : process.env.ALIVE_LOGO,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg' : process.env.WELCOME_LOGO,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://leyscoders-api.herokuapp.com/api/leave?name=SLHackers%20Team%20Bot%20Users&group=Official%20Group&profile=https://i.ibb.co/Gxct8Hg/Logo-SLH.jpg&apikey=dappakntlll' : process.env.BYE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.,*%#?!;]' : process.env.HANDLERS,
    MENUTEXT: process.env.MENU === undefined ? '*🔰SLHαcĸerѕ Teαм Boт🔰*' : process.env.MENU,
    COMMAND: process.env.COMMAND === undefined ? 'hacked' : process.env.COMMAND,
    AI_BOT: process.env.AI_BOT === undefined ? 'true' : process.env.AI_BOT,
    ASENA_PLUG: process.env.ASENA_PLUG === undefined ? 'bimsaraapi' : process.env.ASENA_PLUG,
    NEOA: process.env.NEOA === undefined ? 'bimsaraapi' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ? 'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ? 'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ? 'xyz' : process.env.NY,
    NA: process.env.NA === undefined ? 'bimsaraapi' : process.env.NA,
    NS: process.env.NS === undefined ? 'zenzapi' : process.env.NS,
    TEENUH: process.env.TEENUH === undefined ? 'ttps://netfiletolink.herokuapp.com/39742' : process.env.TEENUH,
    OWNMSG: process.env.OWN_MESSAGE === undefined ? 'unset' : process.env.OWN_MESSAGE,
    OWNMSG2: process.env.OWN_MESSAGE2 === undefined ? 'unset' : process.env.OWN_MESSAGE2,
    OWNMSG3: process.env.OWN_MESSAGE3 === undefined ? 'unset' : process.env.OWN_MESSAGE3,
    CAPTION_KEY: process.env.CAPTION_KEY === undefined ? '*🍀 SLHαcĸerѕ Teαм Boт 𝒫𝓇𝑜𝒿𝑒𝒸𝓉 🍀*' : process.env.CAPTION_KEY,
    HLOCK: process.env.HLOCK === undefined ? 'hadi-api' : process.env.HLOCK,
    BANWORD: process.env.BANWORD === undefined ? 'true' : process.env.BANWORD,
    MENU_LOGO: process.env.MENU_LOGO === undefined ? 'https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg' : process.env.MENU_LOGO,
    HACKER: process.env.HACKER === undefined ? 'h4ck3rs404' : process.env.HACKER,
    A_HACKER: process.env.A_HACKER === undefined ? 'h4ck3rs404-api' : process.env.A_HACKER,

    //My Updates For SLHTBOT-X
    BOT_NAME: process.env.BOT_NAME === undefined ? '*Produced by :*\n 𝑺̲̅𝑳̲̅𝑯̲̅𝒂̲̅𝒄̲̅𝒌̲̅𝒆̲̅𝒓̲̅𝒔̲̅ 𝑻̲̅𝒆̲̅𝒂̲̅𝒎̲̅ 𝑩̲̅𝒐̲̅𝒕̲̅' : process.env.BOT_NAME,

    //PRO
    LLHAPI: process.env.LLHAPI === undefined ? 'https://github.com/BlackAmda' : process.env.LLHAPI,
    LLHMYAPI: process.env.LLHMYAPI === undefined ? '03ffdf45513a71ed7e669db1' : process.env.LLMHHAPI,
    BOT_NAAME: process.env.BOT_NAAME === undefined ? 'Made by :\n 𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭' : process.env.BOT_NAAME,
    BOT_NAAAME: process.env.BOT_NAAAME === undefined ? '*Made by* :\n SLHαcĸerѕ Teαм Boт' : process.env.BOT_NAAAME,
    BOT_NAAAAME: process.env.BOT_NAAAAME === undefined ? 'Copyright *©* 2021 | 𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭' : process.env.BOT_NAAAAME,
    BOT_NAAAAAME: process.env.BOT_NAAAAAME === undefined ? 'Made by :\n*🔰SLHαcĸerѕ Teαм Boт🔰*' : process.env.BOT_NAAAAAME,
    BOT_NAAAAAAME: process.env.BOT_NAAAAAAME === undefined ? '*Made by* ⚡\n🔰SLHαcĸerѕ Teαм Boт🔰' : process.env.BOT_NAAAAAAME,
    BOT_NAAAAAAAME: process.env.BOT_NAAAAAAAME === undefined ? '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' : process.env.BOT_NAAAAAAAME,
    BOT_NAAAAAAAAME: process.env.BOT_NAAAAAAAAME === undefined ? '_Made by_\n*හිරුෂ දයාරත්න*' : process.env.BOT_NAAAAAAAAME,
    //==============================================================================================================================

    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    CCN: "Ikyy69",
    ON: "hunter",
    ZA: "bimsaraapi",
    ZNA: "bimsaraapi",
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
