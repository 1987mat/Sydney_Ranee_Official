class MusicSlider {
  constructor() {
    this.sliderContainer = document.querySelector('.music-slider-container');
    this.buttons = document.querySelectorAll('[data-music-btn]');
    this.epArray = [
      {
        title: 'Home',
        link: 'https://open.spotify.com/album/0w7iblRytKUfPA0TnrVzao',
      },
      {
        title: 'Wake Up & Get It',
        link: 'https://open.spotify.com/album/4VDEeEktiRUqtd3XDVaBqy',
      },
      {
        title: 'Go Back',
        link: 'https://open.spotify.com/album/5KW4XBLOewqdZSCWMY5kea',
      },
      {
        title: 'Complicated',
        link: 'https://open.spotify.com/album/4q6vJxE7fg3Bkat5DuKn35',
      },
      {
        title: 'Drop My Guard',
        link: 'https://open.spotify.com/album/5xylP2HISHgYEUpmbVG5Ft',
      },
      {
        title: 'A Dangerous Woman',
        link: 'https://open.spotify.com/album/0vkTbJUyZndlYgQzkUq57n',
      },
      {
        title: 'You Could',
        link: 'https://open.spotify.com/album/4GZhFkompZgVug75tIQ754',
      },
    ];

    if (document.querySelector('.music-content-wrapper')) {
      this.events();
    }
  }

  events() {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector('.music-content-wrapper') !== null) {
        this.epTitle = document.querySelector('.ep-title');
        this.epLink = document.querySelector('.spotify-btn');
        this.epTitle.innerText = this.epArray[0].title;
        this.epLink.href = this.epArray[0].link;
      }
    });

    this.buttons.forEach((button) => {
      button.addEventListener('click', () => {
        button.disabled = true;
        const offset = button.dataset.musicBtn === 'prev' ? -1 : 1;
        let activeSlide = this.sliderContainer.querySelector('[data-active]');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const slideArr = [...this.sliderContainer.children];

        // Disable prev button on first slide
        if (offset === -1 && slideArr.indexOf(activeSlide) === 1) {
          prevBtn.style.opacity = '0.5';
          prevBtn.style.pointerEvents = 'none';
        } else {
          prevBtn.style.opacity = '1';
          prevBtn.style.pointerEvents = 'auto';
        }

        // Disable next button on last slide
        if (
          offset === 1 &&
          slideArr.indexOf(activeSlide) === slideArr.length - 2
        ) {
          nextBtn.style.opacity = '0.5';
          nextBtn.style.pointerEvents = 'none';
        } else {
          nextBtn.style.opacity = '1';
          nextBtn.style.pointerEvents = 'auto';
        }

        // Slide logic
        let newActiveIndex = slideArr.indexOf(activeSlide) + offset;

        if (newActiveIndex < 0) {
          newActiveIndex = slideArr.length - 1;
        }

        if (newActiveIndex > slideArr.length - 1) {
          newActiveIndex = 0;
        }

        // Update DOM
        let newActiveSlide = slideArr[newActiveIndex];
        let newActiveSlideObj = this.epArray[newActiveIndex];
        this.epTitle.innerText = newActiveSlideObj.title;
        this.epLink.href = newActiveSlideObj.link;
        newActiveSlide.dataset.active = true;
        delete activeSlide.dataset.active;

        // Prevent too many clicks and wait end of transition
        slideArr[newActiveIndex].addEventListener('transitionend', () => {
          button.disabled = false;
        });
      });
    });
  }
}

export default MusicSlider;
