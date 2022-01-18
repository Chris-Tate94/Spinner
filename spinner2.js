const spinner = "|\r/\r-\r\\\r|\r|\r/\r-\r\\\r done \n";
let delay = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);
// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 200);
// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 300);
// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 400);
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 500);
// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 600);
// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 700);
// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 800);
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);
