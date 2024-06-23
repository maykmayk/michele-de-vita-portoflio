import React, { useEffect, useState } from "react";
import WorkCard from "../components/molecules/WorkCard"
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
import Button from "../components/atoms/Button"

const workItems = [
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/6668455e9dad2d127071c260_Project_Hero.webp',
      title: 'Yarn',
      year: '2024',
      description: 'We were commissioned by Yarn to transform their digital-only AI storytelling app for children aged 3 to 6.'
    },
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/6550d170d6f9d81d70b1d7ce_Alexis%20Bardini%20FABA%20Speaker.webp',
      title: 'FABA+ Speaker',
      year: '2023',
      description: 'Exploring the future of bedtime story telling and through a thoughtful kids-first interface. '
    },
    {
      url: 'https://cdn.prod.website-files.com/5e84a4363e823276637cc45c/64de8534b550fd640da6fbd9_Sedia_2_Alexis_Bardini.svg',
      title: 'SEDIA 2',
      year: '2022',
      description: 'Exploring the future of intelligent living through edge computing, with an artefact you can build, train and live with.'
    }
  ];

const Home = () => {
	return (
		<div className="App flex flex-col gap-4">
            <Header />

            <div className="flex flex-col gap-4 w-100 px-4">

                <div className="flex w-100 justify-between items-end">
                    <div className="text-4xl font-dm-semibold">Selected Works</div>
                    <Button title="See more" />
                </div>

                <div className='flex gap-3 md:flex-row flex-col'>
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

            <Footer />
        </div>
	);
};

export default Home;
