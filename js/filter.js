import { getRandomInteger } from './util.js';

const buttonConteiner = document.querySelector('.img-filters__form');
const buttons = Array.from(buttonConteiner.children);
const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const removeFiltersHidden = () => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');
};

const assigningActiveClass = (activeButton) => {
  buttons.forEach((element) => {
    element.className = 'img-filters__button';
  });
  activeButton.classList.add('img-filters__button--active');
};

const getDefaultImages = (images, cb) => {

  buttonFilterDefault.addEventListener('click', (evt) => {
    assigningActiveClass(evt.target);
    cb();
  });
};

const getRandomImages = (images, cb) => {

  buttonFilterRandom.addEventListener('click', (evt) => {

    assigningActiveClass(evt.target);

    const randomImages = [];
    let imagesArray = images.slice();

    while(randomImages.length < 10) {

      const randomIndex = getRandomInteger(0, imagesArray.length - 1);
      randomImages.push(imagesArray[randomIndex]);

      imagesArray = imagesArray.filter((element) => imagesArray.indexOf(element) !== randomIndex);
    }

    cb(randomImages);
  });
};

const getTheMistDiscussedImages = (images, cb) => {

  buttonFilterDiscussed.addEventListener('click', (evt) => {

    assigningActiveClass(evt.target);

    const theMistDiscussedImages = images.slice();

    const getCommentsNumber = (element) => element.comments.length;

    const comparingCommentsNumber = (imagesA, imagesB) => {

      const rankA = getCommentsNumber(imagesA);
      const rankB = getCommentsNumber(imagesB);

      return rankB - rankA;
    };

    theMistDiscussedImages.sort(comparingCommentsNumber);
    cb(theMistDiscussedImages);
  });
};


export {removeFiltersHidden, getRandomImages, getTheMistDiscussedImages, getDefaultImages};
