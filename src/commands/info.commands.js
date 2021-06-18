const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "info",
    description: "Informacje o bocie",

    run(msg) {
        const { channel } = msg
        const botAuthor = "Astral Company (Alleluja)"
        const botVersion = "1.9a"
        const botMission = "Utrzymywanie porzadku!"
        const botDesc = "Astral BOT"
        const embed = new MessageEmbed()
          .setTitle('Bot Info')
          .setColor(0x66ff33)
          .setDescription(botDesc)
          .addField("Autor", botAuthor, true)
          .addField("Wersja", botVersion, true)
          .addField("Zadanie Bota", botMission, true)
        channel.send(embed)
    }
}