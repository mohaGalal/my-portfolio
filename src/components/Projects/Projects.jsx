import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quizApp from "../../assets/Projects/quiz-app.webp";
// import emotion from "../../Assets/Projects/emotion.png";
import hms from "../../assets/Projects/HMS.jpg";
import foodApp from "../../assets/Projects/foodapp.jfif";
import chef from "../../assets/Projects/chef.jpg";
import pms from "../../assets/Projects/project_managment.jpg";

export default function Projects() {
  return (
     <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food App"
              description=" A web application designed to streamline food management processes featuring user-friendly interfaces for inventory tracking meal planning and recipe management."
              ghLink="https://github.com/mohaGalal/food_app.git"
              demoLink="https://food-app-git-master-mohamed-galals-projects-9cf4f8db.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="Project Managment System"
              description="A web app for managing projects and tasks with authentication, forms with validation,CRUD operation, drag-and-drop task board and interactive charts."
              ghLink="https://github.com/MohammadSObeidat/Project-Management-System"
              demoLink=" https://ms-pms.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hotel Managment System"
              description=" A web application designed to serve both administrators and guests, offering seamless room booking management, to enhance hotel operations and guest satisfaction."
              ghLink="https://github.com/mohamedreda850/hms"
              demoLink="https://hmslast.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App"
              description=" The platform we built provides a complete solution for managing interactive exams and tests, and includes: Create groups and add students, Create and manage tests and questions, View and analyze results easily, Enter exams easily and conveniently, View results and assessments."
              ghLink="https://github.com/mohamedreda850/quizapp"
              demoLink="https://quizapp-wine-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chef}
              isBlog={false}
              title="Chef Restaurant"
              description="A restaurant landing page that displays the menu, address, contact information, and allows you to reserve a table.."
              ghLink="https://github.com/mohaGalal/chef-project.git"
              demoLink="https://mohagalal.github.io/chef-project/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}
