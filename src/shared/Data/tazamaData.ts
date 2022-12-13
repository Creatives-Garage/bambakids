export const tazamaData: tazamaDataType = [
    {
      categoryName: "Hadithi TV",
      data: [
        {
          videoId: "1",
          videoName: "Kwame the Girraffe",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/kwame.jpg",
        }
      ]
    },
    {
      categoryName: "Stori Stori",
      data: [
        {
          videoId: "2",
          videoName: "Ayana the Makanga",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/ayanna.png",
        },
        {
          videoId: "3",
          videoName: "Mama Onyis",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/mama_onyis_cover.png",
        },
        {
          videoId: "4",
          videoName: "Being Tanu",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/tanu.png",
        },
        {
          videoId: "4",
          videoName: "The Dancing Tribes of Kenya",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/maua_dancing_tribes.jpg",
        },
      ]
    },
    {
      categoryName: "Sakata Rhymes",
      data: [
        {
          videoId: "5",
          videoName: "Skamares",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/skamarees.png",
        },
        {
          videoId: "5",
          videoName: "Yaya",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/yaya1.png",
        },
        {
          videoId: "5",
          videoName: "Watoto Wangu",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/watoto.png",
        },
        {
          videoId: "5",
          videoName: "Ukuti wa mnazi",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/ukuti.png",
        },
        {
          videoId: "5",
          videoName: "Mabata Madogo",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/mabata.png",
        },
        {
          videoId: "5",
          videoName: "Naskia Sauti",
          thumbnail: "https://www.bambaapp.creativesgarage.org/public/assets/videos_images/naskiasauti.jpg",
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