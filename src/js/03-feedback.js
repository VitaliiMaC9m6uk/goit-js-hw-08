import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveFeedbackInLocal, 500));
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    console.log('Відправляємо форму');
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.clear();
}
function saveFeedbackInLocal(event) {
    const {
        elements: { email, message }
    } = event.currentTarget;
    localStorage.setItem(STORAGE_KEY,
        JSON.stringify({ email: email.value, message: message.value }));
}

const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedFeedback) {    
    input.value = savedFeedback.email; 
    textArea.value = savedFeedback.message;
}

