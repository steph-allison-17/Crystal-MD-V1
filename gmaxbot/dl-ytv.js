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
        const fileName = `${Date.now()}.mp4`;

        // Send a status message
        await conn.reply(m.chat, '🎥 Downloading video...', m);

        // Download video
        const stream = ytdl(url, { 
            quality: 'highest',
            filter: 'videoandaudio'
        });

        const writeStream = createWriteStream(fileName);
        stream.pipe(writeStream);

        writeStream.on('finish', async () => {
            try {
                // Send the video file
                await conn.sendFile(
                    m.chat,
                    fileName,
                    `${title}.mp4`,
                    title,
                    m,
                    false,
                    { mimetype: 'video/mp4' }
                );

                // Clean up the temporary file
                await unlink(fileName);
                m.react('✅');
            } catch (err) {
                console.error('Error sending file:', err);
                throw 'Failed to send video file';
            }
        });

    } catch (error) {
        console.error('Error in ytv handler:', error);
        m.react('❌');
        throw 'Failed to download video';
    }
};

handler.help = ['ytv'];
handler.tags = ['dl'];
handler.command = ['ytv', 'ytmp4'];

export default handler;
