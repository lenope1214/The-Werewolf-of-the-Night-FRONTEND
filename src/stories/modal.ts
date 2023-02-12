import { atom, selector } from "recoil";

const modalAtom = atom<{
  header: string;
  component: JSX.Element;
  isPrint: boolean;
} | null>({
  key: "isModal",
  default: null,
});

export const modalSelector = selector({
  key: "modalSelector",
  get: ({ get }) => {
    return get(modalAtom);
  },
  set: ({ set }, newValue) => {
    set(modalAtom, newValue);
  },
});
