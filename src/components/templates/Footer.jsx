import React from 'react';

function Footer() {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 h-fit text-day900 items-center flex w-full justify-between px-4 py-2 bg-day100">
      <a href="mailto:mvitade@gmail.com?subject=Hello%20There" target="_blank">👋 Say hi!</a>
      <div className='text-md'>Work</div>
    </div>
  );
}

export default Footer;