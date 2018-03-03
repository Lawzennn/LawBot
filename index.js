const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("/");

  bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '/help ByLawzenn ©', type: 0} });
    console.log("Je suis connecté !");
});


bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    if (message.content === '/ping'){
        message.reply("pong !");
        console.log('ping pong')
};


  if (message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
          .setColor('#ff8888')
          .addField("Commande de Respect des règles - ", "  -/commande : Affiche les commandes du bot !\n-/Ban @pseudo SOON *\n-/tempban @pseudo SOON * \n-/kick @pseudo SOON* \n-/mute @pseudo SOON * \n-/tempmute @pseudo SOON *")
          .addField("Interaction - ", "  -/ping le bot te repond pong !\n-/salut le bot te repond ça va ?")
          .addField("Information - ", "  -/discord\n-/support\n-/version\n-/language")
          .setFooter("Bot Programmé par Lawzenn")
      message.channel.sendEmbed(help_embed);
      //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
      console.log("Commande Help demandé !");
    }

  if (message.content === prefix + "ban"){
      var help_embed = new Discord.RichEmbed()
          .setColor('#F30000')
          .addField("Bannisement", " :x:-/ban arrive bientot !")
          .setFooter("Bot Programmé par Lawzenn")
      message.channel.sendEmbed(help_embed);
      //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
      console.log("Commande Ban demandé !");
    }

  if (message.content === prefix + "kick"){
      var help_embed = new Discord.RichEmbed()
          .setColor('#F30000')
          .addField("Exclusion", " :x:-/kick arrive bientot !")
          .setFooter("Bot Programmé par Lawzenn")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Kick demandé !");
      }

  if (message.content === prefix + "tempban"){
      var help_embed = new Discord.RichEmbed()
          .setColor('#F30000')
          .addField("Temps-Bannissement", " :x:-/tempban arrive bientot !")
          .setFooter("Bot Programmé par Lawzenn")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
          console.log("Commande Tempban demandé !");
        }

        if (message.content === prefix + "discord"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#F30000')
                .addField("Discord", "  -Voici le discord https://discord.gg/AjXnwCX ")
                .setFooter("Bot Programmé par Lawzenn")
              message.channel.sendEmbed(help_embed);
              //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
                console.log("Commande Discord demandé !");
              }

              if (message.content === prefix + "salut"){
                var help_embed = new Discord.RichEmbed()
                    .setColor('#F30000')
                    .addField("Salutation", "  -Tout va bien pour vous ?")
                    .setFooter("Bot Programmé par Lawzenn")
                  message.channel.sendEmbed(help_embed);
                  //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
                    console.log("Commande Salut demandé !");
                  }
            
    });
