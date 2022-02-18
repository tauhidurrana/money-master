document.getElementById('calculate-expense').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('save-button').addEventListener('click',function(){
    updateSaving();
})

function updateExpense(){
    // Total Expense Calculation
    const foodInput = document.getElementById('food-expense').value;
    const rentInput = document.getElementById('rent-expense').value;
    const clothInput = document.getElementById('cloth-expense').value;

    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    // validation
    if (isNaN(incomeInputText) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput)) {
        alert('Please insert positive numbers!');
        return;
    }

    if (incomeInputText < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0) {
        alert('Wrong Input');
        return;
    }

    if (incomeInputText == '' || foodInput == '' || rentInput == '' || clothInput == '') {
        alert('Wrong Input');
        return;
    }

    const ExpenseCalculation = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalExpense = parseFloat(ExpenseCalculation);

    let balance = incomeInput - totalExpense;

    const total = document.getElementById('total-expense');
    total.innerText = ExpenseCalculation;

    // income & balance display
    const balanceTotal = document.getElementById('balance-total')
    balanceTotal.innerText = balance;

}

function updateSaving() {
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    // percent value calculation
    const percentInputText = document.getElementById('percent-value').value;
    // validation 
    if (percentInputText == '' || percentInputText < 0 || isNaN(percentInputText)) {
        alert('Please enter valid number');
        return;
    }
    let percentInput = parseFloat(percentInputText);
    const savingAmount = (incomeInput/100) * percentInput;
    const savingAmountOutput =  document.getElementById('saving-value');
    savingAmountOutput.innerText = savingAmount;

    // Remaining Balance
    const balanceText = document.getElementById('balance-total').innerText;
    const balance = parseFloat(balanceText);

    const remainingBalance = balance - savingAmount;
    const remaingBalanceOutput = document.getElementById('remaining-value');

    remaingBalanceOutput.innerText = remainingBalance;
}