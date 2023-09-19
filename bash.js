const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (cmd.startsWith("echo ")) {
    const args = cmd.split(" ");
    args.shift();
    commands.echo(args);
  } else if (cmd.startsWith("cat")) {
    const args = cmd.split(" ");
    args.shift();
    commands.cat(args);
  }
});
