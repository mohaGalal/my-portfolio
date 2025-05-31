import React from 'react'
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
// import materialUi from '../../../Images/Material-ui (1).png';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiTypescript,
  SiBootstrap,
  SiNextdotjs,
  SiGithub,
  SiTailwindcss
} from "react-icons/si";

export default function Techstack() {
  return (
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img className='' src='https://images.app.goo.gl/ERVUhP1bV27rjTew7' alt=''/>
      </Col> */}
    </Row>
  )
}
