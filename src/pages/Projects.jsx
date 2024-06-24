import React, { useEffect, useState } from "react";
import WorkCard from "../components/molecules/WorkCard"
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
import { WorkItems } from "../components/ions/WorkItems"

const Projects = () => {
	return (
		<div className="App flex flex-col gap-4">
            <Header />

            <div className="flex flex-col gap-4 w-100 px-4">

                <div className='grid grid-cols-12 gap-4'>
                    {WorkItems.map((item, index) => (
                        <WorkCard
                            key={index}
                            url={item.url}
                            title={item.title}
                            year={item.year}
                            description={item.description}
                            isNew={item.isNew}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
	);
};

export default Projects;
