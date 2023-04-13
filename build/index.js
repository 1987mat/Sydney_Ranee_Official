/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/HeaderScroll.js":
/*!*************************************!*\
  !*** ./src/modules/HeaderScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HeaderScroll {
  constructor() {
    this.aboutWrapper = document.querySelector('.about-wrapper');
    this.header = document.querySelector('header');
    this.sections = document.querySelectorAll('section');
    this.currentSection;
    this.previousScroll;
    this.navbarHeight = this.header.getBoundingClientRect().height;
    this.navLinks = document.querySelector('.main-navigation').querySelectorAll('li');
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 992) {
        this.activeNavLinks();
        this.headerFadeInOut();
        this.hideHeader();
      }
    });
  } // METHODS


  headerFadeInOut() {
    // Header fade in / fade out on all pages
    if (this.aboutWrapper && window.scrollY >= this.aboutWrapper.offsetTop || this.currentSection === 'music') {
      this.header.classList.add('fade');
      this.header.style.boxShadow = '0 6px 6px -6px #282828';
    } else if (this.aboutWrapper && window.scrollY <= this.aboutWrapper.offsetTop || this.currentSection === 'home') {
      this.header.classList.remove('fade');
      this.header.style.boxShadow = '';
    }
  }

  activeNavLinks() {
    this.sections.forEach(section => {
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

  hideHeader() {
    let currentScroll = window.pageYOffset;

    if (currentScroll > this.previousScroll && currentScroll > this.navbarHeight) {
      this.header.classList.add('hide');
    } else {
      this.header.classList.remove('hide');
    }

    this.previousScroll = currentScroll;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderScroll);

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MobileMenu {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navMenu = document.querySelector('nav');
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', e => {
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
    this.navMenu.addEventListener('click', e => {
      if (this.hamburger.classList.contains('clicked') && e.target.tagName == 'A') {
        this.navMenu.classList.remove('open');
        this.hamburger.classList.remove('clicked');
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/modules/MusicSlider.js":
/*!************************************!*\
  !*** ./src/modules/MusicSlider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MusicSlider {
  constructor() {
    this.sliderContainer = document.querySelector('.music-slider-container');
    this.buttons = document.querySelectorAll('[data-music-btn]');
    this.epArray = [{
      title: 'For You',
      link: 'https://open.spotify.com/album/0EUUIRgiTfbRHXkBPkjFkJ'
    }, {
      title: 'Home',
      link: 'https://open.spotify.com/album/0w7iblRytKUfPA0TnrVzao'
    }, {
      title: 'Wake Up & Get It',
      link: 'https://open.spotify.com/album/4VDEeEktiRUqtd3XDVaBqy'
    }, {
      title: 'Go Back',
      link: 'https://open.spotify.com/album/5KW4XBLOewqdZSCWMY5kea'
    }, {
      title: 'Complicated',
      link: 'https://open.spotify.com/album/4q6vJxE7fg3Bkat5DuKn35'
    }, {
      title: 'Drop My Guard',
      link: 'https://open.spotify.com/album/5xylP2HISHgYEUpmbVG5Ft'
    }, {
      title: 'A Dangerous Woman',
      link: 'https://open.spotify.com/album/0vkTbJUyZndlYgQzkUq57n'
    }, {
      title: 'You Could',
      link: 'https://open.spotify.com/album/4GZhFkompZgVug75tIQ754'
    }];

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
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.disabled = true;
        const offset = button.dataset.musicBtn === 'prev' ? -1 : 1;
        let activeSlide = this.sliderContainer.querySelector('[data-active]');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const slideArr = [...this.sliderContainer.children]; // Disable prev button on first slide

        if (offset === -1 && slideArr.indexOf(activeSlide) === 1) {
          prevBtn.style.opacity = '0.5';
          prevBtn.style.pointerEvents = 'none';
        } else {
          prevBtn.style.opacity = '1';
          prevBtn.style.pointerEvents = 'auto';
        } // Disable next button on last slide


        if (offset === 1 && slideArr.indexOf(activeSlide) === slideArr.length - 2) {
          nextBtn.style.opacity = '0.5';
          nextBtn.style.pointerEvents = 'none';
        } else {
          nextBtn.style.opacity = '1';
          nextBtn.style.pointerEvents = 'auto';
        } // Slide logic


        let newActiveIndex = slideArr.indexOf(activeSlide) + offset;

        if (newActiveIndex < 0) {
          newActiveIndex = slideArr.length - 1;
        }

        if (newActiveIndex > slideArr.length - 1) {
          newActiveIndex = 0;
        } // Update DOM


        let newActiveSlide = slideArr[newActiveIndex];
        let newActiveSlideObj = this.epArray[newActiveIndex];
        this.epTitle.innerText = newActiveSlideObj.title;
        this.epLink.href = newActiveSlideObj.link;
        newActiveSlide.dataset.active = true;
        delete activeSlide.dataset.active; // Prevent too many clicks and wait end of transition

        slideArr[newActiveIndex].addEventListener('transitionend', () => {
          button.disabled = false;
        });
      });
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicSlider);

/***/ }),

/***/ "./src/modules/VideoModal.js":
/*!***********************************!*\
  !*** ./src/modules/VideoModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class VideoModal {
  constructor() {
    if (document.querySelector('#videos') !== null) {
      this.modal = document.querySelector('.video-modal');
      this.playButtons = document.querySelectorAll('.fa-play-circle');
      this.closeButton = this.modal.querySelector('.fa-times');
      this.sliderButtons = document.querySelectorAll('[data-carousel-btn]');
      this.iframes = [{
        title: 'Reconnect',
        src: 'https://www.youtube.com/embed/aHqoLg3mi-o'
      }, {
        title: 'Wake Up and Get It',
        src: 'https://www.youtube.com/embed/lzKXf9yU3fk'
      }, {
        title: 'One Night Only',
        src: 'https://www.youtube.com/embed/Yziic3PrjT4'
      }, {
        title: 'Complicated',
        src: 'https://www.youtube.com/embed/PxRN1yWCN8Y'
      }, {
        title: 'Go back',
        src: 'https://www.youtube.com/embed/M1VqplSkMzI'
      }, {
        title: 'Drink With You',
        src: 'https://www.youtube.com/embed/drB4Na2I6Ws'
      }, {
        title: 'La Boys',
        src: 'https://www.youtube.com/embed/4k5ctfJW4ZQ'
      }];
      this.events();
    }
  }

  events() {
    let videoSrc;
    this.playButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        videoSrc = this.iframes[index];
        this.modal.querySelector('iframe').src = videoSrc.src;
        setTimeout(() => this.modal.classList.add('open'), 150);
        this.sliderButtons.forEach(btn => {
          btn.classList.add('hide');
        });
      });
    });
    this.closeButton.addEventListener('click', () => {
      videoSrc = '';
      this.modal.querySelector('iframe').src = videoSrc.src;
      this.modal.classList.remove('open');
      this.sliderButtons.forEach(btn => {
        btn.classList.remove('hide');
      });
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoModal);

/***/ }),

/***/ "./src/modules/VideoSlider.js":
/*!************************************!*\
  !*** ./src/modules/VideoSlider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class VideoSlider {
  constructor() {
    this.sliderContainer = document.querySelector('.slider-container');
    this.buttons = document.querySelectorAll('[data-carousel-btn]');

    if (document.querySelector('.video-slider-wrapper')) {
      this.events();
    }
  }

  events() {
    this.buttons.forEach(button => {
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
        delete activeSlide.dataset.active; // Enable carousel arrows if the animation is done

        videoSlideArr[newIndex].addEventListener('transitionend', () => {
          button.disabled = false;
        });
      });
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoSlider);

/***/ }),

/***/ "./src/modules/animationOnScroll.js":
/*!******************************************!*\
  !*** ./src/modules/animationOnScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationOnScroll": () => (/* binding */ animationOnScroll)
/* harmony export */ });
function animationOnScroll() {
  const elements = document.querySelectorAll('[data-observe]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('fade-in', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }, {
    treshold: 0.7
  });
  [...elements].forEach(el => {
    observer.observe(el);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animationOnScroll */ "./src/modules/animationOnScroll.js");
/* harmony import */ var _modules_MusicSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MusicSlider */ "./src/modules/MusicSlider.js");
/* harmony import */ var _modules_VideoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/VideoSlider */ "./src/modules/VideoSlider.js");
/* harmony import */ var _modules_VideoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/VideoModal */ "./src/modules/VideoModal.js");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _modules_HeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/HeaderScroll */ "./src/modules/HeaderScroll.js");






const slider = new _modules_MusicSlider__WEBPACK_IMPORTED_MODULE_1__["default"]();
const videoSlider = new _modules_VideoSlider__WEBPACK_IMPORTED_MODULE_2__["default"]();
const videoModal = new _modules_VideoModal__WEBPACK_IMPORTED_MODULE_3__["default"]();
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_4__["default"]();
const headerScroll = new _modules_HeaderScroll__WEBPACK_IMPORTED_MODULE_5__["default"]();
(0,_modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_0__.animationOnScroll)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map