// This script creates the trace files AWS Amplify expects
const fs = require('fs');
const path = require('path');

// Create a .next/trace directory and a placeholder file within it
const traceDir = path.join(process.cwd(), '.next', 'trace');

if (!fs.existsSync(traceDir)) {
  try {
    fs.mkdirSync(traceDir, { recursive: true });
    console.log('Created trace directory at', traceDir);
  } catch (err) {
    console.error('Error creating trace directory:', err.message);
  }
}

// Create an empty file named .trace in the trace directory
const traceFile = path.join(traceDir, '.trace');
try {
  fs.writeFileSync(traceFile, '');
  console.log('Created empty trace file at', traceFile);
} catch (err) {
  console.error('Error creating trace file:', err.message);
}

// For Amplify, duplicate the trace directory at the root as well
const rootTraceDir = path.join(process.cwd(), 'trace');
if (!fs.existsSync(rootTraceDir)) {
  try {
    fs.mkdirSync(rootTraceDir, { recursive: true });
    console.log('Created root trace directory at', rootTraceDir);
  } catch (err) {
    console.error('Error creating root trace directory:', err.message);
  }
}

const rootTraceFile = path.join(rootTraceDir, '.trace');
try {
  fs.writeFileSync(rootTraceFile, '');
  console.log('Created empty root trace file at', rootTraceFile);
} catch (err) {
  console.error('Error creating root trace file:', err.message);
}

console.log('Trace files setup completed successfully!');
