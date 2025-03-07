import Chocotone from "../model/Chocotone.js"

describe("Teste da Classe Chocotone", ()=>{
    test("Testando o cálculo do volume do chocotonos", ()=>{

        const raio = 2
        const altura = 3
        const volumeEsperado = Math.PI * raio * raio * altura // 37,6991124 ou 37,70

        const cilindro = new Cilindro(raio,altura)

        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Testando o cálculo da área total do chocotonos", ()=>{
        
        const raio = 2
        const altura = 3
        const areaTotalEsperada = (2 * Math.PI * raio * altura) + (2 * Math.PI * (raio * raio))  // 62,831854 ou 62,83

        const chocotone = new Chocotone(raio,altura)

        expect(chocotone.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })
})

