class HeaderScroll {
  constructor() {
    this.header = document.querySelector('header');
    this.hasScrolled;
    this.lastScrollTop = 0;
    this.navbarHeight = this.header.getBoundingClientRect().height;
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 992) {
        this.hasScrolled = true;

        // Check condition every 150ms
        setInterval(() => {
          if (this.hasScrolled) {
            this.scroll();
            this.hasScrolled = false;
          }
        }, 150);
      }
    });
  }

  scroll() {
    let currentScroll = window.pageYOffset;
    if (
      currentScroll > this.lastScrollTop &&
      currentScroll > this.navbarHeight
    ) {
      // Scroll down - hide navbar
      this.header.classList.add('hide');
    } else {
      // Scroll up - show navbar
      this.header.classList.remove('hide');
    }

    this.lastScrollTop = currentScroll;
  }
}

export default HeaderScroll;
