
const userLastMessageMap = new Map();

export async function all(m) {
  const ONE_DAY = 24 * 60 * 60 * 1000; 

  const currentTime = Date.now();
  const userId = m.sender;

  if (userLastMessageMap.has(userId)) {
    const lastMessageTime = userLastMessageMap.get(userId);
    if (currentTime - lastMessageTime < ONE_DAY) {
      return;
    }
  }

  const greetings = [
    'Hello',
    'Hi',
    'Mambo',
    'bro',
    'hello',
    'Hie',
    'hi',
    'Heey',
    'lazack'
  ];

  if (
    greetings.includes(m.text) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    this.sendButton(
      m.chat,
      `*WELCOME MR BOT TECH WORK*      
    Hello 💕🥰 @${m.sender.split('@')[0]} 
    I may be offline or I may be slow to respond, but wait I will be back soon 😇\n\n\n *what we offer*\n\n1. Heroku credit cards\n2. Bot deployment works 24/7\n3. social media followers\n4. Web coding and bug fixing\n\n\n\n> use the buttons bellow to see me`.trim(),
      igfg,
      null,
      [['OWNER HELP', '.mrcs'], ['SCRIPT', '.repo']],
      m,
      { mentions: [m.sender] }
    );
    m.react('💕');

    userLastMessageMap.set(userId, currentTime);
  }

  return !0;
}






/* export async function all(m) {
  // when someone sends you hello message
  if (
    (m.mtype === 'hellomessage' ||
      m.text.startsWith('Hello') ||
      m.text.startsWith('Hi') ||
      m.text.startsWith('Mambo') ||
      m.text.startsWith('Oy') ||
      m.text.startsWith('Niaje') ||
      m.text.startsWith('kaka')) &&
    !m.isBaileys &&
    !m.isGroup
 /* ) {
    this.sendMessage(
      m.chat,
      {
        text: `Hello @${m.sender.split('@')[0]}\nyou can rent the bot to join a group\n\n_For more info you can DM the owner_\n*Type* \`\`\`.owner\`\`\` *to contact the owner*`.trim(),
      },
      { quoted: m }*/
    ) {
    this.sendButton(m.chat, `*WELCOME ITS ME JUST REPLYING*      
    morning or evening @${m.sender.split('@')[0]} 
    i may be offline or i may be slow to respond you but wait i will be back soon 😇\n\n *What we offer*\n\n1. Heroku credit cards\n2. Bot deployment works 24/7\n3. Social media followers\n\n\n> click the buttons to see me
  `.trim(), igfg, null, [['OWNER HELP', '.mrcs'],['GET TEXT', '.repo']] , m, { mentions: [m.sender] })
    m.react('🤫')
  }

  return !0
} */
