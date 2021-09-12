/* created by HIRUSHA
*/

const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {

  SlHackers.addCommand({ pattern: 'rdname ?(.*)', fromMe: true, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
    const url = `https://docs-jojo.herokuapp.com/api/random-name?gender=${match[1]}`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'Random Name   :' + json.result, MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, 'Use Gender   :' + json.message, MessageType.text);
    }
  });
}

else if (Config.WORKTYPE == 'public') {

  SlHackers.addCommand({ pattern: 'rdname ?(.*)', fromMe: false, desc: Lang.DEVICE, dontAddCommandList: false }, async (message, match) => {
    const url = `https://docs-jojo.herokuapp.com/api/random-name?gender=${match[1]}`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '``` Random Name      : *' + json.result + '```', MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, 'Use Gender   :' + json.message, MessageType.text);
    }
  });
  SlHackers.addCommand({ pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {

    await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore SLHackers\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore SLHackers\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text, { quoted: message.data });

  }));
}
