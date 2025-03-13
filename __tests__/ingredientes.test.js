import Ingredientes from "../model/Ingredientes.js"

describe("Teste da Classe Ingredientes", ()=>{
    test("Testando o preço total do chocotonos tamanho grandão: ", ()=>{

        const tamanho = 700
        const quantidade = 500

        const fermentoBioSeco =  ((5 * tamanho) / 440) * quantidade.toFixed(2);
        const farinhaDeTrigo = ((250 * tamanho) / 440) * quantidade.toFixed(2);
        const leiteMorno =  Math.round(((60 * tamanho) / 440) * quantidade);
        const ovos = arredondar(((2 * tamanho) / 440) * quantidade);
        const manteigaSemSal =  ((50 * tamanho) / 440) * quantidade.toFixed(2);
        const acucar =  ((70 * tamanho) / 440) * quantidade.toFixed(2);
        const essenciaBaun =  Math.round(((5 * tamanho) / 440) * quantidade);
        const chocoMeioAmargo =  ((100 * tamanho) / 440) * quantidade.toFixed(2);
        const sal =  ((2 * tamanho) / 440) * quantidade.toFixed(2);

        const ingredientes = new Ingredientes(fermentoBioSeco, farinhaDeTrigo, leiteMorno, ovos, manteigaSemSal, acucar, essenciaBaun, chocoMeioAmargo, sal)

        expect(ingredientes.calcularIng()).toBeCloseTo(2)
    })
    test("Testando o preço total do chocotonos tamanho médio: ", ()=>{

        const tamanho = 440
        const quantidade = 1200

        const fermentoBioSeco =  ((5 * tamanho) / 440) * quantidade.toFixed(2);
        const farinhaDeTrigo = ((250 * tamanho) / 440) * quantidade.toFixed(2);
        const leiteMorno =  Math.round(((60 * tamanho) / 440) * quantidade);
        const ovos = arredondar(((2 * tamanho) / 440) * quantidade);
        const manteigaSemSal =  ((50 * tamanho) / 440) * quantidade.toFixed(2);
        const acucar =  ((70 * tamanho) / 440) * quantidade.toFixed(2);
        const essenciaBaun =  Math.round(((5 * tamanho) / 440) * quantidade);
        const chocoMeioAmargo =  ((100 * tamanho) / 440) * quantidade.toFixed(2);
        const sal =  ((2 * tamanho) / 440) * quantidade.toFixed(2);

        const ingredientes = new Ingredientes(fermentoBioSeco, farinhaDeTrigo, leiteMorno, ovos, manteigaSemSal, acucar, essenciaBaun, chocoMeioAmargo, sal)

        expect(ingredientes.calcularIng()).toBeCloseTo(2)
    })
    test("Testando o preço total do chocotonos tamanho pequeno: ", ()=>{

        const tamanho = 180
        const quantidade = 240

        const fermentoBioSeco =  ((5 * tamanho) / 440) * quantidade.toFixed(2);
        const farinhaDeTrigo = ((250 * tamanho) / 440) * quantidade.toFixed(2);
        const leiteMorno =  Math.round(((60 * tamanho) / 440) * quantidade);
        const ovos = arredondar(((2 * tamanho) / 440) * quantidade);
        const manteigaSemSal =  ((50 * tamanho) / 440) * quantidade.toFixed(2);
        const acucar =  ((70 * tamanho) / 440) * quantidade.toFixed(2);
        const essenciaBaun =  Math.round(((5 * tamanho) / 440) * quantidade);
        const chocoMeioAmargo =  ((100 * tamanho) / 440) * quantidade.toFixed(2);
        const sal =  ((2 * tamanho) / 440) * quantidade.toFixed(2);

        const ingredientes = new Ingredientes(fermentoBioSeco, farinhaDeTrigo, leiteMorno, ovos, manteigaSemSal, acucar, essenciaBaun, chocoMeioAmargo, sal)

        expect(ingredientes.calcularIng()).toBeCloseTo(2)
    })

})

