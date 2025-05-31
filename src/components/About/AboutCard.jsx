import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
     <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Galal </span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />
            I have experience with JavaScript, CSS, HTML, Redux, and Next.js
            <br />
            I worked on a large-scale e-commerce platform where I focused on improving the UI/UX and making it more responsive.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">mohamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}
