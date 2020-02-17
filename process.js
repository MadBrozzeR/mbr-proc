const ARGS_RE = /^--([\w-]+)(?:=(.+))?$/;

function Process(process) {
  this.process = process;
}

Process.prototype.getArgumentOptions = function (defaultOptions, skip = 0) {
  const options = {};
  defaultOptions && Object.assign(options, defaultOptions);

  let regMatch;
  for (let index = 2 + skip ; index < this.process.argv.length ; ++index) {
    if (regMatch = ARGS_RE.exec(this.process.argv[index])) {
      options[regMatch[1]] = regMatch[2] === undefined ? true : regMatch[2];
    }
  }

  return options;
}

module.exports = Process;
