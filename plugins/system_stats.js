/* Copyright (C) 2020 2021 Hirusha Dayarathne

CODDED BY 2021 Hirusha Dayarathne

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
SLHackersTeamBot - 2021 Hirusha Dayarathne
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const { spawnSync } = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC }, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

            var image = await axios.get(Config.ALIVE_LOGO, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: "                 ⚙ *𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭* ⚙ \n     *Bang!! Bang!! Im Alive Now*\n\n*◈Version* ● ▷5.4.0 Global Stable\n*◈Branch* ● ▷ Vancino\n*◈About* ● ▷ *🎭🔰SLHαcĸerѕ Teαм Boт🔰🔰is an easy used WhatsApp robot.*\n*◯Owner* ▷ ▸https://Wa.me/+94755681782◂\n*Moders* ●▷\n◼ Hirusha\n\n■ Bimsara\n■Chmod\n\n*◈Main Group* ▷https://chat.whatsapp.com\n*◈Support group* ▷https://chat.whatsapp.com\n\n*ᴛʜᴀɴᴋ ꜰᴏʀ ᴜꜱɪɴɢ SLHαƈƙҽɾʂ Tҽαɱ Bσƚ🔰🎭*" })

        }
        else {

            var image = await axios.get(Config.ALIVE_LOGO, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⚙Powered By Hirusha*' })
        }
    }));

    Asena.addCommand({ pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC }, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

            var image = await axios.get(Config.ALIVE_LOGO, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: "                 ⚙ *𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭* ⚙ \n     *Bang!! Bang!! Im Alive Now*\n\n*◈Version* ● ▷5.4.0 Global Stable\n*◈Branch* ● ▷ Vancino\n*◈About* ● ▷ *🎭🔰SLHαcĸerѕ Teαм Boт🔰🔰is an easy used WhatsApp robot.*\n*◯Owner* ▷ ▸https://Wa.me/+94755681782◂\n*Moders* ●▷\n◼ Hirusha\n\n■ Bimsara\n■Chmod\n\n*◈Main Group* ▷https://chat.whatsapp.com\n*◈Support group* ▷https://chat.whatsapp.com\n\n*ᴛʜᴀɴᴋ ꜰᴏʀ ᴜꜱɪɴɢ SLHαƈƙҽɾʂ Tҽαɱ Bσƚ🔰🎭*" })

        }
        else {

            var image = await axios.get(Config.ALIVE_LOGO, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⚙Powered By Hirusha*' })
        }
    }));

    Asena.addCommand({ pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
