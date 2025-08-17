export class Client {
  constructor(config) {
    this._clientInfo = config;
    this._requestMessageId = 0;
  }

  async callTool(toolName, input) {
    // Simulated tool logic
    switch (toolName) {
      case 'uppercase':
        return { result: input.text.toUpperCase() };
      case 'lowercase':
        return { result: input.text.toLowerCase() };
      case 'reverse':
        return { result: input.text.split('').reverse().join('') };
      default:
        throw new Error(`Tool not found: ${toolName}`);
    }
  }
}
