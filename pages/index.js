import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-config";
import CreatePost from "../components/CreatePost";
import Link from "next/link";
import SearchBar from "../components/jobs/Searchbar";
import Layout from "../components/jobs/Searchbar";


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
    
     
      <SearchBar />
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
     <Layout />
      <h1>Blog</h1>
    </div>
  );
};
export default Home;
