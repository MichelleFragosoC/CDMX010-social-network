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

// describe('lugares', () => {
//   it('debería ser una función', () => {
//     expect(typeof lugares).toBe('function');
//   });

//   // it('returns an array of delegations from places', () => {
//   //   const place = delegation(places, 'delegation');
//   //   expect(place.length).toBe(41);
//   // });
// });

// describe('saveData', () => {
//   it('debería ser una función', () => {
//     expect(typeof saveData).toBe('function');
//   });
// });

// describe('newUserAccount', () => {
//   it('debería ser una función', () => {
//     expect(typeof newUserAccount).toBe('function');
//   });
// });

// describe('loginUser', () => {
//   it('debería ser una función', () => {
//     expect(typeof loginUser).toBe('function');
//   });
// });

// describe('googleAuth', () => {
//   it('debería ser una función', () => {
//     expect(typeof googleAuth).toBe('function');
//   });
// });

// describe('facebookAuth', () => {
//   it('debería ser una función', () => {
//     expect(typeof facebookAuth).toBe('function');
//   });
// });

// describe('buildReview', () => {
//   it('debería ser una función', () => {
//     expect(typeof buildReview).toBe('function');
//   });
// });

// describe('onGetReviews', () => {
//   it('debería ser una función', () => {
//     expect(typeof onGetReviews).toBe('function');
//   });
// });

// describe('deleteReview', () => {
//   it('debería ser una función', () => {
//     expect(typeof deleteReview).toBe('function');
//   });
// });

// describe('getReview', () => {
//   it('debería ser una función', () => {
//     expect(typeof getReview).toBe('function');
//   });
// });

// describe('editReview', () => {
//   it('debería ser una función', () => {
//     expect(typeof editReview).toBe('function');
//   });
// });
