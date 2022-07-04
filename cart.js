
let edamameAmount;
let gyozaAmount;
let mochiAmount;

const edamamePrice = 3;
const gyozaPrice = 10;
const mochiPrice = 4;

const goToCart = document.querySelector('.go_to_cart')

const allItems = document.querySelectorAll('.quantity input')
let itemAmount;
const go_to_cart_amount = document.querySelector('.go_to_cart .counter')

function checkAmount() {
    edamameAmount = parseInt(document.getElementById('edamame_input_amount').value);
    gyozaAmount = parseInt(document.getElementById('gyoza_input_amount').value);
    mochiAmount = parseInt(document.getElementById('mochi_input_amount').value);

    if(edamameAmount > 0 || gyozaAmount > 0 || mochiAmount > 0) {
        goToCart.classList.add('show_go_to_cart')
    } else {
        setTimeout(() => {
            goToCart.classList.remove('show_go_to_cart')
        }, 150);
    }

    // Summing all amounts

    itemAmount = edamameAmount + gyozaAmount + mochiAmount;

    go_to_cart_amount.innerHTML = `Go to order <b>(${itemAmount})</b>`

}

const cartSection = document.querySelector(".cart_sec")
const exitBG = document.querySelector(".exit_bg")
let showingCart = false;

let edamameDisplayAmount = document.querySelector('.edamame_display_amount');
let edamameDisplayPrice = document.querySelector('.edamame_display_price');

let gyozaDisplayAmount = document.querySelector('.gyoza_display_amount');
let gyozaDisplayPrice = document.querySelector('.gyoza_display_price');

let mochiDisplayAmount = document.querySelector('.mochi_display_amount');
let mochiDisplayPrice = document.querySelector('.mochi_display_price');

let totalDisplayAmount = document.querySelector('.total_display_amount');
let totalDisplayPrice = document.querySelector('.total_display_price');

const gyozaFillingMenu = document.querySelector('.gyoza_filling_menu');

let fillings = document.querySelectorAll('.gyoza_filling_menu .quantity input')

const gyozaFillingMenutxt = document.querySelector('.gyoza_filling_menu > p')

function checkCart() {

    if(showingCart == false) {
        cartSection.style.transform = 'translate3d(0%, 0%, 0)';
        exitBG.classList.add('showExitBg')
        showingCart = true;
    } else {
        cartSection.style.transform = 'translate3d(100%, 0%, 0)';
        exitBG.classList.remove('showExitBg')
        showingCart = false;
    }

    totalDisplayAmount.innerHTML = itemAmount;
    totalDisplayPrice.innerHTML = `<p>£${(edamameAmount * edamamePrice) + (gyozaAmount * gyozaPrice) + (mochiAmount * mochiPrice)}</p>`



    edamameDisplayAmount.innerHTML = `${edamameAmount}`
    edamameDisplayPrice.innerHTML = `£${edamameAmount * 3}`

    gyozaDisplayAmount.innerHTML = `${gyozaAmount}`
    gyozaDisplayPrice.innerHTML = `£${gyozaAmount * 10}`

    mochiDisplayAmount.innerHTML = `${mochiAmount}`
    mochiDisplayPrice.innerHTML = `£${mochiAmount * 4}`
}


goToCart.addEventListener('click', checkCart)
exitBG.addEventListener('click', checkCart)

// let porkInputAmount = document.getElementById('pork_input_amount')
// let chickenInputAmount = document.getElementById('chicken_input_amount')
// let veganInputAmount = document.getElementById('vegan_input_amount')

// let fillingQuantity = parseInt(porkInputAmount.value) +  parseInt(chickenInputAmount.value) +  parseInt(veganInputAmount.value);

const gyozaFillingPrepend = document.querySelector('.gyoza_filling_menu h3')
let gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')

function fillingQuantityCheck() {
    if(gyozaAmount > 0) {
        gyozaFillingMenu.style.opacity = 1;
    } else {
        gyozaFillingMenu.style.opacity = 0;
    }
}

let fillingCounter = 0;

function addSelection() {

    fillingCounter = fillingCounter + 1;

    gyozaFillingPrepend.insertAdjacentHTML('afterend', `
    <select name="select_filling_${fillingCounter}">
        <option value="" disabled selected>...</option>
        <option value="pork_filling">Pork</option>
        <option value="chicken-filling">Chicken</option>
        <option value="vegan_filling">Vegan</option>
    </select>
`)

    gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
}


function removeSelection() {
    fillingCounter = fillingCounter - 1;
    
    gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')

    if(gyozaAmount >= 0) {
        gyozaFillingLastSelection = document.querySelector('.gyoza_filling_menu select:first-of-type');

        for(i = 0; i < gyozaFillingSelections.length; ++i) {

            gyozaFillingLastSelection.remove()

        }
    }
}