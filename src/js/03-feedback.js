// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message, в которых 
// сохраняй текущие значения полей формы. Пусть ключом для хранилища 
// будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, 
// и если там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, 
// а также выводи объект с полями email, message и текущими их значениями 
// в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз 
// в 500 миллисекунд. Для этого добавь в проект и используй библиотеку 
// lodash.throttle.

// const formEl = document.querySelector('.feedback-form');
// console.log(formEl);
// const inputEl = formEl.querySelector('input');
// const textAreaEl = formEl.querySelector('textarea');
// console.log(formEl);
// formEl.addEventListener('input', function() {
//     console.log(inputEl.currentTarget.value);
//     // const inform = {
        
//     // }
// });