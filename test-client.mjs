import { Client } from './client.mjs';

const client = new Client({ url: 'http://localhost:3001' });

(async () => {
  const ping = await client.ping();
  console.log('Ping response:', ping);

  const complete = await client.complete('Hello MCP');
  console.log('Complete response:', complete);
})();
