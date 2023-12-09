//首页顶部推荐文章轮播图
var ark_swiper = new Swiper("#ark-swiper-container",{
  direction: "horizontal",
  loop: !0,
  grabCursor: !0,
  updateOnWindowResize: !0,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: !0,
  pagination: {
      el: ".swiper-pagination",
      clickable: !0
  },
  autoplay: {
      delay: 2e3,
      pauseOnMouseEnter: !0
  }
})
