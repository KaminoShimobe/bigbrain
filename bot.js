const Discord = require("discord.js");




const prefix = "IQ!";

const bot = new Discord.Client({disableEveryone: true})




	

bot.on("ready", async () => {

	console.log(`10 Billion IQ bois! ${bot.user.username}`);

	bot.user.setPresence({ status: 'online', game: { name: 'IQ!help' } });



	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});



bot.on('guildMemberAdd', member => {

  // Send the message to a designated channel on a server:

   member.guild.channels.get("560513308608692263").send(` What 10 Billion IQ ideas is ${member} bringing to the table? Respond with IQ!roles to specify your specialties`);
  // Send the message, mentioning the member
 

	

});



bot.on("message", async message => {

	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	if(message.author.bot) return;
	
	
	

	if(message.channel.type === "dm") return;

	

const member = message.member;
	//List of roles
let artist = message.guild.roles.find("name", "Artists");	
let storyboarder = message.guild.roles.find("name", "storyboarder");	
let directors = message.guild.roles.find("name", "Directors");	
let programmers = message.guild.roles.find("name", "Programmers");	
let animator = message.guild.roles.find("name", "animator");	
let actors = message.guild.roles.find("name", "actor/actress");	
let editor = message.guild.roles.find("name", "editor");	
let writer = message.guild.roles.find("name", "writer");	
let musician = message.guild.roles.find("name", "musician");	

if(command == "I" && messageArray[1] == "think"){
	var chance = Math.floor(Math.random() * 4) + 1;
	if(chance == 1){
		message.channel.send("10 Billion IQ")
	} else {
		return;
	}
}	

//Helping 1000000 IQ people out with list of commands
if(command === `${prefix}help`){
		
		let help = new Discord.RichEmbed()

			
			.setTitle("Big Brain commands")
			.setDescription("**IQ!help**: \n Pulls up this 100000 IQ list. \n **IQ!roles**: \n Lists the roles for 100000 IQ users only. \n **IQ!toggle [role]**: \n Toggles the role you want")
			.setColor("#1f3c5b"); 

		message.author.sendEmbed(help);
		message.reply(" Since you have an IQ > 100000000000 I sent you the help list.")

		 

		
		 		}

//Helping 10000 IQ people out with list of roles
if(command === `${prefix}roles`){
		
		let help = new Discord.RichEmbed()

			
			.setTitle("IQ!toggle [role] to change")
			.setDescription("**artist**: \n Nerds that make pretty stuff. \n **storyboarder**: \n Nerds that make scenes. \n **director**: \n Nerds that boss other nerds around. \n **programmer**: \n ```nerd = true;``` \n **animator**: \n Nerds that make pictures move. \n **actor/actress**: \n Nerds that are overdramatic. \n **editor**: \n Nerds that spend years at the computer dealing with keyframes \n **writer**: \n Nerds that write stories \n **musician**: \n Nerds that play an instrument")
			.setColor("#1f3c5b"); 

		message.author.sendEmbed(help);
		message.reply(" Since you have an IQ > 1000000000 I sent you the roles list.")

		 

		
		 		}		 		

//1010000 IQ command to toggle roles
if(command === `${prefix}toggle` && messageArray[1] != undefined){
	if(messageArray[1] == "artist" || messageArray[1] == "art" || messageArray[1] == "Artist"){
		if(message.member.roles.find("name", "Artists")){
			member.removeRole(artist).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(artist).catch(console.error);
			message.react('🎨')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}

	} else if(messageArray[1] == "storyboarder" || messageArray[1] == "Storyboarder" || messageArray[1] == "Story"){

		if(message.member.roles.find("name", "Directors")){
			member.removeRole(storyboarder).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(storyboarder).catch(console.error);
			message.react('📖')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "director" || messageArray[1] == "Director" || messageArray[1] == "yeller"){

		if(message.member.roles.find("name", "storyboarder")){
			member.removeRole(directors).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(directors).catch(console.error);
			message.react('🗣️')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "programmer" || messageArray[1] == "Programmer" || messageArray[1] == "coder"){

		if(message.member.roles.find("name", "Programmers")){
			member.removeRole(programmers).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(programmers).catch(console.error);
			message.react('👾')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "animator" || messageArray[1] == "Animator" || messageArray[1] == "weeb"){

		if(message.member.roles.find("name", "animator")){
			member.removeRole(animator).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(animator).catch(console.error);
			message.react('🎞️')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "actor" || messageArray[1] == "Actor" || messageArray[1] == "Actress" || messageArray[1] == "actress" || messageArray[1] == "dramatic"){
		
		if(message.member.roles.find("name", "actor/actress")){
			member.removeRole(actors).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(actors).catch(console.error);
			message.react('🎭')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}

	} else if(messageArray[1] == "editor" || messageArray[1] == "Editor" || messageArray[1] == "grammer"){

		if(message.member.roles.find("name", "editor")){
			member.removeRole(editor).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(editor).catch(console.error);
			message.react('🎥')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "writer" || messageArray[1] == "Writer" || messageArray[1] == "fanfiction"){

		if(message.member.roles.find("name", "writer")){
			member.removeRole(writer).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(writer).catch(console.error);
			message.react('📝')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}
		
	} else if(messageArray[1] == "musician" || messageArray[1] == "Musician" || messageArray[1] == "mandolin"){
		if(message.member.roles.find("name", "musician")){
			member.removeRole(musician).catch(console.error);
			message.react('👍')

  			.then(console.log("Boom"))

  			.catch(console.error);	
		} else {
			member.addRole(musician).catch(console.error);
			message.react('🎶')

  			.then(console.log("Boom"))

  			.catch(console.error);
		}

	} else {
		message.reply(" Yo that was a -10000 IQ response fam.")
	}
}


});

bot.login(process.env.BOT_TOKEN);
