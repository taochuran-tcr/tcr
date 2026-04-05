window.onload = function() {
    // ===== Banner Carousel =====
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.indicator-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let timer = null;

    if (slides.length > 0) {
        function initBanner() {
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            autoPlay();
        }

        function switchSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function autoPlay() {
            timer = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                switchSlide(currentIndex);
            }, 3000);
        }

        nextBtn.addEventListener('click', function() {
            clearInterval(timer);
            currentIndex = (currentIndex + 1) % slides.length;
            switchSlide(currentIndex);
            autoPlay();
        });

        prevBtn.addEventListener('click', function() {
            clearInterval(timer);
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            switchSlide(currentIndex);
            autoPlay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(timer);
                switchSlide(index);
                autoPlay();
            });
        });

        initBanner();
    }

    // ===== Tabs =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });
};
