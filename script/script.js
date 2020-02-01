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
            
    },
    budget: money,      // Доход в месяц
    budgetDay: 0,       // Доход - расход в день
    budgetMonth: 0,     // Доход - расход в месяц
    expensesMonth: 0,   // Расход в месяц                      +++++
    getExpensesMonth: function(){           // Все обяз. расходы в месяц
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
    },
    getAccumulatedMonth: function(){        // Накопления за месяц
        return money - expensesAmount;
    },
    getTargetMonth: function() {
        let sun = Math.ceil(appData.mission / accumulatedMonth);
        if (sun < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за: ' + sun + ' месяцев.');
        }
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        }   else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
                return ('У вас средний уровень дохода');
        }   else if (appData.budgetDay < 600) {
                    if (appData.budgetDay <= 0) {
                        return ('Что то пошло не так');
                    } else {
                        return ('К сожалению у вас уровень дохода ниже среднего');
                    }      
        } 
    }
};

appData.asking();

        // Возвращает сумму всех обязательных расходов за месяц

let expenses = [];

let expensesAmount = appData.getExpensesMonth();
console.log('expensesAmount: ', expensesAmount);

        // Накопления за месяц (доход - расход)

let accumulatedMonth = appData.getAccumulatedMonth();

        //  Срок достижение цели

appData.getTargetMonth();

        // Заработок в сутки с учетом расходов

appData.budgetDay = accumulatedMonth / 30; 
console.log('Бюджет на день: ' + Math.round(appData.budgetDay));

        //Сообщение об уровне заработка

console.log(appData.getStatusIncome());

  

