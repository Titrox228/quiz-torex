document.addEventListener("DOMContentLoaded", () => {
    var swiper_pc = new Swiper('.swiper.pc', {
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
    });
    var swiper_mob = new Swiper('.swiper.mob', {
        navigation: {
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
        },
    });
})