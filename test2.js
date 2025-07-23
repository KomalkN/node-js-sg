function runUserCode(userInput) {
  // This will trigger a CodeQL medium-severity alert for insecure use of eval
  eval(userInput);
}
