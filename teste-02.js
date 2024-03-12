let anterior = 0;
let atual = 1;
let proximo = 1;

while (anterior < 50) {
    console.log(anterior)
    proximo = atual + anterior
    anterior = atual
    atual = proximo
}