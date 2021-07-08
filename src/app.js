import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Project2 from './components/Projects2';
import Contact from './components/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (

        <main>
            <Nav />
            <Header />
            <About />
            <Projects />
            <Project2 />
            <Contact />
        </main>
    );

}

export default App;
