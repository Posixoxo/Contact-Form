document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
  
    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Reset all previous errors
        const inputs = form.querySelectorAll('input[type="text"], textarea');
        const radios = form.querySelectorAll('input[type="radio"]');
        const checkbox = form.querySelector('input[type="checkbox"]');
  
        let isValid = true;
  
        // Validate text inputs and textarea
        inputs.forEach(input => {
          if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            isValid = false;
          } else {
            input.style.borderColor = 'hsl(186, 15%, 59%)';
          }
        });
  
        // Validate radio group
        const selectedRadio = form.querySelector('input[type="radio"]:checked');
        if (!selectedRadio) {
          radios.forEach(r => r.parentElement.style.borderColor = 'red');
          isValid = false;
        } else {
          radios.forEach(r => r.parentElement.style.borderColor = 'hsl(186, 15%, 59%)');
        }
  
        // Validate checkbox
        if (!checkbox.checked) {
          checkbox.parentElement.style.color = 'red';
          isValid = false;
        } else {
          checkbox.parentElement.style.color = 'hsl(187, 24%, 22%)';
        }
  
        if (isValid) {
          alert('Form submitted successfully!');
          form.reset();
        } else {
          alert('Please fill out all required fields.');
        }
      });
    });
  });
  