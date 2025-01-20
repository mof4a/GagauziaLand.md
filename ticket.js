const ticketPrices = {
    adult: 100, 
    child: 50,  
    family: 300
};

document.getElementById('quantity').addEventListener('input', updateTotalPrice);
document.getElementById('ticket-type').addEventListener('change', updateTotalPrice);
document.getElementById('promo-code').addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = document.getElementById('quantity').value;
    const promoCode = document.getElementById('promo-code').value.trim();
    
    let totalPrice = ticketPrices[ticketType] * quantity;
    if (promoCode === 'DISCOUNT15') {
        totalPrice *= 0.85;
    }
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
updateTotalPrice();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = "./thanks.html";
    }, 1000);
});
