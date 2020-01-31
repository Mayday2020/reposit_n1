//'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'Фриланс',
    addExpenses = ' ',
    deposit = true,
    mission = 300000,
    period = 6;

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, связь, квартплата');
     
console.log('addExpenses: ', addExpenses.length);
deposit = confirm('Есть ли у вас депозит в банке?');

        // Выводит в консоль тип переменных

const showTypeOf = function(data) {
    console.log(data, typeof(data));
};
let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));



    /*money = prompt('Ваш месячный доход?');
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }*/
};
start();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(','));

        // Возвращает сумму всех обязательных расходов за месяц

let expenses = [];

const getExpensesMonth = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов', 'Бензин');
        sum += +prompt('Во сколько это обойдется?', 2500);

    }
    console.log(expenses);
    return sum;
};
let expensesAmount = getExpensesMonth();

        // Возврат накоплений за месяц (доход - расход)

const getAccumulatedMonth = function() {
    return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

        //  Срок достижение цели

const getTargetMonth = function(e, f){
    return e / f;
};
getTargetMonth(mission, accumulatedMonth);
console.log('Цель будет достигнута за: ' + Math.ceil(mission / accumulatedMonth) + ' месяцев.');

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
            } else {return ('К сожалению у вас уровень дохода ниже среднего');
        }
            
    } 
};
console.log(getStatusIncome());

  

