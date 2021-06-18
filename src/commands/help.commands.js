const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    description: "Komenda pomocy",

    run(msg) {
        const { channel } = msg
        const helpDesc = "Astral BOT"
        const commandList = "?info  ?help  ?website" 
        const admincommandList = "?ban  ?warn  ?kick  ?mute"
        const generatorcommandList = "?psc"
        const funcommandslist = "?simp  ?jd  ?jp  ?j60  ?jk  ?bot  ?spam"
        const embed = new MessageEmbed()
        .setTitle('Bot Info')
        .setColor(0x66ff33)
        .setDescription(helpDesc)
        .addField("Komendy:", commandList, true)
        .addField("Generator: ", generatorcommandList, true)
        .addField("Administracyjne: ", admincommandList, true)
        .addField("4FUN: ", funcommandslist, true)
      channel.send(embed)
    }
}