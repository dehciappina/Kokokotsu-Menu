
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

    go_to_cart_amount.innerHTML = `Your order <b>(${itemAmount})</b>`

    totalDisplayAmount.innerHTML = itemAmount;
    totalDisplayPrice.innerHTML = `<p>£${(edamameAmount * edamamePrice) + (gyozaAmount * gyozaPrice) + (mochiAmount * mochiPrice)}</p>`

    edamameDisplayAmount.innerHTML = `${edamameAmount}`
    edamameDisplayPrice.innerHTML = `£${edamameAmount * 3}`

    gyozaDisplayAmount.innerHTML = `${gyozaAmount}`
    gyozaDisplayPrice.innerHTML = `£${gyozaAmount * 10}`

    mochiDisplayAmount.innerHTML = `${mochiAmount}`
    mochiDisplayPrice.innerHTML = `£${mochiAmount * 4}`




    if(edamameAmount > 0) {
        edamameRemoveItem.style.display = 'block';
    } else {
        edamameRemoveItem.style.display = 'none';
    }
    
    if(gyozaAmount > 0) {
        gyozaRemoveItem.style.display = 'block';
    } else {
        gyozaRemoveItem.style.display = 'none';
    }

    if(mochiAmount > 0) {
        mochiRemoveItem.style.display = 'block';
    } else {
        mochiRemoveItem.style.display = 'none';
    }

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
        // history.pushState('sessionStorage', 'unused', 'menu')
        cartSection.style.transform = 'translate3d(0%, 0%, 0)';
        exitBG.classList.add('showExitBg')
        showingCart = true;

        setTimeout(() => {
            document.body.style.overflow = 'hidden'
        }, 300);
    } else {
        // history.pushState('sessionStorage', 'unused', 'index.html')
        cartSection.style.transform = 'translate3d(100%, 0%, 0)';
        exitBG.classList.remove('showExitBg')
        showingCart = false;

        setTimeout(() => {
            document.body.style.overflow = 'block'
        }, 300);
    }
}

goToCart.addEventListener('click', checkCart)
exitBG.addEventListener('click', checkCart)

const gyozaFillingPrepend = document.querySelector('.gyoza_filling_menu')
let gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
const emptySign = document.querySelector('.empty_sign')

let fillingCounter = 0;

function addSelection() {

    fillingCounter = fillingCounter + 1;

    gyozaFillingPrepend.insertAdjacentHTML('beforeend', `
    <select name="select_filling_${fillingCounter}">
        <option value="" disabled selected>...</option>
        <option value="pork_filling">Pork</option>
        <option value="chicken-filling">Chicken</option>
        <option value="vegan_filling">Vegan</option>
    </select>
`)
}

let removeBts = document.querySelectorAll('.remove_bt')

for(i = 0; i < removeBts.length; ++i) {
    removeBts[i].addEventListener('click', function() {
        removeBts[i].parentElement.remove()
    })
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



const edamameRemoveItem = document.querySelector('.remove_item.edamame')
const gyozaRemoveItem = document.querySelector('.remove_item.gyoza')
const mochiRemoveItem = document.querySelector('.remove_item.mochi')




function subtractEdamame() {

    if(edamameAmount > 1) {
        edamameRemoveItem.style.display = 'block';
    } else {
        edamameRemoveItem.style.display = 'none';
    }

    document.getElementById('edamame_input_amount').value = parseInt(document.getElementById('edamame_input_amount').value) - 1;

    checkAmount()
}

function subtractGyoza() {

    if(gyozaAmount > 1) {
        gyozaRemoveItem.style.display = 'block';
    } else {
        gyozaRemoveItem.style.display = 'none';
    }

    removeSelection()

    document.getElementById('gyoza_input_amount').value = parseInt(document.getElementById('gyoza_input_amount').value) - 1;

    checkAmount()
}

function subtractMochi() {


    if(mochiAmount > 1) {
        mochiRemoveItem.style.display = 'block';
    } else {
        mochiRemoveItem.style.display = 'none';
    }

    document.getElementById('mochi_input_amount').value = parseInt(document.getElementById('mochi_input_amount').value) - 1;

    checkAmount()
}