var listaan = [];
var listano = [];
qu = 0;
elem = 0;
while (qu == 0){
    elem = parseInt(prompt("Quantidade de elementos no vetor(Digite um valor de 3 até 20): "))
    if (elem < 3 || elem > 20){
        prompt("Digite um valor de 3 até 20!")
    } else{
        qu = 1;
    }
}
while (elem > 0){
    listaan[elem-1] = parseFloat(prompt("Digite o valor do elemento "+elem))
    elem--;
}
document.write("Elementos da lista: [" +listaan+ "]");
listano = listaan;
var k = parseFloat(prompt("Digite o valor do escalar: "))
while (elem < listano.length){
    listano[elem] = listano[elem]*k ;
    elem++
}
document.write(" x "+k+" = ["+listano+"]")