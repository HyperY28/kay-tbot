const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
.setDescription(`
**• <a:bune:765646748034793492> Moderasyon Komutları <a:bune:765646748034793492> •**

**<a:partner:765646781672456242> +say = Sunucunun Bilgilerini Gösterir.**
**<a:kilit:765646824987688991> +slowmode = Bulunduğunuz Kanalı Yavaş Moda Alır.**

**• <a:unlem:765646782666375199> Kayıt Komutları <a:unlem:765646782666375199> •**

**<a:hype:765646755542335518> +erkek = Bay Üyeyi Kayıt Etmenize Yarar.**
**<a:hype:765646755542335518> +kız = Bayan Üyeyi Kayıt Etmenize Yarar.**

`)
    .setFooter('Developer By Marcellus')
 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
   