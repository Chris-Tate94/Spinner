const spinner = "|\r/\r-\r\\\r|\r|\r/\r-\r\\\r done \n";
let delay = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}
