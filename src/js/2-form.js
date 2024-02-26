document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
  
    feedbackForm.addEventListener('input', (event) => {
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim()
      };
  
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
  
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
      feedbackForm.elements.email.value = savedFormData.email;
      feedbackForm.elements.message.value = savedFormData.message;
    }
  
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim()
      };
  
      if (formData.email && formData.message) {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        feedbackForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  