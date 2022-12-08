import React, { useState } from "react";
import Image from "next/image";
import styles from "./BambaKidsToggler.module.scss";

const charactersData = [
  {
    name: "Trufena",
    description:
      "Misadventures of Trufena is a book that tells the story of Trufena and her mum in the farm. Trufena likes her mom's chicken served with delicious chapatis. Trufena's need to have chicken for dinner makes her take the initiative to catch a chicken in the farm, running around in hot pursuit. Will she succeed in capturing the chicken?",
    headshot: "/characters/nambi-headshot.png",
    fullpic: "/characters/nambi-full.png",
  },
  {
    name: "Jebet",
    description:
      "Jebet the Runner is a book that tells the story of a girl named Jebet who grows up showcasing her talent for running. She liked running from a young age and would compete with her dolls to some imaginary finishing line. She would cheer herself and had an imaginary commentator voiceover running in her mind. She would also run from home to school and back, which was two kilometers away. One day, her mom recieves a phone call from from the National Olympic Committee inviting Jebet to compete in the forthcoming international race.",
    headshot: "/characters/koki-headshot.png",
    fullpic: "/characters/koki-fullpic.png",
  },
  {
    name: "Tanu",
    description: "I'm different, but what if I wasn't? I think life would be dull and stars would be null... Being Tanu is the story of a young girl named Tanu, growing up with people and animals that are different from her. That doesn't faze her, she instead explores the differences while exploring her own uniqueness.",
    headshot: "/characters/koki-headshot.png",
    fullpic: "/characters/koki-fullpic.png",
  },
  {
    name: "Ayanna",
    description: "Too often, little girls have dreams that are crushed by society telling them what they can and cannot do. Ayanna the Makanga is a heartwarming reminder to girls everywhere that their dreams are valid and they should listen to their innermost voice. Ayanna loved the road and public transport but was always told that jobs in transport were for tough boys. Our heroine does not pay these naysayers any heed. She grows up to do exactly what she loves and ends up changing the industry as a result.",
    headshot: "/characters/koki-headshot.png",
    fullpic: "/characters/koki-fullpic.png",
  },
  {
    name: "Kwame",
    description: "Kwame is a giraffe who stands tall and is completely sure of himself. He sees himself as a lion though, brave and magnificent. Although his friends laugh and his enemies look at him with scorn, he stays true to himself and he ends up helping the whole savannah. Beyond having a beautiful message on self love,  Kwame the Giraffe paints a picture of the savannah and other facets of Kenya that makes it a beautiful country.",
    headshot: "/characters/koki-headshot.png",
    fullpic: "/characters/koki-fullpic.png",
  },
];

function BambaKidsToggler() {
  const [activeCharacter, setActiveCharacter] = useState(0);
  function showTrufena() {
    setActiveCharacter(0);
  }
  function showJebet() {
    setActiveCharacter(1);
  }
  function showTanu() {
    setActiveCharacter(2);
  }
  function showAyanna() {
    setActiveCharacter(3);
  }
  function showKwame() {
    setActiveCharacter(4);
  }

  return (
    <div className={styles.togglerWrapper}>
      <div className={styles.togglerContainer}>
        <div className={styles.togglesContainer}>
          <div
            onClick={() => showTrufena()}
            className={
              activeCharacter == 0
                ? styles["togglerButton"] + " " + styles["active"]
                : styles["togglerButton"]
            }
          >
            <Image
              src={charactersData[0].headshot}
              alt="Nambi"
              width={200}
              height={200}
            />
          </div>
          <div
            onClick={() => showJebet()}
            className={
              activeCharacter == 1
                ? styles["togglerButton"] + " " + styles["active"]
                : styles["togglerButton"]
            }
          >
            <Image
              src={charactersData[1].headshot}
              alt="Koki"
              width={210}
              height={210}
            />
          </div>
          <div
            onClick={() => showTanu()}
            className={
              activeCharacter == 2
                ? styles["togglerButton"] + " " + styles["active"]
                : styles["togglerButton"]
            }
          >
            <Image
              src={charactersData[2].headshot}
              alt="Koki"
              width={210}
              height={210}
            />
          </div>
          <div
            onClick={() => showAyanna()}
            className={
              activeCharacter == 3
                ? styles["togglerButton"] + " " + styles["active"]
                : styles["togglerButton"]
            }
          >
            <Image
              src={charactersData[3].headshot}
              alt="Koki"
              width={210}
              height={210}
            />
          </div>
          <div
            onClick={() => showKwame()}
            className={
              activeCharacter == 4
                ? styles["togglerButton"] + " " + styles["active"]
                : styles["togglerButton"]
            }
          >
            <Image
              src={charactersData[4].headshot}
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
            <div
              className={
                activeCharacter == 1
                  ? styles["photo"] + "" + styles["activePhoto"]
                  : styles["photo"]
              }
            >
              <Image
                src={charactersData[0].fullpic}
                alt="Nambi"
                width={360}
                height={391}
              />
            </div>
            <div
              className={
                activeCharacter == 0
                  ? styles["photo"] + "" + styles["activePhoto"]
                  : styles["photo"]
              }
            >
              <Image
                src={charactersData[1].fullpic}
                alt="Koki"
                width={360}
                height={391}
              />
            </div>
            <div
              className={
                activeCharacter == 2
                  ? styles["photo"] + "" + styles["activePhoto"]
                  : styles["photo"]
              }
            >
              <Image
                src={charactersData[2].fullpic}
                alt="Koki"
                width={360}
                height={391}
              />
            </div>
            <div
              className={
                activeCharacter == 3
                  ? styles["photo"] + "" + styles["activePhoto"]
                  : styles["photo"]
              }
            >
              <Image
                src={charactersData[3].fullpic}
                alt="Koki"
                width={360}
                height={391}
              />
            </div>
            <div
              className={
                activeCharacter == 4
                  ? styles["photo"] + "" + styles["activePhoto"]
                  : styles["photo"]
              }
            >
              <Image
                src={charactersData[4].fullpic}
                alt="Koki"
                width={360}
                height={391}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BambaKidsToggler;
