const edamamePrice = 3;
const gyozaPrice = 10;
const mochiPrice = 4;

let finalPrice = 0;
let itemAmount;

// const edamameAmount = document.getElementById('edamameAmount');
const gyozaAmount = document.getElementById('gyozaAmount');
// const mochiAmount = document.getElementById('mochiAmount')

const goToCart = document.querySelector('.go_to_cart')
const goToCartAmount = document.querySelector('.go_to_cart .counter')

const cartSection = document.querySelector(".cart_sec")
let showingCart = false;


// let edamameDisplayAmount = document.querySelector('.edamame_display_amount');
// let edamameDisplayPrice = document.querySelector('.edamame_display_price');

let gyozaDisplayAmount = document.querySelector('.gyoza_display_amount');
let gyozaDisplayPrice = document.querySelector('.gyoza_display_price');

// let mochiDisplayAmount = document.querySelector('.mochi_display_amount');
// let mochiDisplayPrice = document.querySelector('.mochi_display_price');


let totalDisplayAmount = document.querySelector('.total_display_amount');
let totalDisplayPrice = document.querySelector('.total_display_price');



function updateCart(operation, item) {
    if(operation == 'add') {
        if(item == 'Gyoza') {
            gyozaAmount.value = parseInt(gyozaAmount.value) + 1;
            updateFillingInputs('add')
        }
        // else if(item == 'Edamame') {
        //     edamameAmount.value = parseInt(edamameAmount.value) + 1;
        // } else if(item == 'Mochi') {
        //     mochiAmount.value = parseInt(mochiAmount.value) + 1;
        // }

    } else if(operation == 'remove') {
        if(item == 'Gyoza') {
            if(gyozaAmount.value > 0) {
                gyozaAmount.value = parseInt(gyozaAmount.value) - 1;
                updateFillingInputs('remove')
            }
        }
        // else if(item == 'Edamame') {
        //     if(edamameAmount.value > 0) {
        //         edamameAmount.value = parseInt(edamameAmount.value) - 1;
        //     }
        // } else if(item == 'Mochi') {
        //     if(mochiAmount.value > 0) {
        //         mochiAmount.value = parseInt(mochiAmount.value) - 1;
        //     }
        // }
        else if(item == 'All') {
            gyozaAmount.value = 0;
            // edamameAmount.value = 0;
            // mochiAmount.value = 0;
    
            gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
        
            for(i = 0; i < gyozaFillingSelections.length; ++i) {
                gyozaFillingSelections[i].remove()
        
            }
        }
    }

    // itemAmount = parseInt(gyozaAmount.value) + parseInt(edamameAmount.value) + parseInt(mochiAmount.value);
    itemAmount = parseInt(gyozaAmount.value);

    
    // edamameDisplayAmount.innerHTML = `${parseInt(edamameAmount.value)}`
    // edamameDisplayPrice.innerHTML = `£${parseInt(edamameAmount.value) * edamamePrice}`

    gyozaDisplayAmount.innerHTML = `${parseInt(gyozaAmount.value)}`
    gyozaDisplayPrice.innerHTML = `£${parseInt(gyozaAmount.value) * gyozaPrice}`

    // mochiDisplayAmount.innerHTML = `${parseInt(mochiAmount.value)}`
    // mochiDisplayPrice.innerHTML = `£${parseInt(mochiAmount.value) * mochiPrice}`
    
    totalDisplayAmount.innerHTML = itemAmount;
    // totalDisplayPrice.innerHTML = `<p>£${(parseInt(gyozaAmount.value) * gyozaPrice) + (parseInt(edamameAmount.value) * edamamePrice) + (parseInt(mochiAmount.value) * mochiPrice)}</p>`
    totalDisplayPrice.innerHTML = `<p>£${(parseInt(gyozaAmount.value) * gyozaPrice)}</p>`
    
    // if(parseInt(gyozaAmount.value) > 0 || parseInt(edamameAmount.value) > 0 || parseInt(mochiAmount.value) > 0) {
    //     goToCart.classList.add('show_go_to_cart')
    // }
    
    if(parseInt(gyozaAmount.value) > 0) {
        goToCart.classList.add('show_go_to_cart')
    } else {
        setTimeout(() => {
            goToCart.classList.remove('show_go_to_cart')
        }, 150);
    }

    goToCartAmount.innerHTML = `Your order <b>(${itemAmount})</b> 🥟`

    if(parseInt(gyozaAmount.value) > 0) {
        emptySign.style.display = 'none';
    } else {
        emptySign.style.display = 'block'
    }

    // if(parseInt(edamameAmount.value) > 0) {
    //     removeEdamameBt.style.display = 'block';
    // } else {
    //     removeEdamameBt.style.display = 'none';
    // }

    if(parseInt(gyozaAmount.value) > 0) {
        removeGyozaBt.style.display = 'block';
    } else {
        removeGyozaBt.style.display = 'none';
    }

    // if(parseInt(mochiAmount.value) > 0) {
    //     removeMochiBt.style.display = 'block';
    // } else {
    //     removeMochiBt.style.display = 'none';
    // }

}



const removeEdamameBt = document.querySelector('.remove_item.edamame');
const removeGyozaBt = document.querySelector('.remove_item.gyoza');
const removeMochiBt = document.querySelector('.remove_item.mochi');


function toggleCart() {
    if(showingCart == false) {
        cartSection.style.transform = 'translate3d(0%, 0%, 0)';
        showingCart = true;
    } else {
        cartSection.style.transform = 'translate3d(100%, 0%, 0)';
        showingCart = false;
    }
}

goToCart.addEventListener('click', toggleCart)









const gyozaFillingMenu = document.querySelector('.gyoza_filling_menu');
let fillings = document.querySelectorAll('.gyoza_filling_menu .quantity input')
const gyozaFillingMenutxt = document.querySelector('.gyoza_filling_menu > p')

const gyozaFillingPrepend = document.querySelector('.gyoza_filling_menu')
let gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
const emptySign = document.querySelector('.empty_sign')

let fillingCounter = 0;

function updateFillingInputs(operation) {

    if(operation == 'add') {

        fillingCounter = fillingCounter + 1;
    
        gyozaFillingPrepend.insertAdjacentHTML('beforeend', `
            <select name="select_filling_${fillingCounter}">
                <option value="" disabled selected>...</option>
                <option value="pork_filling">Pork</option>
                <option value="chicken-filling">Chicken</option>
                <option value="vegan_filling">Vegan</option>
            </select>
        `)
    } else if(operation == 'remove') {
        fillingCounter = fillingCounter - 1;
        
        if(parseInt(gyozaAmount.value) >= 0) {
            gyozaFillingLastSelection = document.querySelector('.gyoza_filling_menu select:first-of-type');
    
            for(i = -1; i < gyozaFillingSelections.length; ++i) {
                if(gyozaFillingLastSelection) {
                    gyozaFillingLastSelection.remove()
                }
            }
        }
    }
}


let removeBts = document.querySelectorAll('.remove_bt')

for(i = 0; i < removeBts.length; ++i) {
    removeBts[i].addEventListener('click', function() {
        removeBts[i].parentElement.remove()
    })
}



