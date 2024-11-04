let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:2.0
N:;Gmax;;;
FN:Gmaxhacker
ORG:GCYBER-Md
TITLE:Owner
item1.TEL;waid=255622053093:255622053093
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Gmax
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Gmaxhacker,
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
