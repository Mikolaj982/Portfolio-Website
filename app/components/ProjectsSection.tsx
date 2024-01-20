'use client'
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { motion } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: 'Starmont Website',
        description: 'Website with integrated Swiper library for handling dynamic sliders and Google Maps to facilitate the location of the business.',
        image: '/images/StarmontPreview.PNG',
        github: 'https://github.com/Mikolaj982/Starmont-website',
        websiteLink: 'https://strong-sunshine-40ad89.netlify.app/'
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'One page website, made by using next.js, typescript, tailwind.',
        image: '/images/PortfolioWebsite.PNG',
        github: 'https://github.com/Mikolaj982/Portfolio-Website',
        websiteLink: 'https://famous-kringle-268a47.netlify.app'
    },
    {
        id: 3,
        title: 'Movies App',
        description: 'Crud application with register and login. Made by using react, typescript, express, scss, html',
        image: '/images/MoviesApp.PNG',
        github: 'https://github.com/Mikolaj982/MoviesApp.git',
        websiteLink: 'https://coruscating-dusk-0c8d64.netlify.app'
    },
    {
        id: 4,
        title: 'Wordle',
        description: 'App inspirated by popular game, named "wordle". Made by using react, typescript, scss, html',
        image: '/images/WordleApp.PNG',
        github: 'https://github.com/Mikolaj982/wordle.git',
        websiteLink: 'https://transcendent-cuchufli-744b09.netlify.app'
    },
    {
        id: 5,
        title: 'Budged App',
        description: 'Simple app for calculating expenses and incomes. Made by using javascript, css, html',
        image: '/images/BudgetAppImg.PNG',
        github: 'https://github.com/Mikolaj982/Budget-app.git',
        websiteLink: 'https://cheery-lolly-268b2b.netlify.app'
    },
    {
        id: 6,
        title: 'Todo List App',
        description: 'Simple todo application. Made by using javascript, css, html',
        image: '/images/TodoApp.PNG',
        github: 'https://github.com/Mikolaj982/Todo-app.git',
        websiteLink: 'https://profound-pothos-edb9c6.netlify.app'
    },
    {
        id: 7,
        title: 'Landing Page',
        description: 'Simple example of one page website. Made by using react, typescript, css, html',
        image: '/images/LandingPage.PNG',
        github: 'https://github.com/Mikolaj982/one-page-react.git',
        websiteLink: 'https://stellar-kataifi-dba0b6.netlify.app'
    },
]

export const ProjectsSection = () => {
    return <>
        <section className='mt-10 p-5' id='projects'>
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold mb-6 text-white'>My Projects</h2>
                <div className='flex justify-around flex-wrap text-white'>
                    {projectsData.map((obj, index) => {
                        return <motion.div
                            key={obj.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProjectCard
                                key={obj.id}
                                image={obj.image}
                                title={obj.title}
                                description={obj.description}
                                github={obj.github}
                                websiteLink={obj.websiteLink}
                            />
                        </motion.div>

                    })}
                </div>
            </div>
        </section>
    </>
};