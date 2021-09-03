const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const { spawnSync } = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');
const fs = require("fs")
const slhb = fs.readFileSync('./media/logo.mp3')

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'public') {

        Asena.addCommand({ pattern: 'textimg', fromMe: false, desc: Lang.ALIVE_DESC }, (async (message, match) => {

            var image = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, slhb, MessageType.audio, { mimetype: 'audio/mp4', ptt: true }, { quoted: message.data })
            await message.sendMessage(Buffer.from(image.data), MessageType.image, {
                mimetype: Mimetype.png, caption: `*⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍⚍*
*⦁⛨ 𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐋𝐨𝐠𝐨 𝐏𝐚𝐜𝐤 ⛨⦁*
.      *╚═❖═▣ ▣═❖══╝*

▷මෙය පහසුවෙන්ම විවිධ LoGo සාදයි කළයුතු වන්නෙ පහත විධානයකට ඉදිරියෙන් ඔබේ අකුරු දමන්න පමණි.
🙇උදා: .ninjalogo SLHackers

▷ මෙහි සමහරක් Command ක්‍රියා නොකිරීම Bot ගෙ දෝෂයක් නොවෙ සෙවාව ලබාගත් API ගැටලු වේ.

*🚀විධානය* : .nxninja
*🔰විස්තරය* : එය ඔබෙ අකුරු Ninja logo බවට පරිවර්තනය කරයි.

*🔰විධානය* : .vtext1
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext2
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext3
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext4
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext5
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext6
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

*🔰විධානය* : .vtext7
*💠විස්තරය* : එය අකුරු video බවට හරවයි.

 *🚀විධානය* : .nwolf
*🔰විස්තරය* :එය ඔබෙ අකුරු wolf logo බවට පරිවර්තනය කරයි

 *🚀විධානය* : .nxwolf
*🔰විස්තරය* :එය ඔබෙ අකුරු දම් ලාට Wolf ලාංඡනයක්  බවට පරිවර්තනය කරයි

*🚀විධානය* : .marvel
*🔰විස්තරය* :එය ඔබෙ අකුරු Marvel  logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .dgold
*🔰විස්තරය* :එය ඔබෙ අකුරු රත්තරං පැහැ අකුරු සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි

*🚀විධානය* : .glossy
*🔰විස්තරය* :එය ඔබෙ අකුරු glossy logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .njoker
*🔰විස්තරය* :එය ඔබෙ අකුරු joker logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .horror
*🔰විස්තරය* :එය ඔබෙ අකුරු Horror ඡායාරූප  බවට පරිවර්තනය කරයි

*🚀විධානය* : .blood
*🔰විස්තරය*: .එය ඔබෙ අකුරු ලේ සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි

*🚀විධානය* : .toxic
*🔰විස්තරය* :එය ඔබෙ අකුරු විෂ සහිත අකුරු  බවට පරිවර්තනය කරයි

*🚀විධානය* : .space3d
*🔰විස්තරය* :එය ඔබෙ අකුරු Space LOGO බවට පරිවර්තනය කරයි

*🚀විධානය* : .luxury
*🔰විස්තරය* :එය ඔබෙ අකුරු luxury gold බවට පරිවර්තනය කරයි

*🚀විධානය* : .xmas
*🔰විස්තරය* :එය ඔබෙ අකුරු නත්තල් සහිත ඡායාරූප බවට පරිවර්තනය කරයි

*🚀විධානය* : .metald
*🔰විස්තරය* :එය ඔබෙ අකුරු Metak Dark logo බවට පරිවර්තනය කරයි

*🚀විධානය* : .gradientavatar
*🔰විස්තරය* :එය ඔබෙ අකුරු gradientavatar ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .gradientavatar SLHackers

*🚀විධානය* : .fur
*🔰විස්තරය* :එය ඔබෙ අකුරු fur ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .fur SLHackers

*🚀විධානය* : .flaming
*🔰විස්තරය* :එය ඔබෙ අකුරු flaming ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .flaming SLHackers

*🚀විධානය* : .bevel
*🔰විස්තරය* :එය ඔබෙ අකුරු bevel ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .bevel SLHackers

*🚀විධානය* : .lolcover
*🔰විස්තරය* :එය ඔබෙ අකුරු lolcover ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .lolcover SLHackers

*🚀විධානය* : .dota2avatar
*🔰විස්තරය* :එය ඔබෙ අකුරු Dota To Avatar ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .dota2avatar SLHackers

*🚀විධානය* : .crossfire
*🔰විස්තරය* :එය ඔබෙ අකුරු crossfire ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .crossfire SLHackers

*🚀විධානය* : .warfacecover
*🔰විස්තරය* :එය ඔබෙ අකුරු warfacecover ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .warfacecover SLHackers

*🚀විධානය* : .aov
*🔰විස්තරය* :එය ඔබෙ අකුරු aov ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .aov SLHackers

*🚀විධානය* : .pokemon
*🔰විස්තරය* :එය ඔබෙ අකුරු pokemon ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .pokemon SLHackers

*🚀විධානය* : .kopi2
*🔰විස්තරය* :එය ඔබෙ අකුරු kopi2 ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .kopi2 SLHackers

*🚀විධානය* : .underwebmatrix
*🔰විස්තරය* :එය ඔබෙ අකුරු underwebmatrix ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .underwebmatrix SLHackers

*🚀විධානය* : .watermelon
*🔰විස්තරය* :එය ඔබෙ අකුරු watermelon ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .watermelon SLHackers

*🚀විධානය* : .lion
*🔰විස්තරය* :එය ඔබෙ අකුරු lion ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .lion SLHackers/Team

*🚀විධානය* : .ultragloss
*🔰විස්තරය* :එය ඔබෙ අකුරු Ultra Gloss ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .ultragloss SLHackers

*🚀විධානය* : .denim
*🔰විස්තරය* :එය ඔබෙ අකුරු denim ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .denim SLHackers

*🚀විධානය* : .rph
*🔰විස්තරය* :එය ඔබෙ අකුරු Random Photo to Text ඡායාරූප  බවට පරිවර්තනය කරයි
*⌨️ උදාහරණයක්:* .rph SLHackers/Team

*⚜විධානය* :●▷ .sand
*💠විස්තරය* : මුහුදු වෙරළක අකුරු සාදයි.

*🔰විධානය:* ●▷ .bcwall
*🧞විස්තරය:*  එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි

*🔰විධානය:* ●▷ .ninjalogo
*🧞විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි

*🔰විධානය:* ●▷ .buttonyt
*🧞විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.

*🔰විධානය:* ●▷ .glitch
*🧞විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි

*🔰විධානය:* ●▷.freefire
*🧞විස්තරය:* freefire gaming ලෝගෝ සාදයි

*🔰විධානය:* ●▷ .cfire
*🧞විස්තරය:* gaming ලෝගෝ සාදයි

*🔰විධානය:* ●▷ .light
*🧞විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි

*🔰විධානය:* ●▷ .cslogo
*🧞විස්තරය:* gaming ලෝගෝ සාදයි

*🔰විධානය:* ●▷ .nlogo
*🧞විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි

*🔰විධානය:* ●▷ .s3d
*🧞විස්තරය:* අකුරු 3D Box ලෙස සකසයි

*🔰විධානය:* ●▷ .blackpink
*🧞විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.

*🔰විධානය:* ●▷.pornhub
*🧞විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි

*🔰විධානය:* ●▷.neolight
*🧞විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි

*🔰විධානය:* ●▷ .blood
*🧞විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි

*🔰විධානය:* ●▷.3dtext
*🧞විස්තරය:* අකුරු 3D ලෙස සකසයි

*🔰විධානය:* ●▷ .nsky
*🧞විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.

*🔰විධානය:* ●▷.nleaves
*🧞විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.

*🔰විධානය:* ●▷.nglow
*🧞විස්තරය:* Neon ලෙස සකසයි

*🔰විධානය:* ●▷.nfire
*🧞විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.

*🔰විධානය:* ●▷.anony
*🧞විස්තරය:* එය Anonymous hacker වරුන්ගෙ චායාරූපයකට ඔබේ අකුරු පරිවර්තනය කරයි.

*🔰විධානය:*  .ptext
*💠විස්තරය* : එය අකුරු Video බවට හරවයි

*🔰විධානය* : .colortext
*💠විස්තරය* : එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි

*🔰විධානය:*  .write
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write1
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write2
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write3
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write4
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write5
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*🔰විධානය:*  .write6
*💠විස්තරය* : පොතක පිටුවක ලියූ වචන බවට පත්කරයි

*━⚜SLHackers PACK⚜━*

*Summary :* ●▷
.glitch
.gradient
.vintage
.summery
.darkgold
.1917
.holo
.silver
.blue
.fabric
.glue
.balloon
.galaxy
.jkrlogo
.face
.sparkling
.watercolour
.freefire
.cfire
.light
.cslogo
.s3d
.nlogo
.blackpink
.neonlight
.pornhub
.blood
.3dtext
.nfire
.ninjalogo
.nglow
.nleaves
.nsky
.ytbutton
.bcwall
.anony
.ptext
.colortext
.emoji
.warface
.sbanner
.sand
.lava
.wmatrix
.mtm
.coverwatch
.silk
.blood
.luxury
.xmas
.toxic
.joker
.glossy
.nethu
.metald
.marvel
.space3d
.horror
.dgold
.nwolf
.nxwolf
.nxninja
.candy
.gradientavatar
.fur
.flaming
.bevel
.lolcover
.dota2avatar
.crossfire
.warfacecover
.aov
.pokemon
.kopi2
.underwebmatrix
.watermelon
.rock
.lion
.ultragloss
.denim
.rph
.write
.write1
.write2
.write3
.write4
.write5
.write6
.vtext1
.vtext2
.vtext3
.vtext4
.vtext5
.vtext6
.vtext7
`})

        }));
    }
}
