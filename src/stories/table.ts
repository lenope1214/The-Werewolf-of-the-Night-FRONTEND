import { atom, selector } from "recoil";

const checkedDataAtom = atom<any[]>({
  key: "tableCheckDataAtom",
  default: [],
});

export const checkedDataSelector = selector({
  key: "tableSelector",
  get: ({ get }) => {
    return get(checkedDataAtom);
  },
  set: ({ set }, newValue) => {
    set(checkedDataAtom, newValue);
  },
});
