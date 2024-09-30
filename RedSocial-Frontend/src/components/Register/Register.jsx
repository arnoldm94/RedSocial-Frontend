import "./Register.styles.scss";
import { register, reset } from "../../redux/auth/authSlice.js";
import { notification } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LineStrokeColorVar } from "antd/es/progress/style/index.js";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const { name, age, email, password } = formData;

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <form onSubmit={onSubmit} className="allForm">
        <ul class="wrapper">
          <li class="form-row">
            <div className="tipolabel">Nombre: </div>
            <input
              type="text"
              name="name"
              placeholder="Ingresar nombre"
              value={name}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li className="form-row">
            <div className="tipolabel">Edad: </div>
            <input
              type="text"
              placeholder="Ingresar edad"
              name="age"
              value={age}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li className="form-row">
            <div className="tipolabel">Email: </div>
            <input
              type="email"
              placeholder="Ingresar email"
              name="email"
              value={email}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li className="form-row">
            <div className="tipolabel">Contraseña: </div>
            <input
              type="password"
              placeholder="Ingresar una contraseña"
              name="password"
              value={password}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li className="form-row">
            <button type="submit" className="botonSubmit">
              Register
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
export default Register;
