const sudo = require("../Commands/Sudo");
const prefix = require("../Commands/Prefix");
// ^ Yes I know this is a weird style but its fast... Change my mind.
const prefixHandler = require('discord-prefix');
const https = require("https");

module.exports = async (client, message) => {
  if(message.channel.type === 'dm') return;
  checkHi(message);
  checkSFN(client, message);
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

//I was bored and wanted someone to say Hello to me ^^
function checkHi(message) {
  if(message.author.id !== global.config.bot.ownerID) return;
  message.channel.send("Hallo Senpai <3");
}

function checkSFN (client, message) {
    if(message.channel.id === global.config.bot.fileServerDiscordID){
    message.delete();

      if (!message.attachments) return;
      var Attachment = (message.attachments).array();

      let text = "";

      Attachment.forEach(function (attachment) {


          let date = Date.now();

          let file = fs.createWriteStream("./src/ShinoaFileNetwork/Files/" + date + "_" + attachment.name);
          let request = https.get(attachment.url, function (response) {
              response.pipe(file);
          });

          text = "```" + "https://sfn.shinoa.tk/file/" + date + "_" + attachment.name + "```\n\n";
          client.users.cache.get(message.author.id).send(text);

      });

  }
}
