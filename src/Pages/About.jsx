const skills = ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Data storytelling']

function About() {
  return (
    <section aria-labelledby="about-title" className="section" id="about">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">A little about me</p>
          <h2 id="about-title">Curiosity first. Clarity always.</h2>
          <p>
            Good analysis starts with understanding the question—not just opening a
            spreadsheet. I work to make complex information feel useful and approachable.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              My background in economics shapes how I think about data: look for the
              underlying forces, test assumptions, and keep the wider context in view.
              I enjoy moving from an unclear question to a structured analysis and a
              straightforward explanation.
            </p>
            <p>
              From cleaning and exploring data to building a clear report, I aim to make
              every step understandable—and every insight relevant to a real decision.
            </p>

            <div className="education-card">
              <p className="education-label">Academic foundation</p>
              <h3>Economics</h3>
              <p>
                A foundation in economic thinking, interpreting trends, and understanding
                how evidence can support better decisions.
              </p>
            </div>
          </div>

          <div className="skills-panel" id="expertise">
            <h3>Tools &amp; areas of focus</h3>
            <div className="skill-list">
              {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
            <p className="skills-note">
              A practical toolkit for exploring data, answering business questions, and
              communicating findings in a way people can use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
