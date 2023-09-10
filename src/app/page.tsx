import { NavToggleButton } from '@/components/NavToggleButton';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className='h-screen relative '>
      <NavToggleButton />
      <Sidebar />
    </div>
  );
}
