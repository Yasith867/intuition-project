import { Client } from './client.mjs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new Client();

rl.question('Enter a string to process: ', async (input) => {
    console.log('Input:', input);

    // Example workflow: uppercase -> reverse -> lowercase
    const upper = await client.callTool('uppercase', { text: input });
    console.log('Uppercase:', upper.result);

    const reversed = await client.callTool('reverse', { text: input });
    console.log('Reversed:', reversed.result);

    const lower = await client.callTool('lowercase', { text: input });
    console.log('Lowercase:', lower.result);

    rl.close();
});
