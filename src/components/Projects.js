import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p01.jpg";
import projImg2 from "../assets/img/p05.jpg";
import projImg3 from "../assets/img/p6.jpg";
import projImg4 from "../assets/img/p4.png";
import projImg5 from "../assets/img/p3.jpg";
import projImg6 from "../assets/img/p2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Robotic Arm",
      description: "3D Printed",
      imgUrl: projImg1,
    },
    {
      title: "Ergonomics to Two Wheelers for Women",
      description: "Development and Design",
      imgUrl: projImg2,
    },
    {
      title: "QR Code Scanner",
      description: "Scanner",
      imgUrl: projImg3,
    },
    {
      title: "FlipZonn",
      description: "E-Commerce Website",
      imgUrl: projImg4,
    },
    {
      title: "Soccer 2D",
      description: "Football Game",
      imgUrl: projImg5,
    },
    {
      title: "CreativePort",
      description: "Portfolio Website",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <div className="project-bx">
                  <h2>Projects</h2>
                  <p>
                  My projects are shown here
                  </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-corner"
                id="pills-tab"
              />
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>





      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorsharp2"
      />
    </section>
  );
};
