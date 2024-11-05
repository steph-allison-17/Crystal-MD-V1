import ytdl from 'ytdl-core';
import { createWriteStream } from 'fs';
import { unlink } from 'fs/promises';

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw '✳️ Please provide a YouTube URL';
    
    try {
        m.react('⏳');
        const url = args[0];
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const fileName = `${Date.now()}.mp3`;

        // Send a status message
        await conn.reply(m.chat, '🎵 Downloading audio...', m);

        // Download and convert to MP3
        const stream = ytdl(url, { 
            quality: 'highestaudio',
            filter: 'audioonly'
        });

        const writeStream = createWriteStream(fileName);
        stream.pipe(writeStream);

        writeStream.on('finish', async () => {
            try {
                // Send the audio file
                await conn.sendFile(
                    m.chat,
                    fileName,
                    `${title}.mp3`,
                    null,
                    m,
                    false,
                    { mimetype: 'audio/mp4' }
                );

                // Clean up the temporary file
                await unlink(fileName);
                m.react('✅');
            } catch (err) {
                console.error('Error sending file:', err);
                throw 'Failed to send audio file';
            }
        });

    } catch (error) {
        console.error('Error in yta handler:', error);
        m.react('❌');
        throw 'Failed to download audio';
    }
};

handler.help = ['yta'];
handler.tags = ['dl'];
handler.command = ['yta', 'ytmp3'];

export default handler;
