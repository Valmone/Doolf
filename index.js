
const Discord = require("discord.js");
const bot = new Discord.Client();




bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setActivity('rien du tout | %help');
});

const prefix = "%";

var questions = new Array(),
reponses = new Array(),
temoin = 0;

bot.on("message", (message) => {

	if (message.content.startsWith(prefix + "help"))		{
			if (!message.member.roles.find("name", "Doolf"))
				{
					message.channel.send({embed: {
						title: 'Liste des commandes:',
						color: 	3447003,
						description: '\n%help\n\n%liste\n\n%learn start [le mot ou la phrase auquel le bot doit réagir] return [la réaction du bot] end\n/!\\Pour le moment, le bot n\'a pas la possibilité de savoir qui écrit le message/!\\'
					}});
				}else{}
		} else

	if (message.content.startsWith(prefix + "liste"))		{
			if (!message.member.roles.find("name", "Doolf"))
				{
					var rep = '';
					for (var i = 0; i < temoin; i++)
						{
							rep = rep + '\n' + questions[i] + ' -> ' + reponses[i] + '\n';
						}
					message.channel.send({embed: {
						title: 'Liste des réactions du bot ainsi que son déclencheur:',
						color: 	3447003,
						description: rep
					}});
				}
			else{}
		} else
	
	if (message.content.startsWith(prefix + "learn"))
		{
			if (!message.member.roles.find("name", "Doolf"))
				{
		    		var split = message.content.split(" ");
					var firstpart = split.indexOf('start');
					var secondpart = split.indexOf('return');
					var endpart = split.indexOf('end');

					if ((split.indexOf('start')) && (split.indexOf('return')) && (split.indexOf('end')))
						{
							var start = '';
							var retour = '';
							for (var i = 1; i < secondpart-firstpart; i++)
								{
									if (start === '')
										{
											start = split[firstpart+i];
										}
									else
										{
											start = start + ' ' + split[firstpart+i];
										}
								}
							questions[temoin] = start;

							for (var i = 1; i < endpart-secondpart; i++)
								{
									if (retour === '')
										{
											retour = split[secondpart+i]
										}
									else
										{
											retour = retour + ' ' + split[secondpart+i]
										}
								}
							reponses[temoin] = retour;
							temoin++;
						}

					else
						{
							var variablequinesertetquineserviraarien = 0;
						}
	    		}

    		else{}
		} else

	if ((questions) && (reponses)) {
		if (!message.member.roles.find("name", "Doolf")) {

			var retourdesemplacementsdei = new Array();
			var o = 0;
			for (var i = 0; i < temoin; i++)
				{
					
					if (message.content.search(questions[i]) >= 0)
						{
							retourdesemplacementsdei[o] = i;
							o++;
						}
					else{}					
				}
			
			if (retourdesemplacementsdei.length > 1)
				{
					var x = Math.floor((Math.random() * retourdesemplacementsdei.length) + 1);
					message.channel.send(reponses[retourdesemplacementsdei[x-1]]);
				}
			else
				{
					message.channel.send(reponses[retourdesemplacementsdei[0]]);
				}	
		}
		else{}
		}





});



bot.login(process.env.TOKEN);

