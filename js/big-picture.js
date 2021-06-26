import {isEscEvent} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const renderPopup = (data) => {
  for (let counter = socialComments.children.length - 1 ; counter >= 0 ; counter--) {
    const comment = socialComments.children[counter];
    comment.parentElement.removeChild(comment);
  }

  bigPicture.classList.remove('hidden');
  bigPictureImage.setAttribute('src', data.url);
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  for (let counter = data.comments.length - 1 ; counter >= 0 ; counter-- ) {
    const socialComment = document.createElement('li');
    const socialPicture = document.createElement('img');
    const socialText = document.createElement('p');

    socialComment.classList.add('social__comment');

    socialPicture.classList.add('social__picture');
    socialPicture.setAttribute('width', '35');
    socialPicture.setAttribute('height', '35');
    socialPicture.setAttribute('src', data.comments[counter].avatar);
    socialPicture.setAttribute('alt', data.comments[counter].name);

    socialText.classList.add('social_text');
    socialText.textContent = data.comments[counter].message;

    socialComment.appendChild(socialPicture);
    socialComment.appendChild(socialText);

    socialComments.appendChild(socialComment);
  }
};

const closeBigPicturePopup = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bigPictureImage.setAttribute('src', '');
  likesCount.textContent = '';
  commentsCount.textContent = '';
  socialComments.removeChild(socialComment);
}

closeBigPictureButton.addEventListener('click', () => {
  closeBigPicturePopup()
});

document.addEventListener('keydown', (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicturePopup()
  }
});

export {renderPopup};

