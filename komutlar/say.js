const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    let erkekRolü = "ERKEK ID";
  let kızRolü = "KIZ ID";
  let ekipRolü = "EKIP ID"; 
 
  console.log(message.guild.roles.cache)
  let guild = message.guild; 
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = "✾"
    const pinkcode = new Discord.MessageEmbed()
            .setTitle(` ${message.author.tag} - **Tarafından istendi**.`)
    .setDescription(`
\`\`\` +tag Yazarak tagımızı alabilirsin. \`\`\`

**:yes: Toplam Üye: \`\`${message.guild.memberCount}\`\`**

**:694563054108803122: Aktif Üye: \`\`${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`\`**

**:700630919169572894: Tagda Bulunan Üyeler: \`\`${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size}\`\`**

**:muzk: Seslide Bulunan Üye Sayısı: \`\`${count}\`\`**

**:boost: Sunucunun Boost Sayısı: \`\`${message.guild.premiumSubscriptionCount}\`\`**

**:kedi: Sunucudaki Erkek Üye Sayısı: \`\`${message.guild.roles.cache.get(erkekRolü).members.size}\`\`**

**:dans: Sunucudaki Kız Üye Sayısı: \`\`${message.guild.roles.cache.get(kızRolü).members.size}\`\`**

\`\`\` \`\`\`
`)
    
        .setThumbnail(`https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif`)
    message.channel.send(pinkcode);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayy'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}