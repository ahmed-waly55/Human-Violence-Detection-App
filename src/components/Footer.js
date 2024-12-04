import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css";  // استيراد ملف الـ CSS من فولدر css

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
