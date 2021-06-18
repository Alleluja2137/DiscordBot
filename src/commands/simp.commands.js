const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "simp",
    description: "Fun",

    run(msg) {
      var simp = Math.floor(Math.random() * 100) + 1;
        const { channel } = msg
        const botDesc = "CHECK THIS **SIMP** :face_with_monocle: "
        const embed = new MessageEmbed()
          .setTitle('Simp Alert!')
          .setColor(0x66ff33)
          .setDescription(botDesc)
          .addField(`Jestes SIMPem w ${simp}% :joy:`)
        channel.send(embed)
    }
}