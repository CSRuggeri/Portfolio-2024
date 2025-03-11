import { BrowserRouter as Router } from 'react-router-dom';
import NameCard from './components/NameCard/NameCard';
import ExperienceTimeline from './components/ExperienceTimeline/ExperienceTimeline';
import { Skills } from './components/Skills/Skills';
import NavigationBar from "./components/Nav/Nav";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="container mt-5 pt-5">
          <section id="name-card"><NameCard /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><ExperienceTimeline /></section>
          <section id="contact"> {/* Add Contact Component Here */}</section>
        </div>
      </div>
    </Router>
  );
}

export default App;


