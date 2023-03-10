import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const input = document.querySelector('input');
// const textArea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(saveFeedbackInLocal, 500));
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    console.log('Відправляємо форму');
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    delete formData.email;
    delete formData.message;
    
    
}
function saveFeedbackInLocal(event) {
    if (savedFeedback) {
        savedFeedback[event.target.name] = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedback));
        return;
    }
    formData[event.target.name] = event.target.value;   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedFeedback) {    
    form[0].value = savedFeedback.email; 
    form[1].value = savedFeedback.message;
}

