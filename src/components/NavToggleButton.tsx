'use client';

import { sidebarAtom } from '@/atoms/sidebar.atom';
import { useRecoilState } from 'recoil';

export const NavToggleButton = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarAtom);

  const toggleSidebarState = () => {
    setSidebarState(({ open }) => ({ open: !open }));
  };

  return (
    <button
      className='absolute z-10 cursor-pointer top-8 right-8 bg-purple-600 p-4 text-white rounded-full'
      onClick={toggleSidebarState}
    >
      {sidebarState.open ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      )}
    </button>
  );
};
