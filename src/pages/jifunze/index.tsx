import React from "react";
import ShengCarousel from "../../features/Sheng/ShengCarousel";
import { shengData } from "../../shared/Data/shengData";

export default function Jifunze(){
    return(
        <>
          <ShengCarousel data={shengData} />
        </>
    )
}