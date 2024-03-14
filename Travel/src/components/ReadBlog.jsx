// import React from 'react';
// import ReadComp from './ReadComp';
// import { useParams } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// function ReadBlog(props) {
//     const Blog = [
//         {
//             title: "Exploring the Serengeti",
//             subtitle: "A Safari Adventure",
//             writer: "Bharath",
//             image: "src/images/createbg.jpg",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
//         },
//         {
//             title: "Island Paradise in Maldives",
//             subtitle: "Beach Bliss",
//             writer: "Arun",
//             image: "src/images/1.jpeg",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
//         },
//         {
//             title: "Tajmahal",
//             subtitle: "One of the Wonder",
//             writer: "Abi",
//             image: "src/images/tajmahal.jpg",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur odio vitae purus eleifend, at interdum eros dapibus. Fusce fringilla est a magna cursus, vitae dignissim nunc ultrices. Sed hendrerit dapibus nibh, sit amet volutpat nisi posuere nec."
//         }
//     ];
//     return (
//         <div>
//             <ReadComp Title={Blog.Title} Subtitle={Blog.Subtitle} writer={Blog.writer} Content={Blog.Content} Image={Blog.Image}/>
//         </div>
//     );
// }

// export default ReadBlog;

// ReadBlog.js
import { useLocation } from "react-router-dom";

const ReadBlog = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>{blog.subtitle}</h2>
      <h3>Blog by: {blog.writer}</h3>
      <p>{blog.content}</p>
    </div>
  );
};

export default ReadBlog;
