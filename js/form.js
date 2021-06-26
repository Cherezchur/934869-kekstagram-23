import {isEscEvent} from './util.js';

const uploadField = document.querySelector('#upload-file');
const newFilePopup = document.querySelector('.img-upload__overlay');
const closeButtonNewFilePopup = newFilePopup.querySelector('.cancel');
const hashTagField = newFilePopup.querySelector('.text__hashtags');
const commendField = newFilePopup.querySelector('.text__description');

const closeNewFilePopup = () => {
  newFilePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadField.value = '';
  hashTagField.value = '';
  commendField.vakue = '';
};

uploadField.addEventListener('change', () => {

  newFilePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  hashTagField.addEventListener('change', () => {

    const regex = /^#[A-Za-zА-Яа-я]{1,19}$/;
    const hashTags = hashTagField.value.split(' ');
    const errorsList = [];
    const lowerCaseTags = [];

    hashTags.forEach((element) => {

      lowerCaseTags.push(element.toLowerCase());

      if(!regex.test(element)) {
        errorsList.push(element);
      } else if (element.length === 1){
        errorsList.push(element);
      }
    });

    const repeatedTegs = lowerCaseTags.filter((elm, index, array) => array.indexOf(elm) !== index);

    repeatedTegs.forEach((element) => {
      errorsList.push(element);
    });

    if(errorsList.length >= 1) {
      hashTagField.setCustomValidity('Хет-тег должен начинаться с символа #,\
            не повторяться,\
            cостоять из букв и цифр, а также иметь длину от 1 до 20 символов\
            и не может состоять из одного символа #\
            Хеш-теги не чувствительны к регистру');
    } else if(hashTags.length > 5){
      hashTagField.setCustomValidity('Максимальное колличество хеш-тегов: 5');
    } else {
      hashTagField.setCustomValidity('');
    }
  });

  closeButtonNewFilePopup.addEventListener('click', closeNewFilePopup);

  document.addEventListener('keydown', (evt) => {

    const focusedElement = document.activeElement;

    if (focusedElement.className === 'text__hashtags' || focusedElement.className === 'text__description') {
      evt.stopPropagation();
    } else if (isEscEvent(evt)) {
      evt.preventDefault();
      closeNewFilePopup();
    }
  });
});

