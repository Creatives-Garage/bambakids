import React, { useState, useEffect, useRef } from "react";
import VideoCard from "../VideoCard";
import styles from "./TabComponent.module.scss";
import { motion } from "framer-motion";
import { tazamaCategory, tazamaCategoryDataObject } from "../../../shared/Data/tazamaData";

const TabComponent = ({videoData}: any)=> {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.TabsWrapper}>
        {videoData?.map((tab: tazamaCategory, idx: number) => {
          return (
            <button
              key={idx}
              className={
                idx === activeTabIndex
                  ? styles["TabButton"] + " " + styles["ActiveTabButton"]
                  : styles["TabButton"]
              }
              ref={(el: HTMLButtonElement) => (tabsRef.current[idx] = el)}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.categoryName}
            </button>
          );
        })}
        <div
          className={styles.underline}
          style={{position: "absolute", left: `${tabUnderlineLeft}px`, width: `${tabUnderlineWidth}px` }}
        >          
        </div>
      </div>
      <motion.div        
      >
      <div className={styles.contentSection}>
        {videoData[activeTabIndex]?.data?.map(
          (data: tazamaCategoryDataObject, index: number) =>{
            return(
              <div key={index}>
                <VideoCard 
                  title={data.videoName} image="" link="" 
                  active={activeTabIndex === index}
                />
              </div>              
            )
          }
        )}
      </div>
      </motion.div>
    </div>
  );
};

export default TabComponent;
