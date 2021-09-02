/* SLHTBot-X 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll = "*Need some Word*"
const Ln = "*▷🔰SLHαcĸerѕ Teαм Boт🔰මීම් ලැයිස්තුව ඔබට අවශ්‍ය ලෙස මීම්ස් සකසා ගැනීමට◁* "
const code = "*╔═════◉SLHαƈƙҽɾʂ Tҽαɱ Bσƚ◉═════╗*\n           🔰SLHαcĸerѕ Teαм Boт🔰\n*❖═මීම් ලැයිස්තුව═❖*\n\n*🔖.yasai       ❴your text❵*\n*🔖.uddika    ❴your text❵*\n*🔖.aah          ❴your text❵*\n*🔖.sir            ❴your text❵*\n*🔖.my3         ❴your text❵*\n*🔖.fuck         ❴your text❵*\n*🔖.hii             ❴your text❵*\n*🔖.asai          ❴your text❵*\n*🔖.hapoi       ❴your text❵*\n*🔖.anura       ❴your text❵*\n*🔖.gemba       ❴your text❵*\n*🔖.wow       ❴your text❵*\n*🔖.hapo       ❴your text❵*\n*🔖.babah       ❴your text❵*\n*🔖.mcn       ❴your text❵*\n*🔖.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: Hirusha Dayarathne**"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'not3', fromMe: true, desc: Ln, }, (async (message, match) => {

        await message.client.sendMessage(

            message.jid, code, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'my3 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/3a1a0a040e60a035a3e05.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'fuck ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/737493dedf9a58985eca3.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'hii ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/3c0c5fcb6a97a230962c1.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'sir ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/737493dedf9a58985eca3.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'yasai ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dcee05da3e718166b96a4.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'hapoi ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8a2d6ecb481427033709c.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'uddika ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6e9c021b98ce428c98d89.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'aah ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/168988997ada75b539086.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'asai ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/168988997ada75b539086.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'wow ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f9fe4a5d9bf9f28de95d0.jpg/revision/latest/top-crop/width/720/height/472?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'hapo ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a3dbb0290428770dcdc68.jpg/revision/latest/top-crop/width/1114/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'anura ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/257abaa21085333c90f74.jpg/revision/latest/top-crop/width/720/height/726?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'macn ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0312326d5ec3d295b5e7e.jpg/revision/latest/top-crop/width/720/height/531?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'babah ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ccf79634ccf2030c34588.jpg/revision/latest/top-crop/width/720/height/928?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'gemba ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ec8e04e9919248c98280b.jpg/revision/latest/top-crop/width/512/height/512?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'nah ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/90ffef8cadf528ca4b203.jpg/revision/latest/top-crop/width/720/height/696?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));

    Asena.addCommand({ pattern: 'kaluhutta ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https:https://telegra.ph/file/26932976bbe80dca208fc.jpg/revision/latest/top-crop/width/300/height/235?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by :\n*SLHαcĸerѕ Teαм Boт*' })

    }));
}
