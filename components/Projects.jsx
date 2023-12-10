import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "AgriLah Blog",
        description: "This is a project.",
        image: "/projects/blog.png",
        gitUrl: "https://github.com/SohZHong/Blogging-Website"

    },
    {
        id: 2,
        title: "Hotel Management System",
        description: "This is a project.",
        image: "/projects/java.png",
        gitUrl: "https://github.com/SohZHong/Booking-System"
    },
    {
        id: 3,
        title: "Quiz",
        description: "This is a project",
        image: "/projects/react.png",
        gitUrl: "https://github.com/SohZHong/Quiz-Website---React-and-Flask-Backend"
    }

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
