import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
