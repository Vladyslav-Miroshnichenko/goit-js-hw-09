const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    feedbackFormEl.reset();
  }
};
feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
