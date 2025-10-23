const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome']
const job = args['profissao']
console.log(nome, job);

console.log(`Olá, o nome dele é ${nome} e a profissão dele é ${job}`)