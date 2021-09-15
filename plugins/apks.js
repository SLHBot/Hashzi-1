const SlHackers = require('../events');
const axios = require('axios');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const { spawnSync } = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   SlHackers.addCMD({ pattern: 'apkmod', fromMe: true }, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *🔰SLHαcĸerѕ Teαм Boт🔰 ʙᴏᴛ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   SlHackers.addCMD({ pattern: 'fatp', fromMe: false }, (async (message, match) => {
      await message.client.sendMessage(
         message.jid,
         fs.readFileSync("media/gif/apk/FATP.mp3"),
         MessageType.audio,
         { mimetype: Mimetype.mp4Audio }
      )
   }));

   SlHackers.addCMD({ pattern: 'nova', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   SlHackers.addCMD({ pattern: 'cml', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   SlHackers.addCMD({ pattern: 'apex', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   SlHackers.addCMD({ pattern: 'kinemaster', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   SlHackers.addCMD({ pattern: 'inshot', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   SlHackers.addCMD({ pattern: 'alight', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

   SlHackers.addCMD({ pattern: 'capcut', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   SlHackers.addCMD({ pattern: 'picsart', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   SlHackers.addCMD({ pattern: 'canva', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   SlHackers.addCMD({ pattern: 'lightr', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   SlHackers.addCMD({ pattern: 'pshop', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   SlHackers.addCMD({ pattern: 'snaps', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   SlHackers.addCMD({ pattern: 'retouch', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   SlHackers.addCMD({ pattern: 'vanced', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nyoutube vanced.\n📌 bit.ly/drkytubev');
   }));

   SlHackers.addCMD({ pattern: 'freez', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nPremium Unlocked.\n📌 bit.ly/drkfreezer');
   }));

   SlHackers.addCMD({ pattern: 'deezer', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   SlHackers.addCMD({ pattern: 'rbox', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   SlHackers.addCMD({ pattern: 'mxpro', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   SlHackers.addCMD({ pattern: 'amp', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   SlHackers.addCMD({ pattern: 'jetau', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   SlHackers.addCMD({ pattern: 'xpress', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   SlHackers.addCMD({ pattern: 'hshield', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   SlHackers.addCMD({ pattern: 'avguard', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   SlHackers.addCMD({ pattern: 'flmanager', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   SlHackers.addCMD({ pattern: 'callr', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   SlHackers.addCMD({ pattern: 'fing', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   SlHackers.addCMD({ pattern: 'shazam', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   SlHackers.addCMD({ pattern: 'qrcode', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   SlHackers.addCMD({ pattern: 'srecorder', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   SlHackers.addCMD({ pattern: 'tiktok', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   SlHackers.addCMD({ pattern: 'pmath', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   SlHackers.addCMD({ pattern: 'waplus', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nwhattsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   SlHackers.addCMD({ pattern: 'apkmod', fromMe: false }, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *🔰SLHαcĸerѕ Teαм Boт🔰ʙᴏᴛ*😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   SlHackers.addCMD({ pattern: 'fatp', fromMe: false }, (async (message, match) => {
      await message.client.sendMessage(
         message.jid,
         fs.readFileSync("media/gif/apk/FATP.mp3"),
         MessageType.audio,
         { mimetype: Mimetype.mp4Audio }
      )
   }));

   SlHackers.addCMD({ pattern: 'nova', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drknova');
   }));

   SlHackers.addCMD({ pattern: 'cml', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   SlHackers.addCMD({ pattern: 'apex', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   SlHackers.addCMD({ pattern: 'kinemaster', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.');
   }));

   SlHackers.addCMD({ pattern: 'inshot', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   SlHackers.addCMD({ pattern: 'alight', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

   SlHackers.addCMD({ pattern: 'capcut', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   SlHackers.addCMD({ pattern: 'picsart', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   SlHackers.addCMD({ pattern: 'canva', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   SlHackers.addCMD({ pattern: 'lightr', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   SlHackers.addCMD({ pattern: 'pshop', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   SlHackers.addCMD({ pattern: 'snaps', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   SlHackers.addCMD({ pattern: 'retouch', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   SlHackers.addCMD({ pattern: 'vanced', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   SlHackers.addCMD({ pattern: 'crunchy', fromMe: false, dontaddCMDList: true }, (async (message, match) => {

      var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, { mimetype: Mimetype.mp4 })
      await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* ᴜꜱᴀ🇺🇸');
   }));

   SlHackers.addCMD({ pattern: 'freez', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\npremium unlocked - spotify\n📌 bit.ly/drkfreezer');
   }));

   SlHackers.addCMD({ pattern: 'deezer', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   SlHackers.addCMD({ pattern: 'rbox', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   SlHackers.addCMD({ pattern: 'mxpro', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n📌 bit.ly/drkmxplayer');
   }));

   SlHackers.addCMD({ pattern: 'amp', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   SlHackers.addCMD({ pattern: 'jetau', fromMe: false }, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   SlHackers.addCMD({ pattern: 'xpress', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   SlHackers.addCMD({ pattern: 'hshield', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   SlHackers.addCMD({ pattern: 'avguard', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   SlHackers.addCMD({ pattern: 'flmanager', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   SlHackers.addCMD({ pattern: 'callr', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   SlHackers.addCMD({ pattern: 'fing', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   SlHackers.addCMD({ pattern: 'shazam', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   SlHackers.addCMD({ pattern: 'qrcode', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   SlHackers.addCMD({ pattern: 'screen recorder', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   SlHackers.addCMD({ pattern: 'tiktok', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   SlHackers.addCMD({ pattern: 'pmath', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   SlHackers.addCMD({ pattern: 'waplus', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nmhatsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}
