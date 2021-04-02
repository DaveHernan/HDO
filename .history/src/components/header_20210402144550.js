import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

import "./hero.scss";
import favicon from "../templates/favicon-32x32.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { siteTitle, logo } = this.props
    return (
      <div className="header" id="home" >
        <Navbar color="dark" dark expand="md" className="navbar ">
          <Container>
            <Link to="/#home" className="navbar-brand">
              <img
                src={favicon}
                alt={`${siteTitle} Logo`}
                height="40px"
                className="mr-2"
              />
             <div className="Nav-title" >HDO Builders and Design</div> 
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/#home"
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link 
                  className="nav-link" 
                  activeStyle={{ fontWeight: "bold" }}
                  to="/projects/#projects" > 
                    Projects
                  </Link>
                </NavItem>
             
             
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/about/#about"
                  >
                    About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/contact/#contact"
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
