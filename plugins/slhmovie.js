const SlHackers = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs')
//LyFE

if (Config.WORKTYPE == 'private') {
	SlHackers.addCommand({ pattern: 'movie ?(.*)', fromMe: true, desc: "Shows movie info." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '';
		msg += '*🎞Title*\n' + '```' + json.Title + '```' + '\n\n';
		msg += '*🏷Year*\n' + '```' + json.Year + '```' + '\n\n';
		msg += '*⭐️Rated*\n' + '```' + json.Rated + '```' + '\n\n';
		msg += '*🎁Released*\n' + '```' + json.Released + '```' + '\n\n';
		msg += '*🕐Runtime*\n' + '```' + json.Runtime + '```' + '\n\n';
		msg += '*🎈Genre*\n' + '```' + json.Genre + '```' + '\n\n';
		msg += '*📽Director*\n' + '```' + json.Director + '```' + '\n\n';
		msg += '*📃Writer*\n' + '```' + json.Writer + '```' + '\n\n';
		msg += '*🦸🏻‍♂️Actors*\n' + '```' + json.Actors + '```' + '\n\n';
		msg += '*👀Plot*\n' + '```' + json.Plot + '```' + '\n\n';
		msg += '*💬Language*\n' + '```' + json.Language + '```' + '\n\n';
		msg += '*🏳️‍🌈Country*\n' + '```' + json.Country + '```' + '\n\n';
		msg += '*🏆Awards*\n' + '```' + json.Awards + '```' + '\n\n';
		msg += '*💵BoxOffice*\n' + '```' + json.BoxOffice + '```' + '\n\n';
		msg += '*🎬Production*\n' + '```' + json.Production + '```' + '\n\n';
		msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + json.imdbRating + '```' + '\n\n';
		msg += '*👌🏻imdbVotes*\n' + '```' + json.imdbVotes + '```' + '\n';
		msg += '*🔗link\n*' + '```' + json.link + '\n\n*https://t.me/malayalam_rocker_s*';

		var image = await axios.get(`https://i.ibb.co/T17zhtB/FI-LOGO-RD.jpg`, { responseType: 'arraybuffer' })

		await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: msg });
	}));
}

else if (Config.WORKTYPE == 'public') {

	SlHackers.addCommand({ pattern: 'movie ?(.*)', fromMe: false, desc: "Shows movie info." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '';
		msg += '*🎞Title*\n' + '```' + json.Title + '```' + '\n\n';
		msg += '*🏷Year*\n' + '```' + json.Year + '```' + '\n\n';
		msg += '*⭐️Rated*\n' + '```' + json.Rated + '```' + '\n\n';
		msg += '*🎁Released*\n' + '```' + json.Released + '```' + '\n\n';
		msg += '*🕐Runtime*\n' + '```' + json.Runtime + '```' + '\n\n';
		msg += '*🎈Genre*\n' + '```' + json.Genre + '```' + '\n\n';
		msg += '*📽Director*\n' + '```' + json.Director + '```' + '\n\n';
		msg += '*📃Writer*\n' + '```' + json.Writer + '```' + '\n\n';
		msg += '*🦸🏻‍♂️Actors*\n' + '```' + json.Actors + '```' + '\n\n';
		msg += '*👀Plot*\n' + '```' + json.Plot + '```' + '\n\n';
		msg += '*💬Language*\n' + '```' + json.Language + '```' + '\n\n';
		msg += '*🏳️‍🌈Country*\n' + '```' + json.Country + '```' + '\n\n';
		msg += '*🏆Awards*\n' + '```' + json.Awards + '```' + '\n\n';
		msg += '*💵BoxOffice*\n' + '```' + json.BoxOffice + '```' + '\n\n';
		msg += '*🎬Production*\n' + '```' + json.Production + '```' + '\n\n';
		msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + json.imdbRating + '```' + '\n\n';
		msg += '*👌🏻imdbVotes*\n' + '```' + json.imdbVotes + '```' + '\n';
		msg += '*🔗link\n*' + '```' + json.link + '\n\n*https://t.me/malayalam_rocker_s*';

		var image = await axios.get(`https://i.ibb.co/T17zhtB/FI-LOGO-RD.jpg`, { responseType: 'arraybuffer' })

		await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: msg });
	}));


	SlHackers.addCommand({ pattern: 'movie ?(.*)', fromMe: true, dontaddCommandList: true }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '';
		msg += '*🎞Title*\n' + '```' + json.Title + '```' + '\n\n';
		msg += '*🏷Year*\n' + '```' + json.Year + '```' + '\n\n';
		msg += '*⭐️Rated*\n' + '```' + json.Rated + '```' + '\n\n';
		msg += '*🎁Released*\n' + '```' + json.Released + '```' + '\n\n';
		msg += '*🕐Runtime*\n' + '```' + json.Runtime + '```' + '\n\n';
		msg += '*🎈Genre*\n' + '```' + json.Genre + '```' + '\n\n';
		msg += '*📽Director*\n' + '```' + json.Director + '```' + '\n\n';
		msg += '*📃Writer*\n' + '```' + json.Writer + '```' + '\n\n';
		msg += '*🦸🏻‍♂️Actors*\n' + '```' + json.Actors + '```' + '\n\n';
		msg += '*👀Plot*\n' + '```' + json.Plot + '```' + '\n\n';
		msg += '*💬Language*\n' + '```' + json.Language + '```' + '\n\n';
		msg += '*🏳️‍🌈Country*\n' + '```' + json.Country + '```' + '\n\n';
		msg += '*🏆Awards*\n' + '```' + json.Awards + '```' + '\n\n';
		msg += '*💵BoxOffice*\n' + '```' + json.BoxOffice + '```' + '\n\n';
		msg += '*🎬Production*\n' + '```' + json.Production + '```' + '\n\n';
		msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + json.imdbRating + '```' + '\n\n';
		msg += '*👌🏻imdbVotes*\n' + '```' + json.imdbVotes + '```' + '\n';
		msg += '*🔗link\n*' + '```' + json.link + '\n\n*https://t.me/malayalam_rocker_s*';

		var image = await axios.get(`https://i.ibb.co/T17zhtB/FI-LOGO-RD.jpg`, { responseType: 'arraybuffer' })

		await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, { mimetype: Mimetype.png, caption: msg });
	}));
}