import './index.css';

import Header from './screns/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screns/HomeScreen';
import ContractScreen from './screns/ContractScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <img
          src="../img/logo-ok.png"
          alt="logo"
          style={{ width: '150px', marginTop: '1rem', marginLeft: '1rem' }}
        />
        <p style={{ textAlign: 'right', margin: '0px', color: 'red' }}>
          Matilda, Matilda, Matilda, she take me money and run Venezuela !
        </p>
        <Header />
        <main>
          <Routes>
            <Route path="/contract/:slug" element={<ContractScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
