const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual o seu nome? ", (nome) => {
  if (nome === "Matheus") {
    console.log("Que nome bonito!");
  } else {
    console.log("Seu nome é tão normal!");
  }
  readline.close();
});
