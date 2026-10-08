import "./App.css";

function App() {
  const features = [
    {
      title: "Automated Testing",
      description: "Run your tests automatically whenever code is pushed.",
      icon: "🧪",
    },
    {
      title: "Continuous Integration",
      description: "Build and validate every change before it reaches production.",
      icon: "⚙️",
    },
    {
      title: "Fast Deployment",
      description: "Automatically deploy successful builds with confidence.",
      icon: "🚀",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          CI<span>Demo</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#status">CI Status</a>
        </div>

        <button className="github-btn">View Project</button>
      </nav>

      {/* Hero */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="badge">
              <span className="status-dot"></span>
              CI Pipeline Ready
            </div>

            <h1>
              Build Better.
              <br />
              <span>Ship Faster.</span>
            </h1>

            <p>
              A simple React frontend created to demonstrate a modern
              Continuous Integration workflow.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          <div className="pipeline-card">
            <div className="card-header">
              <span>CICD Pipeline</span>
              <span className="passed">● Passed</span>
            </div>

            <div className="pipeline-step">
              <div className="step-icon success">✓</div>
              <div>
                <strong>Install Dependencies</strong>
                <small>Completed successfully</small>
              </div>
            </div>

            <div className="line"></div>

            <div className="pipeline-step">
              <div className="step-icon success">✓</div>
              <div>
                <strong>Run Tests</strong>
                <small>24 tests passed</small>
              </div>
            </div>

            <div className="line"></div>

            <div className="pipeline-step">
              <div className="step-icon success">✓</div>
              <div>
                <strong>Build Application</strong>
                <small>Build completed</small>
              </div>
            </div>

            <div className="line"></div>

            <div className="pipeline-step">
              <div className="step-icon pending">→</div>
              <div>
                <strong>Deploy</strong>
                <small>Ready for deployment</small>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features" id="features">
          <div className="section-heading">
            <p className="section-label">FEATURES</p>
            <h2>Everything you need for CICD</h2>
            <p>
              Keep your development workflow simple, automated, and reliable.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Status */}
        <section className="status-section" id="status">
          <div>
            <p className="section-label">PIPELINE STATUS</p>
            <h2>Your project is looking good.</h2>
            <p>
              Every commit can go through the same automated process:
              install, test, build, and deploy.
            </p>
          </div>

          <div className="status-box">
            <div className="big-status">
              <span className="status-dot"></span>
              All Systems Operational
            </div>

            <div className="status-row">
              <span>Build</span>
              <strong className="green">Passed</strong>
            </div>

            <div className="status-row">
              <span>Tests</span>
              <strong className="green">24 / 24</strong>
            </div>

            <div className="status-row">
              <span>Deployment</span>
              <strong className="yellow">Ready</strong>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="logo">
          CI<span>Demo</span>
        </div>

        <p>React CI/CD Demo Project</p>
      </footer>
    </div>
  );
}

export default App;