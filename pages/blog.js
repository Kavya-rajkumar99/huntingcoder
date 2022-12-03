import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.myBlogs);
  const [count,setCount] = useState(2)
  // useEffect(() => {
  //   fetch("/api/blogs")
  //     .then((data) => data.json())
  //     .then((result) => setBlogs(result));
  // }, []);
const fetchData = async () => {
  const data = await fetch(`/api/blogs?count=${count+2}`)
  const result = await data.json()
  // console.log(result)
  setBlogs(result)
  setCount(count+2)
}
  return (
    <main className={styles.main}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.filesCount!==blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        
      >
        {blogs &&
        blogs.map((blog) => (
          <div className={styles.blogItem} key={blog.slug}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
              <p>{blog.metadesc.substr(0, 200)}...</p>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>
        ))}
      </InfiniteScroll>
      
    </main>
  );
};

export default Blog;

export async function getStaticProps() {
  const files = await fs.promises.readdir("blogdata");
  let filesCount = files.length
  // console.log(files)
  let allBlogs = [];
  for (let i=0;i<2;i++) {
    let data = await fs.promises.readFile("blogdata/" + files[i], "utf-8");
    // console.log(data)
    allBlogs.push(JSON.parse(data));
  }
  return {
    props: {
      myBlogs: allBlogs,
      filesCount
    },
  };
}
