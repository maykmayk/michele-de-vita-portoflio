import React from 'react';
import { useParams } from 'react-router-dom';
import { WorkItems } from '../components/ions/WorkItems';
import Footer from '../components/templates/Footer';
import Header from '../components/templates/Header';

function ProjectDetail() {
    const { id } = useParams();
    const project = WorkItems.find(item => item.id === parseInt(id, 10));

    if (!project) {
        return <div>Project not found</div>;
    }  

    return (
        <>
            <Header />

            <div className='flex flex-col gap-4 px-4'>
                <img src={project.url} alt={project.title} className="object-cover h-80 md:h-dvh w-full rounded-md my-4" />
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-md text-gray-700">{project.year}</p>
                <p className="text-md">{project.description}</p>
            </div>

            <Footer />
        </>
    );
}

export default ProjectDetail;