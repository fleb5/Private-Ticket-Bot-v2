/*
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
*/
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isSelectMenu()) return;
        if (interaction.customId != "reason") return;

        if (interaction.values[0] == "Resolved" || interaction.values[0] == "User Afk" || interaction.values[0] == "Not specified") {
            const attachment = await client.discordTranscripts.createTranscript(interaction.channel);
            const user = await client.users.fetch(interaction.channel.topic).catch(console.error);
            const embed = new client.discord.MessageEmbed()
                .setTitle(client.config.FLEB5.LANG.EMBED.title)
                .setURL(client.config.FLEB5.LANG.EMBED.url)
                .setDescription(`Channel name: **${interaction.channel.name}** \n\nReason for closing: **${interaction.values[0]}** \n\nClosed by: **<@${interaction.user.id}> (${interaction.user.id})** \n\nOpened by: **<@${user.id}> (${user.id})**`)
                .setColor(client.config.FLEB5.LANG.EMBED.color)
                .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                .setTimestamp()
                .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

            const embed2 = new client.discord.MessageEmbed()
                .setTitle(client.config.FLEB5.LANG.EMBED.title)
                .setURL(client.config.FLEB5.LANG.EMBED.url)
                .setDescription(`**:flag_us: A staff member closed your ticket! \nReason:** ${interaction.values[0]}`)
                .setColor(client.config.FLEB5.LANG.EMBED.color)
                .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                .setTimestamp()
                .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

            interaction.channel.delete();
            user.send({ embeds: [embed2] });
            interaction.guild.channels.cache.get(client.config.FLEB5.CHANNEL.transcript).send({embeds: [embed], files: [attachment]});
        }
    }
}