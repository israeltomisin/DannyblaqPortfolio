import React from 'react'
import Data from '../assets/data.jpg'

const hero = () => {
  return (
    <section className='hero'>
            <div className="hero-flex">
                <div className="hero-text">
                    <h1>Hi, I'm Daniel </h1>
                    <h4>Data Analyst</h4>
                    <p>I transform raw data into meaningful insights that drive smarter decisions. I specialize in data analysis, visualization, and reporting using tools like Python, SQL, Excel, and Power BI to uncover trends and support business growth.</p>
                    <button className='btn-primary'>View My Work</button>
                    <button className='btn-secondary'>Get In Touch</button>
                </div>
                

                <div className="hero-img">
                    <img src={Data} alt="" />
                </div>
            </div>


            <div className="All">
                <div className="Mindset">
                    <h5>The Data Analytics Mindset</h5>
                </div>
                <div className="mindset-flex">
                    <div className="mindset-text">
                        <p>I bridge the gap between raw data and meaningful insights. With a strong passion for analytics, I analyze complex datasets to uncover patterns, trends, and opportunities that help organizations make informed decisions. <br /> I specialize in transforming data into clear, actionable insights using modern data tools and visualization techniques. <br />

                        Currently, I focus on building data-driven solutions, interactive dashboards, and analytical reports that simplify complex information and support strategic planning. <br />

                        My journey combines analytical thinking with problem-solving, resulting in insights that help businesses improve performance, understand customers, and make smarter decisions. I specialize in turning data into stories that drive real-world impact.</p>
                    </div>
                    <div className="mindset-grid">
                        <div className="cards">
                            <h5>🎓 <br /> Economics Education</h5>
                            <p>Strong foundation in economic principles, data interpretation, and statistical analysis used to understand market trends and support data-driven decision making.</p>
                        </div>
                        <div className="cards">
                            <h5>📈 <br /> Data Visualization</h5>
                            <p>Expertise in creating dashboards and visual reports using tools like Power BI, Tableau, and Excel.</p>
                        </div>
                        

                        
                        <div className="cards">
                            <h5>🗄 <br />Data Management & Querying</h5>
                            <p>Working with databases using SQL and Python to clean, organize, and analyze large datasets.</p>
                        </div>
                        <div className="cards">
                            <h5>🚀 <br /> Projects Completed</h5>
                            <p>Multiple analytics projects involving dashboards, reports, and data-driven insights.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default hero
