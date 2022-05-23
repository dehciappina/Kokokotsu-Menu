






/* LOADING BG + DOCUMENT.READYSTATE */

// const loadingBg = document.getElementById('loading_bg')

const menuCtnr = document.querySelector('.menu_ctnr')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        // loadingBg.style.opacity = 0;
        // loadingBg.style.visibility = 'hidden';

        // setTimeout(() => {
        //     if(window.pageYOffset < window.innerHeight / 1.5) {
        //         window.scrollTo(window.scrollX, window.scrollY + window.innerHeight);
        //     }
        // }, 1600);
    }
}

// const mangaSec = document.querySelector('.manga_sec');
// let windowPosition;

// document.body.onscroll = function() {
//     windowPosition = window.pageYOffset;
//     mangaSec.style.transform = "translateY( -" + windowPosition + "px)"
// }





/* HAMBURGUER MENU */

/* const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--lighta)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--c3)';
        }
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    }
} */
