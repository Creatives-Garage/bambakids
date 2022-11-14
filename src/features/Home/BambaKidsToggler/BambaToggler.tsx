import React, { useState } from "react";
import Image from "next/image";
import styles from "./BambaKidsToggler.module.scss";

const charactersData = [
    {
        name: "Nambi",
        description: "Nambi is always up to mischief, trying to climb the neighbor’s trees to get fruits, chasing the chicken around the compound and always being saved from trouble by his older sister Koki. He loves playing football and can’t get enough of his mother’s chapati’s. He especially loves traveling to see his grandfather, Mzee Risto and listening to his many epic tales.",
        headshot: "/characters/nambi-headshot.png",
        fullpic: "/characters/nambi-full.png"
    },
    {
        name: "Koki",
        description: "Koki is a 10 year old African girl with an incredibly inquisitive mind. She is always asking her mother many questions, reading books and loves to play with her younger brother Nambi. Teaching him new things like how to count and spell his favorite words, although half the time she is busy saving Nambi from his antics.",
        headshot: "/characters/koki-headshot.png",
        fullpic: "/characters/koki-fullpic.png"
    }
]

function BambaKidsToggler(){
    const [activeCharacter, setActiveCharacter] = useState(0);
    
    function showNambi(){
        setActiveCharacter(0);
    }
    
    function showKoki(){
        setActiveCharacter(1);
    }


    return(
        <div className={styles.togglerWrapper}>
            <div className={styles.togglerContainer}>
            <div className={styles.togglesContainer}>
              <div 
                onClick={()=> showNambi()}  
                className={activeCharacter == 0 ? 
                styles["togglerButton"] + " " + styles["active"] : 
                styles["togglerButton"]}
              >
                <Image 
                  src={charactersData[0].headshot} 
                  alt="Nambi" 
                  width={200} 
                  height={200}
                />
              </div>
              <div 
                onClick={()=> showKoki()} 
                className={activeCharacter == 1 ? 
                styles["togglerButton"] + " " + styles["active"] : 
                styles["togglerButton"]}
              >
                <Image 
                  src={charactersData[1].headshot} 
                  alt="Koki" 
                  width={210} 
                  height={210}
                />
              </div>
            </div>
            <div className={styles.contentArea}>
              <div className={styles.descriptions}>
                <h3>{charactersData[activeCharacter].name}</h3>
                <p>{charactersData[activeCharacter].description}</p>
              </div>
              <div className={styles.photos}>
                <div className={ activeCharacter == 1 ? styles["photo"] + "" + styles["activePhoto"] : styles["photo"]}>
                    <Image 
                        src={charactersData[0].fullpic} 
                        alt="Nambi" 
                        width={360} 
                        height={391}
                    />
                </div>                                
                <div className={ activeCharacter == 0 ? styles["photo"] + "" + styles["activePhoto"] : styles["photo"]}>
                    <Image 
                        src={charactersData[1].fullpic} 
                        alt="Koki" 
                        width={360} 
                        height={391}
                    />
                </div>                                
              </div>
            </div>          
        </div>
        </div>
    )
}

export default BambaKidsToggler;