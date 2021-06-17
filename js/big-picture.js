import {picturesContainer} from './mini-images.js';
import {photoDescriptions} from './data.js';

const imagesList = picturesContainer.querySelectorAll('.picture');

const addThumbnailClickHandler = (image, data) => {
    const bigPicture = document.querySelector('.big-picture');
    const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
    const likesCount = bigPicture.querySelector('.likes-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const socialComments = bigPicture.querySelector('.social__comments');

    image.addEventListener('click', () => {
        bigPicture.classList.remove('hidden');
        bigPictureImage.setAttribute('src', data.url);
        likesCount.textContent = data.likes;
        commentsCount.textContent = data.comments.length;

        for (let i = socialComments.children.length - 1 ; i >= 0 ; i--) {
            console.log(socialComments.children[i]);
            const comment = socialComments.children[i];
            comment.parentElement.removeChild(comment);
        };

        console.log(bigPictureImage);
        console.log(data);
        console.log(image);
    });
}

for (let i = 0 ; i < imagesList.length ; i++) {
    addThumbnailClickHandler(imagesList[i], photoDescriptions[i])
}

