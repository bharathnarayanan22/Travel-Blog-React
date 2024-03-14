import { useState } from "react";
import Style from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ blogs }) => {
  let navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);

  const blogId = blogs[currentSlide]?._id;

  if (!blogs || blogs.length === 0) {
    return <p style={{marginTop:"10%",marginLeft:"34%"}}><img src="src/images/tenor.gif" alt="Loading........" /> </p>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + blogs.length) % blogs.length
    );
  };

  const handleReadBlog = () => {
    setShowContent(true);
    setBlurBackground(true);
  };

  const handleCloseContent = () => {
    setShowContent(false);
    setBlurBackground(false);
  };

  const DeleteBlog = () => {
    console.log(blogId);

    if (!blogId) {
      alert("Invalid blog ID");
      return;
    }

    fetch(`https://travel-blog-api-s.onrender.com/delete-blog/${blogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        alert(response.message);
      })
      .catch((error) => {
        alert("Failed to Delete");
      });
  };

  return (
    <>
      <div className={`${Style.slider} ${blurBackground ? Style.blur : ''}`}
        style={{ backgroundImage: `url(${blogs[currentSlide]?.image})` }}
      >
        <div className={Style.slidebtn}>
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>

        {blogs[currentSlide] && (
          <>
            <h3>{blogs[currentSlide].title}</h3>
            <h4>{blogs[currentSlide].subtitle}</h4>
            <h5 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
              <b>
                <u>Blog by:</u>
              </b>{" "}
              {blogs[currentSlide].writer}.
            </h5>

            <div className={Style.map}>
              <a href={blogs[currentSlide].map} target="/blank">{<img src="src/images/locationicon.png" alt=">>>" />}Location</a>
            </div>
            
            <div className={Style.btn}>
              <button
                className={`${Style.triangularButton} ${Style.readButton}`}
                onClick={handleReadBlog}
              >
                ReadBlog
              </button>

              <button
                className={`${Style.triangularButton} ${Style.editButton}`}
                onClick={() =>
                  navigate(`/Edit_Blogs/${blogId}`, {
                    state: { oldBlog: blogs[currentSlide] },
                  })
                }
              >
                EditBlog
              </button>

              <button
                className={`${Style.triangularButton} ${Style.deleteButton}`}
                onClick={DeleteBlog}
              >
                Delete
              </button>
            </div>

          </>
        )}
      </div>
      <div>
        {showContent && (
          <div className={Style.content}>
            <button className={Style.closeBtn} onClick={handleCloseContent}>
              X
            </button>
            <h6>{blogs[currentSlide]?.content}</h6>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageSlider;
