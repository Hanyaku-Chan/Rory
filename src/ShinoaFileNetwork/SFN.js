const express = require("express");
let fs = global.fs;
const app = express();

module.exports.startServer = async () => {
  app.get("/", function (req, res) {
    res.send(global.config.fileServer.indexText);
  });

  app.get("/file/:file/", function (req, res) {
    if(!req.params.file) return res.json(JSON.parse('{ "err": "no file name provided" }'));

    if(!fs.existsSync("./src/ShinoaFileNetwork/Files/" + req.params.file)) return res.json(JSON.parse('{ "err": "invalid file" }'));

    res.sendFile(__dirname + "/Files/" + req.params.file);
  });

  try{
    app.listen(global.config.fileServer.port);
    console.log("[File Server] Running on Port " + global.config.fileServer.port)
  } catch(e){
    if(!e) return;
    console.log("[File Server] Something went wrong. Maybe the Port is already in use.");
    if(global.config.debug === true) console.log("\n" + e);
  }
}
