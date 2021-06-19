global.discord = require("discord.js");
global.fs = require("fs");
let client = new discord.Client();
let config = global.config.bot;
require("./Events/Handler")(client);

module.exports.startBot = async () => {
  if(config.token === "tH1s.T0k3N.i5_A.3x4mPl3"){
    console.log("[Bot] Please edit the Token in the ./src/Utils/Config.js file to use the Bot.");
    process.exit();
  }
  try{
    client.login(config.token);
  } catch(e) {
    if(e) console.log("[Bot] The Token is Invalid.");
  }
}
