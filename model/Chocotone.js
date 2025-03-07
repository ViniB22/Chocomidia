export default class Chocotone{
    constructor(raio,altura,tamanho){
        this.raio = raio                                                        
        this.altura = altura
        this.tamanho = tamanho
    }
    calcularVolume(){
        const densidade = 0.7
        let volume = this.tamanho / densidade
        return volume 
    }

}