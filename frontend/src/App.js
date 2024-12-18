import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContractScreen from './screns/ContractScreen';
import Container from 'react-bootstrap/esm/Container';

import HomeScreen from './screns/HomeScreen';
import Footer from './screns/Footer';
import Header from './screns/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/contract/:slug" element={<ContractScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
