import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <img
        src="../img/logo-ok.png"
        alt="logo"
        style={{ width: '150px', marginTop: '1rem', marginLeft: '1rem' }}
      />
      <p style={{ textAlign: 'right', margin: '0px', color: 'red' }}>
        Matilda, Matilda, Matilda, she take me money and run Venezuela !
      </p>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
