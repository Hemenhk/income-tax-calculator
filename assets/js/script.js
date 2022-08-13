let grossIncome = document.getElementById("income");
let incomeTax = document.getElementById('tax');

function taxCalculate() {

    if (grossIncome.value < 0 && grossIncome.value < 18800) { // Bracket #1 - No income tax owed.
        tax = 0 * grossIncome.value;
    } else if (grossIncome.value >= 18800 && grossIncome.value < 443200) { // Bracket #2 - 31% income taxes owed.
        tax = 0.31 * grossIncome.value;
    }

}