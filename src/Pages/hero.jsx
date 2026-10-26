function Hero() {
  return (
    <section aria-labelledby="hero-title" className="page-shell hero" id="home">
      <div className="hero-text">
        <p className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" /> Data analyst &amp; problem solver</p>
        <h1 id="hero-title">Hello, I&apos;m <span>Daniel.</span></h1>
        <p className="hero-role">Making data easier to understand—and act on.</p>
        <p className="hero-copy">
          I turn raw data into clear insights, thoughtful visualisations, and practical
          recommendations. My work brings together analytical thinking, business context,
          and a focus on the questions that matter.
        </p>
        <div className="button-row">
          <a className="button button-dark" href="#work">
            Explore my approach <span aria-hidden="true" className="button-arrow">↗</span>
          </a>
          <a className="button button-light" href="#contact">Get in touch</a>
        </div>
        <p className="hero-note">
          <span aria-hidden="true" className="hero-note-mark">✳</span>
          Economics-informed analysis · Clear, useful reporting
        </p>
      </div>

      <div aria-label="Illustration of an analytics dashboard" className="visual-wrap" role="img">
        <div className="visual-card">
          <div className="visual-topbar">
            <p className="visual-title">Insight overview</p>
            <span className="visual-period">ANALYTICS SNAPSHOT</span>
          </div>
          <div className="visual-content">
            <div className="visual-metrics">
              <div className="metric-card">
                <span className="metric-label">Business question</span>
                <span className="metric-value">What&apos;s changing?</span>
              </div>
              <div className="metric-card">
                <span className="metric-label">Analysis focus</span>
                <span className="metric-value">Find the signal</span>
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-heading">
                <span>Patterns over time</span>
                <span>Illustrative view</span>
              </div>
              <svg
                aria-hidden="true"
                className="chart-svg"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 420 145"
              >
                <path d="M0 25H420M0 65H420M0 105H420" stroke="#edf0ed" strokeDasharray="3 5" />
                <path d="M0 116C37 105 49 108 80 91S121 95 150 74s44 17 73-2 39-40 68-28 42-20 65-14 40-21 64-19" stroke="#c8d5b8" strokeWidth="3" />
                <path d="M0 126C34 120 48 89 78 98s42-6 69-24 44 27 75 7 40-15 66-35 40 5 64-5 41-19 68-29" stroke="#28634f" strokeLinecap="round" strokeWidth="3.5" />
                <circle cx="285" cy="46" r="5" fill="#28634f" stroke="white" strokeWidth="3" />
                <circle cx="420" cy="12" r="5" fill="#28634f" stroke="white" strokeWidth="3" />
                <path d="M0 132H420" stroke="#e5e9e5" />
              </svg>
              <div className="visual-legend">
                <span><i aria-hidden="true" className="legend-dot" />Observed pattern</span>
                <span><i aria-hidden="true" className="legend-dot legend-dot-secondary" />Comparison</span>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-note">
          <span aria-hidden="true" className="floating-note-icon">↗</span>
          <span><strong>From data to direction</strong><small>Clarity at every step</small></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
