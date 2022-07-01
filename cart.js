
let edamameAmount;
let gyozaAmount;
let mochiAmount;

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

const edamameDisplayAmount = document.querySelector('.edamame_display_amount');
const edamameDisplayPrice = document.querySelector('.edamame_display_price');

const gyozaDisplayAmount = document.querySelector('.gyoza_display_amount');
const gyozaDisplayPrice = document.querySelector('.gyoza_display_price');

const mochiDisplayAmount = document.querySelector('.mochi_display_amount');
const mochiDisplayPrice = document.querySelector('.mochi_display_price');

const gyozaFillingMenu = document.querySelector('.gyoza_filling_menu');

let fillings = document.querySelectorAll('.gyoza_filling_menu .quantity input')

const gyozaFillingMenutxt = document.querySelector('.gyoza_filling_menu > p')

function checkCart() {
    if(showingCart == false) {
        cartSection.style.transform = 'translateX(0%)';
        document.body.style.overflow = 'hidden';
        exitBG.classList.add('showExitBg')
        showingCart = true;
    } else {
        cartSection.style.transform = 'translateX(100%)';
        document.body.style.overflow = 'auto';
        exitBG.classList.remove('showExitBg')
        showingCart = false;
    }

    if(gyozaAmount > 0) {
        gyozaFillingMenutxt.innerHTML = `Choose the filling of your gyozas <b>(${gyozaAmount})</b>:`
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

let fillingQuantity = parseInt(document.getElementById('pork_input_amount').value) +  parseInt(document.getElementById('chicken_input_amount').value) +  parseInt(document.getElementById('vegan_input_amount').value);

function fillingQuantityCheck() {
    fillingQuantity = parseInt(document.getElementById('pork_input_amount').value) +  parseInt(document.getElementById('chicken_input_amount').value) +  parseInt(document.getElementById('vegan_input_amount').value);
}
