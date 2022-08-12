/*
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
*/
const { MessageButton, MessageActionRow } = require('discord.js');
module.exports = {
    name: 'modalSubmit',
    async execute(modal, client) {
        const embed_user = new client.discord.MessageEmbed()
            .setTitle(client.config.FLEB5.LANG.EMBED.title)
            .setURL(client.config.FLEB5.LANG.EMBED.url)
            .setDescription("<@"+modal.user.id+"> **Thanks for opening a ticket!** \nA Staffer will be available to support you soon! \n\n**Type:** "+modal.customId+" \n**Text:** \n```"+modal.getTextInputValue('reason')+"```")
            .setColor(client.config.FLEB5.LANG.EMBED.color)
            .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
            .setTimestamp()
            .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })

        if (modal.customId == "Support") {
            client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.create(`🎫・ticket-${modal.user.username}`, {
                type: "text",
                parent: client.config.FLEB5.CATEGORY.TICKET.support,
                topic: modal.user.id,
          
          
                permissionOverwrites: [
                    { id: client.config.FLEB5.ROLES.staff, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ]
              }).then(channel => {
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL() })
                    .setDescription("**Opened by: <@"+modal.user.id+"> ("+modal.user.id+")** \n\n**Transaction ID:** "+modal.getTextInputValue('tebexid')+" \n**Framework:** "+modal.getSelectMenuValues('framework')+" \n**Reason:** \n```"+modal.getTextInputValue('reason')+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
        
                var row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Close")
                        .setStyle("DANGER")
                        .setCustomId("close"),
                )
          
                channel.send({embeds: [embed], components: [row]})
                modal.reply({embeds: [embed_user]});
            });
        } else if (modal.customId == "Informations") {
            client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.create(`🎫・ticket-${modal.user.username}`, {
                type: "text",
                parent: client.config.FLEB5.CATEGORY.TICKET.info,
                topic: modal.user.id,
          
          
                permissionOverwrites: [
                    { id: client.config.FLEB5.ROLES.staff, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ]
              }).then(channel => {
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL() })
                    .setDescription("**Opened by: <@"+modal.user.id+"> ("+modal.user.id+")** \n\n**Reason:** \n```"+modal.getTextInputValue('reason')+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
        
                var row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Close")
                        .setStyle("DANGER")
                        .setCustomId("close"),
                )
          
                channel.send({embeds: [embed], components: [row]})
                modal.reply({embeds: [embed_user]});
            });
        } else if (modal.customId == "Gamemode") {
            client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.create(`🎫・ticket-${modal.user.username}`, {
                type: "text",
                parent: client.config.FLEB5.CATEGORY.TICKET.gamemode,
                topic: modal.user.id,
          
          
                permissionOverwrites: [
                    { id: client.config.FLEB5.ROLES.staff, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ]
              }).then(channel => {
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL() })
                    .setDescription("**Opened by: <@"+modal.user.id+"> ("+modal.user.id+")** \n\n**Reason:** \n```"+modal.getTextInputValue('reason')+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
        
                var row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Close")
                        .setStyle("DANGER")
                        .setCustomId("close"),
                )
          
                channel.send({embeds: [embed], components: [row]})
                modal.reply({embeds: [embed_user]});
            });
        } else if (modal.customId == "Patreon") {
            client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.create(`🎫・ticket-${modal.user.username}`, {
                type: "text",
                parent: client.config.FLEB5.CATEGORY.TICKET.patreon,
                topic: modal.user.id,
          
          
                permissionOverwrites: [
                    { id: client.config.FLEB5.ROLES.staff, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ]
              }).then(channel => {
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL() })
                    .setDescription("**Opened by: <@"+modal.user.id+"> ("+modal.user.id+")** \n\n**Reason:** \n```"+modal.getTextInputValue('reason')+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
        
                var row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Close")
                        .setStyle("DANGER")
                        .setCustomId("close"),
                )
          
                channel.send({embeds: [embed], components: [row]})
                modal.reply({embeds: [embed_user]});
            });
        } else if (modal.customId == "Purchase") {
            client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).channels.create(`🎫・ticket-${modal.user.username}`, {
                type: "text",
                parent: client.config.FLEB5.CATEGORY.TICKET.purchase,
                topic: modal.user.id,
          
          
                permissionOverwrites: [
                    { id: client.config.FLEB5.ROLES.staff, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: client.guilds.cache.get(client.config.FLEB5.SERVER.idguild).id, deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ]
              }).then(channel => {
                const embed = new client.discord.MessageEmbed()
                    .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL() })
                    .setDescription("**Opened by: <@"+modal.user.id+"> ("+modal.user.id+")** \n\n**Reason:** \n```"+modal.getTextInputValue('reason')+"```")
                    .setColor(client.config.FLEB5.LANG.EMBED.color)
                    .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                    .setTimestamp()
                    .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
        
                var row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Close")
                        .setStyle("DANGER")
                        .setCustomId("close"),
                )
          
                channel.send({embeds: [embed], components: [row]})
                modal.reply({embeds: [embed_user]});
            });
        }
    }
}