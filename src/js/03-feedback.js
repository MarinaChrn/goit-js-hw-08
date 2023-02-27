import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

let inform = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = formEl.elements;
reloadPage();

function onInput(e) {
  inform = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(inform));
}

function reloadPage() {
  email.value = inform.email || '';
  message.value = inform.message || '';
}

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  inform = {};
}