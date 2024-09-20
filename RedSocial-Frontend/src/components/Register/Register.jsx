import "./Register.styles.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authSlice.js";
import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const { name, age, email, password } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    notification.success({
      message: "Success",
      description: "User registered!",
    });
    dispatch(register(formData));
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingresar nombre"
          value={name}
          onChange={onChange}
        />
        <input type="text" placeholder="Ingresar edad" name="age" value={age} onChange={onChange} />
        <input
          type="email"
          placeholder="Ingresar email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Ingresar una contraseña"
          name="password"
          value={password}
          onChange={onChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
