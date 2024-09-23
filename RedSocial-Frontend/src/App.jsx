import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import Register from "./components/Register/Register";
import PostDetail from "./components/Posts/Postdetail";

function App() {
  return (
    <Router>
      <TheHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/post/:id" element={<PostDetail />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <TheFooter />
    </Router>
  );
}

export default App;
