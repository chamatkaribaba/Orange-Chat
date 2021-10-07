
const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
var x = new smartestchatbot.Client();
client.on("ready", () => {
client.user.setActivity(`${client.guilds.cache.size} Servers!`)
  console.log("Ready for chatting!");
});
client.on("message", async message => {

  if (message.author.bot) return;
  
   message.content = message.content 
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");

  if(message.channel.name === 'chatbot'){
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "twitch", 
    user: message.author.id,
    language: "en"
  }).then(reply => {
    message.reply({
      embed: {
        title: "ChatBot",
        color: "RANDOM",
        description: `**${reply}**`,
      }
    });
  });
  message.channel.stopTyping();
} else {
return }
});
client.login("ya token");

