let x = 10;

try{
    x = 20
    console.log(x);
} catch (err) {
    console.log(`Erro: ${err}`)
}