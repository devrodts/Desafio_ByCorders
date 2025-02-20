import TextInput from "../../../components/atoms/TextInput/TextInput";
import { useState, useEffect } from "react";
import styles from "./login.module.css";
import asideImage from "/aside.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";

const LoginPage = () => {
  
  const { state, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await login(formData.email, formData.password).then(() => {
      navigate("");
    }).catch((error) => {
      console.error('Error logging in:', error)
    })  
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/transactions");
    }
  }, [navigate]);
  

  return (
    <div className={styles.container}>
      <div
        className={styles.asideDiv}
        style={{ backgroundImage: `url(${asideImage})` }}
      ></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <section className={styles.section}>
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </section>
        <button className={styles.button} type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/auth/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
