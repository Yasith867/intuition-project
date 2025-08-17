import { Client } from './client.mjs';

const client = new Client({ url: 'http://localhost:3001' });

(async function runToolsTest() {
  try {
    const ping = await client.ping();
    console.log('--- PING ---');
    console.log(ping);

    const complete = await client.complete('Hello MCP');
    console.log('--- COMPLETE ---');
    console.log(complete);

    const toolsList = await client.getTools();
    console.log('--- TOOLS ---');
    console.log(toolsList);

    for (const tool of toolsList.tools) {
      console.log(`--- CALL TOOL: ${tool.name} ---`);
      const inputText = tool.name === 'reverse' ? 'abc123' :
                        tool.name === 'uppercase' ? 'make me loud' :
                        'Make Me Quiet';
      const result = await client.callTool(tool.name, { text: inputText });
      console.log(result);
    }

    console.log('--- STATUS ---');
    console.log({ status: 'ok', time: new Date().toISOString() });
  } catch (err) {
    console.error('Error running tools test:', err);
  }
})();
