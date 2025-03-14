import Ingredientes from "./model/Ingredientes.js"

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const form = document.querySelector(".needs-validation");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Evita o envio para processar os dados
            
            const quantidade = parseInt(document.getElementById("quantidade").value);
            const peso = parseInt(document.getElementById("peso").value);
            const raio = parseFloat(document.getElementById("raio").value);
            const altura = parseFloat(document.getElementById("altura").value);
            
            const formIsValid = validateDatePanetone(peso, raio, altura)

            if(formIsValid) return

            const panetone = new Ingredientes(peso, quantidade)
            const lstaDeIngrediente = panetone.calcularIng()
            const preço = panetone.calcularPreco()

            console.log(lstaDeIngrediente)
            loadScreenItens(lstaDeIngrediente, peso)
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

    function calcularDimensoes(massa) {
        const densidade = 0.65; // g/cm³ (valor médio realista)
        const volume = massa / densidade; // Volume em cm³

        let raio, altura;
        
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

    function resetarValidacao() {
        raioInput.classList.remove("is-invalid", "is-valid");
        alturaInput.classList.remove("is-invalid", "is-valid");
        retorno.textContent = "";
        retorno.style.color = "";
        form.classList.remove("was-validated");
    }

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

        inputRaio.classList.add("is-invalid");
        inputAltura.classList.add("is-invalid");

        return true;
    }

    retorno.textContent = "Cálculo concluído com sucesso!";
    retorno.style.color = "green";

    inputRaio.classList.remove("is-invalid");
    inputRaio.classList.add("is-valid");

    inputAltura.classList.remove("is-invalid");
    inputAltura.classList.add("is-valid");

    return false;
}

function loadScreenItens(ingredientes, massa) {
    const id_ingredientes = document.getElementById('qtd-ingredientes');
    
    id_ingredientes.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('styled-table');

    const div_volume = document.getElementById("volume")
    const densidade = 0.65; // g/cm³ (valor médio realista)
    const volume = massa / densidade; // Volume em cm³
    div_volume.innerHTML = volume
    
    const header = document.createElement('tr');
    header.innerHTML = '<th>Nome</th><th>Quantidade</th>';
    table.appendChild(header);

    Object.entries(ingredientes).forEach(([nome, qtd]) => {
        if (['precoTotal', 'quantidade', 'tamanho'].includes(nome)) return;

        const unidade = nome === 'ovos' ? 'unid.' : 'g';
        const valorFormatado = Number.isInteger(qtd) ? qtd : qtd.toFixed(2);

        const row = document.createElement('tr');
        row.innerHTML = `<td>${formatIngredientName(nome)}</td><td>${valorFormatado} ${unidade}</td>`;
        table.appendChild(row);
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>R$ ${ingredientes.precoTotal.toFixed(2)}</strong></td>`;
    totalRow.classList.add('total-row');
    table.appendChild(totalRow);

    id_ingredientes.appendChild(table);
}

function formatIngredientName(name) {
    return name
        .replace(/([A-Z])/g, ' $1') 
        .replace(/^./, str => str.toUpperCase()) 
        .trim();
}
