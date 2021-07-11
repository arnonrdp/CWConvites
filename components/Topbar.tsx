import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Topbar.module.css';

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <Navbar collapseOnSelect expand="lg" className={styles.bgTop}>
        <Container>
          <Navbar.Brand href="https://cwconvites.com" className={styles.NavbarBrand}>
            <Image
              src="/logo_horizontal.svg"
              alt="logotipo CW Convites"
              width={285}
              height={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbarTogglerIcon} />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className={styles.menu}>
            <Nav.Link href="#">CASAMENTO</Nav.Link>
            <Nav.Link href="#">DEBUTANTES</Nav.Link>
            <NavDropdown title="EMPRESARIAL" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Convites</NavDropdown.Item>
              <NavDropdown.Item href="#">Caixas</NavDropdown.Item>
              <NavDropdown.Item href="#">Papelaria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}