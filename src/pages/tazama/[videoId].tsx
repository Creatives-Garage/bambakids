import React from "react";
import styles from "./videoId.module.scss"
import Nav from "../../shared/Nav";
import VideoPlayer from "../../features/Tazama/VideoPlayer";
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';
import Link from "next/link";

export default function videoName(props: { videoData: any, hasError: boolean, allVideos: any }) {
  const videoData = props.videoData
  const allVideos = props.allVideos?.videos
  console.log("All: ", videoData)
  const router = useRouter();

  function getSimilarVideos() {

  }

  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <div className={styles.pageContainer}>
      <Nav />
      <div className={styles.videoPlayerWrapper}>
        <VideoPlayer  />
        <div>
          <div className={styles.titleContainer}>
            MORE LIKE THIS
          </div>
          <div className={styles.suggestedVideosWrapper}>
            <div className={styles.suggestedVideos}>
              {allVideos?.map((item: any, index: number) =>
                <div key={index}>
                  <Link href={`/tazama/${item.videoId}`}>
                    <div className={styles.suggestedVideo}>
                      <div className={styles.video}></div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.videos.map((video: any, index: number) => ({ params: { videoId: video.videoId } }))

  return {
    paths: pathsWithParams,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const videoID = context.params?.videoID;
  const data = await getData();
  const foundVideo = data.videos.find((item: any) => videoID === item.videoID);

  if (!foundVideo) {
    return {
      props: { hasError: true },
    }
  }

  return {
    props: {
      videoData: foundVideo,
      allVideos: data
    }
  }
}