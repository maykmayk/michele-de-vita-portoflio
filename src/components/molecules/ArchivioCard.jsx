import React, { useEffect, useRef, useState } from 'react';

function ArchivioCard({ url, desc, aspect = 'square' }) {

  const [imageHeight, setImageHeight] = useState();
  const imageContainerRef = useRef();

  useEffect(() => {
    if (aspect === 'video') {
      setImageHeight(imageContainerRef.current.clientWidth / 16 * 9);
    } else {
      setImageHeight(imageContainerRef.current.clientWidth);
    }
  }, [aspect]);

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <div ref={imageContainerRef} className={`w-full h-[${imageHeight}]px`}>
        <img 
          src={url} 
          style={{ height: imageHeight }} 
          className={`w-full object-cover`} 
          alt={desc} 
        />
      </div>
      <h3 className='font-ibm-mono w-full text-start uppercase text-xs'>{desc}</h3>
    </div>
  );
}

export default ArchivioCard;
