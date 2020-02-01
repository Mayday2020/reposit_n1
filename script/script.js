//'use strict';

        //  Проверка на тип данных

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

        //  Доход в месяц 
let money;
let start = function() {
    do {
        money = parseFloat(prompt('Ваш месячный доход?'));
    }
    while (!isNumber(money));
    return money; 
};
start();

        // Основные переменные

let appData = {
    income: {},         // Подработка
    addIncome: [],      // Доп. доходы
    expenses: {},       // Доп. расходы
    addExpenses: [],    // Возможные расходы
    deposit: false,     // Депозит
    mission: 300000,    // Цель
    period: 6,          // Срок
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
            'Бензин, связь, квартплата');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};

        // Возвращает сумму всех обязательных расходов за месяц

let expenses = [];

const getExpensesMonth = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов', 'Бензин');
        sum += +prompt('Во сколько это обойдется?');
        if (!isNumber(sum)){
            sum += +prompt('Во сколько это обойдется?');
        }
    }
    console.log(expenses);
    console.log('sum: ', sum);
    return sum;  
};

let expensesAmount = getExpensesMonth();
console.log('expensesAmount: ', expensesAmount);

        // Накопления за месяц (доход - расход)

const getAccumulatedMonth = function() {
    return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

        //  Срок достижение цели

const getTargetMonth = function(){
    return Math.ceil(appData.mission / accumulatedMonth);
};

getTargetMonth();

if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за: ' + Math.ceil(getTargetMonth()) + ' месяцев.');
}

        // Заработок в сутки с учетом расходов

let budgetDay = accumulatedMonth / 30; 
console.log('Бюджет на день: ' + Math.round(budgetDay));

        //Сообщение об уровне заработка

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    }   else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
        }   else if (budgetDay < 600) {
            if (budgetDay <= 0) {
                return ('Что то пошло не так');
            } else {
                return ('К сожалению у вас уровень дохода ниже среднего');
            }      
            } 
};
console.log(getStatusIncome());

  

