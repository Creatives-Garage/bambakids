import React, { useState } from "react";
import HeroCard from "../HeroCard";
import styles from "./Hero.module.scss";

function Hero() {
  const [hoverState, setHoverState] = useState(false);
  const handleHoverState = () => {
    setHoverState(!hoverState);
  };

  return (
    <div className={styles.heroWrapper}>
      <h1>WELCOME!</h1>
      <p>Pick an activity from the options below</p>
      <div className={styles.cardsWrapper}>
        <HeroCard text="READ" route="/read">
          <svg
            width="70"
            height="56"
            viewBox="0 0 70 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M67.5 0.578128H49.625C45.7891 0.578128 42.0391 1.67969 38.8125 3.75782L35 6.20313L31.1875 3.75782C27.9641 1.68009 24.21 0.576077 20.375 0.578128H2.5C1.11719 0.578128 0 1.69532 0 3.07813V47.4531C0 48.8359 1.11719 49.9531 2.5 49.9531H20.375C24.2109 49.9531 27.9609 51.0547 31.1875 53.1328L34.6563 55.3672C34.7578 55.4297 34.875 55.4688 34.9922 55.4688C35.1094 55.4688 35.2266 55.4375 35.3281 55.3672L38.7969 53.1328C42.0312 51.0547 45.7891 49.9531 49.625 49.9531H67.5C68.8828 49.9531 70 48.8359 70 47.4531V3.07813C70 1.69532 68.8828 0.578128 67.5 0.578128ZM26.5625 31.2422C26.5625 31.5625 26.3125 31.8281 26.0078 31.8281H11.4922C11.1875 31.8281 10.9375 31.5625 10.9375 31.2422V27.7266C10.9375 27.4063 11.1875 27.1406 11.4922 27.1406H26C26.3047 27.1406 26.5547 27.4063 26.5547 27.7266V31.2422H26.5625ZM26.5625 20.3047C26.5625 20.625 26.3125 20.8906 26.0078 20.8906H11.4922C11.1875 20.8906 10.9375 20.625 10.9375 20.3047V16.7891C10.9375 16.4688 11.1875 16.2031 11.4922 16.2031H26C26.3047 16.2031 26.5547 16.4688 26.5547 16.7891V20.3047H26.5625ZM59.0625 31.2422C59.0625 31.5625 58.8125 31.8281 58.5078 31.8281H43.9922C43.6875 31.8281 43.4375 31.5625 43.4375 31.2422V27.7266C43.4375 27.4063 43.6875 27.1406 43.9922 27.1406H58.5C58.8047 27.1406 59.0547 27.4063 59.0547 27.7266V31.2422H59.0625ZM59.0625 20.3047C59.0625 20.625 58.8125 20.8906 58.5078 20.8906H43.9922C43.6875 20.8906 43.4375 20.625 43.4375 20.3047V16.7891C43.4375 16.4688 43.6875 16.2031 43.9922 16.2031H58.5C58.8047 16.2031 59.0547 16.4688 59.0547 16.7891V20.3047H59.0625Z" />
          </svg>
        </HeroCard>
        <HeroCard text="WATCH" route="/read">
          <svg
            width="68"
            height="56"
            viewBox="0 0 68 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M68 48V8C68 3.6 64.4 0 60 0H8C3.6 0 0 3.6 0 8V48C0 52.4 3.6 56 8 56H60C64.4 56 68 52.4 68 48ZM24 44V12L48 28L24 44Z" />
          </svg>
        </HeroCard>
        <HeroCard text="LEARN" route="/read">
          <svg
            width="80"
            height="64"
            viewBox="0 0 80 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 32L10.16 20.08L12 64H4L5.92 18.36L0 16L40 0L80 16L40 32ZM40 12C37.8 12 36 12.88 36 14C36 15.12 37.8 16 40 16C42.2 16 44 15.12 44 14C44 12.88 42.2 12 40 12ZM40 36L62.28 27.08C65.12 30.84 67.08 35.36 67.72 40.28C66.52 40.12 65.28 40 64 40C53.8 40 44.88 45.48 40 53.64C37.523 49.483 34.009 46.0405 29.8019 43.6495C25.5949 41.2585 20.839 40.0009 16 40C14.72 40 13.48 40.12 12.28 40.28C12.92 35.36 14.88 30.84 17.72 27.08L40 36Z" />
          </svg>
        </HeroCard>
        <HeroCard text="PLAY" route="/read">
          <svg
            width="80"
            height="58"
            viewBox="0 0 80 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.776 26.444C74.248 6.73998 66.36 0.927979 62.164 0.927979C55.616 0.927979 53.936 5.79598 40 5.95998C26.064 5.79598 24.384 0.927979 17.836 0.927979C13.64 0.927979 5.74797 6.73998 2.21997 26.444C0.207975 37.692 -1.97603 54.484 3.22797 56.5C9.70397 59.008 11.9 52.736 19.012 47.436C26.232 42.064 29.696 40.8 40 40.8C50.304 40.8 53.768 42.064 60.988 47.436C68.1 52.732 70.296 59.008 76.772 56.5C81.976 54.484 79.792 37.696 77.776 26.444V26.444ZM24 29C21.8782 29 19.8434 28.1571 18.3431 26.6568C16.8428 25.1565 16 23.1217 16 21C16 18.8782 16.8428 16.8434 18.3431 15.3431C19.8434 13.8428 21.8782 13 24 13C26.1217 13 28.1565 13.8428 29.6568 15.3431C31.1571 16.8434 32 18.8782 32 21C32 23.1217 31.1571 25.1565 29.6568 26.6568C28.1565 28.1571 26.1217 29 24 29ZM52 29C50.9391 29 49.9217 28.5785 49.1715 27.8284C48.4214 27.0783 48 26.0608 48 25C48 23.9391 48.4214 22.9217 49.1715 22.1715C49.9217 21.4214 50.9391 21 52 21C53.0608 21 54.0782 21.4214 54.8284 22.1715C55.5785 22.9217 56 23.9391 56 25C56 26.0608 55.5785 27.0783 54.8284 27.8284C54.0782 28.5785 53.0608 29 52 29ZM60 21C58.9391 21 57.9217 20.5785 57.1715 19.8284C56.4214 19.0783 56 18.0608 56 17C56 15.9391 56.4214 14.9217 57.1715 14.1716C57.9217 13.4214 58.9391 13 60 13C61.0608 13 62.0782 13.4214 62.8284 14.1716C63.5785 14.9217 64 15.9391 64 17C64 18.0608 63.5785 19.0783 62.8284 19.8284C62.0782 20.5785 61.0608 21 60 21Z"
            />
          </svg>
        </HeroCard>
      </div>
      <div className={styles.toggleBambaKidsSection}>
        <h1>MEET THE BAMBA KIDS</h1>
        <div className={styles.zigzag}>
          <svg
            width="225"
            viewBox="0 0 225 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M45.1903 21.3188C43.0965 22.1653 38.9313 24.853 27.7793 31.7906C26.8276 30.8045 19.057 22.7674 16.9072 20.1494C16.6385 20.4985 16.325 20.865 16.325 20.865C14.0072 23.0466 8.66633 27.9596 5.6208 29.321C4.08684 30.0016 2.76561 27.7938 1.72431 25.3242C1.28763 24.2771 0.727792 22.7848 0.403085 21.6329C-0.167953 19.6346 -0.235134 18.8056 0.783776 17.8195C0.929335 17.6798 3.60537 15.7687 4.84822 14.643C6.84125 12.8367 8.26325 11.3881 8.92386 10.6899C10.4354 9.08427 9.4837 10.1925 11.7007 7.67058C13.6489 5.46278 15.7427 3.01936 17.9821 0.44505C18.6091 1.3177 27.9249 14.486 30.2314 16.2487C30.2986 16.2051 36.2441 12.1473 40.6668 8.97955C40.9579 8.8661 41.3274 8.60431 41.7193 8.26398C42.1224 7.91492 42.5479 7.47859 42.9846 7.051C43.8467 6.1958 44.7089 5.34933 45.0336 5.33188C45.2575 5.29697 47.3289 3.80475 50.576 1.45732C55.7713 7.89746 56.152 8.50832 58.7833 10.9692C59.0184 11.1873 60.0597 12.1211 60.362 12.3741C61.84 13.6482 64.3033 15.6029 64.4489 15.6902C69.1179 12.3305 76.6198 5.7333 80.3483 2.5045C86.7529 9.34606 87.3464 10.2536 92.5753 14.643C92.6536 14.7128 92.6313 14.6954 92.788 14.8176C92.8552 14.8699 93.2135 15.1492 93.2919 15.1753C93.9973 14.3027 98.3752 9.43332 104.746 4.2498C108.822 0.959913 109.057 0.724298 110.177 0C111.912 2.39978 111.151 1.87619 112.741 3.92692C115.014 6.87647 114.252 6.03872 116.906 8.76139C117.007 8.8661 119.123 10.6201 119.246 10.7248C120.366 11.5539 121.105 12.1211 122.493 13.081C123.602 13.8489 123.904 14.0496 123.904 14.0496C124.005 14.1194 124.441 14.4249 124.553 14.4598C125.617 13.5871 137.71 3.0979 141.864 0.0436324C149.668 9.05809 149.276 8.06327 155.255 13.369L155.412 13.5086C155.468 13.5522 155.423 13.5348 155.434 13.5435C155.423 13.7529 155.658 13.9798 155.848 14.1282C157.987 12.9588 170.471 2.00709 171.726 0.907554C176.518 5.91655 178.097 7.65312 180.694 9.93946C183.773 12.6621 188.33 16.2051 187.625 15.3324C187.759 15.2015 187.692 15.2452 187.58 15.4459C187.569 15.4546 187.591 15.507 187.647 15.6117C187.681 15.6989 187.726 15.6466 187.793 15.6379C187.86 15.6204 187.939 15.5942 188.028 15.5593C194.679 10.8121 193.727 11.5015 194.634 10.847C195.922 9.92201 195.351 10.3147 197.377 8.8661C197.411 8.83992 198.855 7.80147 198.9 7.8102C199.259 7.8102 200.255 7.17317 201.162 6.34415C201.531 6.00382 203.715 4.2498 206.895 1.82383C211.62 6.98991 217.14 13.5435 223.914 18.0027C224.765 18.5699 225.011 18.6921 224.989 18.823C224.709 19.6608 223.466 21.5544 220.969 22.907C218.528 24.2247 215.192 24.8617 213.109 24.5301C210.78 24.1636 207.13 20.6992 205.73 19.2855C205.641 19.1983 205.327 18.8928 205.271 18.7881C205.182 18.5525 205.126 18.3954 204.969 18.1162C204.431 18.1162 199.807 22.1565 199.46 22.4707C199.337 22.558 187.289 31.5462 187.211 31.4328C185.151 29.7748 172.375 19.5473 170.796 17.61C170.796 17.61 165.175 21.982 156.084 28.5443C149.354 23.9978 149.13 23.7622 147.272 22.4096C146.566 21.8947 146.242 21.6329 145.581 21.1355C144.237 20.2105 143.465 19.6608 142.2 18.7096C141.819 18.4216 141.349 18.0638 141.001 17.802C140.946 17.7671 140.901 17.7235 140.845 17.6886C140.666 17.5839 140.733 17.6188 140.554 17.5228C140.509 17.4966 140.453 17.4617 140.442 17.4704C140.274 17.4617 140.184 17.514 140.151 17.5664C140.184 17.261 140.128 17.2523 140.095 17.4442C140.072 17.549 140.072 17.6624 140.095 17.7409C140.106 17.8107 140.139 17.8369 140.106 17.8107C140.106 17.8107 139.927 17.8457 139.68 17.8195C137.654 18.1511 127.711 27.9596 126.513 29.1639C116.044 23.8233 109.247 18.4478 108.654 17.5053C108.598 17.3133 108.06 17.7933 107.881 17.9416C106.157 19.5299 102.272 23.7535 101.477 24.6349C99.215 27.1132 97.0428 29.6264 94.9602 32C94.7922 31.8953 94.6131 31.7557 94.4339 31.616L93.9077 31.1972C84.8047 23.9629 79.8557 19.844 79.8557 19.844C79.6429 19.7742 79.5198 19.8178 79.4302 19.9487C79.4526 19.8004 79.419 19.6346 79.3406 19.4426C79.2735 19.399 79.1503 19.4601 79.0271 19.5211C78.9599 19.556 78.8928 19.5997 78.8144 19.652L78.6912 19.7306C78.6576 19.7568 78.5457 19.844 78.5457 19.844L78.0418 20.2367C71.1222 25.6471 70.2936 26.1707 64.6616 30.342C60.4628 27.532 55.0995 24.1025 48.7509 18.8492C48.639 18.7968 48.4822 18.727 48.3814 18.7358C48.2807 18.8666 48.2471 18.9975 48.2471 19.0499C48.7733 18.7707 45.6382 21.0046 45.1903 21.3188Z"
              fill="#D21987"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;