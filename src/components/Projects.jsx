import React from 'react'
import ProjectItems from '../asserts/ProjectItems'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className='py-5' id='project'>
        <div className='container'>
            <h2 className='mb-5'>My projects</h2>
    <div className='row g-4'>
      {
        ProjectItems.map((project)=> <ProjectCard key=
        {project.id} projectImage={project.projectImg}
        projectName={project.projectTitle} projectDescrip={project.projectDescrip}/>)
      }
    </div>
        </div>
    </div>
  )
}

export default Projects