let handler = async (m, { conn }) => {
let ph = 'lumayan'
let pn = 'Wowww'
let pp = 'buruk'
let pv = 'sangat buruk'
let ppm = 'Bagus'
let info = `                                                   
*${htki} RATE BINTANG ${htka}*
`
const sections = [
   {
    title: `${htjava} RATING ✦-------`,
	rows: [
	    {title: "🌟🌟🌟🌟🌟", rowId: '.order *Paket:* 5🌟 • Rate', description: 'Ket: ' + pn + '🤩' },
	    {title: "🌟🌟🌟🌟", rowId: '.order *Paket:* 4🌟 • Rate', description: 'Ket: ' + ppm + '😁' },
	{title: "🌟🌟🌟", rowId: '.order *Paket:* 3🌟 • Rate', description: 'Ket: ' + ph + '😄' },
	{title: "🌟🌟", rowId: '.order *Paket:* 2🌟 • Rate', description: 'Ket: ' + pp + '🙂' },
	{title: "🌟", rowId: '.order *Paket:* 1🌟 • Rate', description: 'Ket: ' + pv + '🙃' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "RATING",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rating', 'ratebot']
handler.tags = ['info']
handler.command = /^(rate(bot)?|rating)$/i
handler.limit = true
handler.private = true

export default handler