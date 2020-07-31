const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3003'
  : 'https://asmrflix.herokuapp.com';

export default {
  URL,
};
