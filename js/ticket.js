
const busSeat = document.getElementsByClassName('bus-seat');
const fixedPrice = 550;
let selectedSeats = 0;
let promoCodeEntered = false;
let appliedDiscountRate = 0;


const promoCodeInput = document.getElementById('input-field');
const applyButton = document.getElementById('apply-button');

applyButton.addEventListener('click', function() {
    const enteredCode = promoCodeInput.value;
    if (enteredCode === 'NEW15' || enteredCode === 'Couple 20') {
        promoCodeEntered = true;
        appliedDiscountRate = enteredCode === 'NEW15' ? 0.15 : 0.20;
        promoCodeInput.style.display = 'none'; 
        applyButton.style.display = 'none'; 
        updateGrandTotal(); 
    }
});

for (const bus of busSeat) {
    bus.addEventListener('click', function () {
        if (selectedSeats < 4) {
            selectedSeats++;
            bus.classList.add('bg-green-400');

            const addContainer = document.getElementById('add-container');
            const clonedBus = bus.cloneNode(true);
            clonedBus.classList.remove('bg-green-400');

            const createLi = document.createElement('li');
            createLi.appendChild(clonedBus);

            const d1 = document.createElement('div');
            d1.innerText = bus;
            const d2 = document.createElement('div');
            d2.innerText = 'economy';
            const d3 = document.createElement('div');
            d3.innerText = fixedPrice;
            createLi.appendChild(d2);
            createLi.appendChild(d3);
            createLi.classList.add('flex', 'justify-between');
            addContainer.appendChild(createLi);

            totalSeatLeft('total-seat');
            updatedSeat('seat-increase');
            totalPrice('total-price');
            updateGrandTotal();  selection
        } else {
            alert('You can only select up to 4 seats.');
        }
    });
}

function totalSeatLeft(id) {
    const totalSeatElement = document.getElementById(id);
    const totalSeat = parseInt(totalSeatElement.innerText);
    totalSeatElement.innerText = totalSeat - 1;
}

function updatedSeat(id) {
    const seatIncrease = document.getElementById(id);
    seatIncrease.innerText = parseInt(seatIncrease.innerText) + 1;
}

function totalPrice(id) {
    const totalPriceElement = document.getElementById(id);
    const total = parseInt(totalPriceElement.innerText);
    totalPriceElement.innerText = total + fixedPrice;
}

function updateGrandTotal() {
    const grandTotalElement = document.getElementById('grand-total');
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.innerText);
    
    if (promoCodeEntered) {
        const discountedTotal = totalPrice - (totalPrice * appliedDiscountRate);
        grandTotalElement.innerText = discountedTotal;
    } else {
        grandTotalElement.innerText = totalPrice;
    }
}
document.getElementById('next-button').addEventListener('click',function(){
    const success = document.getElementById('success');
    success.classList.remove('hidden');
})



