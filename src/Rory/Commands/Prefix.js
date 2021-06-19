const prefixHandler = require('discord-prefix');

module.exports = async (client, message, args) => {
  prefixHandler.setPrefix(args[0], message.guild.id);
  message.channel.send("The Prefix on this Server has been changed to ``" + args[0] + "``");
}
