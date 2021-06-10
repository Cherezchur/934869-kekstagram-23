const getRandomInteger = (firstInteger, lastInteger) => {
  const lower = Math.ceil(Math.min(Math.abs(firstInteger), Math.abs(lastInteger)));
  const upper = Math.floor(Math.max(Math.abs(firstInteger), Math.abs(lastInteger)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getCommentValidity = (comment, maxSymbols) =>  comment.length <= maxSymbols;

export {getRandomInteger, getCommentValidity};
