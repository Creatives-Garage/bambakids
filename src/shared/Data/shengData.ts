import ocha from "../../../public/photos/ocha.png"
import kinde from "../../../public/photos/kinde.png"
import tembeza from "../../../public/photos/tembeza.png"

export const shengData: typeShengData = [
    {
        name: "Kinde",
        translation: "Ten Shillings",
        image: kinde
    },
    {
        name: "Ocha",
        translation: "Upcountry",
        image: ocha
    },
    {
        name: "Tembeza",
        translation: "Walk",
        image: tembeza
    },
]

export type typeShengData = shengDataType[];

export interface shengDataType {
    name: string;
    translation: string;
    image: StaticImageData
}
