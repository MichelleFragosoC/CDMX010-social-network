const firebaseConfig = {
  apiKey: 'AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE',
  authDomain: 'red-social--mxchilazo.firebaseapp.com',
  projectId: 'red-social--mxchilazo',
  storageBucket: 'red-social--mxchilazo.appspot.com',
  messagingSenderId: '905471998919',
  appId: '1:905471998919:web:eed9430c0611304c3e77e2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// escribir datos
function saveData(user) {
  console.log(user.user.uid); // uid de usuario
  console.log(user.user.email);
  const usuario = {
    uid: user.user.uid,
    email: user.user.email,
  };
  db.collection('users')
    .doc()
    .set(usuario)
    .then(() => {
      console.log('Document successfully written!');
    });
}

/* function saveUs(user) {
  console.log(user.user.uid); // uid de usuario
  console.log(user.user.email);
  const usuario = {
    uid: user.user.uid,
    email: user.user.email,
  };
  db.collection('reviews')
    .doc()
    .set(usuario)
    .then(() => {
      console.log('Document successfully written!');
    });
} */

// comenzar firebase registra nuevos usuarios
export const newUserAccount = (email, password, onNavigate, rootDiv, lugares) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      saveData(user);
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      // console.log(user);
      // console.log(user.user);
      // console.log(user.user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      // console.log(errorCode + errorMessage);
      alert(errorMessage);
    });
};

// usuarios existentes
export const loginUser = (email, password, onNavigate, rootDiv, lugares) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      console.log(user);
      localStorage.setItem('idUser', user.user.uid);
      // Signed in
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // console.log(errorCode + errorMessage + email);
      alert(errorMessage);
    });
};

// autentificacion google
export const googleAuth = (onNavigate, rootDiv, lugares) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

// autentificacion facebook
export const facebookAuth = (onNavigate, rootDiv, lugares) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      // ...
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

// escribir datos del post a db
export const buildReview = async (name, review, like, limpiar, reLimpiar) => {
  await db
    .collection('reviews')
    .doc()
    .set({ name, review, like })
    .then(() => {
      console.log('Document successfully written!');
      limpiar();
      reLimpiar();
    });
};

// cuando se obtienen tareas. de la collectacion cada vez que un dato
// cambie o una nueva tarea sea agregada voy a manejarlo como una funcion callback
export const onGetReviews = (callback) => db.collection('reviews').onSnapshot(callback);

export const deleteReview = (id) => db.collection('reviews').doc(id).delete();

export const getReview = (id) => db.collection('reviews').doc(id).get();

export const editReview = (id, updatedReview) => db.collection('reviews').doc(id).update(updatedReview);
