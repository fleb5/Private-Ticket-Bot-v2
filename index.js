/*
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
*/
// Discord Js
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ 
  partials: ["CHANNEL"], 
  intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_BANS,
      Intents.FLAGS.GUILD_INTEGRATIONS,
      Intents.FLAGS.GUILD_WEBHOOKS,
      Intents.FLAGS.GUILD_INVITES,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_MESSAGE_TYPING,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
      Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  autoReconnect: true,
  disableEveryone: true,
  fetchAllMembers: true,
});
client.discord = require('discord.js');

// Modals
client.discordModals = require('discord-modals');
client.discordModals(client);

// Fs
client.fs = require('fs');

// Chalk
client.chalk = require("chalk");

// Transcript
client.discordTranscripts = require('discord-html-transcripts');

// Config
client.config = require('./config.json');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("error", console.error);
client.on("warn", console.warn);
client.login(client.config.FLEB5.BOT.token);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Commands
client.commands = new Collection();
const commands = [];
const commandFiles = client.fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
};

const rest = new REST({ version: '9' }).setToken(client.config.FLEB5.BOT.token);
(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(client.config.FLEB5.BOT.clientid, client.config.FLEB5.SERVER.idguild),
			{ body: commands },
		);
	} catch (error) {
		console.error(error);
	}
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, client, client.config);
  } catch (error) {
    console.error(error);
    return interaction.reply({content: 'There was an error executing this command!', ephemeral: true});
  };
});

// Events
const eventFiles = client.fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args, client));
};

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready', () => {
  console.log(client.chalk.green("Log: ") + `Bot started correctly`)
  console.log(client.chalk.green("Log: ") + "BOT Connected "+ client.chalk.blueBright("["+ client.user.tag + "]"));
  client.user.setActivity(`Support - BOT`, { type: 'WATCHING' })
  console.log(String.raw`
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
`);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////