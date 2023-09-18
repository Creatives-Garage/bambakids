import React, { useState, useEffect, useRef } from "react";
import VideoCard from "../VideoCard";
import styles from "./TabComponent.module.scss";
import { tazamaData } from "../../../shared/Data/tazamaData";
import { motion } from "framer-motion";

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
        {tazamaData?.map((tab: any, idx: number) => {
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
      <motion.div>
        <div className={styles.contentSection}>
          {tazamaData[activeTabIndex]?.data?.map(
            (data: any, index: number) =>{
              console.log("Vid Data: ", data)
              return(
                <div key={index}>
                  <VideoCard 
                    title={data.videoName} image={data.thumbnail} link={`tazama/${data.videoId}`}
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
