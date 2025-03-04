import { BrowserRouter as Router } from 'react-router-dom';
import { NameCard } from './components/NameCard/NameCard';
import ExperienceTimeline from './components/ExperienceTimeline/ExperienceTimeline';
import { Skills } from './components/Skills/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="container-fluid bg-dark text-light min-vh-100">
      
        


        {/* Main Content */}
        <div className="container mt-5 pt-5">
        <NameCard />
        <Skills />
        <ExperienceTimeline />
          
         
        </div>
      </div>
    </Router>
  );
}

export default App;


