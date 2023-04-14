class MobileMenu {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navMenu = document.querySelector('nav');
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', (e) => {
      if (!e.target.closest('.hamburger').classList.contains('clicked')) {
        this.hamburger.classList.add('clicked');
        this.navMenu.classList.add('open');
        document.documentElement.classList.add('no-scroll');
      } else {
        this.hamburger.classList.remove('clicked');
        this.navMenu.classList.remove('open');
        document.documentElement.classList.remove('no-scroll');
      }
    });

    this.navMenu.addEventListener('click', (e) => {
      if (
        this.hamburger.classList.contains('clicked') &&
        e.target.tagName == 'A'
      ) {
        this.navMenu.classList.remove('open');
        this.hamburger.classList.remove('clicked');
        document.documentElement.classList.remove('no-scroll');
      }
    });
  }
}

export default MobileMenu;
