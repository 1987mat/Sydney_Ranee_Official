class HeaderScroll {
  constructor() {
    this.aboutWrapper = document.querySelector('.about-wrapper');
    this.header = document.querySelector('header');
    this.sections = document.querySelectorAll('section');
    this.currentSection;
    this.navLinks = document
      .querySelector('.main-navigation')
      .querySelectorAll('li');

    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 992) {
        this.activeNavLinks();
        this.headerFadeInOut();
      }
    });
  }

  // METHODS
  headerFadeInOut() {
    // Header fade in / fade out on all pages
    if (
      (this.aboutWrapper && window.scrollY >= this.aboutWrapper.offsetTop) ||
      this.currentSection === 'music'
    ) {
      this.header.classList.add('fade');
    } else if (
      (this.aboutWrapper && window.scrollY <= this.aboutWrapper.offsetTop) ||
      this.currentSection === 'home'
    ) {
      this.header.classList.remove('fade');
    }
  }

  activeNavLinks() {
    this.sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop) {
        this.currentSection = section.getAttribute('id');
      }
    });

    this.navLinks.forEach((link, index) => {
      // Apply active class only on links that point to homepage sections
      if (index <= 4) {
        let linkItem = link.firstElementChild;
        linkItem.classList.remove('active');
        if (linkItem.classList.contains(this.currentSection)) {
          linkItem.classList.add('active');
        }
      }
    });
  }
}

export default HeaderScroll;
