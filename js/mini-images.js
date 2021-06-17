import {photoDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureListFragment = document.createDocumentFragment();

// оборачиваем в функцию, которую импортируем колбеком в big-picture

const getPicturesContainer = (data) => {
  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', url);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });
  
  picturesContainer.appendChild(pictureListFragment);
}

getPicturesContainer(photoDescriptions);
export {picturesContainer};