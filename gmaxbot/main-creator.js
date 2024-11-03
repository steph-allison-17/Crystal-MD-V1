let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;gmax;;\nFN:gmax\nORG:gmax\nTITLE:\nitem1.TEL;waid=255622053093:255622053093\nitem1.X-ABLabel:gmax\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:gmax\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'GMAX TECH', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
