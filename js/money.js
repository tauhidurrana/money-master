document.getElementById('food-expense').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('rent-expense').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('cloth-expense').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('calculate-expense').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('income-input').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('percent-value').addEventListener('click',function(){
    updateExpense()
})

document.getElementById('save-button').addEventListener('click',function(){
    updateExpense()
})

function updateExpense(){
    // Total Expense Calculation
    const foodInput = document.getElementById('food-expense').value;
    const rentInput = document.getElementById('rent-expense').value;
    const clothInput = document.getElementById('cloth-expense').value;
    const ExpenseCalculation = 
    parseFloat(foodInput) +
    parseFloat(rentInput) +
    parseFloat(clothInput);
    const total = document.getElementById('total-expense');
    total.innerText = ExpenseCalculation;
    
    // income & balance calculation
    const incomeInputText = document.getElementById('income-input').value;
    let incomeInput = parseFloat(incomeInputText);
    const totalExpense = parseFloat(ExpenseCalculation);
    
    let balance = incomeInput - totalExpense;
    const balanceTotal = document.getElementById('balance-total')
    
    balanceTotal.innerText = balance;

    // percent value calculation
    const percentInputText = document.getElementById('percent-value').value;
    let percentInput = parseFloat(percentInputText);
    const savingAmount = (incomeInput/100) * percentInput;
    const savingAmountOutput =  document.getElementById('saving-value');
    savingAmountOutput.innerText = savingAmount;

    // Remaining Balance

    const remainingBalance = balance - savingAmount;
    const remaingBalanceOutput = document.getElementById('remaining-value');

    remaingBalanceOutput.innerText = remainingBalance;

    
    
}