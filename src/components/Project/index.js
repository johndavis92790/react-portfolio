import React, { useState } from "react";
import ModalDiv from "../Modal";
import { Button, Row, Col, Card } from "react-bootstrap";

function Project() {
  const [modalShow, setModalShow] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Stony Brook",
      description: "Making returns easy, one step at a time",
      url: "https://salty-brook-34116.herokuapp.com/",
      github: "https://github.com/johndavis92790/Warehouse-Returns",
    },
    {
      name: "Can We Make It?",
      description:
        "Quick and easy way app to check local showtimes and if you can make a showing or not",
      url: "https://johndavis92790.github.io/travel-buddy/",
      github: "https://github.com/johndavis92790/travel-buddy",
    },
    {
      name: "Social Network API",
      description:
        "This can be a good boiler plate to create social networks of many kinds.",
      url: "",
      github: "https://github.com/johndavis92790/social-network-api",
    },
    {
      name: "E-Commerce Back End",
      description:
        "You could use this framework for many different types of online e-commerce applications. It can be very dynamic and easy to expand.",
      url: "",
      github: "https://github.com/johndavis92790/e-commerce-back-end",
    },
    {
      name: "Weather Dashboard",
      description: "Simple OpenWeather API dashboard that uses localStorage",
      url: "https://johndavis92790.github.io/weather-dashboard/",
      github: "https://github.com/johndavis92790/weather-dashboard",
    },
    {
      name: "Note Taker",
      description:
        "You can use this to create notes and to access them anytime you go back to the app.",
      url: "https://miniture-eureka-92790.herokuapp.com/",
      github: "https://github.com/johndavis92790/miniture-eureka",
    },
  ]);

  // const toggleModal = (image, i) => {
  //   setCurrentProject({ ...image, index: i });
  //   setModalShow(modalShow);
  // };

  return (
    <>
      <ModalDiv
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentProject={currentProject}
      />
      <Row xs={1} md={2} className="g-5 m-5">
        {projects.map((image, i) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={require(`../../assets/small/${i}.jpg`)}
                alt={image.name}
                onClick={() => {
                  setModalShow(true);
                  setCurrentProject({ ...image, index: i });
                }}
                key={image.name}
              />
              <Card.Body>
                <Card.Title>{image.name}</Card.Title>
                <Card.Text>{image.description}</Card.Text>
                <Button href={image.url} target="_blank" rel="noreferrer">
                  Live Link
                </Button>
                <Button href={image.github} target="_blank" rel="noreferrer">
                  Github Repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Project;