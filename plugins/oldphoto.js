const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type picture url."

if (Config.WORKTYPE == 'private') {

  SlHackers.addCommand({ pattern: 'oldphoto ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid, 'Creating.. ♻️', MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
      key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
      },
      message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
      .save('output.jpg')
      .on('end', async () => {
        var resp = await deepai.callStandardApi("CNNMRF", {
          content: fs.createReadStream("./output.jpg"),

        });

        var respoimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAAAME })

      });

    return await message.client.deleteMessage(message.jid, { id: downloading.key.id, remoteJid: message.jid, fromMe: true })

  }));
}

else if (Config.WORKTYPE == 'public') {

  SlHackers.addCommand({ pattern: 'oldphoto ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${match[1]}`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by :\nSLHackers Team' })

  }));

}
