import React from "react";
import styles from "./videoId.module.scss"
import Nav from "../../shared/Nav";
import VideoPlayer from "../../features/Tazama/VideoPlayer";
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';
import Link from "next/link";
import Image from "next/image";

export default function VideoName({videos}: any) {
  const videoData = videos.videos;  
  const router = useRouter();
  const { videoId } = router.query;
  
  const video = videoData?.find(
    (video: any) => video?.videoId === videoId
  );
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className={styles.pageContainer}>
      <Nav payload={videoData} />
      <div className={styles.videoPlayerWrapper}>
        <VideoPlayer  data={video}/>
        <div>
          <div className={styles.titleContainer}>
            MORE LIKE THIS
          </div>
          <div className={styles.suggestedVideosWrapper}>
            <div className={styles.suggestedVideos}>
              {videos.videos?.map((item: any, index: number) =>
                <div key={index}>
                  <Link href={`/tazama/${item.videoId}`}>
                    <div className={styles.suggestedVideo}>
                      <div className={styles.video}>
                        <Image src={item?.thumbnail} alt={item.videoName} height={100} width={200}/>
                      </div>
                      <div className={styles.suggestedVideoTitle}>{item.videoName}</div>
                    </div>
                  </Link>
                </div>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'shared', 'Data', 'tazamaData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getServerSideProps(context: any) {
  const payload = await getData();
  return {
    props: {
      videos: payload,
    },
  };
}