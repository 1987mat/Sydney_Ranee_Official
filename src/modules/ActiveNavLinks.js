class ActiveNavLinks {
  constructor() {
    this.sections = document.querySelectorAll('section');
    this.navLinks = document
      .querySelector('.main-navigation')
      .querySelectorAll('li');
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      let currentSection;

      if (window.innerWidth >= 992) {
        this.sections.forEach((section) => {
          if (window.scrollY >= section.offsetTop) {
            currentSection = section.getAttribute('id');
          }
        });

        this.navLinks.forEach((link, index) => {
          // Apply active class only on links that point to sections in homepage
          if (index <= 4) {
            let linkItem = link.firstElementChild;
            linkItem.classList.remove('active');
            if (linkItem.classList.contains(currentSection)) {
              linkItem.classList.add('active');
            }
          }
        });
      }
    });
  }
}

export default ActiveNavLinks;
