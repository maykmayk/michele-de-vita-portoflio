import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-12'>
        <div className="px-4 grid grid-cols-12">
            <div className='col-span-full md:col-span-8'></div>
            <div className='col-span-full md:col-span-4 text-2xl text-start'>          <span className="text-accent">Mayk</span> is a phygital product & industrial designer. His practice spans as <span className="text-accent">freelanceer</span> to craft products, artefacts, technology and futures for founders, startups and companies. Partner at <span className="text-accent">@bakery</span>.</div>
        </div>

        <div className="px-4 grid grid-cols-12">
            <div className='col-span-full md:col-span-3 flex flex-col gap-4'>
                <img src="https://www.maykeart.com/asset/images/portrait.jpg" alt="Portrait Image" className="object-cover h-80 md:h-96 rounded-lg" />
                <div className='text-md text-start text-day400'>
                    Creative Developer, Maker, Designer
                </div>
            </div>
            <div className='col-span-full md:col-span-9'></div>
        </div>
    </div>
  );
}

export default Hero;