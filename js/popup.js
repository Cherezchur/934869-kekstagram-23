import {newFilePopup, uploudedImage, effectSlider, imageScale,hashTagField, hashTagValidity, addingEffects} from './form.js';
import {isEscEvent} from './util.js';

const uploadField = document.querySelector('#upload-file');
const closeButtonNewFilePopup = newFilePopup.querySelector('.cancel');
const commendField = newFilePopup.querySelector('.text__description');
const effectsList = newFilePopup.querySelectorAll('.effects__radio');
const scaleControl = newFilePopup.querySelector('.img-upload__scale');

const closeFormPopup = () => {
  newFilePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadField.value = '';
  hashTagField.value = '';
  commendField.value = '';
  document.removeEventListener('keydown', onFormPopupEskKeydown);
  closeButtonNewFilePopup.removeEventListener('click', onFormPopupClick);
  scaleControl.removeEventListener('click', imageScale);
  for(let counter = 0 ; counter <= effectsList.length - 1 ; counter++) {
    effectsList[counter].removeEventListener('click', addingEffects);
  }
};

const onFormPopupClick = () => {
  closeFormPopup();
};

const onFormPopupEskKeydown = (evt) => {
  if(isEscEvent(evt)){
    if (document.activeElement.className === 'text__hashtags' || document.activeElement.className === 'text__description') {
      return;
    }
    closeFormPopup();
  }
};

uploadField.addEventListener('change', () => {

  newFilePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  hashTagValidity();

  effectSlider.setAttribute('style', 'display: none;');
  uploudedImage.className = 'img-upload__preview';
  uploudedImage.style = 'none';

  document.addEventListener('keydown', onFormPopupEskKeydown);
  closeButtonNewFilePopup.addEventListener('click', onFormPopupClick);
  scaleControl.addEventListener('click', imageScale);

  for(let counter = 0 ; counter <= effectsList.length - 1 ; counter++) {
    effectsList[counter].addEventListener('click', addingEffects);
  }
});
