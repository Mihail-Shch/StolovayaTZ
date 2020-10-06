const mail = document.querySelector(".header__mail");
const mailBtn = document.querySelector(".intro__mailBtn");
const phone = document.querySelector(".header__phone");
const Close = document.querySelector(".modal__hide");
const modal = document.querySelector("#modal");
const phoneModal = document.querySelector(".intro__phoneModal");
const ModalCat = document.querySelector(".modalCategories");
const Search = document.querySelector(".intro__search-text");
const ModalItem = document.querySelectorAll(".modalCat-item");
const tabletBurger = document.querySelector("#tabletBurger");
const tabletNav = document.querySelector(".tabletNav");
const burgerSpan = document.querySelectorAll(".header__burger-span");
const mobileBurger = document.querySelector("#mobileBurger");
const mobileNav = document.querySelector(".mobileNav");
const mobileSearch = document.querySelector(".intro__mobileSearch");
const footerCategory = document.querySelectorAll(".footer__category");
const footerContacts = document.querySelector(".footer__contacts");
const CatsTrigger = document.querySelector(".intro__categories-span");
const AdaptiveCats = document.querySelector("#AdaptiveCats");
const closeAdaptiveCats = document.querySelector(".modal__adaptiveCatsCloseBtn");
const HotCatsTrigger = document.querySelector("#HotCatsTrigger");
const HotAdaptiveCats = document.querySelector("#hotAdaptiveCats");
const HotAdaptiveCatsClose = document.querySelector(".modal__adaptiveHotCatsCloseBtn");
const ColdCatsTrigger = document.querySelector("#ColdCatsTrigger");
const ColdAdaptiveCats = document.querySelector("#coldAdaptiveCats");
const ColdAdaptiveCatsClose = document.querySelector(".modal__adaptiveColdCatsCloseBtn");


ColdAdaptiveCatsClose.addEventListener('click', function() {
    ColdAdaptiveCats.classList.remove('ulActive');
});

ColdCatsTrigger.addEventListener('click', function() {
    ColdAdaptiveCats.classList.add('ulActive');
})

HotCatsTrigger.addEventListener('click', function() {
    HotAdaptiveCats.classList.add('ulActive');
})

HotAdaptiveCatsClose.addEventListener('click', function() {
    HotAdaptiveCats.classList.remove('ulActive');
});

CatsTrigger.addEventListener('click', function() {
    AdaptiveCats.classList.add('ulActive');
})

closeAdaptiveCats.addEventListener('click', function() {
    AdaptiveCats.classList.remove('ulActive');
})

footerCategory.forEach(function(item){
    item.addEventListener('click', function() {
        item.classList.toggle('footer__categoryActive');
    })
})

tabletBurger.addEventListener('click', function() {
    tabletNav.classList.toggle('navActive');
    burgerSpan.forEach(function(span) {
        span.classList.toggle('burgerActive');
    })
})

mobileBurger.addEventListener('click', function() {
    mobileNav.classList.toggle('navActive');
    burgerSpan.forEach(function(span) {
        span.classList.toggle('burgerActive');
    })
})

phone.addEventListener('click', function() {
    tabletNav.classList.remove('navActive');
    burgerSpan.forEach(function(item) {
        item.classList.remove('burgerActive');
    })
})



ModalItem.forEach(function(item) {
    let text = item.textContent;
    item.addEventListener('click', function() {
        ModalCat.style.display="none";
        Search.innerHTML = text;
    })
});

function closepopup(id) {
    let popup = document.getElementById(id);
    popup.style.display = popup.style.display == "none"? "block" : "none";
}

function remove() {
    modal.style.display='none';
    phone.classList.remove('PhoneActive');
}

phoneModal.addEventListener('click', remove);

Close.addEventListener('click', remove);

mail.addEventListener('click', function() {
    mail.classList.toggle('MailActive');
    mailBtn.classList.toggle('mailBtnActive');
});

mailBtn.addEventListener('click', function() {
    if (mailBtn.classList.contains('mailBtnActive')) {
        mailBtn.classList.remove('mailBtnActive')}
        else {
            mailBtn.style.display='none';
        };
    mail.classList.remove('MailActive');
});

phone.addEventListener('click', function() {
    phone.classList.toggle('PhoneActive');
});

 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


if (window.innerWidth < 767) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}















