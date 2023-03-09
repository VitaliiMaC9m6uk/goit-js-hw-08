import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

form.addEventListener('input', throttle(saveFeedbackInLocal, 500));
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    console.log('Відправляємо форму');
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
}
function saveFeedbackInLocal(event) {
    const {
        elements: { email, message }
    } = event.currentTarget;
    localStorage.setItem('feedback-form-state',
        JSON.stringify({ email: email.value, message: message.value }));
}

const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {    
    input.value = savedFeedback.email; 
    textArea.value = savedFeedback.message;
}

