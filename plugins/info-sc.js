let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

ππππ πππ ππ π ππ ππππ

ππΎπ πππ±π΄ :
https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg

JOIN GC BOT:
https://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS

conn.sendBut(m.chat, esce, 'Jangan Lupa subscribe ', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
