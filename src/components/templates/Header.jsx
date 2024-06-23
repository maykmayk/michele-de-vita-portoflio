import React from 'react';

function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-fit text-day900 items-center flex w-full justify-between p-4 bg-day100">
        <div className='flex gap-2 items-center'>
            <img src={require('../../assets/images/SparkLogo.png')} className='w-6 h-6 hover:animate-spin' />
            <div className='text-md hidden md:block'>Michele de Vita</div>
        </div>
      <div className='text-md'>Archivio</div>
      <div className='text-md'>About</div>
      <div className='text-md'>Work</div>
    </div>
  );
}

export default Header;