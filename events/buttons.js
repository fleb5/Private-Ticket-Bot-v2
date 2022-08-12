/*
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
*/
const { MessageButton, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isButton()) return;

        if (interaction.customId == "contact_us") {
            const embed = new client.discord.MessageEmbed()
                .setTitle(client.config.FLEB5.LANG.EMBED.title)
                .setURL(client.config.FLEB5.LANG.EMBED.url)
                .setDescription("**👋 Hi, to open a ticket, click on the green button below. In this way you can proceed with the wizard.**")
                .setColor(client.config.FLEB5.LANG.EMBED.color)
                .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                .setTimestamp()
                .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setLabel("Create Ticket")
                    .setStyle("SUCCESS")
                    .setCustomId("open_ticket"),
                new MessageButton()
                    .setLabel("Cancel")
                    .setStyle("DANGER")
                    .setCustomId("cancel"),
            )
            interaction.member?.send({ embeds: [embed], components: [row] }).catch(console.error);
            interaction.reply({ content: client.config.FLEB5.LANG.MISC.contact_us_message_reply, ephemeral: true });
        }else if (interaction.customId == "open_ticket") {
            interaction.message.delete();
            const embed = new client.discord.MessageEmbed()
                .setTitle(client.config.FLEB5.LANG.EMBED.title)
                .setURL(client.config.FLEB5.LANG.EMBED.url)
                .addFields(
                    { name: 'Support', value: 'Resource support.', inline: true },
                    { name: 'Informations', value: 'We will provide you the all information that you need.', inline: true },
                    { name: 'Gamemode', value: 'To get info or to purchase our custom gamemode', inline: true },
                    { name: 'Patreon', value: 'Patreon membership', inline: true },
                    { name: 'Purchase', value: 'Purchase of custom resources.', inline: true },
                )
                .setColor(client.config.FLEB5.LANG.EMBED.color)
                .setThumbnail(client.config.FLEB5.LANG.EMBED.thumbnail)
                .setTimestamp()
                .setFooter({ text: client.config.FLEB5.LANG.EMBED.footer_text, iconURL: client.config.FLEB5.LANG.EMBED.footer_image })
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setLabel("Support")
                    .setStyle("PRIMARY")
                    .setCustomId("support"),
                new MessageButton()
                    .setLabel("Informations")
                    .setStyle("PRIMARY")
                    .setCustomId("informations"),
                new MessageButton()
                    .setLabel("Gamemode")
                    .setStyle("PRIMARY")
                    .setCustomId("gamemode"),
                new MessageButton()
                    .setLabel("Patreon")
                    .setStyle("PRIMARY")
                    .setCustomId("patreon"),
                new MessageButton()
                    .setLabel("Purchase")
                    .setStyle("PRIMARY")
                    .setCustomId("purchase"),
            )
            interaction.channel.send({ embeds: [embed], components: [row] });
        }else if (interaction.customId == "cancel") {
            interaction.message.delete();
        } else if (interaction.customId == "support") {
            const modal = new Modal()
                .setCustomId('Support')
                .setTitle('Info Ticket')
                .addComponents(
                new TextInputComponent()
                    .setCustomId('reason')
                    .setLabel('Reason')
                    .setStyle('LONG')
                    .setPlaceholder('Fill in this field with the reason')
                    .setRequired(true), 

                new TextInputComponent()
                    .setCustomId('tebexid')
                    .setLabel('Tebex transaction id')
                    .setStyle('SHORT')
                    .setPlaceholder('Fill in this field with the tebex transaction id')
                    .setRequired(false), 

                new SelectMenuComponent()
                    .setCustomId('framework')
                    .setPlaceholder('Choose a framework')
                    .addOptions(
                    {
                        label: 'ESX',
                        description: 'Use ESX?',
                        value: 'ESX',
                        emoji: '🔴',
                    },
                    {
                        label: 'VRP',
                        description: 'Use VRP?',
                        value: 'VRP',
                        emoji: '🟠',
                    },
                    {
                        label: 'QBCORE',
                        description: 'Use QBCORE?',
                        value: 'QBCORE',
                        emoji: '🟡',
                    },
                    {
                        label: 'CUSTOM FRAMEWORK',
                        description: 'Use Custom Framework?',
                        value: 'CUSTOM FRAMEWORK',
                        emoji: '🟢',
                    },
                ),  
            );
            showModal(modal, { client: client, interaction: interaction });
        } else if (interaction.customId == "informations") {
            const modal = new Modal()
                .setCustomId('Informations')
                .setTitle('Info Ticket')
                .addComponents(
                new TextInputComponent()
                    .setCustomId('reason')
                    .setLabel('Reason')
                    .setStyle('LONG')
                    .setPlaceholder('Fill in this field with the reason')
                    .setRequired(true),  
            );
            showModal(modal, { client: client, interaction: interaction });
        } else if (interaction.customId == "gamemode") {
            const modal = new Modal()
                .setCustomId('Gamemode')
                .setTitle('Info Ticket')
                .addComponents(
                new TextInputComponent()
                    .setCustomId('reason')
                    .setLabel('Reason')
                    .setStyle('LONG')
                    .setPlaceholder('Fill in this field with the reason')
                    .setRequired(true),  
            );
            showModal(modal, { client: client, interaction: interaction });
        } else if (interaction.customId == "patreon") {
            const modal = new Modal()
                .setCustomId('Patreon')
                .setTitle('Info Ticket')
                .addComponents(
                new TextInputComponent()
                    .setCustomId('reason')
                    .setLabel('Reason')
                    .setStyle('LONG')
                    .setPlaceholder('Fill in this field with the reason')
                    .setRequired(true),  
            );
            showModal(modal, { client: client, interaction: interaction });
        } else if (interaction.customId == "purchase") {
            const modal = new Modal()
                .setCustomId('Purchase')
                .setTitle('Info Ticket')
                .addComponents(
                new TextInputComponent()
                    .setCustomId('reason')
                    .setLabel('Reason')
                    .setStyle('LONG')
                    .setPlaceholder('Fill in this field with the reason')
                    .setRequired(true),  
            );
            showModal(modal, { client: client, interaction: interaction });
        } else if (interaction.customId == "close") {
            var row = new MessageActionRow().addComponents(
                new MessageSelectMenu()
                    .setCustomId("reason")
                    .setPlaceholder("Select a reason for closure")
                    .setMinValues(1)
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: "Resolved",
                            value: "Resolved",
                            emoji: "✅",
                        },
                        {
                            label: "User Afk",
                            value: "User Afk",
                            emoji: "⭕",
                        },
                        {
                            label: "Not specified",
                            value: "Not specified",
                            emoji: "❌",
                        },                         
                    ])
            );

            interaction.reply({ components: [row], ephemeral: true });
        }
    }
}