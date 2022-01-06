import React, { useState, useEffect } from "react";
import Link from "next/link";
import fire from "../../config/fire-config";

const Blog = (props) => {
  const [blog, setBlog] = useState(null);
  console.log(props);
  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .doc(props.id)
      .get()
      .then((blog) => {
        setBlog(blog.data());
      });
  }, []);
  console.log(blog);

  Blog.getInitialProps = ({ query }) => {
    console.log("query", query);
    return {
      id: query.id,
    };
  };
  return (
    <>
      <div>{blog ? blog.content : "Loading"}</div>
      <hr/>
      <Link href="/">Back home</Link>
    </>
  );
};
export default Blog;
