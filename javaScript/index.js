$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 70,
  autoplay: true,
  autoplayTimeout: 5000,
  autoWidth: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1800: {
      items: 3,
    },
  },
});
