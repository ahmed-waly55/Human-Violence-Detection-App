import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // ضع Service ID الخاص بك
        "YOUR_TEMPLATE_ID", // ضع Template ID الخاص بك
        form.current,
        "YOUR_PUBLIC_KEY" // ضع Public Key الخاص بك
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {/* قسم المقدمة */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to the Violence Detection App</h1>
          <p className="lead">
            Detect violent moments in videos with advanced AI technology. Upload
            a video and let the model do the work for you!
          </p>
          <i className="bi bi-camera-video-fill display-1 text-primary mt-4"></i>
        </div>
      </section>

      {/* قسم الميزات */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-alarm display-3 text-success mb-3"></i>
              <h5>Real-Time Detection</h5>
              <p>
                Analyze videos in real-time to identify violent moments quickly.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-ui-checks-grid display-3 text-primary mb-3"></i>
              <h5>User-Friendly Interface</h5>
              <p>
                Easy to upload videos and get results in a simple dashboard.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-graph-up display-3 text-danger mb-3"></i>
              <h5>High Accuracy</h5>
              <p>Powered by advanced AI models for reliable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم كيفية العمل */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-person-circle display-3 text-info mb-3"></i>
              <h5>Step 1</h5>
              <p>Sign in or create an account to access the platform.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-cloud-upload display-3 text-warning mb-3"></i>
              <h5>Step 2</h5>
              <p>Upload your video for analysis by the AI model.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-play-circle display-3 text-success mb-3"></i>
              <h5>Step 3</h5>
              <p>View detailed results with timestamps for violent scenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-3">Get Started Now!</h2>
          <p className="lead">
            Join us and make use of this powerful tool for safety and analysis.
          </p>
          <a href="/register" className="btn btn-primary me-2">
            Sign Up
          </a>
          <a href="/about" className="btn btn-outline-secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* نموذج التواصل */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="user_email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
