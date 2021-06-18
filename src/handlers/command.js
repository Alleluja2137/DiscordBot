const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const { prefix } = require(__dirname + "/../config/config")

const ascii = require("ascii-table")
const { description } = require("../commands/prefix.commands")

const table = new ascii().setHeading("Komenda", "Status")

module.exports = (client) => {
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter((file) =>
        file.endsWith(".commands.js"),
    )

    for (const file of commandFiles) {
        const command = require(__dirname + `/../commands/${file}`)

        if ((command.name)&&(command.description)) {
            client.commands.set(command.name, command)
            table.addRow(file, "WORK")
        } else {
            table.addRow(file, "ERROR")
            continue
        }
    }

    console.log(table.toString())

    client.on('message', (msg) => {
        const { author, guild, channel } = msg
      
        if (author.bot || !guild) {
          return
        }
      
        if (!msg.content.startsWith(prefix)) return
      
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g)
      
      
        const cmd = args.shift().toLowerCase()

        if(!client.commands.has(cmd)) return

        try {
            client.commands.get(cmd).run(msg)
        } catch(error) {
            console.log(error)
            msg.reply("**Cos poszlo nie tak!!!**")
        }
    })
}