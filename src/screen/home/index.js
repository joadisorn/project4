import { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import Slider from 'infinite-react-carousel';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">CHOMPU</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">หน้าแรก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  เกี่ยวกับ
                </NavLink>
              </NavItem>
                <NavLink href="/">
                  ติดต่อ
                </NavLink>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Slider dots autoplay>
    <div>
      <img src="https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png"
      alt="รูปภาพ"
      />
    </div>
    <div>
      <img src="https://www.cmru.ac.th/assets/images/banners/th/06-01-2021/98ffb400b8efa9c2c1ef328aa3ddbbb011049e41.png" 
      alt="รูปภาพ"
      />
    </div>
    <div>
      <img src="https://www.cmru.ac.th/assets/images/banners/th/04-02-2021/5781919f63882117a2c1233753b37f1a36d7ef05.png" 
      alt="รูปภาพ"
      />
    </div>
  </Slider>
        <h1>Home Page</h1>
      </Container>
    </div>
  );
};

export default Home;
