import React from 'react'
import styles from './ProjectsStyles.module.css'
import { projects } from '../../data'

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h2>Browse My</h2>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((item,index)=>(
            <div key={index}>
               <a href={item.url} target='_blank'>
                <img className='hover' src={item.img}/> 
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
               </a> 
            </div>
        ))}
        </div>
    </section>
  )
}

export default Projects