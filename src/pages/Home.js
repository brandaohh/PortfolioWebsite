import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Particles from 'react-particles-js';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function App() {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 150,
                            density: {
                                enable: true,
                                value_area: 2500
                            }
                        }
                    }
                }}
            />
            <Header />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
