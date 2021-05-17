import { logIn } from '../src/components/login';
import { setCards } from '../src/components/places.js';
import { signUpView } from '../src/components/signup.js';
import { welcome } from '../src/components/welcome';
import { retroView } from '../src/components/retro';

describe('logIn', () => {
  it('debería de ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
});

describe('setCards', () => {
  it('debería de ser una función', () => {
    expect(typeof setCards).toBe('function');
  });
});

describe('signUpView', () => {
  it('debería de ser una función', () => {
    expect(typeof signUpView).toBe('function');
  });
});

describe('welcome', () => {
  it('debería de ser una función', () => {
    expect(typeof welcome).toBe('function');
  });
});

describe('retroView', () => {
  it('debería ser una función', () => {
    expect(typeof retroView).toBe('function');
  });
});
