class VideoModal {
  constructor() {
    if (document.querySelector('#videos') !== null) {
      this.modal = document.querySelector('.video-modal');
      this.playButtons = document.querySelectorAll('.fa-play-circle');
      this.closeButton = this.modal.querySelector('.fa-times');
      this.sliderButtons = document.querySelectorAll('[data-carousel-btn]');
      this.iframes = [
        {
          title: 'Reconnect',
          src: 'https://www.youtube.com/embed/aHqoLg3mi-o',
        },
        {
          title: 'Wake Up and Get It',
          src: 'https://www.youtube.com/embed/lzKXf9yU3fk',
        },
        {
          title: 'One Night Only',
          src: 'https://www.youtube.com/embed/Yziic3PrjT4',
        },
        {
          title: 'Complicated',
          src: 'https://www.youtube.com/embed/PxRN1yWCN8Y',
        },
        { title: 'Go back', src: 'https://www.youtube.com/embed/M1VqplSkMzI' },

        {
          title: 'Drink With You',
          src: 'https://www.youtube.com/embed/drB4Na2I6Ws',
        },

        {
          title: 'La Boys',
          src: 'https://www.youtube.com/embed/4k5ctfJW4ZQ',
        },
      ];

      this.events();
    }
  }

  events() {
    let videoSrc;

    this.playButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        videoSrc = this.iframes[index];
        this.modal.querySelector('iframe').src = videoSrc.src;
        setTimeout(() => this.modal.classList.add('open'), 100);
        this.sliderButtons.forEach((btn) => {
          btn.classList.add('hide');
        });
      });
    });

    this.closeButton.addEventListener('click', () => {
      videoSrc = '';
      this.modal.querySelector('iframe').src = videoSrc.src;
      this.modal.classList.remove('open');
      this.sliderButtons.forEach((btn) => {
        btn.classList.remove('hide');
      });
    });
  }
}

export default VideoModal;
