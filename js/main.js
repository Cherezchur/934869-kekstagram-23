import {getPicturesContainer} from './mini-images.js';
import {setUploadFormSubmit, onCloseFormPopup} from './form.js';
import {removeFiltersHidden, getRandomImages} from './filter.js';
import {getData} from './api.js';
import './big-picture.js';
import './form.js';

getData((images) => {
  getPicturesContainer(images);
  removeFiltersHidden();
  getRandomImages(images);
});
setUploadFormSubmit(onCloseFormPopup);
