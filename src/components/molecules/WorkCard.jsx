import React from 'react';

function WorkCard({ url, title, year, description }) {
  return (
    <div className="text-day900 flex flex-col w-full justify-items-start gap-2">
      <img src={url} alt="Work Image" className="object-cover h-96 md:h-128 rounded-lg" />
      <div className="flex flex-col gap-1 justify-items-start text-start">
        <div className="text-md">{title} <span className="text-day400 leading-none">/ {year}</span></div>
        <div className="text-md text-day700">{description}</div>
      </div>
    </div>
  );
}

export default WorkCard;