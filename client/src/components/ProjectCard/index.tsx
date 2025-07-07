import { Project } from '@/state/api'
import React from 'react'

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='rounded border p-4 shadow'>ProjectCard
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p>Project Start Date: {project.startDate}</p>
    <p>Project End Date: {project.endDate}</p>
    
    </div>
    
  )
}

export default ProjectCard