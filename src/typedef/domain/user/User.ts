import { atom } from 'recoil';
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserCreate extends User {
  password: string;
}

const userInit: User = {
  id: 0,
  name: '',
  email: '',
};

const userCreateInit: UserCreate = {
  ...userInit,
  password: '',
};

export const myInfoState = atom({
  key: 'myInfoState',
  default: userInit,
});
