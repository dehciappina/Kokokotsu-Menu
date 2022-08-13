const edamamePrice = 3;
const gyozaPrice = 10;
const mochiPrice = 4;

let finalPrice = 0;
let itemAmount;

const gyozaAmount = document.getElementById('gyozaAmount');

const porkGyozaAmount = document.getElementById('porkGyozaAmount');
const chickenGyozaAmount = document.getElementById('chickenGyozaAmount');
const vegetableGyozaAmount = document.getElementById('vegetableGyozaAmount');
const prawnGyozaAmount = document.getElementById('prawnGyozaAmount');
const duckGyozaAmount = document.getElementById('duckGyozaAmount');

const goToCart = document.querySelector('.go_to_cart')
const goToCartAmount = document.querySelector('.go_to_cart .counter')

const cartSection = document.querySelector(".cart_sec")
let showingCart = false;

let gyozaDisplayAmount = document.querySelector('.gyoza_display_amount');
let gyozaDisplayPrice = document.querySelector('.gyoza_display_price');

let totalDisplayAmount = document.querySelector('.total_display_amount');
let totalDisplayPrice = document.querySelector('.total_display_price');



function updateCart(operation, item) {
    if(operation == 'add') {
        if(item == 'PorkGyoza') {
            porkGyozaAmount.value = parseInt(porkGyozaAmount.value) + 1;
            updateFillingInputs('add', 'pork')
        } else if(item == 'ChickenGyoza') {
            chickenGyozaAmount.value = parseInt(chickenGyozaAmount.value) + 1;
            updateFillingInputs('add', 'chicken')
        } else if(item == 'VegetableGyoza') {
            vegetableGyozaAmount.value = parseInt(vegetableGyozaAmount.value) + 1;
            updateFillingInputs('add', 'vegetable')
        } else if(item == 'PrawnGyoza') {
            prawnGyozaAmount.value = parseInt(prawnGyozaAmount.value) + 1;
            updateFillingInputs('add', 'prawn')
        } else if(item == 'DuckGyoza') {
            duckGyozaAmount.value = parseInt(duckGyozaAmount.value) + 1;
            updateFillingInputs('add', 'duck')
        }

    } else if(operation == 'remove') {
        if(item == 'PorkGyoza') {
            if(parseInt(porkGyozaAmount.value) > 0) {
                porkGyozaAmount.value = parseInt(porkGyozaAmount.value) - 1;
                updateFillingInputs('remove', 'pork')
            }
        } else if(item == 'ChickenGyoza') {
            if(parseInt(chickenGyozaAmount.value) > 0) {
                chickenGyozaAmount.value = parseInt(chickenGyozaAmount.value) - 1;
                updateFillingInputs('remove', 'chicken')
            }
        } else if(item == 'VegetableGyoza') {
            if(parseInt(vegetableGyozaAmount.value) > 0) {
                vegetableGyozaAmount.value = parseInt(vegetableGyozaAmount.value) - 1;
                updateFillingInputs('remove', 'vegetable')
            }
        } else if(item == 'PrawnGyoza') {
            if(parseInt(prawnGyozaAmount.value) > 0) {
                prawnGyozaAmount.value = parseInt(prawnGyozaAmount.value) - 1;
                updateFillingInputs('remove', 'prawn')
            }
        } else if(item == 'DuckGyoza') {
            if(parseInt(duckGyozaAmount.value) > 0) {
                duckGyozaAmount.value = parseInt(duckGyozaAmount.value) - 1;
                updateFillingInputs('remove', 'duck')
            }
        } else if(item == 'All') {

            for(i = 0; itemAmount > i; i++) {
                updateCart('remove', 'PorkGyoza')
                updateCart('remove', 'ChickenGyoza')
                updateCart('remove', 'VegetableGyoza')
                updateCart('remove', 'PrawnGyoza')
                updateCart('remove', 'DuckGyoza')
            }
    
            // gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
        
            // for(i = 0; i < gyozaFillingSelections.length; ++i) {
            //     gyozaFillingSelections[i].remove()
        
            // }
        } else if( item == 'last') {
            updateFillingInputs('remove', 'last')
        }
        
    }

    itemAmount = parseInt(porkGyozaAmount.value) + parseInt(chickenGyozaAmount.value) + parseInt(vegetableGyozaAmount.value) + parseInt(prawnGyozaAmount.value) + parseInt(duckGyozaAmount.value);

    gyozaDisplayAmount.innerHTML = `${itemAmount}`
    gyozaDisplayPrice.innerHTML = `£${itemAmount * gyozaPrice}`
    
    totalDisplayAmount.innerHTML = itemAmount;
    totalDisplayPrice.innerHTML = `<p>£${itemAmount * gyozaPrice}</p>`
    
    if(itemAmount > 0) {
        goToCart.classList.add('show_go_to_cart')
    } else {
        setTimeout(() => {
            goToCart.classList.remove('show_go_to_cart')
        }, 150);
    }

    goToCartAmount.innerHTML = `Your order <b>(${itemAmount})</b> 🥟`

    if(itemAmount > 0) {
        emptySign.style.display = 'none';
    } else {
        emptySign.style.display = 'block'
    }

    // if(itemAmount <= 0) {
    //     removeGyozaBt.style.display = 'block';
    // } else {
    //     removeGyozaBt.style.display = 'none';
    // }
}

// const removeGyozaBt = document.querySelector('.remove_item.gyoza');


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







let dataPork = document.querySelector('input[value="Pork"');
let dataChicken = document.querySelector('input[value="Pork"')

const gyozaFillingMenu = document.querySelector('.gyoza_filling_menu');
let fillings = document.querySelectorAll('.gyoza_filling_menu .quantity input')
const gyozaFillingMenutxt = document.querySelector('.gyoza_filling_menu > p')

const gyozaFillingPrepend = document.querySelector('.gyoza_filling_menu')
let gyozaFillingSelections = document.querySelectorAll('.gyoza_filling_menu select')
const emptySign = document.querySelector('.empty_sign')

let fillingCounter = 0;

function updateFillingInputs(operation, filling) {

    if(operation == 'add') {

        fillingCounter = fillingCounter + 1;
    
        if(filling == 'pork') {
            gyozaFillingPrepend.insertAdjacentHTML('afterbegin', `
                <input class="filling_output" name="select_filling_${fillingCounter}" value="Pork" readonly />
            `)
        } else if(filling == 'chicken') {
            gyozaFillingPrepend.insertAdjacentHTML('afterbegin', `
                <input class="filling_output" name="select_filling_${fillingCounter}" value="Chicken" readonly />
            `)
        } else if(filling == 'vegetable') {
            gyozaFillingPrepend.insertAdjacentHTML('afterbegin', `
                <input class="filling_output" name="select_filling_${fillingCounter}" value="Vegetable" readonly />
            `)
        } else if(filling == 'prawn') {
            gyozaFillingPrepend.insertAdjacentHTML('afterbegin', `
                <input class="filling_output" name="select_filling_${fillingCounter}" value="Prawn" readonly />
            `)
        } else if(filling == 'duck') {
            gyozaFillingPrepend.insertAdjacentHTML('afterbegin', `
                <input class="filling_output" name="select_filling_${fillingCounter}" value="Duck" readonly />
            `)
        }
    } else if(operation == 'remove') {
        fillingCounter = fillingCounter - 1;
        

        if(filling == 'pork') {
            if(parseInt(porkGyozaAmount.value) >= 0) {
                if(document.querySelector('input[value="Pork"]')) {
                    document.querySelector('input[value="Pork"]').remove()
                }
            }
        } else if(filling == 'chicken') {
            if(parseInt(chickenGyozaAmount.value) >= 0) {
                if(document.querySelector('input[value="Chicken"]')) {
                    document.querySelector('input[value="Chicken"]').remove()
                }
            }
        } else if(filling == 'vegetable') {
            if(parseInt(vegetableGyozaAmount.value) >= 0) {
                if(document.querySelector('input[value="Vegetable"]')) {
                    document.querySelector('input[value="Vegetable"]').remove()
                }
            }
        } else if(filling == 'prawn') {
            if(parseInt(prawnGyozaAmount.value) >= 0) {
                if(document.querySelector('input[value="Prawn"]')) {
                    document.querySelector('input[value="Prawn"]').remove()
                }
            }
        } else if(filling == 'duck') {
            if(parseInt(duckGyozaAmount.value) >= 0) {
                if(document.querySelector('input[value="Duck"]')) {
                    document.querySelector('input[value="Duck"]').remove()
                }
            }
        }
    
        // for(i = -1; i < gyozaFillingSelections.length; ++i) {
        //     if(gyozaFillingLastSelection) {
        //         gyozaFillingLastSelection.remove()
        //     }
        // }
    }
}


let removeBts = document.querySelectorAll('.remove_bt')

for(i = 0; i < removeBts.length; ++i) {
    removeBts[i].addEventListener('click', function() {
        removeBts[i].parentElement.remove()
    })
}



