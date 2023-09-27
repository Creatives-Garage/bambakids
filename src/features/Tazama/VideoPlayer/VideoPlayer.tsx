import React, {useState} from "react";
import { useRouter } from "next/router";
import styles from "./videoPlayer.module.scss";
import Button from "../../../shared/Button";
import Mute from '../../../../public/icons/mute.svg';
import Unmute from '../../../../public/icons/unmute.svg';
import Play from '../../../../public/icons/play.svg';
import Pause from '../../../../public/icons/pause.svg';
import FullScreen from '../../../../public/icons/reduceScreen.svg';
import SmallScreen from '../../../../public/icons/wideScreen.svg';
import YoutubeEmbedder from "../YoutubeEmbedder/YoutubeEmbedder";
import { playClickSound } from "../../../shared/utils/soundClickEvents";

function VideoPlayer({data}: any){
  const [playStatus, setplayStatus] = useState<boolean>(false);
  const [muteStatus, setMuteStatus] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  const router = useRouter();

  console.log("video name", data)
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.playerHeader}>
        <button className={styles.buttonWrapper} onClick={()=> {router.push("/tazama"); playClickSound()}}></button>      
        <div className={styles.videoTitleGroup}>
          <h1>{data?.videoName}</h1>
          <h2>{data?.categoryName}</h2>
        </div>      
      </div>
      <div className={styles.playerWrapper}>
        <YoutubeEmbedder embedId={data?.embedId} />       
      </div>      
      {/* <div className={styles.videoControls}>
        <div className={styles.playbackControls}>
          <Button 
            variant="normal"
            icon 
            action={()=>{
              playStatus === false ? setplayStatus(!playStatus) : setplayStatus(!playStatus);
            }}
          >
            {playStatus === false ? <Play/> : <Pause/>}
          </Button>
          <Button
            icon 
            variant="normal" 
            action={()=>{
              muteStatus === true ? setMuteStatus(!muteStatus) : setMuteStatus(!muteStatus);
            }}
          >
            {muteStatus === true ? <Unmute/> : <Mute/>}
          </Button>
        </div>
        <div className={styles.playerSizeControls}>
          <Button
              icon 
              variant="normal" 
              action={()=>{
                isFullScreen === true ? setIsFullScreen(!isFullScreen) : setIsFullScreen(!isFullScreen);
              }}
            >
              {isFullScreen === true ? <SmallScreen/> : <FullScreen/>}
          </Button>
          <Button 
              variant="normal" 
              action={()=>{
                isWideScreen === true ? setIsWideScreen(!isFullScreen) : setIsWideScreen(!isWideScreen);
              }}
              text={isWideScreen === true ? "Small Screen" : "Wide Screen"}
            >
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default VideoPlayer;
