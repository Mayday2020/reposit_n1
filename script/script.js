//'use strict';

alert('... пешеходы по лужам, а вода по асфальту рекой.');
console.log('Пусть бегут неуклюже...');

let money = 30000;
let income = 'Премия';
let addExpenses = 'Подарки, Интернет, Угощения';
let deposit = true;
let mission = 300000;
let period = 6;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('addExpenses: ', addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');


console.log(addExpenses.split(', '));



money = prompt('Ваш месячный доход?');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов');

let amount1 = prompt('Во сколько обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов');

let amount2 = prompt('Во сколько обойдется?');


budgetMonth = money - (Number(amount1) + Number(amount2));
console.log('Буджет на месяц: ' + budgetMonth);

console.log('Цель будет достигнута за: ' + Math.ceil(mission / budgetMonth) + ' месяцев.');

let budgetDay = budgetMonth / 30; // Заработок в сутки с учетом расходов

console.log('Бюджет на день: ' + Math.round(budgetDay));
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
}   else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
}   else if (budgetDay < 600) {
        if (budgetDay <= 0) {
            console.log('Что то пошло не так');
        } else {console.log('К сожалению у вас уровень дохода ниже среднего');}
        
}   
