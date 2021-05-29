const getRandomInteger = (firstInteger, lastInteger) => firstInteger > lastInteger || firstInteger === lastInteger || firstInteger < 0 ? 'Введите корректные значения диапазона: положительные целые числа, включая 0, где второе число строго больше первого' : Math.floor(Math.random() * (lastInteger - firstInteger + 1) + firstInteger);

const getCommentValidity = (comment, maxSymbols) =>  comment.length <= maxSymbols;

getRandomInteger(2,4);
getCommentValidity('строка', 10);
