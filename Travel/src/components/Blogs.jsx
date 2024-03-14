import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

const Blogs = () => {
  const [list, setlist] = useState([]);

  const fetchBlogs = async () => {
    const response = await fetch("https://travel-blog-api-s.onrender.com/get-blog");
    const data = await response.json();
    console.log(data);
    setlist(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <ImageSlider blogs={list} />
    </>
  );
};



//export { Blogs,addItem}
export default Blogs
