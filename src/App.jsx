import "./App.css";
import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Home,  CatogaryPage, BlogPage } from "./pages/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin, Navbar, Signup , Logout,Dashboard, Profile,EditProfile, AddPost, Error, Users, Catogaries, Posts} from "./components/component";
import { useDispatch , useSelector} from "react-redux";
import { signin } from "./features/navbar";

const App = () => {

  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  useEffect(() => { 
    if (localStorage.getItem("token")) {
      dispatch(signin());
    }
  }, []);

  return (
    <>
      <div className={`root ${theme}`}>
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="/catogary/:catogary" element={ <CatogaryPage />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/edit/:id" element={<EditProfile />} />
              <Route path="/post/:id" element={<AddPost/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashbaord/catogaries" element={<Catogaries />}/>
              <Route path="/dashbaord/users" element={<Users />}/>
              <Route path="/dashbaord/posts" element={<Posts />}/>
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App;
