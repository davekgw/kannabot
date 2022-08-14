
let handler = async (m, { conn }) => {
  try {
    /*conn.sendTemplateButtonDoc(m.chat, col, `*Link Group:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), wm, 'Info Grup', '.infogrup', m)*/

conn.sendMessage(m.chat, {
  text: `WEBSITE\nFangz BOT & SmileyBotz`,
  templateButtons: [
    {index: 1, urlButton: {displayText: `Fangz`, url: 'https://fangzbot.websites.co.in/'}},
    {index: 1, urlButton: {displayText: `Smiley`, url: 'https://github.com/devkgw'}}],
  footer: wm
})

  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['website']
handler.tags = ['info']
handler.command = /^web|website?$/i

handler.group = false
handler.admin = false
//handler.botAdmin = true

export default handler 