import { Client, GatewayIntentBits } from 'discord.js';
import { settings } from './settings.js';

const TOKEN = settings.token;
const PREFIX = settings.prefix;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`${client.user?.username}#${client.user?.discriminator} 已經上戰場啦！`);
});

client.on('messageCreate', (message) => {
  const cmd = message.content.split(' ')[0];
  const author = message.author;

  if (cmd === `${PREFIX}test`) {
    message.reply(`${author} 吵屁`);
  }
});

client.login(TOKEN);
