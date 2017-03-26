import axios from 'axios';
import { browserHistory } from 'react-router';

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const FETCH_PHOTOS = 'FETCH_PHOTOS';

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const fetchPhotos = () => ({ type: FETCH_PHOTOS });

export const getData = () =>  {
return dispatch => {
  firebase.database().ref().orderByChild('didFetch').equalTo(false).on('child_added', function(child){
    const data = child.val();
    console.log(data);
  })
}
}

export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)));

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data));
        browserHistory.push('/home');
      })
      .catch(error =>
        dispatch(getUser({ error })));

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(res => {
        dispatch(removeUser());
        browserHistory.push('/login');
      })
      .catch(err => console.log(err));

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}

