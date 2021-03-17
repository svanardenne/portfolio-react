// Dependancy imports
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// CSS Styling
import './css/app.css';

// Import Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Higher-order component for providing context consumer
import withContext from './Context';


// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

// Components with context
const HomeWithContext = withContext(Home);
const aboutWithContext = withContext(About);
const ProjectsWithContext = withContext(Projects);
const contactWithContext = withContext(Contact);


// Main app
function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="App noselect">
          <Navbar />
          <Switch>
            <Redirect exact path="/" to="/home" />
            <Route path="/home" component={HomeWithContext} />
            <Route path="/about" component={aboutWithContext} />
            <Route path="/projects" component={ProjectsWithContext} />
            <Route path="/contact" component={contactWithContext} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
