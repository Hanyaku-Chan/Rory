const sudo = require("../Commands/Sudo");
// ^ Yes I know this is a weird style but its fast... Change my mind.

module.exports = async (client, message) => {
  if(!message.content.startsWith(global.config.bot.prefix)) return;
  let command = message.content.slice(global.config.bot.prefix.length).split(" ")[0];
  let args = message.content.slice(global.config.bot.prefix.length + command.length).split(" ");

  commandHandler(client, message, command, args);
}

let commandHandler= async (client, message, command, args) => {
  switch(command){
    case "sudo":
      if(message.author.id !== global.config.bot.ownerID) return message.channel.send("You can't use this Command.");
      sudo(client, message, args);
    break;
  }
}
