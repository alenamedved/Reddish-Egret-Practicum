import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-config";
import CreatePost from "../components/CreatePost";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import JobCard from "../components/jobs/JobsCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  
  return (
 
    <>
    
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href="/blog/[id]" as={"/blog/" + blog.id}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <CreatePost />
      <Link href={"/mainSections/Resources"} passHref>
        <h3>Legal Help</h3>
      </Link>
    <JobCard />
   </>
  );
};
export default Home;
