import yts from 'yt-search';
import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { createWriteStream } from 'fs';
import { unlink } from 'fs/promises';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `✳️ Example: *${usedPrefix + command}* Lil Peep hate my life`;
    
    try {
        let res = await yts(text);
        let vid = res.videos[0];
        
        if (!vid) throw `✳️ Video/Audio not found`;

        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid;
        m.react('🎧');

        let play = `
≡ *GCYBER-MD MUSIC*
┌──────────────
▢ 📌 *Title:* ${title}
▢ 📆 *Uploaded:* ${ago}
▢ ⌚ *Duration:* ${timestamp}
▢ 👀 *Views:* ${views.toLocaleString()}
└──────────────`;

        const buttons = [
            ['🎶 MP3', `${usedPrefix}yta ${url}`],
            ['🎥 MP4', `${usedPrefix}ytv ${url}`]
        ];

        await conn.sendButton(m.chat, play, null, thumbnail, buttons, m, { mentions: [m.sender] });

    } catch (error) {
        console.error('Error in play handler:', error);
        throw 'An error occurred while processing your request.';
    }
};

handler.help = ['play'];
handler.tags = ['dl'];
handler.command = ['play', 'playvid'];
handler.disabled = false;

export default handler;
