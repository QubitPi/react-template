import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Beijing",
      description: "Culture & Food",
      imgUrl: projImg1,
    },
    {
      title: "Shanghai",
      description: "Living in Shanghai",
      imgUrl: projImg2,
    },
    {
      title: "Shenzhen",
      description: "Technology",
      imgUrl: projImg3,
    },
    {
      title: "Hong Kong",
      description: "Economic View",
      imgUrl: projImg4,
    },
    {
      title: "Taiwan",
      description: "Culture & Food",
      imgUrl: projImg5,
    },
    {
      title: "Hubei",
      description: "Culture & Religion",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Touring Projects</h2>
                <p>Embark on an enriching journey through the vibrant tapestry of Chinese culture with our diverse study tour programs! Explore ancient wonders like the Forbidden City, immerse yourself in bustling modern cities like Shanghai, and delve deep into traditional practices in rural villages. Whether you're passionate about language immersion, historical exploration, or contemporary arts, our curated itineraries offer a unique blend of academic insights and authentic experiences, providing an unparalleled opportunity to learn, connect, and discover the true essence of China.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>More projects coming up!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects coming up!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
