//首頁Top Choices Swiper
// 引入 Swiper 樣式
import 'swiper/swiper-bundle.css';

// 引入 Swiper 主類別
import Swiper from 'swiper/bundle';

var swiper = new Swiper(".topChoicesSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        992:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768:{
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        520:{
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        320:{
            slidesPerView: 1.5,
            spaceBetween: 30,
        }
    }
});