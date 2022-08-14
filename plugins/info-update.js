let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 UPDATE 」
│1. Penambahan Fitur
│2. Update sistem
│3. Update version 
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://github.com/devkgw'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['infoupdate']
handler.tags = ['update']
handler.command = /^infoupdate$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP