import Ingredientes, { arredondar } from "../model/Ingredientes.js";

describe("Testes da classe Ingredientes", () => {

    test("Deve calcular os ingredientes corretamente", () => {
        const ingredientes = new Ingredientes(440, 1);
        ingredientes.calcularIng();

        expect(ingredientes.fermentoBioSeco).toBeCloseTo(5);
        expect(ingredientes.farinhaDeTrigo).toBeCloseTo(250);
        expect(ingredientes.leiteMorno).toBeCloseTo(60);
        expect(ingredientes.ovos).toBe(2);
        expect(ingredientes.manteigaSemSal).toBeCloseTo(50);
        expect(ingredientes.acucar).toBeCloseTo(70);
        expect(ingredientes.essenciaBaun).toBeCloseTo(5);
        expect(ingredientes.chocoMeioAmargo).toBeCloseTo(100);
        expect(ingredientes.sal).toBeCloseTo(2);
    });

    test("Deve calcular o preço total corretamente", () => {
        const ingredientes = new Ingredientes(440, 1);
        ingredientes.calcularIng();
        const preco = ingredientes.calcularPreco();
        
        expect(preco).toBeCloseTo(
            (5 * 0.0744) + (250 * 0.00397) + (60 * 0.00477) + (2 * 0.7997) + 
            (50 * 0.0675) + (70 * 0.00485) + (5 * 0.397) + (100 * 0.0298) + (2 * 0.00269)
        );
    });
});