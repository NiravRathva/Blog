import Navbar from "./Components/Navbar/Navbar";
import AddBlog from "./Pages/AddBLog/AddBlog";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const user=false;
  return (
    <div>
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}></Route>
        <Route path="/addblog" element={user ? <AddBlog /> : <Login />}></Route>
        <Route path="/profile"  element={user ? <Profile /> : <Login />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />} ></Route>
        <Route path="/login"  element={user ? <Home /> : <Login />}></Route>
       </Routes>
      </Router>
    </div>)


};

export default App;