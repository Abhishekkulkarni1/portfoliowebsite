import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/abhishek1.png";
import navIcon1 from "../assets/img/nav-iconln1.svg";
import navIcon2 from "../assets/img/nav-iconig3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishek-kulkarni-a0a872271">
                {" "}
                <img src={navIcon1} alt="okay" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=4yp4ntoic6q5&utm_content=3db9eh9">
                {" "}
                <img src={navIcon2} alt="okay" />
              </a>
            </div>
            <p> CopyRight &copy; 2023. All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
