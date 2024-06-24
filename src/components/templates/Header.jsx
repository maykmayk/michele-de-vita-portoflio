import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-fit text-day900 items-center flex w-full justify-between px-4 py-2 bg-day100">
        <div className='flex gap-2 items-center cursor-ne-resize hover:text-accent'>
            <img src={require('../../assets/images/SparkLogo.png')} className='w-6 h-6 hover:animate-spin' />
            <div className='text-md hidden md:block' onClick={() => {navigate("/")}}>Michele de Vita</div>
        </div>
      <div className='text-md cursor-ne-resize hover:text-accent' onClick={() => {navigate("/archivio")}}>Archivio</div>
      <div className='text-md cursor-ne-resize hover:text-accent'>About</div>
      <div className='text-md cursor-ne-resize hover:text-accent' onClick={() => {navigate("/projects")}}>Projects</div>
    </div>
  );
}

export default Header;