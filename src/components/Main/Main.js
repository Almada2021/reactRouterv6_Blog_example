import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Blog from "../Blog/Blog";
import Post from "../Post/Post";
import About from "../About/About";
import ErrorNotFound from '../Errors/404/ErrorNotFound';
export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Header/>} >
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<Post />}></Route>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/*"element={<ErrorNotFound/>}/>
      </Route>
    </Routes>
  );
}
