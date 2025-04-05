function toggleTheme() {
    document.body.classList.toggle('dark');
}

function toggleMenu() {
    document.getElementById('nav').classList.toggle('show');
}

const translations = {
    en: {
        'About': 'About',
        'Gallery': 'Gallery',
        'Map': 'Map',
        'Reviews': 'Reviews',
        'Contacts': 'Contacts',
        'Reviews': 'Reviews',
        'Welcome': 'Welcome to GagauziyaLand!',
        'Share with us': 'Share your unforgettable impressions and tell us what you liked most about our park!',
        'about-text': 'Gagauziya Land is a unique amusement park where every guest, regardless of age, will find something they love! <br> We have created a place filled with joy, vibrant emotions, and unforgettable impressions.<br> <br> In our park, you’ll find: <br> 🎡 Exciting rides – from fun carousels for little ones to extreme roller coasters for adrenaline lovers. <br> 🎯 Play zones – mazes, trampoline arenas, and interactive entertainment for active recreation. <br> 🎭 Show programs and themed holidays – cheerful animators, quests, and performances <br> that will immerse you in a magical atmosphere. <br> 🍔 Cafes and relaxation areas – delicious food, cozy spots for family gatherings, and top-quality service. <br> <br> Gagauzia Land is not just a park, it’s a world of adventures where every minute is filled with joy and laughter. <br> Come for new emotions, magical moments, and unforgettable family fun! <br> 📍 We look forward to seeing you at Gagauzia Land – the place where dreams come true!',
        'map-title': '📍 Our location',
        'map-text': '<b>GagauziyaLand</b> – an amazing amusement park located near the Yalpug River, not far from the city of Congaz. It’s easy to find, as it’s right next to the <b>M3</b> road, making it convenient to visit. <br> <br> On the map, you can see the exact location of our park, as well as the nearest parking lot for cars. We’ve made sure it’s convenient for you to reach GagauziyaLand by any means of transportation. <br> <br> Don’t know how to get here? Just click the "Enlarge Map" button on the map, and you’ll be able to easily build a route from your current location to our park. We’re waiting for you at GagauziyaLand – the place where everyone will find entertainment to their liking!',
        'contacts-p': 'Do you have any questions or suggestions? We are always happy to receive feedback! Write to us via email or on social media,<br> and we will respond as soon as possible.',
        'media-title': 'Our social media',
        'administration': 'Contact our administration: <br> <b>+373 69893939</b>',
        'footer': 'This website was created as part of the Regional Olympiad: IT Technologies within the project "Tekwill in Every School"',
    },
    ru: {
        'About': 'О нас',
        'Gallery': 'Галерея',
        'Map': 'Карта',
        'Reviews': 'Отзывы',
        'Contacts': 'Контакты',
        'Reviews': 'Отзывы',
        'Welcome': 'Добро пожаловать в GagauziyaLand!',
        'Share with us': 'Поделитесь своими незабываемыми впечатлениями и расскажите, что вам больше всего понравилось в нашем парке!',
        'about-text': 'GagauziyaLand – это уникальный парк развлечений, где каждый гость, независимо от возраста, найдет что-то по душе! <br> Мы создали место, наполненное радостью, яркими эмоциями и незабываемыми впечатлениями. <br> <br> В нашем парке вас ждут: <br> 🎡 Захватывающие аттракционы – от веселых каруселей для малышей до экстремальных горок для любителей адреналина. <br> 🎯 Игровые зоны – лабиринты, батутные арены и интерактивные развлечения для активного отдыха. <br> 🎭 Шоу-программы и тематические праздники – веселые аниматоры, квесты и выступления, <br> которые погрузят вас в атмосферу волшебства. <br> 🍔 Кафе и зоны отдыха – вкусная еда, уютные места для семейных посиделок и комфортный сервис. <br> <br> Gagauzia Land – это не просто парк, это мир приключений, где каждая минута наполнена радостью и смехом. <br> Приходите за новыми эмоциями, волшебными моментами и незабываемым отдыхом всей семьей! <br> 📍 Мы ждем вас в Gagauzia Land – месте, где сбываются мечты!',
        'map-title': '📍 Наше местоположение',
        'map-text': '<b>GagayziyaLand</b> – удивительный парк развлечений, расположенный рядом с рекой Ялпуг, неподалёку от города Конгаз. Это место легко найти, так как оно находится прямо у дороги <b>M3</b>, что делает его удобным для посещения. <br> <br> На карте вы можете увидеть точное местоположение нашего парка, а также ближайшую парковку для автомобилей. Мы позаботились о том, чтобы вам было комфортно добираться до GagauziyaLand на любом виде транспорта. <br> <br> Не знаете, как добраться? Просто нажмите на кнопку «Увеличить карту» на карте, и вы сможете легко построить путь от вашего текущего местоположения до нашего парка. Ждём вас в GagauziyaLand – месте, где каждый найдёт развлечение по душе!',
        'contacts-p': 'У вас есть вопросы или предложения? Мы всегда рады обратной связи! Напишите нам по email или в соцсетях,<br> и мы ответим в ближайшее время.',
        'media-title': 'Наши соц.сети',
        'administration': 'Свяжитесь с нашей администрацией:<br> <b>+373 69893939</b>',
        'footer': 'Данный веб-сайт был выполнен в рамках Региональной олимпиады: IT-технологии в рамках проекта «Tekwill в каждой школе»'
    },
    ro: {
        'About': 'Despre',
        'Gallery': 'Galerie',
        'Map': 'Hartă',
        'Reviews': 'Recenzii',
        'Contacts': 'Contacte',
        'Reviews': 'Recenzii',
        'Welcome': 'Bine ați venit în GagauziyaLand!',
        'Share with us': "Împărtășiți-vă impresiile de neuitat și spuneți-ne ce v-a plăcut cel mai mult în parcul nostru!",
        'about-text': 'GagauziyaLand – este un parc de distracții unic, unde fiecare vizitator, indiferent de vârstă, va găsi ceva pe placul său! <br> Am creat un loc plin de bucurie, emoții vii și impresii de neuitat. <br> <br> În parc vă așteaptă: <br> 🎡 Atracții captivante – de la carusele vesele pentru cei mici până la montagne russe extreme pentru iubitorii de adrenalină. <br> 🎯 Zone de joc – labirinturi, arene de trambuline și distracții interactive pentru o vacanță activă. <br> 🎭 Programe de spectacol și sărbători tematice – animatori veseli, questuri și reprezentații <br> care vă vor învălui într-o atmosferă magică. <br> 🍔 Cafenele și zone de relaxare – mâncare delicioasă, locuri confortabile pentru momente de familie și servicii de înaltă calitate. <br> <br> Gagauzia Land – nu este doar un parc, este o lume a aventurilor, unde fiecare minut este plin de bucurie și râs. <br> Veniți pentru noi emoții, momente magice și o vacanță de neuitat pentru întreaga familie! <br> 📍 Vă așteptăm în Gagauzia Land – locul unde visele devin realitate!',
        'map-title': '📍 Localizarea noastră',
        'map-text': '<b>GagauziyaLand</b> – un parc de distracții uimitor situat lângă râul Ialpug, în apropiere de orașul Congaz. Este ușor de găsit, deoarece se află chiar lângă drumul <b>M3</b>, ceea ce îl face convenabil de vizitat. <br> <br> Pe hartă puteți vedea locația exactă a parcului nostru, precum și cea mai apropiată parcare pentru automobile. Ne-am asigurat că vă este confortabil să ajungeți la GagauziyaLand cu orice mijloc de transport. <br> <br> Nu știți cum să ajungeți? Doar apăsați pe butonul „Măriți harta” de pe hartă și veți putea construi cu ușurință traseul de la locația dvs. actuală până la parcul nostru. Vă așteptăm la GagauziyaLand – locul unde fiecare va găsi distracția pe placul său!',
        'contacts-p': 'Aveți întrebări sau sugestii? Suntem întotdeauna bucuroși de feedback! Scrieți-ne prin e-mail sau pe rețelele sociale, <br> și vă vom răspunde în cel mai scurt timp.',
        'media-title': 'Rețelele noastre sociale',
        'administration': 'Contactați administrația noastră:<br> <b>+373 69893939</b>',
        'footer': 'Acest site web a fost realizat în cadrul Olimpiadei Regionale: Tehnologii IT în cadrul proiectului „Tekwill în fiecare școală”'
    }
};

let currentLang = 'ru';

function switchLang(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-text]').forEach(el => {
        const key = el.getAttribute('data-text');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.textContent = lang.toUpperCase();
    }

    currentLang = lang;
    localStorage.setItem('lang', lang); 
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ru'; 
    switchLang(savedLang);
});

document.querySelectorAll('.lang-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        switchLang(selectedLang);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light'); 
    }
});

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}

let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ru'; 
    switchLang(savedLang);
});

document.querySelectorAll('.lang-menu a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        switchLang(this.dataset.lang);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("mouseover", function () {
            highlightStars(this.dataset.value);
        });

        star.addEventListener("mouseleave", function () {
            highlightStars(selectedRating);
        });

        star.addEventListener("click", function () {
            selectedRating = this.dataset.value;
            ratingValue.textContent = selectedRating;
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            star.classList.toggle("hovered", star.dataset.value <= value);
        });
    }
});

document.getElementById("review-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        let userName = prompt("Как вас назвать?").trim();
        if (!userName) userName = "Аноним";

        const reviewText = this.value.trim();
        this.value = ""; 

        const reviewBlock = document.createElement("div");
        reviewBlock.classList.add("review");
        reviewBlock.innerHTML = `<strong>${userName}:</strong> ${reviewText}`;

        document.getElementById("reviews").prepend(reviewBlock);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".gallery-img img, .gallery-img video");
    let currentIndex = 0;

    function nextSlide() {
        let current = elements[currentIndex];
        let nextIndex = (currentIndex + 1) % elements.length;
        let next = elements[nextIndex];

        if (next.tagName === "VIDEO") {
            next.addEventListener("ended", () => {
                next.classList.remove("active");
                currentIndex = nextIndex;
                nextSlide();
            }, { once: true });

            next.play();
        }

        if (current.tagName === "IMG") {
            let slice = document.createElement("div");
            slice.classList.add("slice-animation");
            slice.style.backgroundImage = `url(${current.src})`;
            current.parentElement.appendChild(slice);
            
            setTimeout(() => slice.remove(), 1000);
        }

        current.classList.remove("active");
        next.classList.add("active");

        currentIndex = nextIndex;

        if (next.tagName !== "VIDEO") {
            setTimeout(nextSlide, 10000);
        }
    }

    setTimeout(nextSlide, 10000);
});

const images = document.querySelectorAll('.carousel img');
let activeIndex = 0;

function changeImage() {
    images[activeIndex].classList.remove('Active');
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add('Active');
}

setInterval(changeImage, 12000);