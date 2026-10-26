import salesPreview from '../assets/sales-project.svg'
import customerPreview from '../assets/customer-project.svg'
import campaignPreview from '../assets/campaign-project.svg'

const projects = [
  {
    image: salesPreview,
    imageAlt: 'Illustrative sales dashboard with a trend chart and performance summary cards',
    type: 'Sales analytics',
    title: 'Retail sales performance dashboard',
    description: 'Explore order data to compare revenue and profit over time, identify best-performing products, and surface regional patterns in an interactive dashboard.',
    tools: ['SQL', 'Power BI', 'Excel'],
    focus: 'KPIs · Product trends · Regional performance',
  },
  {
    image: customerPreview,
    imageAlt: 'Illustrative customer retention dashboard with tenure trend and customer segments',
    type: 'Customer analytics',
    title: 'Customer churn & retention',
    description: 'Use customer and subscription data to examine churn across segments, tenure, and service choices, then communicate retention patterns clearly.',
    tools: ['Python', 'SQL', 'Visualisation'],
    focus: 'Churn patterns · Customer segments · Retention',
  },
  {
    image: campaignPreview,
    imageAlt: 'Illustrative campaign analytics dashboard comparing marketing channels',
    type: 'Marketing analytics',
    title: 'Marketing campaign effectiveness',
    description: 'Bring campaign activity and response data together to compare channel performance, review conversion costs, and guide future campaign decisions.',
    tools: ['Excel', 'SQL', 'Power BI'],
    focus: 'Channel comparison · Conversions · Campaign reporting',
  },
]

const approach = ['Understand the question', 'Prepare & explore data', 'Find meaningful patterns', 'Share clear next steps']

function Dashboard() {
  return (
    <section aria-labelledby="work-title" className="section work-section" id="work">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">Featured projects</p>
          <h2 id="work-title">Data analysis, from question to insight.</h2>
          <p>
            A selection of analytics case study briefs covering sales performance,
            customer retention, and campaign effectiveness.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <div className="work-card-top">
                <span className="work-type">{project.type}</span>
              </div>
              <img
                alt={project.imageAlt}
                className="project-image"
                height="360"
                loading="lazy"
                src={project.image}
                width="720"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-focus"><strong>Analysis focus:</strong> {project.focus}</p>
              <div aria-label="Relevant tools" className="work-tags">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">
          These are case study briefs. Add your datasets, dashboards, findings, and project
          links as you publish each analysis.
        </p>

        <div aria-label="Analytics workflow" className="approach-strip">
          {approach.map((step, index) => (
            <div className="approach-step" key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
