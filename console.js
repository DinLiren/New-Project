console.log(hello world)

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",

  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m"
};

const log = (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  switch (level) {
    case 'info':
      console.log(`${colors.FgCyan}[INFO] ${timestamp}: ${message}${colors.Reset}`);
      break;
    case 'warn':
      console.warn(`${colors.FgYellow}[WARN] ${timestamp}: ${message}${colors.Reset}`);
      break;
    case 'error':
      console.error(`${colors.FgRed}[ERROR] ${timestamp}: ${message}${colors.Reset}`);
      break;
    default:
      console.log(`${colors.FgWhite}[LOG] ${timestamp}: ${message}${colors.Reset}`);
      break;
  }
};

const info = (message) => log(message, 'info');
const warn = (message) => log(message, 'warn');
const error = (message) => log(message, 'error');

module.exports = {
  log,
  info,
  warn,
  error
};
