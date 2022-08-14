let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} DISCOUNT ${htka}*

          • Ada di TokoBot •
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://toko.ly/TokoBot'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['diskon']
handler.tags = ['info']
handler.command = /^diskon$/i

export default handler