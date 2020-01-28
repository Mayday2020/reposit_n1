//'use strict';

alert('... пешеходы по лужам, а вода по асфальту рекой.');
console.log('Пусть бегут неуклюже...');

let money = 30000,
    income = 'Фриланс',
    addExpenses = ' ',
    deposit = true,
    mission = 300000,
    period = 6;

money = prompt('Ваш месячный доход?', 30000);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, связь, квартплата');
console.log(addExpenses.split(', '));     //+
console.log('addExpenses: ', addExpenses.length);    //+
deposit = confirm('Есть ли у вас депозит в банке?');

        // Выводит в консоль тип переменных

const showTypeOf = function(data) {
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt('Введите обязательную статью расходов', 'Бензин'),
    amount1 = +prompt('Во сколько обойдется?', 2500),
    expenses2 = prompt('Введите обязательную статью расходов', 'Связь'),
    amount2 = +prompt('Во сколько обойдется?', 1300);

        // Возвращает сумму всех обязательных расходов за месяц

const getExpensesMonth = function(a, b) {
    let sum = a + b;
    return sum;
};
console.log(getExpensesMonth(amount1, amount2));

        // Возврат накоплений за месяц (доход - расход)

const getAccumulatedMonth = function(c, d) {
    const sun = c - d;
    return sun;
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

        //  Срок достижение цели

const getTargetMonth = function(e, f){
    return e / f;
}
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
}
console.log(getStatusIncome());

  

