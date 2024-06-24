import React, { useEffect, useState } from "react";
import WorkCard from "../components/molecules/WorkCard"
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
import Button from "../components/atoms/Button"
import { WorkItems } from "../components/ions/WorkItems"
import { useNavigate } from "react-router-dom";
import Hero from "../components/templates/Hero";

const Home = () => {
    const navigate = useNavigate()

	return (
		<div className="App flex flex-col gap-4">
            <Header />

            <div className="flex flex-col gap-24">
                <Hero />

                <div className="flex flex-col gap-4 w-100 px-4">
                    <div className="flex w-100 justify-between items-end">
                        <div className="text-4xl font-dm-semibold">Selected Works</div>
                        <div onClick={() => {navigate("/projects")}}>
                            <Button title="See more" />
                        </div> 
                    </div>

                    <div className='flex gap-3 md:flex-row flex-col'>
                        {WorkItems.slice(0, 3).map((item, index) => (
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
            </div>

            <Footer />
        </div>
	);
};

export default Home;
