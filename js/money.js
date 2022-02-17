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
    // updateExpense()
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
    const incomeInput = parseFloat(incomeInputText);
    console.log(incomeInput);
    const totalExpense = parseFloat(ExpenseCalculation);
    
    let balance = incomeInput - totalExpense;
    const balanceTotal = document.getElementById('balance-total')
    console.log(balance);
    
    balanceTotal.innerText = balance;
    
    
    
}