import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import validation from './loginvalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [values, setValues] = useState({
    U_id: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8081/login", values);
        setMessage(response.data.message);
        if (response.data.success) {
          // Assuming your server sends a 'success' flag upon successful login
          navigate('/dashboard'); // Redirect to the dashboard route
          // You might also want to store user information (like a token) here
        }
      } catch (error) {
        setMessage(error.response.data.message || "An error occurred");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Login</h3>

            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="U_id" className="form-label"><strong>U_id</strong></label>
                <input
                  type="number"
                  name="U_id"
                  value={values.U_id}
                  onChange={handleInput}
                  className="form-control"
                  id="U_id"
                  required
                />
                {errors.U_id && <span className="text-danger">{errors.U_id}</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleInput}
                  className="form-control"
                  id="password"
                  required
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;