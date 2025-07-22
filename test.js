const http = require('http');
const { execFile } = require('child_process');

http.createServer(function (req, res) {
  const userInput = req.url.slice(1); // simulate user input from URL
  const safeInput = userInput.match(/^[\w\-]+$/) ? userInput : null;
  if (safeInput) {
    execFile(safeInput, [], (error, stdout, stderr) => {
      if (error) {
        res.write(`Error: ${error.message}`);
      } else {
        res.write(stdout);
      }
      res.end();
    });
  } else {
    res.write("Invalid input");
    res.end();
  }
}).listen(8080);
