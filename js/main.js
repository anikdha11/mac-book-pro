// Memory-js
const btnMemory1 = document.getElementById("btn-memory-1");
const btnMemory2 = document.getElementById("btn-memory-2");
const memoryCost = document.getElementById("memory-cost");

btnMemory1.addEventListener('click', function () {
    memoryCost.innerText = 0;
    updateTotal()
})
btnMemory2.addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotal()
})

// storage-js
const btnStorage1 = document.getElementById('btn-stroage-1');
const btnStorage2 = document.getElementById('btn-stroage-2');
const btnStorage3 = document.getElementById('btn-stroage-3');
const storageCost = document.getElementById('storage-cost');

btnStorage1.addEventListener('click', function () {
    storageCost.innerText = 0;
    updateTotal()
})

btnStorage2.addEventListener('click', function () {
    storageCost.innerText = 100;
    updateTotal()
})

btnStorage3.addEventListener('click', function () {
    storageCost.innerText = 180;
    updateTotal()
})

// delivery-js
const btnDelivery1 = document.getElementById('btn-delivery-1');
const btnDelivery2 = document.getElementById('btn-delivery-2');
const deliveryCost = document.getElementById('delivery-cost');

btnDelivery1.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    updateTotal()
})
btnDelivery2.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    updateTotal()
})

// mac-book-total

const total = document.getElementById('total');
const lastTotal = document.getElementById('last-total');

// total-update
function updateTotal() {
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliverAmount = Number(deliveryCost.innerText);
    const finalTotal = 1299 + memoryPrice + storagePrice + deliverAmount;
    total.innerText = finalTotal;
    lastTotal.innerText = finalTotal;
}


