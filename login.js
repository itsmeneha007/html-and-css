document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
    
    } else {
      errorMessage.textContent = 'Invalid email or password. Please try again.';
    }
  });