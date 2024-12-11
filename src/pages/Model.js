import React, { useState } from "react";
import { uploadVideo } from "../api/api"; 
import { toast } from "react-toastify";

const Model = () => {
  const [video, setVideo] = useState(null);
  const [violentMoments, setViolentMoments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoElement = document.createElement("video");
    videoElement.preload = "metadata";
    videoElement.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoElement.src);
      if (videoElement.duration > 180) {
        toast.error("Video exceeds 3 minutes!");
        setVideo(null);
      } else {
        setVideo(file);
      }
    };
    videoElement.src = URL.createObjectURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!video) {
      toast.error("Please upload a valid video.");
      return;
    }

    uploadVideo(video, setViolentMoments, setLoading);
    setVideo(null);  
  };

  return (
    <div className="container mt-5">
      <h2>Upload Video for Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? "Processing..." : "Upload"}
        </button>
      </form>

      {violentMoments.length > 0 && (
        <div className="mt-4">
          <h4>Violent Moments</h4>
          <div className="row">
            {violentMoments.map((moment, index) => (
              <div className="col-4" key={index}>
                <img
                  src={`http://127.0.0.1:5000${moment.image}`}
                  alt={`Frame ${index}`}
                  className="img-fluid"
                />
                <p>
                  {moment.time} - Violence Probability: {moment.violence * 100}%
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
