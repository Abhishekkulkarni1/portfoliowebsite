import { Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/abhishek1.png";
import navIcon1 from "../assets/img/nav-iconln1.svg";
import navIcon2 from "../assets/img/nav-iconig3.svg";
import Nav from "react-bootstrap/Nav";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Welcome" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/abhishek-kulkarni-a0a872271">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=4yp4ntoic6q5&utm_content=3db9eh9">
                  <img src={navIcon2} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="abhi" onClick={() => console.log("connect")}>
                  <span>Let's Connect!</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
