const fs = require("fs");

const comandos = {
  pwd: function () {
    const pwd = process.argv;
    process.stdout.write("Directorio actual: ${pwd}");
  },
  date: function () {
    const date = Date();
    process.stdout.write("Fecha actual: ${date}");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (args) {
    let resutl = "";
    args.forEach((arg) => {
      if (process.env[arg.slice(1)]) {
        resutl += process.env[arg.slice(1)] + " ";
      } else {
        resutl += arg + " ";
      }
    });
    process.stdout.write(resutl + "\n");
    process.stdout.write("prompt > ");
  },
  cat: function (arg) {
    fs.readFile(`./${arg}`, function (err, data) {
      if (!data) throw err;
      process.stdout.write(data + "\n");
      process.stdout.write("prompt > ");
    });
  },
};
module.exports = comandos;
