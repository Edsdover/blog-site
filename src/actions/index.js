import firebase from 'firebase';
// import request from 'superagent';

export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

// Enter your firebase config information here
const firebaseConfig = {
  apiKey: 'AIzaSyB9Lpw9tNFriki7666zpA0htR3hRwhtaUI',
  authDomain: 'playgroundreact.firebaseapp.com',
  databaseURL: 'https://playgroundreact.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);

export function signUpUser(credentials) {
  return function(dispatch) {
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signInUser(credentials) {
  return function(dispatch) {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      })
  }
}

export function signOutUser() {
    return function(dispatch) {
      firebase.auth().signOut()
        .then(() => {
          dispatch({
            type: SIGN_OUT_USER
          })
        });
    }
}

export function validateAuth() {
  return function(dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    })
  }
}

export function authUser() {
  return {
    type: AUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

// function sortByUploadDate(data, sort) {
//   const sortModifier = sort === 'ascending' ? 1 : -1;
//   return data.sort((a, b) => (a.import_datetime < b.import_datetime) ? -sortModifier : (a.import_datetime > b.import_datetime) ? sortModifier : 0);
// };
