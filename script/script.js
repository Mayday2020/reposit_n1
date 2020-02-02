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

        // Объект

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
            for (let i = 0; i < 2; i++){
                let question1 = prompt('Введите обязательную статью расходов');
                let question2 = +prompt('Во сколько это обойдется?');
                
                if (isNumber(question2) && question2 > 0){
                    appData.expenses[question1] = question2;
                } else {
                    i--;
                }
            }
    },
    budget: money,                          // Доход в месяц
    budgetDay: 0,                           // Доход - расход в день
    budgetMonth: 0,                         // Доход - расход в месяц
    expensesMonth: 0,                       // Расход в месяц   

    getExpensesMonth: function(){           // Все обяз. расходы в месяц
        
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function(){                  // Накопления за месяц
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.round(appData.budgetMonth / 30); 
    },
    getTargetMonth: function() {
        let sun = Math.ceil(appData.mission / appData.budgetMonth);
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
        // Опрос
appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);

        // Накопления за месяц (доход - расход)
appData.getBudget();

        //  Срок достижение цели
appData.getTargetMonth();

        // Заработок в сутки с учетом расходов
appData.getStatusIncome();
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ' );
for (let key in appData) {
    console.log(key + appData[key]);
}

