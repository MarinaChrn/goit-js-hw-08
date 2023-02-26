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
// const inputEl = formEl.querySelector('input');
// const textAreaEl = formEl.querySelector('textarea');
// inputEl.value = "5";
// formEl.addEventListener('input', function() {
//     console.log(inputEl.currentTarget.value);
//     // const inform = {
        
//     // }
// });

const LOCAL_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  //      if (refs.input.value === "" || refs.textarea.value === "") {
  //          return alert(`Please fill in all the fields!`);
  //      }
  // or
  // const { email, message } = e.currentTarget.elements;
  // console.log({ email: email.value, message: message.value });
  // or
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function reloadPage() {
  if (formData) {
    let { email, message } = form.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}