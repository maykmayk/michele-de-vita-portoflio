import React from 'react';
import { useNavigate } from 'react-router-dom';
import Label from '../atoms/Label';

function WorkCard({ url, title, year, description, isNew, id }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate(`/projects/${id}`)}} className="cursor-pointer col-span-full md:col-span-4 text-day900 flex flex-col w-full justify-items-start gap-2 relative">

      <img src={url} alt="Work Image" className="object-cover h-80 md:h-96 rounded-lg" />
      {isNew &&<div className='absolute top-0 end-0 p-2'>
        <Label title={"NEW"} textColor={"day"} bgColor={"accent"}/>
      </div>}

      <div className="flex flex-col gap-1 justify-items-start text-start">
        <div className="text-md">{title} <span className="text-day400 leading-none">/ {year}</span></div>
        <div className="text-md text-day700">{description}</div>
      </div>
    </div>
  );
}

export default WorkCard;