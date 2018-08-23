const Discord = require("discord.js");
const bot = new Discord.Client();
var fs = require("fs");

eval(fs.readFileSync('tools.js')+'');

var request = require("request"),
    cheerio = require("cheerio"),
    urlmip = "http://inf0game.000webhostapp.com/pages/nbvcxwm.php";
    urlphalanges = "http://inf0game.000webhostapp.com/pages/nbvcxwp.php";



bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setActivity('Ogame || !help');
});

const prefix = "!";


bot.on("message", (message) => {

	if (!message.author.bot)
		{
			if (message.content.startsWith(prefix + "support"))	{
			    	message.delete();
			    	message.channel.send({embed: {
						color: 	2551650,
						title: 'Support',
						description: 'Merci de faire remonter le moindre problème.\nhttps://discord.gg/DKFBGSB'
					}});
				} else	

			if (message.content.startsWith(prefix + "help"))	{
					message.delete();
			    	message.reply({embed: {
						color: 	2551650,
						title: 'Commandes:',
						description: '\n!mip\n!phalange\n!support'
					}});
				} else

			if (message.content.startsWith(prefix + "mip"))
				{
					var split = message.content.split(" "),
			        uni = split[1],
			        position = split[2];

			        if ((position) && (uni !== 'error'))
			        	{

			        		if((uni === '1') || (uni === '10') || (uni === '40') || (uni === '50') || (uni === '67') || (uni === '79') || (uni === '82'))
						    	{uni = uni;}
					        else {uni = unifr(uni);}

			        		var position_ = position.split(":");
					        var gala = position_[0],
					        ss = position_[1];

			        		request(urlmip, function (error, response, html) {
							    
							    if (!error)
							    	{
							            var $ = cheerio.load(html),
							            taille = $('joueur').length,
							            result_num = '',
							            result_str = '';

							            var tablo = new Array();
							            taille = $('[uni=' + uni + ']').length;
							            var o=0;
							            for (var i = 0; i < taille; i++)
								            {
								            	tablo[i] = new Array();

								            	result_num = $('[uni=' + uni + ']').eq(i).attr('localisation');
								            	var phal = $('[uni=' + uni + ']').eq(i).attr('lvl'),
								            	name = $('[uni=' + uni + ']').eq(i).attr('name');

								            	var separation = result_num.split(':');
								            	var gala_bdd = separation[0],
								            	ss_bdd = separation[1];

								            	phal = phal*phal;
								            	if (phal !== 1) {phal = phal -1;}
													else {}

												if (gala === gala_bdd)
													{
														if ((ss >= (ss_bdd-phal)) && (ss <= (ss_bdd+phal)))
															{
																tablo[o][0] = name;
																tablo[o][1] = gala_bdd + ':' + ss_bdd;
																o++;
															}
														else {}
													}
												else {}
								            }							            
							        }
							    else {}

							    var i = 0,
								result='';
								while(i < o)
									{
										result = result + tablo[i][0] + ' ==>> ' + tablo[i][1] + '\n';
										i++;
									}

								if (result === '')
									{result = 'Aucun mip à portée !';}
								else {}

						    	message.channel.send({embed: {
									title: 'Joueur(s) ayant la position donnée à portée de mip:',
									color: 	2551650,
									description: '\n' + result
								}});
							});
			        	}

					else if (uni === 'error')
						{
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '!help pour plus d\'informations'
							}});
						}
					else
						{  
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '\n!mip [uni] [position de la planète]\n\n[position de la planète] -> respecter ce shéma: x:xxx:x\n[uni]    -> en toute lettre sauf pour les uni à chiffre où seulement ce dernier suffit'
							}});
						}




				}



			else if (message.content.startsWith(prefix + "phalange"))
				{
					var split = message.content.split(" "),
			        uni = split[1],
			        position = split[2];

			        if ((position) && (uni !== 'error'))
			        	{
			        		if((uni === '1') || (uni === '10') || (uni === '40') || (uni === '50') || (uni === '67') || (uni === '79') || (uni === '82'))
						    	{uni = uni;}
					        else {uni = unifr(uni);}

					        var position_ = position.split(":");
					        var gala = position_[0],
					        ss = position_[1];

			        		request(urlphalanges, function (error, response, html) {
							    
							    if (!error)
							    	{
							            var $ = cheerio.load(html),
							            taille = $('joueur').length,
							            result_num = '',
							            result_str = '';

							            var tablo = new Array();
							            taille = $('[uni=' + uni + ']').length;
							            var o=0;
							            for (var i = 0; i < taille; i++)
								            {
								            	tablo[i] = new Array();

								            	result_num = $('[uni=' + uni + ']').eq(i).attr('localisation');
								            	var phal = $('[uni=' + uni + ']').eq(i).attr('lvl'),
								            	name = $('[uni=' + uni + ']').eq(i).attr('name');

								            	var separation = result_num.split(':');
								            	var gala_bdd = separation[0],
								            	ss_bdd = separation[1];

								            	phal = phal*phal;
								            	if (phal !== 1) {phal = phal -1;}
													else {}

												if (gala === gala_bdd)
													{
														if ((ss >= (ss_bdd-phal)) && (ss <= (ss_bdd+phal)))
															{
																tablo[o][0] = name;
																tablo[o][1] = gala_bdd + ':' + ss_bdd;
																o++;
															}
														else {}
													}
												else {}
								            }							            
							        }
							    else {}

							    var i = 0,
								result='';
								while(i < o)
									{
										result = result + tablo[i][0] + ' ==>> ' + tablo[i][1] + '\n';
										i++;
									}

								if (result === '')
									{result = 'Aucune phalange à portée !';}
								else {}

						    	message.channel.send({embed: {
									title: 'Joueur(s) ayant la phalange sur la position donnée:',
									color: 	2551650,
									description: '\n' + result
								}});
							});
			        	}

					else if (uni === 'error')
						{
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '!help pour plus d\'informations'
							}});
						}
					else
						{  
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '\n!phalange [uni] [position de la planète]\n\n[position de la planète] -> respecter ce shéma: x:xxx:x\n[uni]    -> en toute lettre sauf pour les uni à chiffre où seulement ce dernier suffit'
							}});
						}




				}
			else{}










		}
	else{}

});
bot.login(process.env.TOKEN);

