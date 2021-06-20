let configuration = {
  "debug": false,
  "bot": {
    "use": true, // True = Start the bot ;; False = Don't start the bot
    "ownerID": "219191061199847424", // This should be your own ID. This will be required for you to use the SUDO command.
    "name": "Rory Mercury", // Name of the bot. This will be used in some commands.
    "prefix": "r.", // The bot reacts to messages starting with the Prefix. Basically the "!" of the Mee6 bot.
    "token": "tH1s.T0k3N.i5_A.3x4mPl3",
    "fileServerDiscordID": "835903789235961857" // Channel ID of the Server-linked Channel Discord Server. Required for File Uploads to the File Server.
  },
  "fileServer": {
    "use": true, // True = Start the server ;; False = Don't start the server
    "port": 2000, // The Port has to be behind the Domain or the IP if you don't use the Ports 80 or 443.
    "name": "Shinoa File Network", // Name of the Server
    "indexText": "This is the Shinoa File Network. You can Upload files to it by sending them to a Server on the Scythe Discord Server." // This will be returned when someone sends a Request to the Server without a path. (https://example.com/)
  }
}

module.exports = configuration;
