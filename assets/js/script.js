let grossIncome = document.getElementById("income");
let incomeTax = document.getElementById('tax');


/**
 * This function calculates the Swedish annual income tax in SEK.
 * The if statement contains four different calculations depending on
 * which tax bracket the user fall into, depending on their salary.   
 */
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

    incomeTax.value = Math.round(tax * 100) / 100;
}

// Event listener for entering the income in the input field.
grossIncome.addEventListener('input', taxCalculate);