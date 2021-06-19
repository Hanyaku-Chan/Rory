//Please keep in mind, that we are using the AGPL v3 License.
global.config = require("./src/Utils/Config");

console.log("[Info] You are using the Beta v1.1. In this Version, only the Bot is Working.");

if(global.config.bot.use === true) require("./src/Rory/Rory").startBot();
// if(global.config.fileServer.use === true) require("./src/ShinoaFileNetwork/SFN").startserver();
