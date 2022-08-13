let grossIncome = document.getElementById("income");
let incomeTax = document.getElementById('tax');

function taxCalculate() {

    if (grossIncome.value < 0 && grossIncome.value < 18800) { // Bracket #1 - No income tax owed.
        tax = 0 * grossIncome.value;
    } else if (grossIncome.value >= 18800 && grossIncome.value < 443200) { // Bracket #2 - 31% income taxes owed.
        tax = 0.31 * grossIncome.value;
    } else if (grossIncome.value >= 443200 && grossIncome.value < 638800) { // Bracket #3 - 31% income taxes owed and an additional 20% taxes on the surplus.
        tax = (0.31 * grossIncome.value) + (0.69 * grossIncome.value) * 0.2;
    } else if (grossIncome.value >= 638800) { // Bracket #2 - 31% income taxes owed and an additional 25% taxes on the surplus.
        tax = (0.31 * grossIncome.value) + (0.69 * grossIncome.value) * 0.25;
    }

}