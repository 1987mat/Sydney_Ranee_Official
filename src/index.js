import { animationOnScroll } from './modules/animationOnScroll';
import HeaderScroll from './modules/HeaderScroll';
import MusicSlider from './modules/MusicSlider';
import VideoSlider from './modules/VideoSlider';
import VideoModal from './modules/VideoModal';
import MobileMenu from './modules/MobileMenu';
import ActiveNavLinks from './modules/ActiveNavLinks';

const headerScroll = new HeaderScroll();
const slider = new MusicSlider();
const videoSlider = new VideoSlider();
const videoModal = new VideoModal();
const mobileMenu = new MobileMenu();
const activeLinks = new ActiveNavLinks();
animationOnScroll();
