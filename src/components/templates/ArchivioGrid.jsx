import React from 'react';
import ArchivioCard from '../molecules/ArchivioCard';
import { ArchivioItems } from '../ions/ArchivioItems';

const colSpanClasses = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
};

function ArchivioGrid() {
  return (
    <div className='px-4 grid grid-cols-6 gap-4 h-fit w-full'>
      {ArchivioItems.map((item, index) => (
        <div key={index} className={`col-span-full ${colSpanClasses[item.col]} flex flex-col gap-4`}>
          <ArchivioCard 
            url={item.url}
            desc={item.desc}
            aspect={item.aspect} 
          />
        </div>
      ))}
    </div>
  );
}

export default ArchivioGrid;