import React from "react";
import styles from "./about.module.scss";
import Nav from "../../shared/Nav";
import path from 'path';
import fs from 'fs/promises';
import Image from "next/image";
import { motion } from "framer-motion";

async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'shared', 'Data', 'tazamaData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export const getStaticProps = async (context: any) => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  const payload = await getData();
  
  return {
    props: {
      feed: feed,
      videoPayload: payload,
    }
  }
}

const Privacy = ({feed, videoPayload}:any) => {
  const payload = videoPayload?.videos;

  console.log(feed.data);
  const images = feed.data;
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.NavWrapper}>
        <Nav payload={payload}/>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.left}>
        <h1 style={{textAlign: "center"}}> About </h1>
        <p style={{textAlign: "center", fontWeight: "bold"}}> Play. Watch. Learn</p>
        <p> Bamba Kids is an interactive edutainment app created for kids aged 3-10 years old. On it. children can learn facts about the world around them, watch and read entertaining stories and play games!</p>
        </div>
        <div className={styles.right}>
          <h1 style={{textAlign: "center"}}> Our Instagram Feed </h1>
          <div className={styles.images}>
            {images && images?.map((image: any, index: any) => (
              <>
                {
                  image.media_type == "IMAGE" || image.media_type === "CAROUSEL_ALBUM"
                  ?
                    (
                      <div className={styles.imageCard} key={image.id}>
                        <img className={styles.image} src={image.media_url} alt={image.caption} width={240} height={240}/>
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
    </div>
  );
};

export default Privacy;


