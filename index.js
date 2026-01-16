const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TARGET_CHANNELS = [
  "KANAL_ID_BURAYA"
];

const EMOJIS = ["❌", "✅"];

client.on("ready", () => {
  console.log(`Bot aktif: ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (TARGET_CHANNELS.includes(message.channel.id)) {
    for (const emoji of EMOJIS) {
      await message.react(emoji);
    }
  }
});

client.login(process.env.TOKEN);
