import {isEscEvent} from './util.js';

const uploadField = document.querySelector('#upload-file');
const newFilePopup = document.querySelector('.img-upload__overlay');
const closeButtonNewFilePopup = newFilePopup.querySelector('.cancel');
const hashTagField = newFilePopup.querySelector('.text__hashtags');
const commendField = newFilePopup.querySelector('.text__description');

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

  const onCloseNewFilePopup = (evt) => {

    const closeNewFilePopup = () => {

      evt.preventDefault();

      if (document.activeElement.className === 'text__hashtags' || document.activeElement.className === 'text__description') {
        return;
      }

      newFilePopup.classList.add('hidden');
      document.body.classList.remove('modal-open');
      uploadField.value = '';
      hashTagField.value = '';
      commendField.vakue = '';

      document.removeEventListener('keydown', onCloseNewFilePopup);
      closeButtonNewFilePopup.removeEventListener('click', closeNewFilePopup);
    };

    if (document.activeElement.className === 'img-upload__cancel  cancel') {
      closeNewFilePopup();
    } else if (isEscEvent(evt)) {
      closeNewFilePopup();
    }
  };

  closeButtonNewFilePopup.addEventListener('click', onCloseNewFilePopup);

  document.addEventListener('keydown', onCloseNewFilePopup);
});

