import fetch from 'node-fetch';

let handler = async (m, { text, command, conn }) => {

    if (!text) throw 'Please provide a query.';  // Ensure a query is provided

    let apiUrl = `https://itzpire.com/ai/blackbox-ai?q=${encodeURIComponent(text)}`;

    try {

        // React to the message to show that the bot is processing

        await m.react('⏳');  // "Clock" emoji for waiting

        // Make the API call to get the AI response

        const response = await fetch(apiUrl);

        // Check if the API request was successful

        if (!response.ok) {

            throw new Error(`API Error: ${response.statusText}`);

        }

        // Parse the response as JSON

        const data = await response.json();

        // Log the full response for debugging purposes

        console.log('Full API Response:', data);

        // Simply send the result from the API

        if (data.result) {

            await m.reply(data.result);  // Send the AI-generated text as the reply

        } else {

            throw new Error('No valid result found in the API response.');

        }

        // React with a "done" checkmark emoji after processing is complete

        await m.react('✅');  // "Check mark" emoji to indicate completion

    } catch (error) {

        // Log and react to the error if something goes wrong

        console.error('Error:', error);

        await m.react('❌');  // "Cross mark" emoji for error

        throw `*ERROR*: ${error.message}`;  // Show the error message to the user

    }

};

// Metadata for your command

handler.help = ['blackboxai'];

handler.tags = ['AI'];

handler.command = ['blackboxai'];

// Exporting the handler as the default export

export default handler
