document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const ball = document.querySelector(".ball");
    const sections = document.querySelectorAll(".screen");
    const line = document.querySelector(".line");
    let currentIndex = 0;
    let isScrolling = false;
    let lastScrollTime = 0;
    const scrollDelay = 500;

    // Переменные для touch-событий
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50; // Минимальная дистанция свайпа

    // Функция для перемещения шарика
    function moveBall(target) {
        const rect = target.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();
        const ballPosition = rect.left + rect.width / 2 - lineRect.left - ball.offsetWidth / 2;
        const maxLeft = lineRect.width - ball.offsetWidth;
        const clampedPosition = Math.max(0, Math.min(ballPosition, maxLeft));

        gsap.to(ball, {
            left: clampedPosition,
            duration: 0.5,
            ease: "power2.out"
        });
    }

    // Функция для переключения секций
    function switchSection(index) {
        if (index < 0 || index >= sections.length || isScrolling) return;

        isScrolling = true;
        const sectionId = sections[index].id;
        const menuItem = document.querySelector(`.menu-item[data-section="${sectionId}"]`);

        // Обновляем активный пункт меню
        menuItems.forEach(item => item.classList.remove("active"));
        menuItem.classList.add("active");
        moveBall(menuItem);

        // Переключаем секции с очисткой предыдущих анимаций
        sections.forEach(section => {
            section.querySelectorAll("*").forEach(el => gsap.killTweensOf(el));
            if (section.id === sectionId) {
                gsap.to(section, {
                    opacity: 1,
                    duration: 0.5,
                    onStart: () => section.classList.add("active"),
                    onComplete: () => {
                        isScrolling = false;
                    }
                });
            } else {
                gsap.to(section, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => section.classList.remove("active")
                });
            }
        });

        // Анимация элементов текущей секции
        const section = sections[index];
        const helloTitle = section.querySelector(".hello-title");
        const logo = section.querySelector(".logo");
        const ball1 = section.querySelector("#ball-1");
        const ball2 = section.querySelector("#ball-2");
        const ball3 = section.querySelector("#ball-3");
        const star1 = section.querySelector("#star-1");
        const star2 = section.querySelector("#star-2");
        const tl = section.querySelector(`#tl-${section.id}`);
        const tr = section.querySelector(`#tr-${section.id}`);
        const bl = section.querySelector(`#bl-${section.id}`);
        const br = section.querySelector(`#br-${section.id}`);
        const footerText = section.querySelector(".footer-text");
        const arrow = section.querySelector(".arrow");
        const person1 = section.querySelector("#person-1");
        const person2 = section.querySelector("#person-2");
        const projectTitle = section.querySelector(".project-title");
        const cards = section.querySelectorAll(".card");
        const cardInners = section.querySelectorAll(".card-inner");
        const cardTitles = section.querySelectorAll(".card h2");
        const cardDescriptions = section.querySelectorAll(".card-description");
        const aboutTitle = section.querySelector(".about-title");
        const aboutText = section.querySelector(".about-text");
        const aboutLink = section.querySelector(".about-link");
        const aboutImages = section.querySelectorAll(".about-image");
        const contactTitle = section.querySelector(".contact-title");
        const contactLogo = section.querySelector(".contact-logo");
        const contactLogoText = section.querySelector(".block_logos p");
        const contactSubtitle = section.querySelector(".contact-subtitle");
        const socialIcons = section.querySelectorAll(".social-icon img");
        const contactEmail = section.querySelector(".contact-email");
        const contactAddress = section.querySelector(".contact-address");
        const sideTexts = section.querySelectorAll(".side-text");
        const backLB = section.querySelector('img[src*="/image/back_lb.png"]');
        const backLT = section.querySelector('img[src*="/image/back_lt.png"]');
        const backRB = section.querySelector('img[src*="/image/back_rb.png"]');
        const backRT = section.querySelector('img[src*="/image/back_rt.png"]');

        if (tl) gsap.fromTo(tl, { x: -100, y: -100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.7 });
        if (tr) gsap.fromTo(tr, { x: 100, y: -100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.8 });
        if (bl) gsap.fromTo(bl, { x: -100, y: 100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.9 });
        if (br) gsap.fromTo(br, { x: 100, y: 100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.0 });

        if (section.id === "hello") {
            if (helloTitle) gsap.fromTo(helloTitle, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 });
            if (logo) gsap.fromTo(logo, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 });
            if (ball1) gsap.fromTo(ball1, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 });
            if (ball2) gsap.fromTo(ball2, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 });
            if (ball3) gsap.fromTo(ball3, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 });
            if (star1) gsap.fromTo(star1, { x: 100, y: 100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.6 });
            if (star2) gsap.fromTo(star2, { x: -100, y: -100, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.7 });
            if (footerText) gsap.fromTo(footerText, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.1 });
            if (arrow) gsap.fromTo(arrow, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.2 });
            if (person1) gsap.fromTo(person1, { bottom: "-100%" }, { bottom: "0%", duration: 0.8, ease: "power2.out", delay: 0.1 });
            if (person2) gsap.fromTo(person2, { bottom: "-100%" }, { bottom: "0%", duration: 0.8, ease: "power2.out", delay: 0.1 });
        }

        if (section.id === "project") {
            if (projectTitle) gsap.fromTo(projectTitle, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 });
            if (cards) {
                gsap.fromTo(cards, 
                    { y: -150, opacity: 0, rotationZ: 45 }, 
                    { y: 0, opacity: 1, rotationZ: 0, duration: 0.7, ease: "power2.out", delay: 0.3, stagger: 0.2 }
                );
                if (cardInners) {
                    gsap.set(cardInners, { rotationY: 180 });
                    gsap.to(cardInners, {
                        rotationY: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        delay: 1,
                        stagger: 0.2
                    });
                }
                if (cardTitles) gsap.fromTo(cardTitles, 
                    { y: 20, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.6, stagger: 0.2 }
                );
                if (cardDescriptions) gsap.fromTo(cardDescriptions, 
                    { y: 20, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.6, stagger: 0.2 }
                );
            }
            if (backLB) gsap.fromTo(backLB, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.9 });
            if (backLT) gsap.fromTo(backLT, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 2.0 });
            if (backRB) gsap.fromTo(backRB, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 2.1 });
            if (backRT) gsap.fromTo(backRT, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 2.2 });
        }

        if (section.id === "about") {
            if (aboutTitle) gsap.fromTo(aboutTitle, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 });
            if (aboutText) gsap.fromTo(aboutText, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 });
            if (aboutLink) gsap.fromTo(aboutLink, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 });
            if (aboutImages) gsap.fromTo(aboutImages, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.7, stagger: 0.2 });
        }

        if (section.id === "contact") {
            if (contactTitle) gsap.fromTo(contactTitle, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 });
            if (contactLogo) gsap.fromTo(contactLogo, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 });
            if (contactLogoText) gsap.fromTo(contactLogoText, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 });
            if (contactSubtitle) gsap.fromTo(contactSubtitle, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 });
            if (socialIcons) gsap.fromTo(socialIcons, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.7, stagger: 0.1 });
            if (contactEmail) gsap.fromTo(contactEmail, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.0 });
            if (contactAddress) gsap.fromTo(contactAddress, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.1 });
            if (sideTexts) gsap.fromTo(sideTexts, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.2, stagger: 0.1 });
            if (backLB) gsap.fromTo(backLB, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.3 });
            if (backLT) gsap.fromTo(backLT, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.4 });
            if (backRB) gsap.fromTo(backRB, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.5 });
            if (backRT) gsap.fromTo(backRT, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.6 });
        }
    }

    // Обработчик скролла для десктопа
    document.addEventListener("wheel", (e) => {
        const now = Date.now();
        if (now - lastScrollTime < scrollDelay || isScrolling) return;

        lastScrollTime = now;
        if (e.deltaY > 0) {
            currentIndex++;
            if (currentIndex >= sections.length) currentIndex = sections.length - 1;
            switchSection(currentIndex);
        } else if (e.deltaY < 0) {
            currentIndex--;
            if (currentIndex < 0) currentIndex = 0;
            switchSection(currentIndex);
        }
    });

    // Обработчики для сенсорных событий
    document.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener("touchmove", (e) => {
        e.preventDefault(); // Предотвращаем прокрутку страницы
        touchEndY = e.touches[0].clientY;
    }, { passive: false });

    document.addEventListener("touchend", () => {
        const now = Date.now();
        if (now - lastScrollTime < scrollDelay || isScrolling) return;

        const swipeDistance = touchStartY - touchEndY;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            lastScrollTime = now;
            if (swipeDistance > 0) {
                // Свайп вверх
                currentIndex++;
                if (currentIndex >= sections.length) currentIndex = sections.length - 1;
                switchSection(currentIndex);
            } else {
                // Свайп вниз
                currentIndex--;
                if (currentIndex < 0) currentIndex = 0;
                switchSection(currentIndex);
            }
        }
    });

    // Клик по пункту меню
    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            switchSection(currentIndex);
        });
    });

    // Инициализация
    const initialItem = document.querySelector('.menu-item[data-section="hello"]');
    initialItem.classList.add("active");
    moveBall(initialItem);
    switchSection(0);

    // Автоматический скроллинг каждые 3 секунды
    const autoScrollInterval = setInterval(() => {
        if (!isScrolling) {
            currentIndex++;
            if (currentIndex >= sections.length) {
                currentIndex = 0; // Возвращаемся к началу
            }
            switchSection(currentIndex);
        }
    }, 800000); // 3000мс = 3 секунды

    // Остановка автоскроллинга при взаимодействии пользователя
    document.addEventListener("wheel", () => clearInterval(autoScrollInterval));
    document.addEventListener("touchstart", () => clearInterval(autoScrollInterval));
});