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

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
populateFeedbackForm();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
  console.log({ email: email.value, message: message.value });
  if (localStorage.getItem(LOCAL_KEY)) {
    localStorage.removeItem(LOCAL_KEY);
  }
  e.currentTarget.reset();
}

function onInputData(e) {
  let data = localStorage.getItem(LOCAL_KEY);
  data = data ? JSON.parse(data) : {};
  data[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function populateFeedbackForm() {
  let data = localStorage.getItem(LOCAL_KEY);
  if (!data) return;
  data = JSON.parse(data);
  // Object.entries(data).forEach(([name, value]) => {
  //   form.elements[name].value = value || '';
  // });
  for (const key in data) {
    form.elements[key].value = data[key] || '';
  }
}