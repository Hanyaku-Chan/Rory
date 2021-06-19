module.exports = async (client, message, args) => {
  try{
    eval(args.join(" "));
  } catch(e){
    if(e) message.channel.send("```JavaScript\n" + e + "\n```");
  }
}
