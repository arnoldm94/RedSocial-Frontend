import { useSelector } from "react-redux";
import ProfilePost from "./ProfilePosts";
import "./Profile.styles.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  let identification = user.email;
  return (
    <>
      <div className="container">
        <h1>Perfil de {user.name}</h1>
        <p>{user.email}</p>
      </div>

      <div className="container">
        <ProfilePost usuario={identification}></ProfilePost>
      </div>
    </>
  );
};

export default Profile;
