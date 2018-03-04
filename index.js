const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var prefix = ("/");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("/help By Lawzenn", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nomme un utilisateur avec une mention (@)");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas etre kick !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nomme un utilisateur avec une mention (@)");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User Ban", `${bUser} with ID ${bUser.id}`)
    .addField("Bannie par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Bannie dans", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }


  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Il a été report !");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#15f153")
    .addField("Reporte User", `${rUser} with ID: ${rUser.id}`)
    .addField("Report par ", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Raison", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }




  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

if (message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
          .setColor('#ff8888')
          .addField("Commande de Respect des règles - ", "  -/commande : Affiche les commandes du bot !\n-/Ban @pseudo SOON *\n-/tempban @pseudo SOON * \n-/kick @pseudo SOON* \n-/mute @pseudo SOON * \n-/tempmute @pseudo SOON *")
          .addField("Interaction - ", "  -/ping le bot te repond pong !\n-/salut le bot te repond ça va ?")
          .addField("Information - ", "  -/discord\n-/support\n-/version\n-/language")
          .addField("Couleurs - ", "  -Les couleurs disponible pour vous etre attribuer en faisant /couleur (couleur)\n@Red @Cyant @Blue @Violet @Pink @Yellow @Orange @Grey @Black @White")
          .setFooter("Bot Programmé par Lawzenn")
      message.channel.sendEmbed(help_embed);
      //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
      console.log("Commande Help demandé !");
    }

});

bot.login(process.env.BOTDISCORD_TOKEN);
