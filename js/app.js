let _ = document;

//cursor
let cusror = _.querySelector('.cursor')
window.addEventListener('click', (event)=>{
    cusror.style.left = event.clientX - 9 + 'px';
    cusror.style.top = event.clientY - 9 + 'px';
})


// themeChnager

let circleSec = _.querySelector('.circle-sec');
let themeChanger = _.querySelector('.theme-changer');
let goToDark = _.querySelectorAll('.go-to-dark');
let goToDArky = _.querySelectorAll('.go-to-darky');
let allSpan = _.querySelectorAll('span');
let allP = _.querySelectorAll('p');
let allH2 = _.querySelectorAll('h2');
let faTimes = _.querySelector('.fa-times');
let allA = _.querySelectorAll('a');
let allLi = _.querySelectorAll('li');
let footerSmoke = _.querySelector('.footer-smoke');
let searchInputTag = _.querySelector('.search-item input');
let opMidd = _.querySelector('.op-midd');
let adva = _.querySelector('.advantages');
circleSec.addEventListener('click', ()=>{
    circleSec.classList.toggle('move-in');
    themeChanger.classList.toggle('back-g');
    if (packed.classList.contains('dark')){
        packed.classList.remove('dark')
    }
    searchInputTag.classList.toggle('go-to-light')
    adva.classList.toggle('newasvan');
    footerSmoke.classList.toggle('dis');
    opMidd.classList.toggle('.active-op');
    opMidd.classList.toggle('.in-active-op');
    allSpan.forEach((span)=>{
        span.classList.toggle('go-to-light');
    })
    allP.forEach((span)=>{
        span.classList.toggle('go-to-light');
    })
    allH2.forEach((span)=>{
        span.classList.toggle('go-to-light');
    })
    allA.forEach((span)=>{
        span.classList.toggle('go-to-light');
    })
    allLi.forEach((span)=>{
        span.classList.toggle('go-to-light');
    })
    faTimes.classList.toggle('go-to-light');
    goToDark.forEach((dark)=>{
        dark.classList.toggle('dark');
    })
    goToDArky.forEach((darky)=>{
        darky.classList.toggle('darky');
    })
    toggle.children.item(0).classList.toggle('go-to-light');

})


// header + home
let searchItem = _.querySelector('.search-item');
let inp = _.querySelector('.search-item input');
let toggle = _.querySelector('.toggle');
let packed = _.querySelector('.packed');
let close = _.querySelector('.packed i');
let header = _.querySelector('header');
let leaf = _.querySelector('.leaf');
let logo = _.querySelector('.logo');
let menuLi = _.querySelectorAll('.menu li a');
let homeSectionElement = _.querySelector('.home');
searchItem.style.setProperty("--check", "0");
inp.addEventListener('focus', ()=>{
    searchItem.style.setProperty("--check", "1");
})

inp.addEventListener('focusout', ()=>{
    searchItem.style.setProperty("--check", "0");
})

toggle.addEventListener('click', ()=>{
    changeEl();
})
close.addEventListener('click', ()=>{
    changeEl();
})
menuLi.forEach((menu)=>{
    menu.addEventListener('click', ()=>{
        changeEl();
    })
})
function changeEl(){
    if (homeSectionElement.classList.contains('dark')){
        packed.classList.toggle('dark');
    }
    packed.classList.toggle('change');
    checkMenu.classList.toggle('change-dis');
    logo.classList.toggle('change-logo');
    header.classList.toggle('change-hedaer');
}
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0);
    leaf.classList.toggle('changeOp', window.scrollY > 0);
})


let index1 = _.querySelector('.animate1 h2');
let animate1 = _.querySelector('.animate1');
index1.style.setProperty("--index1", "changeOpacity 6.5s ease-in-out forwards");
animate1.style.setProperty("--animate1", "5.5s");

let index2 = _.querySelector('.animate2 .first-item');
let animate2 = _.querySelector('.animate2');
index2.style.setProperty("--index2", "changeOpacity 1s ease-in-out forwards");
animate2.style.setProperty("--animate2", "2s");

let index3 = _.querySelector('.animate3 p');
let animate3 = _.querySelector('.animate3');
index3.style.setProperty("--index3", "changeOpacity 4s ease-in-out forwards");
animate3.style.setProperty("--animate3", "3s");


let index4 = _.querySelector('.animate4 a');
let animate4 = _.querySelector('.animate4');
index4.style.setProperty("--index4", "changeOpacity 8s ease-in-out forwards");
animate4.style.setProperty("--animate4", "7s");


let index5 = _.querySelector('.animate5 .home-logo');
let animate5 = _.querySelector('.animate5');
index5.style.setProperty("--index5", "changeOpacity 9s ease-in-out forwards");
animate5.style.setProperty("--animate5", "8s");
let sweet = _.querySelector('.sweet-logo');
let person = _.querySelector('.person-logo');
let heart = _.querySelector('.heart-logo');
let time = _.querySelector('.time-logo');
let contentBx = _.querySelectorAll('.content-Bx');

function changeOp(){
    sweet.classList.toggle('hide');
    person.classList.toggle('hide');
    heart.classList.toggle('hide');
    time.classList.toggle('hide');
    contentBx.forEach((content)=>{
    content.classList.toggle('hide');
    })
}

changeOp();
setTimeout(()=>{
    changeOp();
}, 10000)



// ------


let checkBox = _.querySelector('.check-box');
let checkDesc = _.querySelector('.select .check-desc')
checkBox.addEventListener('click', ()=>{
    checkBox.classList.toggle('allgone');
})
checkDesc.addEventListener('click', ()=>{
    checkBox.classList.toggle('allgone');
})


// sec6
$(document).ready(function(){


    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');
        let x = _.querySelector(".dish .image")
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(200);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(200);
        }

    });

});
// sec7
let closeBtns = _.querySelectorAll('.header .open');
let contents = _.querySelectorAll('.content');

for (let i of closeBtns.entries()){
    i[1].addEventListener('click', ()=>{
        i[1].classList.toggle('rotate');
        contents.forEach((cnt)=>{
            if (cnt !== i[1].parentElement.parentElement.children[1]) 
            cnt.classList.remove('show')
        })
        i[1].parentElement.parentElement.children[1].classList.toggle('show');
    })
}

// sec8
let Percent1 = _.querySelector(".percent1");
let Percent2 = _.querySelector(".percent2");
let Percent3 = _.querySelector(".percent3");
let count = 0;

let Interval1 = setInterval(() => {
    Percent1.innerHTML = `${count}<span>%</span>`;
    let calc = 440 - (440 * count ) / 100;
    let next = Percent1.parentElement.nextElementSibling.children.item(1);
    next.style.strokeDashoffset = calc;
    count ++;
    if (count > 87) clearInterval(Interval1);
}, 50);

let Interval2 = setInterval(() => {
    Percent2.innerHTML = `${count}<span>%</span>`;
    let calc = 440 - (440 * count ) / 100;
    let next = Percent2.parentElement.nextElementSibling.children.item(1);
    next.style.strokeDashoffset = calc;
    count ++;
    if (count > 96) clearInterval(Interval2);
}, 50);

let Interval3 = setInterval(() => {
    Percent3.innerHTML = `${count}<span>%</span>`;
    let calc = 440 - (440 * count ) / 100;
    let next = Percent3.parentElement.nextElementSibling.children.item(1);
    next.style.strokeDashoffset = calc;
    count ++;
    if (count > 91) clearInterval(Interval3);
}, 50);

// slider 
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});



//check menu
let checkMenu = _.querySelector('.checkmenu');
checkMenu.addEventListener('click', ()=>{
    checkMenu.classList.toggle('change-dis');
    packed.classList.toggle('change');
})