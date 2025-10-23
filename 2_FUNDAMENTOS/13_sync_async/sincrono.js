const fs = require('fs');

console.log('Inicio');

fs.writeFileSync('arquivo.txt', 'Olá Mundo!');

console.log('Arquivo criado com sucesso!');

console.log('Fim');