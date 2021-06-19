const sudo = require("../Commands/Sudo");
const prefix = require("../Commands/Prefix");
// ^ Yes I know this is a weird style but its fast... Change my mind.
const prefixHandler = require('discord-prefix');

module.exports = async (client, message) => {
  let prefix = prefixHandler.getPrefix(message.guild.id) || global.config.bot.prefix;

  if(!message.content.startsWith(prefix)) return;
  let command = message.content.slice(prefix.length).split(" ")[0];
  let args = message.content.slice(prefix.length + command.length).split(" ");
  args.shift();

  commandHandler(client, message, command, args);
}

let commandHandler = async (client, message, command, args) => {
  switch(command){
    case "sudo":
      if(message.author.id !== global.config.bot.ownerID) return message.channel.send("You can't use this Command.");
      sudo(client, message, args);
    break;
    case "prefix":
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You can't use this Command.");
      prefix(client, message, args);
    break;
  }
}
