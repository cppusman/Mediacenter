document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    
    let currentIndex = 0;

    function updateSlider(index) {
        
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    nextBtn.addEventListener('click', () => {
        let index = currentIndex + 1;
        if (index >= cards.length) index = 0;
        updateSlider(index);
    });

    prevBtn.addEventListener('click', () => {
        let index = currentIndex - 1;
        if (index < 0) index = cards.length - 1;
        updateSlider(index);
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });
});


function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                }
        });
    }, {
        threshold: 0.15 
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}


document.addEventListener('DOMContentLoaded', revealOnScroll);