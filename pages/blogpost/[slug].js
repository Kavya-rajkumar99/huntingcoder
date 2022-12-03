import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';

const BlogItem = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();
  // useEffect(()=>{
  //   if(!router.isReady){
  //     return;
  //   }
  //   const { slug } = router.query;
  //   fetch(`/api/getblog?slug=${slug}`).then(data=>data.json()).then(result=>setBlog(result))
  // },[router.isReady])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
       {blog && <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>}
      </main>
    </div>
  );
};

export default BlogItem;
export async function getStaticPaths(){
  let data = await fs.promises.readdir('blogdata')
  data = data.map(item => {
    return {
      params : {slug : item.split(".")[0]}
    }
  })
  // console.log(data)
  return {
    // paths : [
    //   {
    //     params : {slug : 'how-to-learn-flask'}
    //   },
    //   {
    //     params : {slug : 'how-to-learn-js'}
    //   },
    //   {
    //     params : {slug : 'how-to-learn-nextjs'}
    //   }
    // ],
    paths : data,
    fallback : true
  }
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  const myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
  return {
    props: {
      myBlog : JSON.parse(myBlog),
    },
  };
}
