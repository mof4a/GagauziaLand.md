let countdown = 10;
const redirectionText = document.querySelector('.redirection');

const timer = setInterval(() => {
    countdown--;
    redirectionText.textContent = `Через ${countdown} секунд(ы) вас перенаправит обратно.`; // Обновляем текст

    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    }
}, 1000);