const messageEvent = require("./Message");
const readyEvent = require("./Ready");

module.exports = async (client) => {
  client.on("message", message => {
    messageEvent(client, message);
  });

  client.on("ready", () => {
    readyEvent(client);
  });
}
