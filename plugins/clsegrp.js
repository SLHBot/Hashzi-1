
const SlHackers = require('../events');

const { MessageType } = require('@adiwajshing/baileys');

const CL = ('This command for Close the  Group at night');

const code = ('!mute 10h')
const FINAL = "THIS GROUP IS CLOSED & OPEN IN MORNING"
const TMUTE = "Trying to close temporary,\nAttempting to temporarily close the group"
const SCXR = "Closing Group...."
SlHackers.addCommand({ pattern: 'close', fromMe: true, deleteCommand: false, desc: CL, }, (async (message, match) => {

  var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid, TMUTE, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, SCXR, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, code, MessageType.text, { quoted: message.data });

  await message.client.sendMessage(
    message.jid, FINAL, MessageType.text, { quoted: message.data });


}));
