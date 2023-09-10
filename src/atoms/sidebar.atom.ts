import { atom } from 'recoil';

export const sidebarAtom = atom<{ open: boolean }>({
  key: 'sidebar-atom',
  default: { open: false },
});
