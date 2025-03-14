import Chocotone from "../model/Chocotone.js"

describe("Teste da Classe Chocotone", ()=>{
    test("Testando o cálculo do volume do chocotonos", ()=>{

        const raio = 2
        const altura = 3
        const volumeEsperado = Math.PI * raio * raio * altura 

        const chocotone = new Chocotone(raio,altura)

        expect(chocotone.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})

