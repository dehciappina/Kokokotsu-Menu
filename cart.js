
let edamameAmount;
let gyozaAmount;
let mochiAmount;

const goToCart = document.querySelector('.go_to_cart')

function checkAmount() {
    edamameAmount = document.getElementById('edamame_amount').value;
    gyozaAmount = document.getElementById('gyoza_amount').value;
    mochiAmount = document.getElementById('mochi_amount').value;

    if(edamameAmount > 0 || gyozaAmount > 0 || mochiAmount > 0) {
        setTimeout(() => {
            goToCart.classList.add('show_go_to_cart')
        }, 200);
    } else {
        setTimeout(() => {
            goToCart.classList.remove('show_go_to_cart')
        }, 50);
    }
}

const cartSection = document.querySelector(".cart_sec")
const exitBG = document.querySelector(".exit_bg")
let showingCart = false;


function checkCart() {
    if(showingCart == false) {
        cartSection.style.transform = 'translateX(0%)';
        exitBG.classList.add('showExitBg')
        showingCart = true;
    } else {
        cartSection.style.transform = 'translateX(100%)';
        exitBG.classList.remove('showExitBg')
        showingCart = false;
    }
}


goToCart.addEventListener('click', checkCart)
exitBG.addEventListener('click', checkCart)