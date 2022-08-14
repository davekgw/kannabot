let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Dana 
• Nomor: 089631008798
• A/n: DaveKgw
• Mitra: SmileyBotz
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


📮KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dana$/i
handler.private = true

export default handler