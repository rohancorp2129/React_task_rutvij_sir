import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>UserConnect</h1>
    <Link to="/register">Register</Link> | <Link to="/users">View Users</Link>
  </div>
);

export default Home;
