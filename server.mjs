import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const port = 3001;

// Store registered tools
const tools = {};

// Helper to register tools
export function registerTool(name, fn) {
  tools[name] = fn;
}

// Ping endpoint
app.get('/ping', (req, res) => {
  res.json({ result: 'pong' });
});

// Complete endpoint (dummy example)
app.post('/complete', (req, res) => {
  const { text } = req.body || {};
  res.json({ result: `Completed: ${text || '[object Object]'}` });
});

// Tools list
app.get('/tools', (req, res) => {
  res.json({ tools: Object.keys(tools).map(name => ({ name, input: {} })) });
});

// Call tool
app.post('/tools/:name', async (req, res) => {
  const { name } = req.params;
  const toolFn = tools[name];
  if (!toolFn) return res.status(404).json({ error: 'Tool not found' });
  try {
    const result = await toolFn(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Register default tools
registerTool('uppercase', async ({ text }) => ({ result: text.toUpperCase() }));
registerTool('reverse', async ({ text }) => ({ result: text.split('').reverse().join('') }));
registerTool('lowercase', async ({ text }) => ({ result: text.toLowerCase() }));

app.listen(port, () => {
  console.log(`MCP Server running at http://localhost:${port}`);
});
