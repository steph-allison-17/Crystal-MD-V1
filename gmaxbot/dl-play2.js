const yts = require("yt-search");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports = async (context) => {
    const { client, m, text, fetchJson } = context;

    try {
        if (!text) return m.reply("What song do you want to download?");

        let search = await yts(text);
        let link = search.all[0].url;

        let data = await fetchJson(`https://api.dreaded.site/api/ytdl/video?url=${link}`);
        let videoUrl = data.result.downloadLink;

        let outputFileName = `${search.all[0].title}.mp3`;
        let outputPath = path.join(__dirname, outputFileName);

       
        const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
        });

        
        ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
                await client.sendMessage(
                    m.chat,
                    {
                        document: { url: outputPath },
                        mimetype: "audio/mp3",
                        fileName: outputFileName,
                    },
                    { quoted: m }
                );
                fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
                m.reply("Download failed\n" + err.message);
            });

    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
};






/* module.exports = async (context) => {
    const { client, m, text, fetchJson } = context;

const yts = require("yt-search");
try {

if (!text) return m.reply("What song do you want to download ?")

let search = await yts(text);
        let link = search.all[0].url;

        let data = await fetchJson (`https://api.dreaded.site/api/ytdl/video?url=${link}`)


await client.sendMessage(m.chat, {
 document: {url: data.result.downloadLink},
mimetype: "audio/mp3",
 fileName: `${search.all[0].title}.mp3` }, { quoted: m });


} catch (error) {

m.reply("Download failed\n" + error)

}

}
*/




/* 
module.exports = async (context) => {
    const { client, m, text, fetchJson } = context;

    const yts = require("yt-search");

    try {
        if (!text) return m.reply("What song do you want to download ?")

        let search = await yts(text);
        console.log(search); // Log the search results

        if (!search || !search.all || !search.all[0] || !search.all[0].url) {
            m.reply("Invalid search results");
            return;
        }

        let link = search.all[0].url;

        let data = await fetchJson(`https://widipe.com/download/ytdl?url=${link}`);
        

        if (!data || !data.result || !data.result.mp3 || !data.result.title) {
            m.reply("Invalid data.");
            return;
        }

        await client.sendMessage(m.chat, {
            document: { url: data.result.mp3 },
            mimetype: "audio/mp3",
            fileName: `${data.result.title}.mp3`
        }, { quoted: m });
    } catch (error) {
        m.reply("Download failed\n" + error)
    }
}

*/


/*
import fg from 'api-dylux';
import yts from 'yt-search';
import fetch from 'node-fetch';
import axios from 'axios';


const imgUrl = 'https://telegra.ph/file/a83d8f5535e6b744986b4.png';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"];
    
    let [format, ...keywords] = text.split(" ");
    let searchQuery = keywords.join(" ");
    
    if (!lister.includes(format)) {
        return conn.reply(m.chat, `*💙 𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚎𝚕 𝚏𝚘𝚛𝚖𝚊𝚝𝚘 𝚎𝚗 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛 𝚖á𝚜 𝚎𝚕 𝚝í𝚝𝚞𝚕𝚘 𝚍𝚎 𝚞𝚗 𝚟𝚒𝚍𝚎𝚘 𝚘 𝚖ú𝚜𝚒𝚌𝚊 𝚍𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎.*\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘: ${usedPrefix + command} *mp3* Connor RK800 - I Am Machine\n\n𝙵𝚘𝚛𝚖𝚊𝚝𝚘𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜:\n${lister.map(f => `${usedPrefix + command} *${f}*`).join('\n')}`, m);
    }
    
    if (!searchQuery) {
        return conn.reply(m.chat, `*💙 𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚎𝚕 𝚝í𝚝𝚞𝚕𝚘 𝚍𝚎 𝚞𝚗 𝚟𝚒𝚍𝚎𝚘 𝚘 𝚖ú𝚜𝚒𝚌𝚊 𝚍𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎.*`, m);
    }
    
    try {
        await m.react('🕓');
        
    
        const responseImg = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        let res = await yts(searchQuery);
        let vid = res.videos[0];
        let q = '128kbps';
        
        let txt = `❏ 𝚃𝙸𝚃𝚄𝙻𝙾: ${vid.title}\n`;
        txt += `❏ 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽: ${vid.timestamp}\n`;
        txt += `❏ 𝚅𝙸𝚂𝙸𝚃𝙰𝚂: ${vid.views}\n`;
        txt += `❏ 𝙰𝚄𝚃𝙾𝚁: ${vid.author.name}\n`;
        txt += `❏ 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘: ${vid.ago}\n`;
        txt += `❏ 𝚄𝚁𝙻: https://youtu.be/${vid.videoId}\n\n`;
        txt += `❄𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊 @${m.sender.split('@')[0]}, 𝙲𝚞𝚛𝚒 𝚎𝚜 𝚖𝚒 𝚘𝚠𝚗𝚎𝚛 𝚜𝚒 𝚟𝚊𝚜 𝚊 𝚌𝚊𝚛𝚐𝚊𝚛 𝚕𝚘𝚜 𝚙𝚕𝚞𝚐𝚒𝚗𝚜 𝚍𝚊 𝚌𝚛𝚎𝚍𝚒𝚝𝚘𝚜❄`;

        
        await conn.sendFile(m.chat, responseImg.data, "thumbnail.jpg", txt, m, null, rcanal);

        if (format == "mp3" || format == "yta" || format == "audio" || format == "mp3doc" || format == "ytadoc" || format == "audiodoc") {
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `𝙴𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚙𝚎𝚜𝚊 𝚖á𝚜 𝚍𝚎 ${limit} 𝙼𝙱, 𝚜𝚎 𝚌𝚊𝚗𝚌𝚎𝚕ó 𝚕𝚊 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊.`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp3', `${vid.title}.mp3`, m);
            await m.react('✅');
        } else if (format == "mp4" || format == "ytv" || format == "video" || format == "mp4doc" || format == "ytvdoc" || format == "videodoc" || format == "videodoc") {
            let q = '720p';
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 500;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `𝙴𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚙𝚎𝚜𝚊 𝚖á𝚜 𝚍𝚎 ${limit} 𝙼𝙱, 𝚜𝚎 𝚌𝚊𝚗𝚌𝚎𝚕ó 𝚕𝚊 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊.`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp4', `${vid.title}.mp4`, m);
            await m.react('✅');
        }
    } catch (error) {
        await conn.reply(m.chat, `ɴᴏ ᴇꜱᴛᴀ ɪɴꜱᴛᴀʟᴀᴅᴏ ꜰꜰᴍᴘɢ ᴠᴜᴇʟᴠᴀ ᴀʟ ʀᴇᴘᴏꜱɪᴛᴏʀɪᴏ ᴘᴀʀᴀ ᴄʜᴇᴄᴀʀ ᴄᴏᴍᴏ ɪɴꜱᴛᴀʟᴀʀʟᴏ`, m);
        console.error(error);
    }
};

handler.help = ["play3"].map(v => v + " <formato> <búsqueda>");
handler.tags = ["downloader"];
handler.command = ['play3'];
handler.register = true;

export default handler;

*/
