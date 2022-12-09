import odi from "../../../public/photos/sheng/odi.png";
import dunda from "../../../public/photos/sheng/dunda.png";
import kanja from "../../../public/photos/sheng/kanja.png";
import manga from "../../../public/photos/sheng/manga.png";
import mboka from "../../../public/photos/sheng/mboka.png";
import mbwegze from "../../../public/photos/sheng/mbwegze.png";
import muok from "../../../public/photos/sheng/muok.png";
import mutura from "../../../public/photos/sheng/mutura.png";
import mzing from "../../../public/photos/sheng/mzing.png";
import ndai from "../../../public/photos/sheng/ndai.png";

export const shengData: typeShengData = [
    // {
    //     name: "Kinde",
    //     translation: "Ten Shillings",
    //     image: kinde
    // },
    // {
    //     image: odi
    // },
    // {
    //     image: kanja
    // },
    {
        image: manga
    },
    {
        image: mboka
    },
    {
        image: mbwegze
    },
    {
        image: muok
    },
    {
        image: mutura
    },
    {
        image: mzing
    },
    {
        image: ndai
    },

    // {
    //     name: "Ocha",
    //     translation: "Upcountry",
    //     image: ocha
    // },
    // {
    //     name: "Tembeza",
    //     translation: "Walk",
    //     image: tembeza
    // },
]

export type typeShengData = shengDataType[];

export interface shengDataType {
    name?: string;
    translation?: string;
    image: StaticImageData
}
