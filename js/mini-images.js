import {photoDescriptions} from './data.js';
import { renderPopup } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureListFragment = document.createDocumentFragment();

const getPicturesContainer = (data) => {
  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', url);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => {
      renderPopup({url, likes, comments});
    })

    pictureListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(pictureListFragment);
};

getPicturesContainer(photoDescriptions);
