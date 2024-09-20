import React from "react";
import "./Register.styles.scss";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";

const Register = () => {
  return (
    <div>
      <h1>Formulario de Registro</h1>
      <p></p>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />
      <p></p>
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <p></p>
      <label htmlFor="password">Contraseña:</label>

      <input type="password" id="password" name="password" required />
      <p></p>

      <button type="submit">Registrarse</button>
    </div>
  );
};
export default Register;
