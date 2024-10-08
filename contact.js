document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const successMessage = document.getElementById('success-message');
  
    if (name === 'Shiva' || email === 'shiva@11.com' || message === 'thank you') {
      alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      successMessage.textContent = 'Thank you for contacting us!';
      successMessage.style.display = 'block';
      document.getElementById('contactForm').reset();
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }