// importamos la funcion que vamos a testear
import { loginFunc } from '../src/components/login.js';
import { setCards } from '../src/components/places.js';
import { signupFunc } from '../src/components/signup.js';
import {
  newReview, seeReviews, quitReview, modifyReview, updateReview, likesReview,
} from '../src/components/retro.js';
// import places from '../src/data/mxchilazo.js';
// import { lugares } from '../src/main.js';
// import {
//   saveData, newUserAccount, loginUser, googleAuth, facebookAuth,
//   buildReview, onGetReviews, deleteReview, getReview, editReview,
// } from '../src/lib/firebase.js';

// const delegation = data.places;
// const delegation = places.place;

describe('loginFunc', () => {
  it('debería ser una función', () => {
    expect(typeof loginFunc).toBe('function');
  });
});

describe('setCards', () => {
  it('debería ser una función', () => {
    expect(typeof setCards).toBe('function');
  });
});

describe('signupFunc', () => {
  it('debería ser una función', () => {
    expect(typeof signupFunc).toBe('function');
  });
});

describe('newReview', () => {
  it('debería ser una función', () => {
    expect(typeof newReview).toBe('function');
  });
});

describe('seeReviews', () => {
  it('debería ser una función', () => {
    expect(typeof seeReviews).toBe('function');
  });
});

describe('quitReview', () => {
  it('debería ser una función', () => {
    expect(typeof quitReview).toBe('function');
  });
});

describe('modifyReview', () => {
  it('debería ser una función', () => {
    expect(typeof modifyReview).toBe('function');
  });
});

describe('updateReview', () => {
  it('debería ser una función', () => {
    expect(typeof updateReview).toBe('function');
  });
});

describe('likesReview', () => {
  it('debería ser una función', () => {
    expect(typeof likesReview).toBe('function');
  });
});
