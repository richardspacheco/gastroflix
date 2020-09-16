/* eslint-disable import/prefer-default-export */
function handleError(err) {
  let errMessage = '';
  if (!err.status) errMessage = 'Server connection failure';
  throw errMessage;
}

export {
  handleError,
};
