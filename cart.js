
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

    go_to_cart_amount.innerHTML = `<b>(${itemAmount})</b> Go to cart`

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

    porkInputAmount.value = '0'
    chickenInputAmount.value = '0'
    veganInputAmount.value = '0'
    
    if(showingCart == false) {
        cartSection.style.transform = 'translate3d(0%, 0%, 0)';
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
        }, 300);
        exitBG.classList.add('showExitBg')
        showingCart = true;
    } else {
        cartSection.style.transform = 'translate3d(100%, 0%, 0)';
        document.body.style.overflow = 'auto';
        exitBG.classList.remove('showExitBg')
        showingCart = false;
    }

    totalDisplayAmount.innerHTML = itemAmount;
    totalDisplayPrice.innerHTML = `£${(edamameAmount * edamamePrice) + (gyozaAmount * gyozaPrice) + (mochiAmount * mochiPrice)}`


    if(gyozaAmount > 0) {
        gyozaFillingMenu.style.display = 'block';
    } else {
        gyozaFillingMenu.style.display = 'none';
    }

    edamameDisplayAmount.innerHTML = `${edamameAmount}`
    edamameDisplayPrice.innerHTML = `£${edamameAmount * 3}`

    gyozaDisplayAmount.innerHTML = `${gyozaAmount}`
    gyozaDisplayPrice.innerHTML = `£${gyozaAmount * 10}`

    mochiDisplayAmount.innerHTML = `${mochiAmount}`
    mochiDisplayPrice.innerHTML = `£${mochiAmount * 4}`
}


goToCart.addEventListener('click', checkCart)
exitBG.addEventListener('click', checkCart)

let porkInputAmount = document.getElementById('pork_input_amount')
let chickenInputAmount = document.getElementById('chicken_input_amount')
let veganInputAmount = document.getElementById('vegan_input_amount')

let fillingQuantity = parseInt(porkInputAmount.value) +  parseInt(chickenInputAmount.value) +  parseInt(veganInputAmount.value);

function fillingQuantityCheck() {
    fillingQuantity = parseInt(porkInputAmount.value) +  parseInt(chickenInputAmount.value) +  parseInt(veganInputAmount.value);

    porkInputAmount = document.getElementById('pork_input_amount')
    chickenInputAmount = document.getElementById('chicken_input_amount')
    veganInputAmount = document.getElementById('vegan_input_amount')
}
