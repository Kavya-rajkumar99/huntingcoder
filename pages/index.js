import Head from "next/head";
// import Image from "next/image";
// import Script from "next/script";
// import Dummy from "../components/dummy";
import styles from "../styles/Home.module.css";
// import styles2 from "../styles/Home2.module.css";
// import styles1 from "../styles/Home1.module.css";

export default function Home() {
  // console.log(styles)
  // console.log(styles1)
  // console.log(styles2)
  return (
    <div className={styles.container}>
      {/* <style jsx>
        {
          `
          h2{
            font-size:38px;
          }
          h3{
            font-size:28px;
          }
          `
        }
      </style> */}
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders" />
        <meta
          name="keywords"
          content="next, huntingcoders blog, hunting coders"
        />
      </Head>
      {/* <Script src="/hello.js" strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
          {/* <Image className={styles.myImg} src='/huntingCoder.avif' alt="hunting coder" width="530" height="333"></Image> */}
          <img className={styles.myImg} src='/huntingCoder.avif' alt="hunting coder" width="430" height="133" />

        {/* <p className={styles.description}>
          A blog for hunting coders by a coder
        </p> */}
        <h1 className={styles.title}>
          &lt;HuntingCoder/&gt;
          </h1>

        <div className="blogs">
          <h2 className={styles.h2}>Popular Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to master Javascript in 2022?</h3>
            <p className={styles.p}>Javascript is the language used to provide logic for the web. Lorem cillum pariatur id proident commodo espum</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to master Javascript in 2022?</h3>
            <p className={styles.p}>Javascript is the language used to provide logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to master Javascript in 2022?</h3>
            <p className={styles.p}>Javascript is the language used to provide logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
