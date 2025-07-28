import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/register");
  }, [user, navigate]);

  return user ? <ProfileCard user={user} /> : null;
};

export default Profile;
