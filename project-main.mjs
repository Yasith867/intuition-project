import { Client } from './client.mjs';  // Use named import since default isn't exported

const client = new Client({ url: 'http://localhost:3001', mode: 'http' });

async function runProject() {
  // Example input
  const inputText = "Hello World";

  // Call tools
  const upper = await client.callTool('uppercase', { text: inputText });
  const lower = await client.callTool('lowercase', { text: inputText });
  const reversed = await client.callTool('reverse', { text: inputText });

  console.log('Uppercase:', upper.result);
  console.log('Lowercase:', lower.result);
  console.log('Reversed:', reversed.result);
}

runProject();
