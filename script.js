document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('[data-scroll-container]') || document.body;
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: 'is-inview'
    });
  });