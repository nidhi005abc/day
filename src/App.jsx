import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Ready for deployment 🚀");

  const handleTest = () => {
    setMessage("Frontend test triggered successfully!");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">CI Dashboard</div>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#builds">Builds</a>
          <a href="#deployments">Deployments</a>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          CI Online
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">CONTINUOUS INTEGRATION</p>
            <h1>Build. Test. Deploy.</h1>
            <p className="hero-text">
              A simple React frontend for testing your CI pipeline.
            </p>

            <button onClick={handleTest}>
              Run Frontend Test
            </button>
          </div>

          <div className="hero-card">
            <div className="check">✓</div>
            <h3>Pipeline Ready</h3>
            <p>Your React application is ready for CI.</p>
          </div>
        </section>

        <section className="cards" id="dashboard">
          <div className="card">
            <span className="card-icon">⚡</span>
            <p>Build Status</p>
            <h2>Passing</h2>
            <span className="green">● All checks passed</span>
          </div>

          <div className="card">
            <span className="card-icon">🧪</span>
            <p>Tests</p>
            <h2>24 / 24</h2>
            <span className="green">● Test suite healthy</span>
          </div>

          <div className="card">
            <span className="card-icon">📦</span>
            <p>Version</p>
            <h2>v1.0.0</h2>
            <span className="gray">Latest commit</span>
          </div>
        </section>

        <section className="pipeline" id="builds">
          <div className="section-header">
            <div>
              <p className="eyebrow">PIPELINE</p>
              <h2>Latest Build</h2>
            </div>

            <span className="badge">SUCCESS</span>
          </div>

          <div className="pipeline-steps">
            <div className="step completed">
              <div className="step-icon">✓</div>
              <div>
                <strong>Install Dependencies</strong>
                <p>npm install</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <div className="step-icon">✓</div>
              <div>
                <strong>Run Tests</strong>
                <p>npm test</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <div className="step-icon">✓</div>
              <div>
                <strong>Build Application</strong>
                <p>npm run build</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="step">
              <div className="step-icon">→</div>
              <div>
                <strong>Deploy</strong>
                <p>Waiting for deployment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="message-box" id="deployments">
          <div>
            <p className="eyebrow">SYSTEM MESSAGE</p>
            <h3>{message}</h3>
          </div>

          <span className="live-badge">LIVE</span>
        </section>
      </main>

      <footer>
        <p>React CI Demo • Built for CI/CD practice</p>
      </footer>
    </div>
  );
}

export default App;
