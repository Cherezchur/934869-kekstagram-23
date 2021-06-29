import {isEscEvent} from './util.js';

const uploadField = document.querySelector('#upload-file');
const newFilePopup = document.querySelector('.img-upload__overlay');
const closeButtonNewFilePopup = newFilePopup.querySelector('.cancel');
const hashTagField = newFilePopup.querySelector('.text__hashtags');
const commendField = newFilePopup.querySelector('.text__description');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const uploudedImage = document.querySelector('.img-upload__preview');
const scaleField = document.querySelector('.scale__control--value');

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

  const reducedImage = () => {
    
    switch (scaleField.value) {
        case '100%': 
            uploudedImage.style.transform = 'scale(0.75)';
            buttonBigger.removeAttribute('disabled', 'disabled');
            scaleField.value = '75%';
            break;
        case '75%':
            uploudedImage.style.transform = 'scale(0.5)';
            scaleField.value = '50%';
            break;
        case '50%':
            uploudedImage.style.transform = 'scale(0.25)';
            buttonSmaller.setAttribute('disabled', 'disabled');
            scaleField.value = '25%';
            break;
    }

  }

  const largeImage = () => {

      switch (scaleField.value) {
          case '75%': 
              uploudedImage.style.transform = 'scale(1)';
              buttonBigger.setAttribute('disabled', 'disabled');
              scaleField.value = '100%';
              break;
          case '50%':
              uploudedImage.style.transform = 'scale(0.75)';
              scaleField.value = '75%';
              break;
          case '25%':
              uploudedImage.style.transform = 'scale(0.5)';
              buttonSmaller.removeAttribute('disabled', 'disabled');
              scaleField.value = '50%';
              break;
      }

  }

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
      buttonBigger.removeEventListener('click', largeImage);
      buttonSmaller.removeEventListener('click', reducedImage);
    };

    if (document.activeElement.className === 'img-upload__cancel  cancel') {
      closeNewFilePopup();
    } else if (isEscEvent(evt)) {
      closeNewFilePopup();
    }

  };

  closeButtonNewFilePopup.addEventListener('click', onCloseNewFilePopup);
  document.addEventListener('keydown', onCloseNewFilePopup);
  buttonBigger.addEventListener('click', largeImage);
  buttonSmaller.addEventListener('click', reducedImage);
});

