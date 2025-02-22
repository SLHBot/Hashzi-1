/* Copyright (C) 2021 Hirusha Dayarathne.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐒𝐋𝐇𝐚𝐜𝐤𝐞𝐫𝐬 𝐓𝐞𝐚𝐦 𝐁𝐨𝐭 - Hirusha Dayarathne
*/

// Komutları burada tutacağız.
var config = require('./config');
var Commands = [];

function addCommand(info, func) {
    // Basit bir fonksiyon, komut eklemek için.
    var types = ['photo', 'image', 'text', 'message'];

    var infos = {
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], // Or Sudo
        onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
        onlyPinned: info['onlyPinned'] === undefined ? false : info['onlyPinned'],
        onlyPm: info['onlyPm'] === undefined ? false : info['onlyPm'],
        deleteCommand: info['deleteCommand'] === undefined ? true : info['deleteCommand'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        usage: info['usage'] === undefined ? '' : info['usage'],
        dontaddCommandList: info['dontaddCommandList'] === undefined ? false : info['dontaddCommandList'],
        warn: info['warn'] === undefined ? '' : info['warn'],
        function: func
    };

    if (info['on'] === undefined && info['pattern'] === undefined) {
        infos.on = 'message';
        infos.fromMe = false;
    } else if (info['on'] !== undefined && types.includes(info['on'])) {
        infos.on = info['on'];

        if (info['pattern'] !== undefined) {
            infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
        }
    } else {
        infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
    }

    Commands.push(infos);
    return infos;
}

module.exports = {
    addCommand: addCommand,
    commands: Commands
}
