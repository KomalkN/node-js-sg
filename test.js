const cp = require('child_process');
cp.exec('ls'); // CodeQL detects this as a command injection sink
