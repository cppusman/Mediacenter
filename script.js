document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    
    let currentIndex = 0;

    function updateSlider(index) {
        // Убираем активный класс у всех
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Добавляем активный класс текущему
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

    // Клик по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });
});

// Функция для появления элементов при скролле
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если секция видна хотя бы на 15%, добавляем класс active
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Если хочешь, чтобы анимация сработала только один раз, 
                // можно перестать следить за элементом:
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Насколько сильно должен появиться элемент (0.15 = 15%)
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Запускаем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', revealOnScroll);