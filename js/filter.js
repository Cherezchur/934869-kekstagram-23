// import { getPicturesContainer } from "./mini-images"; 
import { getRandomInteger } from "./util.js";

const buttonFilterRandom = document.querySelector('.filter-random');

const removeFiltersHidden = () => {
    const filters = document.querySelector('.img-filters');
    filters.classList.remove('img-filters--inactive')
}

// buttonFilterRandom.addEventListener('click', 

const getRandomImages = (images) => {

    let imagesArray = images.slice();
    let randomImageArray = [];

    while(randomImageArray.length < 10) {
        let randomIndex = getRandomInteger(0, imagesArray.length - 1);
        randomImageArray.push(imagesArray[randomIndex]);

        imagesArray.filter((element) => imagesArray.indexOf(element) !== randomIndex);
    }

    console.log(imagesArray);
    console.log(randomImageArray);
}

// const getTheMistDiscussed = (images) => {
    
// }


export {removeFiltersHidden, getRandomImages};