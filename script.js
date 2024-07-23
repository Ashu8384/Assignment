function changeImage(imageSrc, width, height) {
    const mainImage=document.getElementById("main-image");
    mainImage.src = imageSrc;
    mainImage.style.width = '100%';
    mainImage.style.height = '400px'
  }


  var swiper = new Swiper(".img_slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });