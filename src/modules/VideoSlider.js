class VideoSlider {
  constructor() {
    this.sliderContainer = document.querySelector('.slider-container');
    this.buttons = document.querySelectorAll('[data-carousel-btn]');

    if (document.querySelector('.video-slider-wrapper')) {
      this.events();
    }
  }

  events() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', () => {
        button.disabled = true;
        const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
        const activeSlide = this.sliderContainer.querySelector('[data-active]');
        const videoSlideArr = [...this.sliderContainer.children];
        let newIndex = videoSlideArr.indexOf(activeSlide) + offset;

        if (newIndex < 0) {
          newIndex = videoSlideArr.length - 1;
        }

        if (newIndex > videoSlideArr.length - 1) {
          newIndex = 0;
        }

        videoSlideArr[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        // Enable carousel arrows if the animation is done
        videoSlideArr[newIndex].addEventListener('transitionend', () => {
          button.disabled = false;
        });
      });
    });
  }
}

export default VideoSlider;
