import { Client } from './client.mjs';

async function runProject() {
  const client = new Client({ url: 'http://localhost:3001' });

  console.log('MCP Client initialized:', client._clientInfo);

  const pingRes = await client.ping();
  console.log('Ping response:', pingRes);

  const completeRes = await client.complete('Hello MCP');
  console.log('Complete response:', completeRes);

  const tools = await client.listTools();
  console.log('--- TOOLS ---');
  console.log(tools);

  for (const tool of tools.tools) {
    try {
      const result = await client.callTool(tool.name, tool.input);
      console.log(`--- CALL TOOL: ${tool.name} ---`);
      console.log(result);
    } catch (err) {
      console.error(`Error running tool ${tool.name}:`, err.message);
    }
  }

  console.log('--- STATUS ---');
  console.log({ status: 'ok', time: new Date().toISOString() });
}

runProject();
