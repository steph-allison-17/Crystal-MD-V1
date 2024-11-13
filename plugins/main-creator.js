let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;𝐆𝐦𝐚𝐱;;;
FN:Mr 𝐆𝐦𝐚𝐱 
ORG:𝐆𝐦𝐚𝐱𝐡𝐚𝐜𝐤𝐞𝐫1
TITLE:Owner
item1.TEL;waid=255622053093:255753853473
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Mr 𝐆𝐦𝐚𝐱 
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: '𝐆𝐜𝐲𝐛𝐞𝐫 𝐌𝐝',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
