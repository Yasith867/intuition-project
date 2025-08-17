import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const results = [];

console.log("Enter strings to process (type 'DONE' to finish):");

rl.on('line', (line) => {
  if (line.trim().toUpperCase() === 'DONE') {
    console.log("\nBatch processing complete. Results:");
    let output = '';

    results.forEach(r => {
      const resultText = `Input: ${r.input}\nUppercase: ${r.upper}\nLowercase: ${r.lower}\nReversed: ${r.reversed}\n`;
      console.log(resultText);
      output += resultText + '\n';
    });

    // Save results to results.txt
    fs.writeFileSync('results.txt', output);
    console.log('Results saved to results.txt');

    rl.close();
    return;
  }

  const input = line.trim();
  const upper = input.toUpperCase();
  const lower = input.toLowerCase();
  const reversed = input.split('').reverse().join('');

  results.push({ input, upper, lower, reversed });
});
