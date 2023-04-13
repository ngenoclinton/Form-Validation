 // Get form and input elements
 const form = document.getElementById('registrationForm');
 const emailInput = document.getElementById('email');
 const phoneInput = document.getElementById('phone');
 const countryInput = document.getElementById('country');
 const zipInput = document.getElementById('zip');
 const passwordInput = document.getElementById('password');
 const passwordConfirmationInput = document.getElementById('passwordConfirmation');

 const phone = emailInput.value.trim();

 // Add event listeners for form submission
 form.addEventListener('submit', (event) => {

   // Perform validation before submitting the form
   if (!validateEmail() || !validateCountry() || !validateZip() || !validatePassword() || !validatePasswordConfirmation()) {
     event.preventDefault(); // Prevent form submission
   }
   
 });

 // Email validation
 function validateEmail() {
   const email = emailInput.value.trim();
   const emailError = document.getElementById('emailError');
   if (email === '') {
     emailError.textContent = 'Email is required.';
     emailInput.classList.add("error-border");
     return false;
   } else if (email !== '') {
     emailError.textContent = '';
     emailInput.classList.remove("error-border");
     return true;
   }
 }
 // phone validation
 function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneError = document.getElementById('phoneError');
    if (phone === '') {
      phoneError.textContent = 'phone number is required.';
      phoneInput.classList.add("error-border");
      return false;
    }else if (!phone.match(
        /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
      )
    ) {
      phoneError.textContent = "Phone number needs to be exactly 10 numbers";
      return false;
    }else if (phone.match(
        /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
      )
    ) {
      phoneError.textContent = "";
      return true;
    } else{
      phoneError.textContent = '';
      return true;
    }
  }
 // Country validation
 function validateCountry() {
   const country = countryInput.value.trim();
   const countryError = document.getElementById('countryError');
   if (country === '') {
     countryError.textContent = 'Country is required.';
     countryInput.classList.add("error-border");
     return false;
   }  else {
     countryError.textContent = '';
     countryInput.classList.remove("error-border");
     return true;
   }
 }
 // Zip validation
 function validateZip() {
    const zip = zipInput.value.trim();
    const zipError = document.getElementById('zipError');
    if (zip === '') {
      zipError.textContent = 'Zip Code is required.';
      zipInput.classList.add("error-border");
      return false;
    } else {
      zipError.textContent = '';
      zipInput.classList.remove("error-border");
      return true;
    }
  }

  // Password validation
  function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
      passwordError.textContent = 'Password is required.';
      passwordInput.classList.add("error-border");
      return false;
    } else {
      passwordError.textContent = '';
      passwordInput.classList.remove("error-border");
      return true;
    }
  }

  // Password Confirmation validation
  function validatePasswordConfirmation() {
    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;
    const passwordConfirmationError = document.getElementById('passwordConfirmationError');
    if (passwordConfirmation === '') {
      passwordConfirmationError.textContent = 'Password Confirmation is required.';
      passwordConfirmationInput.classList.add("error-border");
      return false;
    } else if (password !== passwordConfirmation) {
      passwordConfirmationError.textContent = 'Password Confirmation does not match.';
      passwordConfirmationInput.classList.add('error');
      return false;
    } else {
      passwordConfirmationError.textContent = '';
      passwordConfirmationInput.classList.remove('error');
      return true;
    }
  }

  // Add event listeners for input field changes
  emailInput.addEventListener('input', validateEmail);
  phoneInput.addEventListener('input', validatePhone);
  countryInput.addEventListener('change', validateCountry);
  zipInput.addEventListener('input', validateZip);
  passwordInput.addEventListener('input', validatePassword);
  passwordConfirmationInput.addEventListener('input', validatePasswordConfirmation);