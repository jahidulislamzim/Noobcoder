import React from "react";
import './Blog.css';
import { Button } from "react-bootstrap";
import useBlogs from "../../Hocks/useBlogs";

const Blog = () => {
  const [blogs] = useBlogs();
    return (
      <div className='container'>
    <div className="row d-flex justify-content-center">
      {blogs.map((blog) => (
          <div className='blog col col-md-5 m-3 align-items-center'>
              <img src={blog.img} alt="" />
              <div>
                  <h1>{blog.title}</h1>
                  <p>{blog.details}</p>
                  <Button variant="primary" className='blog-btn'>Read More</Button>
              </div>
              
              
        </div>
      ))}
            </div>
            </div>
  );
};

export default Blog;
