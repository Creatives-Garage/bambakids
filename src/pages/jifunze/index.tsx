import React from "react";
import JifunzeCard from "../../features/Jifunze/JifunzeCard";
import Nav from "../../shared/Nav";
import styles from "./jifunze.module.scss";

export default function Jifunze() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.pageWrapper}>
        <JifunzeCard
          title="Let's Speak Sheng"
          route="/jifunze/sheng"
          description="Sheng' is a slang language in Kenya that incorporates a mix of English, Swahili and occasionally other local dialects like Dholuo, Kikuyu among others. New words are cropping up everyday and we help you keep up with them"
        />
        <JifunzeCard
          title="Proverbs/Methali"
          route="/jifunze/proverbs"
          description="Proverbs are used to teach people how to live. From cautionary tales to discourage bad behaviour, to promised rewards for acts of service to others. We use proverbs to teach you how to relate with others."
        />
        <JifunzeCard
          title="Did you know?"
          route="/jifunze/did-you-know"
          description="A collection of interesting facts about the world and the country we live in. Did you know that the Kenyan National anthem was derived from a Pokomo lullaby? No?"
        />
      </div>
    </div>
  );
}
