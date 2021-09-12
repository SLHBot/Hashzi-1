const SlHackers = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const ENZAR = "Roll dice randomly."

// Sentences
const ENSEN = "🍀 ```Rolling Dice!``` 🎲"

// Results
const ENSON = "```Dice Rolled:``` "

// Plugin Start 
if (con.LANG === 'TR' || 'az') {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: true, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        SlHackers.addCommand({ pattern: 'roll', fromMe: false, desc: ENZAR }, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6 * Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
