const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('පූරනය වෙමින් ' + Config.LANG + ' භාෂාව...')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('ඔබ අවලංගු භාෂාවක් ඇතුළු කළා.ඒ නිසා ඉංග්‍රිසි භාෂාව තෝරා ගත්තා.')
    );

    var json = JSON.parse(fs.readFileSync('./language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}