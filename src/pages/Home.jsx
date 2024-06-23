import React, { useEffect, useState } from "react";
import WorkCard from "../molecules/WorkCard"

const workItems = [
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/6668455e9dad2d127071c260_Project_Hero.webp',
      title: 'Yarn',
      year: '2024',
      description: 'We were commissioned by Yarn to transform their digital-only AI storytelling app for children aged 3 to 6.'
    },
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/6668455e9dad2d127071c260_Project_Hero.webp',
      title: 'Another Project',
      year: '2023',
      description: 'Description for another project.'
    },
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/6668455e9dad2d127071c260_Project_Hero.webp',
      title: 'Yet Another Project',
      year: '2022',
      description: 'Description for yet another project.'
    }
  ];

const Home = () => {
	return (
		<div className="App p-4">
            <div className='flex gap-4'>
                {workItems.map((item, index) => (
                <WorkCard
                    key={index}
                    url={item.url}
                    title={item.title}
                    year={item.year}
                    description={item.description}
                />
                ))}
            </div>
        </div>
	);
};

export default Home;
