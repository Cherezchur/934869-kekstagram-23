import {picturesContainer} from './mini-images.js';
import {photoDescriptions} from './data.js';
import {isEscEvent} from './util.js';

const imagesList = picturesContainer.querySelectorAll('.picture');

const addThumbnailClickHandler = (image, data) => {
    const bigPicture = document.querySelector('.big-picture');
    const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const socialComments = bigPicture.querySelector('.social__comments');
    for (let i = socialComments.children.length - 1 ; i >= 0 ; i--) {
        const comment = socialComments.children[i];
        comment.parentElement.removeChild(comment);
    };
    const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
    const commentsLoader = bigPicture.querySelector('.comments-loader');
    const closeButton = bigPicture.querySelector('.cancel');

    image.addEventListener('click', () => {
        bigPicture.classList.remove('hidden');
        bigPictureImage.setAttribute('src', data.url);
        likesCount.textContent = data.likes;
        commentsCount.textContent = data.comments.length;
        socialCommentsCount.classList.add('hidden');
        commentsLoader.classList.add('hidden');
        document.body.classList.add('modal-open');

        for (let i = data.comments.length - 1 ; i >= 0 ; i-- ) {
            const socialComment = document.createElement('li');
            const socialPicture = document.createElement('img');
            const socialText = document.createElement('p');
        
            socialComment.classList.add('social__comment');
        
            socialPicture.classList.add('social__picture');
            socialPicture.setAttribute('width', '35');
            socialPicture.setAttribute('height', '35');
            socialPicture.setAttribute('src', data.comments[i].avatar);
            socialPicture.setAttribute('alt', data.comments[i].name);
        
            socialText.classList.add('social_text');
            socialText.textContent = data.comments[i].message;

            socialComment.appendChild(socialPicture);
            socialComment.appendChild(socialText);

            socialComments.appendChild(socialComment);
        }

        closeButton.addEventListener('click', () => {
            bigPicture.classList.add('hidden');
        });

        document.addEventListener('keydown', () => {
            if(isEscEvent) {
                bigPicture.classList.add('hidden');
            }
        })
    });
}

for (let i = 0 ; i < imagesList.length ; i++) {
    addThumbnailClickHandler(imagesList[i], photoDescriptions[i])
}

