export const tazamaData: tazamaDataType = [
    {
      categoryName: "Hadithi TV",
      data: [
        {
          videoName: "Kwame the Girraffe",
          thumbnail: "",
        }
      ]
    },
    {
      categoryName: "Stori Stori",
      data: [
        {
          videoName: "Ayana the Makanga",
          thumbnail: "",
        },
        {
          videoName: "Mama Onyis",
          thumbnail: "",
        },
        {
          videoName: "Being Tanu",
          thumbnail: "",
        },
      ]
    },
    {
      categoryName: "Sakata Rhymes",
      data: [
        {
          videoName: "Sakata Rhyme",
          thumbnail: "",
        }
      ]
    },
];

// types

export interface tazamaCategoryDataObject {
    videoName: string;
    thumbnail: string;
}

export type tazamaCategoryDataArray = tazamaCategoryDataObject[]

export type tazamaCategory = {
    categoryName: string;
    data: tazamaCategoryDataObject[]
}

export type tazamaDataType = tazamaCategory[]