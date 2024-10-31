import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './App.module.css';
import { NameCard } from './components/NameCard/NameCard';
import ExperienceTimeline from './components/ExperienceTimeline/ExperienceTimeline';
import { Skills } from './components/Skills/Skills';
import { Nav } from './components/Nav/Nav';
function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        {/* Navbar */}
        <nav className={styles.navbar}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/experience" className={styles.navLink}>Experience</Link>
          <Link to="/skills" className={styles.navLink}>Skills</Link>
        <Nav/>
        </nav>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<NameCard />} />
            <Route path="/experience" element={<ExperienceTimeline />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


