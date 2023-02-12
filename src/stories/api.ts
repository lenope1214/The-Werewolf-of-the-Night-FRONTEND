import { atom, selector } from 'recoil';

const loadingAtom = atom<boolean>({
  key: 'loadingAtom',
  default: false,
});

export const loadingSelector = selector({
  key: 'loadingSelector',
  get: ({ get }) => {
    return get(loadingAtom);
  },
  set: ({ set }, newValue) => {
    set(loadingAtom, newValue);
  },
});
