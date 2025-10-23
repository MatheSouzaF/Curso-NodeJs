// mais de um valor

const  x = 10
const  y = "Matheus"
const  f = "Sophia"
const  z  = [1,2]

console.log(x, y, z)

// contagem de impressões

console.count(`O valor de x é: ${x}`)
console.count(`O valor de x é: ${x}`)
console.count(`O valor de x é: ${x}`)
console.count(`O valor de x é: ${x}`)


// variavel entre string 

console.log("O nome dele é  %s e o nome dela é %s", y, f)

// limpar o console 

setTimeout(() => {
    console.clear()
}, 2000)