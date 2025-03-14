export default class Chocotone{
    constructor(raio,altura,tamanho){
        this.raio = raio                                                        
        this.altura = altura
        this.tamanho = tamanho
    }
    calcularVolume(){
        let volume = Math.PI * this.raio * this.raio * this.altura
        return volume 
    }

}