const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');


form.addEventListener('input', saveFeedbackInLocal);

function saveFeedbackInLocal(event) {
    const {
        elements: { email, message }
    } = event.currentTarget;
    localStorage.setItem('feedback-form-state',
        JSON.stringify({ email: email.value, message: message.value }));
}

const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFeedback) {
    const inputValue = savedFeedback.email;
    const textAreaValue = savedFeedback.message;
    input.value = inputValue; 
    textArea.value = textAreaValue;
}

