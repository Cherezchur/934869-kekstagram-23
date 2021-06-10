const getRandomInteger = (firstInteger, lastInteger) => {
  const lower = Math.ceil(Math.min(Math.abs(firstInteger), Math.abs(lastInteger)));
  const upper = Math.floor(Math.max(Math.abs(firstInteger), Math.abs(lastInteger)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getCommentValidity = (comment, maxSymbols) =>  comment.length <= maxSymbols;

const NUMBER_OF_OBJECT = 25;

// создаем массив id от 1 до 25

const ID_ARRAY = new Array;
for (let counter = 25; counter > 0 ; counter--) {
  ID_ARRAY.push(counter);
}

const getId = () => {
  const id = ID_ARRAY[ID_ARRAY.length-1];
  ID_ARRAY.pop();

  return id;
};

// создаем массив номеров фото

const IMAGE_NUMBERS = ID_ARRAY.slice();

const getImageNumbers = () => {
  const number = IMAGE_NUMBERS[IMAGE_NUMBERS.length-1];
  IMAGE_NUMBERS.pop();

  return number;
};

// создаем массив для идентификаторов комментариев

const COMMENTS_ID = [];
for (let counter = 75; counter > 0 ; counter--) {
  COMMENTS_ID.push(counter);
}

const getCommentId = () => {

  const commentId = COMMENTS_ID[COMMENTS_ID.length-1];
  COMMENTS_ID.pop();

  return commentId;
};

// создаем массив для текста комментария

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

// создаем массив для имен

const NAMES = [
  'Артем',
  'Andrey',
  'Stan',
  'Mary',
  'Rodion',
  'Dariya',
  'Gleb',
  'Tihon',
];

const createCommentsArray = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length-1)],
  name: NAMES[getRandomInteger(0, NAMES.length-1)],
});

const createPhotoDescription = () => ({
  id: getId(),
  url: `photos/${getImageNumbers()}.jpg`,
  description: 'Это описание, я его придумал',
  likes: getRandomInteger(15, 200),
  comments: new Array(getRandomInteger(1, 3)).fill(null).map(() => createCommentsArray()),
});

const fotoDescriptions = new Array(NUMBER_OF_OBJECT).fill(null).map(() => createPhotoDescription());

console.log(fotoDescriptions);
fotoDescriptions;
getCommentValidity;
