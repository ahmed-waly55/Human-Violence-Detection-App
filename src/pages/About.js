import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/about.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About This Application</h1>

      <div className="row">
        <div className="col-md-12">
          <p>
            This application uses advanced AI models to analyze videos and detect violent scenes. 
            It is designed with security and safety in mind, providing accurate results for video analysis.
          </p>
          <p>
            Developed using <strong>React</strong>, <strong>Firebase</strong>, and <strong>Bootstrap</strong>.
          </p>
          <p>
            The system utilizes real-time video analysis to identify moments of violence, helping security professionals take quick action.
          </p>
        </div>
      </div>

      <section className="mt-5" id="image-section">
        <h2 className="text-center mb-4">Our Image</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src="image/about3.png"
              alt="AI Technology"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="image/about2.png"
              alt="Video Analysis"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="image/about.png"
              alt="Security"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-center mb-4">Accuracy Rate</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-pie-chart-fill display-3 text-success mb-3"></i>
            <h4 className="accuracy-text">80% Accuracy</h4>
            <p>Our AI model accurately detects violent moments with an 80% success rate.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-check-circle-fill display-3 text-primary mb-3"></i>
            <h4 className="accuracy-text">Fast Processing</h4>
            <p>Video analysis is done in real-time, ensuring quick results for users.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-lightning-fill display-3 text-warning mb-3"></i>
            <h4 className="accuracy-text">High Speed</h4>
            <p>Our model is optimized for high-speed processing without sacrificing accuracy.</p>
          </div>
        </div>
      </section>

      <section className="mt-5 mission-section">
        <h2 className="text-center mb-4">Our Mission</h2>
        <div className="text-center mission-text">
          <p>
            Our mission is to provide a powerful tool to help detect violent content in videos, enhancing safety and providing actionable insights for security professionals. 
            We aim to contribute to a safer digital environment by providing real-time, reliable analysis for security teams and individuals alike.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
