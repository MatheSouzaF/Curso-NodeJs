function a() {
  console.log("Executando a()");
}
function b() {
  console.log("Executando b()");
}
function c() {
  console.log("Executando c()");
  a();
  b();
}

c();
// console.log("1 - Início");

// setTimeout(() => {
//   console.log("2 - Timeout de 1 segundo");
// }, 1000);

// console.log("3 - Fim");


// console.log("1 - Início");

// // Simula leitura de arquivo com setTimeout
// setTimeout(() => {
//   console.log("2 - Leitura de arquivo pronta (simulada)");
// }, 3000);

// // Promise resolve imediatamente
// Promise.resolve().then(() => {
//   console.log("3 - Promise resolvida");
// });

// // setTimeout comum
// setTimeout(() => {
//   console.log("4 - Timeout de 1 segundo");
// }, 1000);

// console.log("5 - Fim do código principal");
