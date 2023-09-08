import React from 'react'
import data from '../data/Projectsdata'
import Cards from "../components/Cards"
import '../styles/project.css'

function Project() {
  return (
    <div className="projects h-fit " id='project'>
      <p>My Works</p>
        <section className='project-section  grid justify-items-center grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data.map((item,index) => 
          {
              return (
                  <Cards 
                      key={index}
                      {...item}
                  />
              )
          })}
        </section>
      <h2>Checkout more projects of mine 👉<a href='https://github.com/Shreya-Jash'>GitHub</a></h2>
    </div>
  )
}

export default Project