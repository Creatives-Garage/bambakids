import React from "react";
import styles from "./about.module.scss";
import Nav from "../../shared/Nav";
import Image from "next/image";
import { motion } from "framer-motion";

export const getStaticProps = async (context: any) => {
  const INSTAGRAM = `IGQVJVZA0tySlJCVDdjYzJEcW5XRUdTU3dkejBXQy1ka3ROWlFSa0ZAjQ1JIOGdMNHJOelRnc1JHOC14WFR6Ym50MDVrNF9wblU5SXJlOE1aeGVCTkN4SHVyYTFtWDJiOE5rOTk1dzJEeFRKUy1iR0tKUwZDZD`
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink,username&access_token=${INSTAGRAM}`;
  const data = await fetch(url);
  const feed = await data.json();
  return {
    props: {
      feed,
    }
  }
}

const Privacy = ({feed}:any) => {
  console.log(feed.data);
  const images = feed.data;
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.NavWrapper}>
        <Nav />
      </div>
      <div className={styles.pageContent}>
        <h1 style={{textAlign: "center"}}> About </h1>
        <p style={{textAlign: "center"}}> Play. Watch. Learn</p>
        <p> Bamba Kids is an interactive edutainment app created for kids aged 3-10 years old. On it. children can learn facts about the world around them, watch and read entertaining stories and play games!</p>
        <h1 style={{marginBottom: "40px", textAlign: "center"}}> Our Socials </h1>
        <div className={styles.images}>
          {images && images?.map((image: any, index: any) => (
            <>
              {
                image.media_type == "IMAGE" || image.media_type === "CAROUSEL_ALBUM"
                ?
                  (
                    <div className={styles.imageCard}>
                      <img className={styles.image} src={image.media_url} alt={image.caption} width={320} height={300}/>
                      <p className={styles.caption}>{image.caption.slice(0, 160)}...</p>
                    </div>
                  )
                : null
              }            
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;


