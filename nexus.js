document.addEventListener('DOMContentLoaded', () => {
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

    // Scroll to the aboutuspg section when a specific button is clicked
    const storyButton = document.getElementById('story');
    storyButton.addEventListener('click', () => {
        document.querySelector('.aboutuspg').scrollIntoView({ behavior: 'smooth' });
    });
});



let currentIndex = 0;

function moveSlide(n) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += n;
    
    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);


const viewButton = document.getElementById('service');
    viewButton.addEventListener('click', () => {
        document.querySelector('.view').scrollIntoView({ behavior: 'smooth' });
    });

const viewproductButton = document.getElementById('view-products');
viewproductButton.addEventListener('click', () => {
    document.querySelector('.view').scrollIntoView({ behavior: 'smooth' });
});

function goToLink() {
    window.location.href = './contact.html';
}
