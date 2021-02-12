import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 500
              }
            }
          }
        }}
      />
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
