function arredondar(valor) {
    let arredondado = Math.round(valor);

    if (arredondado === 0) {
        return 1;
    }

    return arredondado;
}

export default class Ingredientes{
    constructor(tamanho,quantidade){
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
    calcularPreco(){
        this.precoTotal = (this.fermentoBioSeco * 0.0744 ) + (this.farinhaDeTrigo *0.00397) + (this.leiteMorno * 0.00477) + (this.ovos * 0.7997) + (this.manteigaSemSal * 0.0675) + (this.acucar * 0.00485) + (this.essenciaBaun * 0.397) + (this.chocoMeioAmargo * 0.0298) + (this.sal * 0.00269)
        return this
    }
}

