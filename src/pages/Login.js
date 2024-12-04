import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // إذا كان المستخدم مسجل دخوله بالفعل، قم بإعادة توجيهه
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // إعادة التوجيه إلى الصفحة الرئيسية إذا كان المستخدم مسجل دخوله
      }
    });
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/"); // إعادة التوجيه بعد تسجيل الدخول بنجاح
    } catch (error) {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
