const SlHackers = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'public') {
    SlHackers.addCommand({ pattern: 'cnlog', fromMe: false, desc: Lang.UP }, (async (message, match) => {

        var r_text = new Array();


        r_text[0] = "https://telegra.ph/file/40ed93cc5bbd6ebc35934.jpg";
        r_text[1] = "https://telegra.ph/file/c093e9374836bf02a59ed.jpg";
        r_text[2] = "https://telegra.ph/file/cbb3a24bcf9ad259c7715.jpg";
        r_text[3] = "https://telegra.ph/file/b2ae47b17b19266acfdd3.jpg";
        r_text[4] = "https://telegra.ph/file/5e0561d3cbb9cda856d5b.jpg";
        r_text[5] = "https://telegra.ph/file/7645d42ee46a3017ac88f.jpg";


        var i = Math.floor(6 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
            mimetype: Mimetype.png, caption: `*◁○SLHackers ChangeLogs ○▷*

 *🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.4*
_2021/08/12_

◆═════════════⚜
*SLHACKERS 5.2.4 UPDATE 🥳*
◆═════════════▷
*💡BUG FIXED*
╔════════════▷
*╠⚙Command Double Bug* Fixed🥴
*╠⚙TTS VOICE Updated* 
*╠⚙Song Upload Error Fixed*
*╠⚜️Plugging Install Command updated*
▷New Command: *.install*
╚═══════════▷
*⚠️TEMPORARY UNAVAILABLE  COMMAND*
╔═══════════▷
*╠⭕Menu List Added* *Command▷Temporary unavailable*
*╠⭕Menu Command Chnge* *Command▷Temporary Unavailable*
╚════════════▷
*🔆PENDING COMMAND*
╔════════════▷
*╠🙇Facebook Download*
*╠🙇instergram Download*
*╠🙇sportify download*
╚═════════════▷
*😎WHAT'S NEW*
╔═════════════▷
*╠🔞+ Panel Added ( Use : Admin Only*
▷ Type:  .Admin
*╠🧚‍♂️Added Update Report System*
╚═════════════▷
*🎭SLHACKERS-X NEXT UPDATE*
╔═════════════▷
╠ 🙇ඔයාලා දන්නවා ඇති Logo Site Maintenance අලුත් features Add කරන්නලු යන්නෙ එයාලා🌝ඒ නිසා Logo pack එක වැඩ නෑ (තාවකාලිකව)
║
╠🙇අලුත් Logo Pack එකක් දෙන්නම් අද හෝ හෙට (girls Logo pack)
║
╠🙇 Ban Words system එකක් ඕන කිව්වා කට්ටිය ඒකෙ බාගයක් ඉවරයි🌝
║
╠ 🙇TEXT EDITOR FEATURE එක Beta version එකෙ අයටනම් කලින්ම දීලා තිබුනේ ඒ Feature එක ඔයාලත් දෙනවා🌝
╚═════════════▷
*⁉️HOW TO INSTALL SLHACKERS 5.2.4*
╔═════════════▷
╠🧚‍♂️මේ Update Normal Update system එකෙන් Update වෙන්නෙ නැ Bot ආය Deploy කරන්න ඕන.
කලින් QR SESSION එකම දාලා Deploy කරන්න...ඒක නැත්තන් දැං heroku App එකේ settings ගිහින් ගන්න

_▷ Loging Heroku>Select App>>Click Setting⚙>>> -scroll up- >>>> Click Reveal Config Var_

*▷🐱: github Link: https://github.com/Hirusha21/SLHTBot-X*

╔═════════════▷
╠⚙Update එකේ හෝ Bot සම්බන්ධ ඕනම ගැටලුවක් ADMIN PANEL එකට Inbox කරන්න
╚═════════════▷

🤍Thank For Using SLHACKERS-X 🙇 Stay Safe &Stay With Us💌

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.3*
_2021/08/08

◉mmpack updated
◉Added New Command ( .Admin)
◉Added Changelog View ( .changelog)
◉Update Logo pack
▸ .lava
▸ .rock
▸ .sbanner
▸ ▸warfacw
▸ .sand
◉ Added Custom Panel Command
( .setvar COMMAND: test )

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.2*
_2021/08/01_

◉Added new Command ( .help)
◉Added Neuto QR session 
◉song tag Added
◉mp3 document file uploader Added ( .dcsong muthu muthu pethi)
◉Added fulleva AI CHAT bot
( .eva on / .eva off)

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 5.2.1*
_2021/07/21_

◉merged: 5.1.6,5.1.7, 2.1.8, 5.1.9, 5.2.0, 5.2.1.,5.2.2, 5.2.3, 5.2.4, 5.2.5, 5.2.6,5.2.7, 5.2.8, 5.2.9, 5.3.0,  5.3.1.,5.3.2, 5.3.3, 5.3.4,5.3.6,5.3.7, 5.3.8, 5.3.9, 5.3.5, 5.4.0
◉Added Custom Menu list
( login heroku >selectapp >> Settings >>>Reveal config var >>>> Add Own Captains)
◉Added Text to video effect ( .vtext / .ptext / .colortext)
◉added Tv series Details searcher ( .show got)
◉Added AI SIMSIHI on/off ( .adon on/.adon off)
◉Update song Download 
◉Plugging install Bug fixed
◉Antispm Bug fixed

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 4.0.1*
_2021/07/15_

◉Bug fixed
◉404 Error fixed
◉Added New Host 
◉Connect Awsh servers
◉added console (beta)
◉removed Api key and billing details from account section

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 4.0.0*
_2021/06/28_

◉mod apk download 
◉glitch fixed
◉Pubg logo fixed
◉Yt searcher Update 
◉video Download Update

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.9.0*
_2021/06/12_

◉New Base
◉ new Update Command 
◉ imagtosticker update ( .photo)
◉mp4audio update ( .mp3)

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.8.0*
_2021/06/09_

◉bug fixed
◉song uploader Bug fixed
◉video uploader Fixed
◉Yt Search Updated
◉ Wiki version 7.0.0 updated
◉fixed img Command 

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 3.7.0*
_2021/06/05_

◉merged: 3.0.0, 3.1.0, 3.2.0, 3.3.0, 3.4.0, 3.5.0, 3.6.0
◉Update Sticker 
◉Added Mmpack
◉Update support group 
◉added Bug Hole VIP ( .bh)
◉Added Unlimited Logo Api VIP (.textpro)

*🧞𝙑𝙚𝙧𝙨𝙞𝙤𝙣 2.9.0*
_2021/05/02_

◉update songs upload 
◉ update yt search 
◉update covid js
◉Added SINHALA command list

*━⚜SLHackers CHANGELOG⚜━*
`})

    }));
}
