import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); 
      }
    });
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/"); 
    } catch (error) {
      toast.error("Error creating account. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Register;
  