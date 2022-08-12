/*
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Setup commands!'),
        
    async execute(interaction, client) {
        if (!interaction.member?.roles.cache.has(client.config.FLEB5.ROLES.staff)) return;
        const embed = new client.discord.MessageEmbed()
            .setTitle(client.config.FLEB5.LANG.EMBED.title)
            .setURL(client.config.FLEB5.LANG.EMBED.url)
            .setDescription("**Click the button below to open a ticket and receive support**")
            .setColor(client.config.FLEB5.LANG.EMBED.color)
            .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
            .setTimestamp()
            .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel("🚀 | Contact us")
                .setStyle("PRIMARY")
                .setCustomId("contact_us"),
        )
      
        interaction.channel.send({ embeds: [embed], components: [row] });
        interaction.reply({ content: client.config.FLEB5.LANG.MISC.setup_message_sent, ephemeral: true });
    }
}