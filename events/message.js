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
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.id == client.config.FLEB5.BOT.clientid) return;
        if (message.channel.type == 'DM') {
            if (!client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.cache.find(c => c.topic == message.author.id)) return;
            if (message.attachments.first()) {
                if (!message.content) {
                    const embed = new client.discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                        .setDescription("**Attachments:** "+message.attachments.first().url)
                        .setColor(client.config.FLEB5.LANG.EMBED.color)
                        .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                        .setTimestamp()
                        .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

                    client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.cache.find(c => c.topic == message.author.id).send({embeds: [embed]});
                } else {
                    const embed = new client.discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                        .setDescription("**Text:** ```"+message.content+"``` \n**Attachments:** "+message.attachments.first().url)
                        .setColor(client.config.FLEB5.LANG.EMBED.color)
                        .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                        .setTimestamp()
                        .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

                    client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.cache.find(c => c.topic == message.author.id).send({embeds: [embed]});
                }
            }else{
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setDescription("**Text:** \n```"+message.content+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

                client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.cache.find(c => c.topic == message.author.id).send({embeds: [embed]});
            }
        } else {
            if (!message.channel.name.includes('ticket')) return;
            const user = await client.users.fetch(message.channel.topic).catch(console.error);
            const embed = new client.discord.MessageEmbed()
                .setTitle(client.config.FLEB5.LANG.EMBED.title)
                .setURL(client.config.FLEB5.LANG.EMBED.url)
                .setDescription("**Dear <@"+user.id+">,** ```\n"+message.content+"``` \n**Best regards! \n<@"+message.author.id+">**")
                .setColor(client.config.FLEB5.LANG.EMBED.color)
                .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                .setTimestamp()
                .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
            user.send({embeds: [embed]}).catch(console.error);
        } 
    }
}