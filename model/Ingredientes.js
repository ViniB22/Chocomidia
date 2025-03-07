function arredondar(valor) {
    let arredondado = Math.round(valor);

    if (arredondado === 0) {
        return 1;
    }

    return arredondado;
}

export default class Ingredientes{
    constructor(raio,altura,tamanho,quantidade){
      this.raio = raio
      this.altura = altura
      this.tamanho = tamanho
      this.quantidade = quantidade
    }

    calcularIng(){
       this.fermentoBioSeco =  ((5 * this.tamanho) / 440) * this.quantidade.toFixed(2);
       this.farinhaDeTrigo = ((250 * this.tamanho) / 440) * this.quantidade.toFixed(2);
       this.leiteMorno =  Math.round(((60 * this.tamanho) / 440) * this.quantidade);
       this.ovos = arredondar(((2 * this.tamanho) / 440) * this.quantidade);
       this.manteigaSemSal =  ((50 * this.tamanho) / 440) * this.quantidade.toFixed(2);
       this.acucar =  ((70 * this.tamanho) / 440) * this.quantidade.toFixed(2);
       this.essenciaBaun =  Math.round(((5 * this.tamanho) / 440) * this.quantidade);
       this.chocoMeioAmargo =  ((100 * this.tamanho) / 440) * this.quantidade.toFixed(2);
       this.sal =  ((2 * this.tamanho) / 440) * this.quantidade.toFixed(2);
        return this
    

}
}



// //Farinha de trigo:	250
// Fermento biológico seco: 	5
// Leite morno: 	60
// Ovos:	2
// Manteiga sem sal:	50
// Açúcar: 	70
// Essência de baunilha:	5
// Chocolate meio amargo picado ou gotas de chocolate: 	100
// Sal: 	2