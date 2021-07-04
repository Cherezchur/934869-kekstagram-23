const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((images) => {
      onSuccess(images);
    });
};

const sendData = (onSuccess, downloadStatus, errorStatus, body) => {

  fetch('https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
        downloadStatus();
      } else {
        errorStatus();
      }
    })
    .catch(() => {
      errorStatus;
    });
};

export {getData, sendData};
