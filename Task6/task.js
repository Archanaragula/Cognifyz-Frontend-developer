// script.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('colorChangeButton');
    
    button.addEventListener('click', function() {
        // Function to generate a random color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        // Change the background color of the body
        document.body.style.backgroundColor = getRandomColor();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');
    
    form.addEventListener('submit', function(event) {
        feedback.textContent = '';
        
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        
        if (!email) {
            feedback.textContent = 'Please enter your email.';
            event.preventDefault();
            return;
        }
        
        if (!name) {
            feedback.textContent = 'Please enter your name.';
            event.preventDefault();
            return;
        }
        
        if (!password || password.length < 6) {
            feedback.textContent = 'Please enter a valid password with at least 6 characters.';
            event.preventDefault();
            return;
        }

        alert('Form submitted successfully!');
    });
});
