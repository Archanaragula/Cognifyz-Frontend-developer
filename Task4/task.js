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
