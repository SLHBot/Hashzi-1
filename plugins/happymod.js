const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const SIZ = "Size"
const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {

	SlHackers.addCMD({ pattern: 'happymod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontaddCMDList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=${Config.ASENA_PLUG}&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}
else if (Config.WORKTYPE == 'public') {

	SlHackers.addCMD({ pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontaddCMDList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=${Config.ASENA_PLUG}&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});

	SlHackers.addCMD({ pattern: 'happymod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontaddCMDList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=${Config.ASENA_PLUG}&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}