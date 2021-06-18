const Discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Discord.Client()
const chalk = require("chalk")

// odczytywanie informacji z configu
const { token } = require("./config/config.js")

const commandHandler = require("./handlers/command")

const log = console.log

commandHandler(client)

client.on('ready', () => {
    console.log(`Poprawnie zalogowano!`)
    console.log(`\nBot gotowy do uzytku! ;)`)
});

client.login(token)
