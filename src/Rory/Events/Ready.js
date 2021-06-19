module.exports = async (client) => {
  console.log("[Bot] " + global.config.bot.name + " is Online.");
  console.log("[Bot] Username: " + client.user.username);
  console.log("[Bot] ID: " + client.user.id);

  client.user.setActivity("with Daddy Hanyaku");
}
