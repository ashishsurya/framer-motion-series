'use client';

import { sidebarAtom } from '@/atoms/sidebar.atom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

export const Sidebar = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarAtom);

  return (
    <AnimatePresence>
      {sidebarState.open && (
        <motion.header
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='absolute right-0 h-full bg-gray-900 text-white uppercase pt-32 px-28'
        >
          <nav className='flex flex-col gap-10 text-2xl'>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='hover:text-purple-500 cursor-pointer'
            >
              home
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='hover:text-purple-500 cursor-pointer'
            >
              home
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='hover:text-purple-500 cursor-pointer'
            >
              home
            </motion.p>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
