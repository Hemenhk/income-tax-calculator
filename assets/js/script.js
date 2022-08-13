let grossIncome = document.getElementById("income");
let incomeTax = document.getElementById('tax');

function taxCalculate() {

    if (grossIncome.value < 0 && grossIncome.value < 18800) { // Bracket #1 - No income tax owed.
        tax = 0 * grossIncome.value;
    }

}