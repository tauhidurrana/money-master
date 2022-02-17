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

function updateExpense(){
    const foodInput = document.getElementById('food-expense').value;
    const rentInput = document.getElementById('rent-expense').value;
    const clothInput = document.getElementById('cloth-expense').value;
    const totalExpenseCalculation = 
    parseFloat(foodInput) +
    parseFloat(rentInput) +
    parseFloat(clothInput);
    const total = document.getElementById('total-expense');
    total.innerText = totalExpenseCalculation;

}