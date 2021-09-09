/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

const simpleGit = require('simple-git');
const git = simpleGit();
const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })

const Language = require('../language');
const Lang = Language.getString('updater');


SlHackers.addCommand({ pattern: 'update$', fromMe: true, desc: Lang.UPDATER_DESC }, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );

        await message.client.sendMessage(
            message.jid,
            degisiklikler + '```', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '*මාගේ නිර්මාතෘ ඔබව සමහරක්විට දැන් යාවත්කාලීන කිරීමට පටන් ගනීවි.*', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '*3️⃣*', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '*2️⃣*', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '*1️⃣*', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '*0️⃣*', MessageType.text
        );

        await message.client.sendMessage(
            message.jid,
            '.update now', MessageType.text
        );
    }
}));

SlHackers.addCommand({ pattern: 'update now$', fromMe: true, desc: Lang.UPDATE_NOW_DESC }, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );
    } else {
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid, Lang.INVALID_HEROKU, MessageType.text, { quoted: message.data });
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid, Lang.IN_AF, MessageType.text, { quoted: message.data });
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )

            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid, Lang.UPDATED, MessageType.text, { quoted: message.data });

            await message.sendMessage(Lang.AFTER_UPDATE);

        } else {
            git.pull((async (err, update) => {
                if (update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid, Lang.UPDATED_LOCAL, MessageType.text, { quoted: message.data });
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid, '*හෙරොකු API වෙනස් වී ඇත!*\n*♦:* ```' + err + '```', MessageType.text, { quoted: message.data });
                }
            }));
            await guncelleme.delete();
        }
    }
}));
