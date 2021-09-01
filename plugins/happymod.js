const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const SIZ = "Size"
const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {

	Asena.addCommand({ pattern: 'happymod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n\n\n' +
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.SIZE + '* ```' + json.result[0].size + '```\n\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}
else if (Config.WORKTYPE == 'public') {

	Asena.addCommand({ pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n\n\n' +
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.SIZE + '* ```' + json.result[0].size + '```\n\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});

	Asena.addCommand({ pattern: 'happymod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
		if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
		const url = `https://api.zeks.me/api/happymod?apikey=qzXRlER89xXLoOvXH8VPmVCh5ye&q=${match[1]}`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
				'*📘 ' + Lang.IMAGE + '* ```' + json.result[0].thumb + '```\n\n\n' +
				'*📕 ' + Lang.NAME + '* ```' + json.result[0].title + '```\n\n' +
				'*📘 ' + Lang.RATING + '* ```' + json.result[0].rating + '```\n\n\n' +
				'*📘 ' + Lang.SIZE + '* ```' + json.result[0].size + '```\n\n\n' +
				'*📗 ' + Lang.DOWNLOAD + ':* ```' + json.result[0].url + '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
		}
	});
}