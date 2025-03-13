import Ingredientes from "./model/Ingredientes.js"

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Seleciona o formulário
    const form = document.querySelector(".needs-validation");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Evita o envio para processar os dados
            
            
            // Capturar os valores dos inputs
            const quantidade = parseInt(document.getElementById("quantidade").value);
            const peso = parseInt(document.getElementById("peso").value);
            const raio = parseFloat(document.getElementById("raio").value);
            const altura = parseFloat(document.getElementById("altura").value);
            
            const formIsValid = validateDatePanetone(peso, raio, altura)

            if(formIsValid) return

            const panetone = new Ingredientes(peso, quantidade)
            const lstaDeIngrediente = panetone.calcularIng()

            const id_ingredientes = document.getElementById('qtd-ingredientes')
            console.log(lstaDeIngrediente)
            id_ingredientes.innerHTML = "oi"
        }

        form.classList.add("was-validated");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const pesoSelect = document.getElementById("peso");
    const quantidadeInput = document.getElementById("quantidade");
    const raioInput = document.getElementById("raio");
    const alturaInput = document.getElementById("altura");
    const retorno = document.getElementById("retorno");
    const form = document.querySelector(".needs-validation");

    // Função para calcular raio e altura com base no peso da massa
    function calcularDimensoes(massa) {
        const densidade = 0.65; // g/cm³ (valor médio realista)
        const volume = massa / densidade; // Volume em cm³

        let raio, altura;
        
        // Definindo valores aproximados baseados em medidas reais de chocotones
        if (massa == 180) {
            raio = 5; // cm
            altura = volume / (Math.PI * Math.pow(raio, 2));
        } else if (massa == 440) {
            raio = 7; // cm
            altura = volume / (Math.PI * Math.pow(raio, 2));
        } else if (massa == 700) {
            raio = 9; // cm
            altura = volume / (Math.PI * Math.pow(raio, 2));
        }

        return { raio: raio.toFixed(2), altura: altura.toFixed(2) };
    }

    // Função para resetar os campos de validação do Bootstrap
    function resetarValidacao() {
        raioInput.classList.remove("is-invalid", "is-valid");
        alturaInput.classList.remove("is-invalid", "is-valid");
        retorno.textContent = "";
        retorno.style.color = "";
        form.classList.remove("was-validated");
    }

    // Evento para preencher automaticamente os valores de raio e altura ao alterar o peso
    pesoSelect.addEventListener("change", function () {
        resetarValidacao(); // Reseta validação ao alterar peso
        const massa = parseInt(pesoSelect.value);

        if (!isNaN(massa)) {
            const { raio, altura } = calcularDimensoes(massa);
            raioInput.value = raio;
            alturaInput.value = altura;
        } else {
            raioInput.value = "";
            alturaInput.value = "";
        }
    });

    // Evento para resetar validação ao alterar a quantidade de panetones
    quantidadeInput.addEventListener("input", function () {
        resetarValidacao();
    });
});



function validateDatePanetone(massa, raio, altura) {
    const retorno = document.getElementById("retorno");
    const inputRaio = document.getElementById("raio");
    const inputAltura = document.getElementById("altura");

    const volume = Math.PI * Math.pow(raio, 2) * altura;
    const densidade = massa / volume;

    if (densidade <= 0.6 || densidade >= 0.8) {
        retorno.textContent = "Os valores de altura e raio não são válidos.";
        retorno.style.color = "red";

        // Adiciona classes do Bootstrap para erro
        inputRaio.classList.add("is-invalid");
        inputAltura.classList.add("is-invalid");

        return true;
    }

    retorno.textContent = "Cálculo concluído com sucesso!";
    retorno.style.color = "green";

    // Remove erro e adiciona classe de sucesso
    inputRaio.classList.remove("is-invalid");
    inputRaio.classList.add("is-valid");

    inputAltura.classList.remove("is-invalid");
    inputAltura.classList.add("is-valid");

    return false;
}

function arredondar(valor) {
    let arredondado = Math.round(valor);

    if (arredondado === 0) {
        return 1;
    }

    return arredondado;
}