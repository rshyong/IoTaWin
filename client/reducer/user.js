import axios from 'axios';
import { browserHistory } from 'react-router';

const GET_STORE_DATA = 'GET_STORE_DATA';

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const getStoreData = (data) => ({ type: GET_STORE_DATA, data: data });

export const getData = () => {
  return dispatch => firebase.database().ref().orderByChild('didFetch').equalTo(false)
  .on('child_added', function(child) {
      const data = child.val();
    }).then(function (data) {
      dispatch(getStoreData(data))
    }).then(function (){
      console.log("Success")
    })
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

export default function (state = {}, action) {
  switch (action.type) {
    case GET_STORE_DATA:
      return action.data
    default:
      return state;
  }
}

