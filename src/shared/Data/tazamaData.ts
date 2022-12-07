export const tazamaData: tazamaDataType = [
    {
      categoryName: "Hadithi TV",
      data: [
        {
          videoId: "1",
          videoName: "Kwame the Girraffe",
          thumbnail: "",
        }
      ]
    },
    {
      categoryName: "Stori Stori",
      data: [
        {
          videoId: "2",
          videoName: "Ayana the Makanga",
          thumbnail: "",
        },
        {
          videoId: "3",
          videoName: "Mama Onyis",
          thumbnail: "",
        },
        {
          videoId: "4",
          videoName: "Being Tanu",
          thumbnail: "",
        },
        {
          videoId: "4",
          videoName: "The Dancing Tribes of Kenya",
          thumbnail: "",
        },
      ]
    },
    {
      categoryName: "Sakata Rhymes",
      data: [
        {
          videoId: "5",
          videoName: "Skamares",
          thumbnail: "",
        },
        {
          videoId: "5",
          videoName: "Yaya",
          thumbnail: "",
        },
        {
          videoId: "5",
          videoName: "Watoto Wangu",
          thumbnail: "",
        },
        {
          videoId: "5",
          videoName: "Ukuti wa mnazi",
          thumbnail: "",
        },
        {
          videoId: "5",
          videoName: "Mabata Madogo",
          thumbnail: "",
        },
        {
          videoId: "5",
          videoName: "Naskia Sauti",
          thumbnail: "",
        },
      ]
    },
];

// types

export interface tazamaCategoryDataObject {
    videoId: string;
    videoName: string;
    thumbnail: string;
}

export type tazamaCategoryDataArray = tazamaCategoryDataObject[]

export type tazamaCategory = {
    categoryName: string;
    data: tazamaCategoryDataObject[]
}

export type tazamaDataType = tazamaCategory[]