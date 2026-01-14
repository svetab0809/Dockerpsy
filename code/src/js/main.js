const btn = document.querySelectorAll('.btn')
const modalOpen = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-form__close')
const bar = document.querySelector('.bar')
const mobileMenu = document.querySelector('.menu-mobile')
const closeMenuMobile = document.querySelector('.menu-mobile__icon')
const questions = document.querySelectorAll('.question')





btn.forEach(button => {
    button.addEventListener('click', (event) => {
        modalOpen.style.display = 'block';
    });
});
    closeBtn.addEventListener('click', (event) => {
        modalOpen.style.display = 'none';
    })



bar.addEventListener('click', (event) => {
    mobileMenu.style.height = '100%'
});

closeMenuMobile.addEventListener('click', (event) => {
    mobileMenu.style.height = '0'

});

questions.forEach(question => {
    question.addEventListener('click', (event) => {

        const answer = question.querySelector('.question__answer')
        const answerCssClasses = answer.classList
        const cross = question.querySelector('.question__img')

        let answerHeight = `${answer.scrollHeight}px`
        let crossDegree = 45

       if(answerCssClasses.contains('question_active')) {
           answerCssClasses.remove('question_active')
           answerHeight = 0
           crossDegree = 0
       } else {
           answerCssClasses.add('question_active')
       }
        cross.style.transform = `rotate(${crossDegree}deg)`
       answer.style.height = answerHeight

    });
});

const sliderReviews = new Swiper('.reviews', {
    navigation: {
        nextEl: '.reviews__nav-next',
        prevEl: '.reviews__nav-prev'
    },

    simulateTouch:true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,

   mousewheel: {
        sensitivity: 1,
   },

 slidesPerView:2,
    spaceBetween: 30,
   loop: true,
    speed:500,
    autoplay: {
        delay: 1000,
  },
    effect: 'slide',

breakpoints: {
344: {slidesPerView:1},

    1024: {slidesPerView:2},
}

});

const educationSlider = new Swiper ('.education', {
    navigation: {
        nextEl: '.education__nav_next',
        prevEl: '.education__nav_prev'
    },
    loop: true,
    speed:500,
    mousewheel: {
        sensitivity: 1,
    },
    simulateTouch:true,
    touchRatio:1,
    touchAngle:45,
    grabCursor:true,
    autoplay: {
        delay: 1000,
    },
})

const forms = document.querySelectorAll('form')

for (let form of forms) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form)

       fetch
    })
}







