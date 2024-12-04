import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Model = () => {
  // حالات الـ useState
  const [video, setVideo] = useState(null);
  const [violentMoments, setViolentMoments] = useState([]);
  const [loading, setLoading] = useState(false);

  // دالة التعامل مع التغيير في الملف المرفوع
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // تهيئة العنصر الفيديو للتحقق من مدة الفيديو
    const videoElement = document.createElement("video");
    videoElement.preload = "metadata";
    videoElement.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoElement.src);
      if (videoElement.duration > 180) {
        toast.error("Video exceeds 3 minutes!");
        setVideo(null);  // إعادة تعيين الفيديو
      } else {
        setVideo(file);  // تعيين الفيديو الجديد
      }
    };
    videoElement.src = URL.createObjectURL(file);
  };

  // دالة رفع الفيديو
  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من وجود فيديو مرفوع
    if (!video) {
      toast.error("Please upload a valid video.");
      return;
    }

    // إعادة تعيين الحالات عند رفع فيديو جديد
    setLoading(true);  // تفعيل حالة التحميل
    setViolentMoments([]);  // مسح الإطارات العنيفة السابقة
    setVideo(null);  // مسح الفيديو القديم بعد رفع الجديد (اختياري حسب رغبتك)

    const formData = new FormData();
    formData.append("video", video);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData);
      const { violent_moments } = response.data;

      if (violent_moments.length === 0) {
        toast.info("No violence detected.");
      } else {
        toast.success(`Violence detected in ${violent_moments.length} frame(s).`);
        setViolentMoments(violent_moments);
      }
    } catch (error) {
      toast.error("Error processing the video.");
    } finally {
      setLoading(false);  // إيقاف حالة التحميل
    }
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
