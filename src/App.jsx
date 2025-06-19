import { Routes, Route } from 'react-router-dom';

import './output.css';
import NavBar from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import EncryptText from './components/EncryptText';
import DecryptText from './components/DecryptText';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/encrypt" element={<EncryptText />} />
        <Route path="/decrypt" element={<DecryptText />} />
      </Routes>
    </>
  );
}

export default App;
