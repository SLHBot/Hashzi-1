/*
Nekobin for SLHackers - Hiirusha

Licensed under the GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba"

const Language = require('../language');
const Lang = Language.getString('nekobin');

if (Config.WORKTYPE == 'private') {

    SlHackers.addCommand({ pattern: '⚜', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var r_text = new Array();
        r_text[1] = "XMMMW7X-8BSM7NG-GD973EQ-SGQWPJM";
        r_text[2] = "CYCJ53X-0RAM3A6-P2C3BG9-Z14QQP0";
        r_text[3] = "TXKEYT0-4RYM2XC-J3TJ4S2-42FKSMQ";
        r_text[4] = "BMSX72X-SK0M04Z-QBDDRE6-7W6A5ZT";
        r_text[5] = "BTFHN7J-WWGMFHN-Q8QMMXT-N0ACH5N";
        r_text[6] = "YBBC2A4-D3CMTYF-MHY3AQC-6NCQ7QR";
        r_text[7] = "B9GZNNE-SV0M0RK-Q3PWHJ0-YB3YYVS";
        r_text[8] = "RXK9KF3-SAK495G-G67QW4J-P715A46";
        r_text[9] = "NF4PBZS-S7SM3R1-KX2J348-002QZT1";
        r_text[10] = "VQEE26P-VKG4YVP-K0VKVYX-3RN70NG";
        r_text[11] = "VCTSK5T-VCE4HC0-JWQ0C1F-AJYTHEC";
        r_text[12] = "EFXCXXG-EBM4GDS-KAGG4EB-WEDMY9N";
        r_text[13] = "81PQCEJ-5JK4TFP-J68KWZC-SQ9PZCS";
        r_text[14] = "DCZXP8M-4SD4EJT-J4KBY7R-9B5F8GW";
        r_text[15] = "MS5D51N-RXQM6JH-M12104F-RGW91D9";
        r_text[16] = "D5FHWDB-RDS42AX-MRESW75-K0FS7Z5";
        r_text[17] = "542ZAXP-XK946J5-GCDK8CF-NE5PECH";
        r_text[18] = "3D7NRM7-6S8MTJB-QJM7XXW-DRKGXEM";


        var i = Math.floor(19 * Math.random())

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=${r_text[i]}&url=${msg}&width=1300&height=1480&extract_text=true&extract_html=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&lazy_load=true&retina=true&destroy_screenshot=true&dark_mode=true&block_tracking=true&omit_background=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));
}
else if (Config.WORKTYPE == 'public') {

    SlHackers.addCommand({ pattern: '⚜', fromMe: false, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var r_text = new Array();
        r_text[1] = "XMMMW7X-8BSM7NG-GD973EQ-SGQWPJM";
        r_text[2] = "CYCJ53X-0RAM3A6-P2C3BG9-Z14QQP0";
        r_text[3] = "TXKEYT0-4RYM2XC-J3TJ4S2-42FKSMQ";
        r_text[4] = "BMSX72X-SK0M04Z-QBDDRE6-7W6A5ZT";
        r_text[5] = "BTFHN7J-WWGMFHN-Q8QMMXT-N0ACH5N";
        r_text[6] = "YBBC2A4-D3CMTYF-MHY3AQC-6NCQ7QR";
        r_text[7] = "B9GZNNE-SV0M0RK-Q3PWHJ0-YB3YYVS";
        r_text[8] = "RXK9KF3-SAK495G-G67QW4J-P715A46";
        r_text[9] = "NF4PBZS-S7SM3R1-KX2J348-002QZT1";
        r_text[10] = "VQEE26P-VKG4YVP-K0VKVYX-3RN70NG";
        r_text[11] = "VCTSK5T-VCE4HC0-JWQ0C1F-AJYTHEC";
        r_text[12] = "EFXCXXG-EBM4GDS-KAGG4EB-WEDMY9N";
        r_text[13] = "81PQCEJ-5JK4TFP-J68KWZC-SQ9PZCS";
        r_text[14] = "DCZXP8M-4SD4EJT-J4KBY7R-9B5F8GW";
        r_text[15] = "MS5D51N-RXQM6JH-M12104F-RGW91D9";
        r_text[16] = "D5FHWDB-RDS42AX-MRESW75-K0FS7Z5";
        r_text[17] = "542ZAXP-XK946J5-GCDK8CF-NE5PECH";
        r_text[18] = "3D7NRM7-6S8MTJB-QJM7XXW-DRKGXEM";


        var i = Math.floor(19 * Math.random())


        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=${r_text[i]}&url=${msg}&width=1300&height=1480&extract_text=true&extract_html=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&lazy_load=true&retina=true&destroy_screenshot=true&dark_mode=true&block_tracking=true&omit_background=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));

    SlHackers.addCommand({ pattern: '⚜', fromMe: true, desc: Lang.NEKO_DESC }, (async (message, match) => {

        const msg = message.reply_message.text

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=${r_text[i]}&url=${msg}&width=1300&height=1480&extract_text=true&extract_html=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&lazy_load=true&retina=true&destroy_screenshot=true&dark_mode=true&block_tracking=true&omit_background=true&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })

    }));
}
