let form = document.querySelector('.feedback-form');

let inputText = document.querySelector('#text');
let emptyText = document.querySelector('#emptyText');

let inputEmail = document.querySelector('#email');
let emptyEmail = document.querySelector('#emptyEmail');
let errorEmail = document.querySelector('#errorEmail')

let successButton = document.querySelector('#successButton');

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let hasError = false;

  inputText.classList.remove('feedback-fields__input-red_active');
  emptyText.classList.remove('feedback-fields__input-empty_active');

  inputEmail.classList.remove('feedback-fields__input-red_active');
  emptyEmail.classList.remove('feedback-fields__input-empty_active');
  errorEmail.classList.remove('feedback-fields__input-error_active');

  if(inputText.value === '') {
    inputText.classList.add('feedback-fields__input-red_active');
    emptyText.classList.add('feedback-fields__input-empty_active');
    hasError = true;
  }; 
  
  if(inputEmail.value.trim() === '') {
    inputEmail.classList.add('feedback-fields__input-red_active');
    emptyEmail.classList.add('feedback-fields__input-empty_active');
    hasError = true;
  } else if(!validEmail(inputEmail.value.trim())) {
    errorEmail.classList.add('feedback-fields__input-error_active');
    hasError = true;
  };

  if(!hasError) {
    setTimeout(() => {

      successButton.classList.add('feedback-fields__input-question_success');
    
      inputText.value = '';
      inputEmail.value = '';
      textarea.value = '';
    }, 1000);

    setTimeout(() => {
      successButton.classList.remove('feedback-fields__input-question_success');
    }, 4000);
  };
});