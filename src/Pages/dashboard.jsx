import React from 'react'

const dashboard = () => {
  return (
    <div>
      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[
            { title: 'Sales Dashboard', desc: 'Interactive dashboard analyzing revenue trends, profit margins, and top products.' },
            { title: 'Customer Churn Analysis', desc: 'Predicted customer churn using Python and machine learning techniques.' },
            { title: 'Marketing Campaign Analysis', desc: 'Evaluated marketing campaigns to measure ROI and performance across channels.' }
          ].map(project => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href="#" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD GALLERY */}
      <section className="dashboard-gallery">
        <h2>Dashboard Gallery</h2>
        <div className="dashboard-grid">
          {Array(3).fill(0).map((_, idx) => (
            <div key={idx} className="dashboard-card">Dashboard Screenshot</div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default dashboard
