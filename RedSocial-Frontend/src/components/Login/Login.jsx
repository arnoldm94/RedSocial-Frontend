import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, reset } from "../../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import "./Login.styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({ message: "Success", description: message });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="allForm">
        <ul class="wrapper">
          <li className="individuallabelinput">
            <div className="tipolabel">Ingresa tu nombre de usuario: </div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li className="individuallabelinput">
            <div className="tipolabel">Ingresa tu clave: </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="inputIndividual"
            />
          </li>
          <li>
            <button type="submit" className="botonSubmit">
              Login
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
export default Login;
