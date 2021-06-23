import {isEscEvent} from './util.js';

const uploadField = document.querySelector('#upload-file');
const newFilePopup = document.querySelector('.img-upload__overlay');
const closeNewFilePopup = newFilePopup.querySelector('.cancel');

uploadField.addEventListener('change', () => {
    newFilePopup.classList.remove('hidden');
    document.body.classList.add('modal-open');

    closeNewFilePopup.addEventListener('click', () => {
        newFilePopup.classList.add('hidden');
    });
    
    document.addEventListener('keydown', () => {
        if(isEscEvent) {
            newFilePopup.classList.add('hidden');
        }
    });
})
