export async function before(statusUpdate, {
  conn: botConnection,
  isAdmin,
  isBotAdmin
}) {
  // Only process if the update is a status
  if (statusUpdate.key.remoteJid !== 'status@broadcast') {
    return false;
  }

  // Initialize the story array and the last quote sent timestamp if they don't exist
  this.story = this.story || [];
  this.lastQuoteSent = this.lastQuoteSent || {}; // Store the last time the quote was sent

  // List of motivational quotes
const motivationalQuotes = [
    "Believe you can and you're halfway there. GCYBER MD",
    "Every day may not be good, but there is something good in every day. GCYBER MD",
    "The only limit to our realization of tomorrow is our doubts of today. GCYBER MD",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. GCYBER MD",
    "Start where you are. Use what you have. Do what you can. GCYBER MD",
    "Stay positive, work hard, and make it happen. GCYBER MD",
    "You are stronger than you think. GCYBER MD",
    "Dream big and dare to fail. GCYBER MD",
    "Happiness is not something ready-made. It comes from your own actions. GCYBER MD",
    "Difficult roads often lead to beautiful destinations. SILVA MD BOT",
    "Success is not just about making money. It’s about making a difference. GCYBER MD",
    "Believe in yourself and all that you are. GCYBER MD",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. GCYBER MD",
    "Be so good they can't ignore you. GCYBER MD",
    "Your life only gets better when you get better. GCYBER MD",
    "Don't watch the clock; do what it does. Keep going. GCYBER MD",
    "The harder you work for something, the greater you’ll feel when you achieve it. GCYBER MD",
    "Success is a journey, not a destination. GCYBER MD",
    "Don't wait for opportunity. Create it. GCYBER MD",
    "Push yourself, because no one else is going to do it for you. GCYBER MD",
    "Your limitation—it's only your imagination. GCYBER MD",
    "Great things never come from comfort zones. GCYBER MD",
    "Dream it. Wish it. Do it. GCYBER MD",
    "Success doesn’t just find you. You have to go out and get it. GCYBER MD",
    "The key to success is to start before you are ready. GCYBER MD",
    "Sometimes later becomes never. Do it now. GCYBER MD",
    "The only way to do great work is to love what you do. GCYBER MD",
    "Don't stop when you're tired. Stop when you're done. GCYBER MD",
    "Wake up with determination. Go to bed with satisfaction. GCYBER MD",
    "Do something today that your future self will thank you for. GCYBER MD",
    "Little things make big days. GCYBER MD",
    "It’s going to be hard, but hard does not mean impossible. GCYBER MD",
    "Don’t limit your challenges. Challenge your limits. GCYBER MD",
    "Stay focused and never give up. GCYBER MD",
    "Stay hungry. Stay foolish. GCYBER MD",
    "You don’t have to be great to start, but you have to start to be great. GCYBER MD",
    "Be willing to be a beginner every single morning. GCYBER MD",
    "Success usually comes to those who are too busy to be looking for it. GCYBER MD",
    "What seems to us as bitter trials are often blessings in disguise. GCYBER MD",
    "Work hard in silence, let your success be your noise. GCYBER MD",
    "Success is what happens after you’ve survived all your mistakes. GCYBER MD",
    "Fall seven times, stand up eight. GCYBER MD",
    "Hardships often prepare ordinary people for an extraordinary destiny. GCYBER MD",
    "Success is not how high you have climbed, but how you make a positive difference to the world. GCYBER MD",
    "The only place where success comes before work is in the dictionary. GCYBER MD",
    "Don’t let yesterday take up too much of today.",
    "You don’t have to see the whole staircase, just take the first step.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "Success is not in what you have, but who you are. ",
    "If you want to achieve greatness stop asking for permission. ",
    "Go as far as you can see; when you get there, you’ll be able to see further. ",
    "Doubt kills more dreams than failure ever will. ",
    "You miss 100% of the shots you don’t take. GCYBER MD",
    "The only way to achieve the impossible is to believe it is possible. GCYBER MD",
    "A journey of a thousand miles begins with a single step. ",
    "To accomplish great things, we must not only act but also dream; not only plan but also believe. GCYBER MD",
    "Success is not the key to happiness. Happiness is the key to success. GCYBER MD",
    "Everything you can imagine is real. SILVA MD BOT",
    "Believe in yourself, push your limits, and do whatever it takes to conquer your goals. GCYBER MD",
    "Don't stop until you're proud. GCYBER MD",
    "You are capable of amazing things. GCYBER MD",
    "Don’t be afraid to give up the good to go for the great. GCYBER MD",
    "Act as if what you do makes a difference. It does. GCYBER MD",
    "Keep your face always toward the sunshine—and shadows will fall behind you. ",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The future belongs to those who believe in the beauty of their dreams. ",
    "What we achieve inwardly will change outer reality. ",
    "With the new day comes new strength and new thoughts. GCYBER MD",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. GCYBER MD",
    "There are no limits to what you can accomplish, except the limits you place on your own thinking. GCYBER MD",
    "Everything you’ve ever wanted is on the other side of fear. GCYBER MD",
    "Believe in your infinite potential.",
    "Rise above the storm, and you will find the sunshine. GCYBER MD",
    "Success is walking from failure to failure with no loss of enthusiasm. GCYBER MD",
    "Strive not to be a success, but rather to be of value. GCYBER MD",
    "The only impossible journey is the one you never begin. GCYBER MD",
    "The best way to predict the future is to create it. GCYBER MD",
    "Life is short, and it is up to you to make it sweet. GCYBER MD",
    "Your time is limited, don’t waste it living someone else’s life.",
    "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. GCYBER MD",
    "Success is liking yourself, liking what you do, and liking how you do it. GCYBER MD",
    "If you can dream it, you can do it. GCYBER MD",
    "If opportunity doesn’t knock, build a door. GCYBER MD",
    "Don’t quit. Suffer now and live the rest of your life as a champion. GCYBER MD",
    "It’s never too late to be what you might’ve been. GCYBER MD",
    "Don’t be afraid to give up the good to go for the great. GCYBER MD",
    "Success is a state of mind. If you want success, start thinking of yourself as a success. GCYBER MD",
];

  // Get the current time
  const currentTime = Date.now();
  const lastQuoteTime = this.lastQuoteSent[statusUpdate.sender] || 0;

  // Only send a quote if 24 hours have passed
  if (currentTime - lastQuoteTime < 24 * 60 * 60 * 1000) {
    console.log("24 hours haven't passed since the last motivational quote.");
    return false; // Don't send the quote if 24 hours haven't passed
  }

  // Select a random motivational quote
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  try {
    // Send the motivational quote as a reply to the status update
    await this.reply(statusUpdate.sender, randomQuote, statusUpdate, {
      mentions: [statusUpdate.sender]
    });
    console.log(`Motivational quote sent to ${statusUpdate.sender.split('@')[0]}`);

    // Update the last quote sent timestamp
    this.lastQuoteSent[statusUpdate.sender] = currentTime;
  } catch (error) {
    console.error("Error sending motivational quote:", error);
  }

  // Automatically react to the status with 🙏 emoji
  try {
    await this.sendMessage(statusUpdate.sender, {
      react: {
        text: '🙏',
        key: statusUpdate.key
      }
    });
    console.log('Reacted to status with 🙏');
  } catch (reactionError) {
    console.error('Failed to react to status:', reactionError);
  }

  // Check if the bot has viewStory enabled in chat settings
  const chatSettings = global.db.data.chats[statusUpdate.chat];
  return chatSettings && chatSettings.viewStory ? true : false;
  }
