
import {getPicturesContainer} from './mini-images.js';
import {setUploadFormSubmit, onCloseFormPopup} from './form.js';
import {removeFiltersHidden, getRandomImages, getTheMistDiscussedImages, getDefaultImages} from './filter.js';
import {getData} from './api.js';
import './big-picture.js';
import './form.js';

const RERENDER_DELAY = 500;

getData((images) => {
  getPicturesContainer(images);
  removeFiltersHidden();
  getDefaultImages(images, (_.debounce(() => getPicturesContainer(images), RERENDER_DELAY)));
  getRandomImages(images, (_.debounce((randomImages) => getPicturesContainer(randomImages), RERENDER_DELAY)));
  getTheMistDiscussedImages(images, (_.debounce((theMistDiscussedImages) => getPicturesContainer(theMistDiscussedImages), RERENDER_DELAY)));
});
setUploadFormSubmit(onCloseFormPopup);
