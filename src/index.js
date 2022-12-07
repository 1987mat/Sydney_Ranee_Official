import { animationOnScroll } from './modules/animationOnScroll';
import MusicSlider from './modules/MusicSlider';
import VideoSlider from './modules/VideoSlider';
import VideoModal from './modules/VideoModal';
import MobileMenu from './modules/MobileMenu';
import HeaderScroll from './modules/HeaderScroll';

const slider = new MusicSlider();
const videoSlider = new VideoSlider();
const videoModal = new VideoModal();
const mobileMenu = new MobileMenu();
const headerScroll = new HeaderScroll();
animationOnScroll();
