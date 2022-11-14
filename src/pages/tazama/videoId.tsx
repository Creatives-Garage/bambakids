import React from "react";
import styles from "./videoId.module.scss"
import Nav from "../../shared/Nav";
import VideoPlayer from "../../features/Tazama/VideoPlayer";

export default function videoName() {
  return(
    <div className={styles.pageContainer}>
      <Nav />
      <div className={styles.videoPlayerWrapper}>
        <VideoPlayer/>
        <div>
          <div className={styles.titleContainer}>
            MORE LIKE THIS
          </div>
          <div className={styles.suggestedVideosWrapper}>
            <div className={styles.suggestedVideos}>
              <div className={styles.suggestedVideo}>
                <div className={styles.video}></div>
                <div className={styles.suggestedVideoTitle}>Being Tanu</div>
              </div>                      
              <div className={styles.suggestedVideo}>
                <div className={styles.video}></div>
                <div className={styles.suggestedVideoTitle}>Being Tanu</div>
              </div>                      
              <div className={styles.suggestedVideo}>
                <div className={styles.video}></div>
                <div className={styles.suggestedVideoTitle}>Being Tanu</div>
              </div>                      
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

