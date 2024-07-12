const button = document.getElementById('view-products');

button.addEventListener('mouseover', () => {
    button.textContent = 'Green Signal 😉';
});

button.addEventListener('mouseout', () => {
    button.textContent = 'View products';
});

const contact = document.getElementById('contact');

contact.addEventListener('mouseover', () => {
    contact.textContent = 'Contact Us';
});

contact.addEventListener('mouseout', () => {
    contact.textContent = 'Be our team';
});