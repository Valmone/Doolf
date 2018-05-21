


const Discord = require("discord.js");
const bot = new Discord.Client();

var request = require("request"),
    cheerio = require("cheerio");

const translate = require('google-translate-api');



/*var CurrentURL = window.location.href;
		if(CurrentURL.search('messages') >= 0)*/


bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setActivity('KESKEJESUIPACON');	
});

const prefix = "_";

bot.on("message", (message) => {
	
	if (!message.author.bot)
		{
			if (message.content.startsWith(prefix + "ping"))	{
			    	message.channel.send("pong!");
				} else

			if (message.content.startsWith(prefix + "eo"))
				{
					message.delete();
					var msg = message.content.replace('_eo ', '');

					translate(msg, {from: 'fr', to: 'ht'}).then(res => {
					    message.channel.send({embed: {
							color: 	2551650,
							title: message.author.username + ' a dit:',
							description: res.text
						}});
					    

					    /*//=> Ik spreek Nederlands!
					    console.log(res.from.text.autoCorrected);
					    //=> true
					    console.log(res.from.text.value);
					    //=> I [speak] Dutch!
					    console.log(res.from.text.didYouMean);
					    //=> false*/
					}).catch(err => {
					    console.error(err);
					});


				    
				}
		}
	else{}
});
bot.login(process.env.TOKEN);

