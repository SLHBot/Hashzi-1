const Asena = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');
const fs = require("fs")
const slhb = fs.readFileSync('./media/logo.mp3')

if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'textimg', fromMe: false, desc: Lang.UP }, (async (message, match) => {

        var r_text = new Array();


        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";


        var i = Math.floor(6 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, slhb, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
            mimetype: Mimetype.png, caption: `*◁○SLHackers Logopack ○▷*

 ╔════════════════╗
*╠▷  SLHackers Logo Pack🎭◁╣*
╚════════════════╝

▷මෙය පහසුවෙන්ම විවිධ LoGo සාදයි කළයුතු වන්නෙ පහත විධානයකට ඉදිරියෙන් ඔබේ අකුරු දමන්න පමණි.
🙇උදා: .ninjalogo SLHackers

▷ මෙහි සමහරක් Command ක්‍රියා නොකිරීම Bot ගෙ දෝෂයක් නොවෙ සෙවාව ලබාගත් API ගැටලු වේ.

*⚜විධානය* : .silk
*🔖විස්තරය* : Natural Silk පැනලයක් මත ඔබේ අකුරු සාදයි.

*⚜විධානය* :●▷ .lava
*🔖විස්තරය* : Lava ලෙස ඔබෙ අකුරු සාදයි.

*⚜විධානය* :●▷ .rock
*🔖විස්තරය* : ගලක් ලෙස අකුරු පරිවර්තනය කරයි

*⚜විධානය* :●▷ .sbanner
*🔖විස්තරය* : gaming බැනර් සාදයි.

*⚜විධානය* :●▷ .warface
*🔖විස්තරය* : gaming බැනර් සාදයි.

*⚜විධානය* :●▷ .coverwatch
*🔖විස්තරය* : gaming බැනර් සාදයි.

*⚜විධානය* : ●▷.mtm
*🔖විස්තරය* : Mattrix ලෙස අකුරු සාදයි.

*⚜විධානය* :●▷.wmatrix
*🔖විස්තරය* : Web mattrix ලෙස අකුරු සාදයි.

*⚜විධානය* :●▷ .sand
*🔖විස්තරය* : මුහුදු වෙරළක අකුරු සාදයි.

*🪀විධානය:* ●▷ .bcwall
*🔰විස්තරය:*  එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි

*🪀විධානය:* ●▷ .ninjalogo
*🔰විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි

*🪀විධානය:* ●▷ .buttonyt
*🔰විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.

*🪀විධානය:* ●▷ .glitch
*🔰විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි

*🪀විධානය:* ●▷.freefire
*🔰විස්තරය:* freefire gaming ලෝගෝ සාදයි

*🪀විධානය:* ●▷ .cfire
*🔰විස්තරය:* gaming ලෝගෝ සාදයි

*🪀විධානය:* ●▷ .light
*🔰විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි

*🪀විධානය:* ●▷ .cslogo
*🔰විස්තරය:* gaming ලෝගෝ සාදයි

*🪀විධානය:* ●▷ .nlogo
*🔰විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි

*🪀විධානය:* ●▷ .s3d
*🔰විස්තරය:* අකුරු 3D Box ලෙස සකසයි

*🪀විධානය:* ●▷ .blackpink
*🔰විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.

*🪀විධානය:* ●▷.pornhub
*🔰විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි

*🪀විධානය:* ●▷.neolight
*🔰විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි

*🪀විධානය:* ●▷ .blood
*🔰විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි

*🪀විධානය:* ●▷.3dtext
*🔰විස්තරය:* අකුරු 3D ලෙස සකසයි

*🪀විධානය:* ●▷ .nsky
*🔰විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.

*🪀විධානය:* ●▷.nleaves
*🔰විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.

*🪀විධානය:* ●▷.nglow
*🔰විස්තරය:* Neon ලෙස සකසයි

*🪀විධානය:* ●▷.nfire
*🔰විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.

*🪀විධානය:* ●▷.anony
*🔰විස්තරය:* එය Anonymous hacker වරුන්ගෙ චායාරූපයකට ඔබේ අකුරු පරිවර්තනය කරයි.

*🪀විධානය:*  .ptext
*🔖විස්තරය* : එය අකුරු Video බවට හරවයි

*🪀විධානය* : .colortext
*🔖විස්තරය* : එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි

*🪀විධානය* : .vtext
*🔖විස්තරය* : එය අකුරු video බවට හරවයි.

*━⚜SLHACKERS PACK⚜━*
`})

    }));
}
