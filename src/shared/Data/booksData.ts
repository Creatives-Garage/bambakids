import { loremParagraph } from "./utilityData";
import BabasPickUpImage from "../../../public/photos/books/BabasPickUp/cover.png";
import babasPickupPage1 from "../../../public/photos/books/BabasPickUp/1.jpeg";
import babasPickupPage2 from "../../../public/photos/books/BabasPickUp/2.jpeg";
import babasPickupPage3 from "../../../public/photos/books/BabasPickUp/3.jpeg";
import babasPickupPage4 from "../../../public/photos/books/BabasPickUp/4.jpeg";
import babasPickupPage5 from "../../../public/photos/books/BabasPickUp/5.jpeg";
import babasPickupPage6 from "../../../public/photos/books/BabasPickUp/6.jpeg";
import babasPickupPage7 from "../../../public/photos/books/BabasPickUp/7.jpeg";
import babasPickupPage8 from "../../../public/photos/books/BabasPickUp/8.jpeg";
import babasPickupPage9 from "../../../public/photos/books/BabasPickUp/9.jpeg";
import babasPickupPage10 from "../../../public/photos/books/BabasPickUp/10.jpeg";

import JebetTheRunnerImage from "../../../public/photos/books/JebetTheRunner/Cover.png"

export type BookData = {
  bookId: number;
  bookName: string;
  bookCover: StaticImageData;
  credits: {
      illustrator: string;
      storyBy: string;
      copyEditor: string;
      authorFootnote: string;
  };
  backMatter: string;
  legal: {
      publishedBy: string;
      copywright: string;
  };
  pagesData: {
    text: string,
    // TODO: change undefined to StaticImageData only and import pageImages
    pageImage?: StaticImageData,
  }[]
  
  
}

export const babasPickUpForBookViewer: BookData = {
  bookId: 1,
  bookName: "Baba's Pick Up",
  bookCover: BabasPickUpImage,
  credits: {
    illustrator: "Jr Pencil",
    storyBy: "Thayu",
    copyEditor: "Adam Kiboi",
    authorFootnote: "To my baba, See! I turned out great.",
  },
  backMatter:
    "A daughter relives the amazing memories she had of her dad while they were kids. Babas Pickup is a story about her adventures with her sisters and father.",
  legal: {
    publishedBy: "Creatives Garage, Nairobi, 2021",
    copywright: "Creatives Garage",
  },

  pagesData: [
    {
      text: "The time I spent with my father during my formative years was delightful",
      pageImage: babasPickupPage1,
    },
    {
      text: "He often came home just before dinner to play music on his AM transistor, then sit on his chair, sing along and thump his feet to the rhythm of the music.",
      pageImage: babasPickupPage2,
    },
    {
      text: "Just as music by artists like Daudi Kibaka would hit the high note, Baba would pick shoot out from his chair, pick me up and dance. ",
      pageImage: babasPickupPage3,
    },
    {
      text: "His loud voice filling the house with offkey notes and butchered lyrics. Everyone knew he had a great singing voice and he knew the lyrics to the song. He just did it to hear the peals of laughter that often filled our home",
      pageImage: babasPickupPage4,
    },
    {
      text: "Of all the things we did, my favourite was riding the back of his pickup. My sisters and I would imagine ourselves as pirates or firefighters at the back as he drmove us home from the market",
      pageImage: babasPickupPage5,
    },
    {
      text: "The wind would push and pull our faces into weird visages that drove us into fits of giggles",
      pageImage: babasPickupPage6,
    },
    {
      text: "The pickup was soft yellow with big red and white stripes at the back and the number 80 written in black on the tailgate. As he cruised down the dusty roads of Ukambani listening to footbal matches on VOK. Other kids would try to chase the car as we cheered them on from the truck bed",
      pageImage: babasPickupPage7,
    },
    {
      text: "Despite the farmiliarity of the scenery, every day of the pick up surfing felt like a new adventure. We loved driving past the maize-filled farms, brown cows drinking at the streams near the house. Mama Mueni's farm was always loud with the clucking of chicken and village elders who were always present from early morning to late afternoon, seated under a tree near our school.",
      pageImage: babasPickupPage8,
    },
    {
      text: "We especially loved driving through Zakayo's farm that seemed to always have mango trees full of ripe, yummy fruit.",
      pageImage: babasPickupPage9,
    },
    {
      text: "Baba's no longer here, and it has been years since we threw up dust clouds in Ukambani but my memories of our life on his pick up live on.",
      pageImage: babasPickupPage10,
    },
  ],
};

export const babasPickUp = {
  bookId: 1,
  bookName: "Baba's Pick Up",
  bookCover: BabasPickUpImage,
  credits: {
    illustrator: "Jr Pencil",
    storyBy: "Thayo",
    copyEditor: "Adam Kiboi",
    authorFootnote: "To my baba, See! I turned out great.",
  },
  legal: {
    publishedBy: "Creatives Garage, Nairobi, 2021",
    copywright: "Creatives Garage",
  },

  pagesData: [
    {
      pageTitle: "Baba's Pickup",
      pageDescription:
        "A daughter relives the amazing memories she had of her dad while they were kids. Babas Pickup is a story about her adventures with her sisters and father.",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "The time I spent with my father during my formative years was delightful",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "He often came home just before dinner to play music on his AM transistor, then sit on his chair, sing along and thump his feet to the rhythm of the music.",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "Just as music by artists like Daudi Kibaka would hit the high note, Baba would pick shoot out from his chair, pick me up and dance. ",
      pageImage: "",
      pageDescription2:
        "His loud voice filling the house with offkey notes and butchered lyrics. Everyone knew he had a great singing voice and he knew the lyrics to the song. He just did it to hear the peals of laughter that often filled our home",
      pageImage2: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "Of all the things we did, my favourite was riding the back of his pickup. My sisters and I would imagine ourselves as pirates or firefighters at the back as he drmove us home from the market",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "The wind would push and pull our faces into weird visages that drove us into fits of giggles",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "The pickup was soft yellow with big red and white stripes at the back and the number 80 written in black on the tailgate. As he cruised down the dusty roads of Ukambani listening to footbal matches on VOK. Other kids would try to chase the car as we cheered them on from the truck bed",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "Despite the farmiliarity of the scenery, every day of the pick up surfing felt like a new adventure. We loved driving past the maize-filled farms, brown cows drinking at the streams near the house. Mama Mueni's farm was always loud with the clucking of chicken and village elders who were always present from early morning to late afternoon, seated under a tree near our school.",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "We especially loved driving through Zakayo's farm that seemed to always have mango trees full of ripe, yummy fruit.",
      pageImage: "",
    },
    {
      pageTitle: "",
      pageDescription:
        "Baba's no longer here, and it has been years since we threw up dust clouds in Ukambani but my memories of our life on his pick up live on.",
      pageImage: "",
    },
  ],
};

export const jebetTheRunner = {
  bookId: 1,
  bookName: "Jebet - the runner",
  bookCover: JebetTheRunnerImage,
  credits: {
    illustrator: "Jr Pencil",
    storyBy: "Thayo",
    copyEditor: "Adam Kiboi",
    authorFootnote: "To my baba, See! I turned out great.",
  },
  legal: {
    publishedBy: "Creatives Garage, Nairobi, 2021",
    copywright: "Creatives Garage",
  },
  pagesData: [
    {

      
        paragraph:"When Jebet was around 7 years old, she would line up all her dolls on the verandah and run past them to a makeshift finish line. As she ran, imaginary sports announcers would say `Jebet is coming up behind Kiplagat... she passes him and is now in the lead. She is leaving the rest of the pack behind her. Look at her run. They don't have  achnace of catching up! Jebet crosses the line and it's a new world recooooord!` In her mind, the dolls would cheer and shout:"
    },
    {
        paragraph:"Everyday after she turned ten, without fail, Jebet ran the entire 2km to her school and back. Athletes in Iten used to see her and would oten cheer her on as they did their morning training. `Hey Jebet, keep running... one day you will leave us in the dust` Thei words pushed her to be faster"
    },
    {
        paragraph:"In high school, Jebet was always the fastest at the provincial and divisional level in all her races. Her disciplin in sports reflected in her studies too. She trained hard and studied hard. Almost immediately after she finished high school, her mother recieved a phone call from the Kenya Olympics committee. `Is this Mama Jebet? We would like your daughter to join the olympics team. We see that you are already in Iten so she doesn't have to travel far to train...`"
    },
    {
        paragraph:"Before he could finish, Jebet's mother dropped the phone and ran to her daughter to break the good news. Jebet was excited, but not surprised because she always knew the opportunity would come. Now all that remained was more training in order to bag only gold medal."
    },
    {
        paragraph:"Months later, Jebet boarded her first flight to Australia, where the olympics were being held. As her and her team walked to the stadium for the opening ceremony, Her heart was almost in her throat. There were so many people! And there will probably be even more watching on TV. She was the youngest in her team and was asked to carry the Kenyan flag, waving iy back and forth for all the millions of eyes gazed at her. For the days leading up to her race, she kept hearing all the cheers from the stadium in her head"
    },
    {
        paragraph:"When her race came up, Jebet was nervous, but ready. As soon as the gunwent off, she ran off the block as fast as she could. The stadium was awash with sounds of thousands of people clapping, cheering and stamping their feet as they watched the race. As she ran, Jebet pictured the runners she would see on the road who would wave and cheer her on. She could even hear how they told her she'd be faster than them. She heard her mother's sound of joy when she was selcted for the olypics team. She even heard her imaginary commentator's voice back in her childhood. ``Here is Jebet coming up behind Da Silva from Brazil. She's the"
    },
    {
        paragraph:"But she's running like a veteran. She's passed and is now in second place. She's caught up with Robertson from the USA. She's past him and is now in the lead! WOW! JUST WOW! It's like Jebet got another burst of energy and she's left Roberts way behind her as she comes to the finish line. Is it - is it - Yes! A new world recooooord. Jebet the youngest runner in the race has shattered the previous world record! What a phenomenal performance. She looked up and realised that it wasn't her dolls cheering her but the audience in the stadium. She beamed with pride, her smile almost splitting her face as se ran a lap around the stadium. Hoisting the Kenyan flag high, once again, as the entire world cheered. "
    },
    {
      paragraph:"But she's running like a veteran. She's passed and is now in second place. She's caught up with Robertson from the USA. She's past him and is now in the lead! WOW! JUST WOW! It's like Jebet got another burst of energy and she's left Roberts way behind her as she comes to the finish line. Is it - is it - Yes! A new world recooooord. Jebet the youngest runner in the race has shattered the previous world record! What a phenomenal performance. She looked up and realised that it wasn't her dolls cheering her but the audience in the stadium. She beamed with pride, her smile almost splitting her face as se ran a lap around the stadium. Hoisting the Kenyan flag high, once again, as the entire world cheered. "
  },
  {
    paragraph:"But she's running like a veteran. She's passed and is now in second place. She's caught up with Robertson from the USA. She's past him and is now in the lead! WOW! JUST WOW! It's like Jebet got another burst of energy and she's left Roberts way behind her as she comes to the finish line. Is it - is it - Yes! A new world recooooord. Jebet the youngest runner in the race has shattered the previous world record! What a phenomenal performance. She looked up and realised that it wasn't her dolls cheering her but the audience in the stadium. She beamed with pride, her smile almost splitting her face as se ran a lap around the stadium. Hoisting the Kenyan flag high, once again, as the entire world cheered. "
},
{
  paragraph:"But she's running like a veteran. She's passed and is now in second place. She's caught up with Robertson from the USA. She's past him and is now in the lead! WOW! JUST WOW! It's like Jebet got another burst of energy and she's left Roberts way behind her as she comes to the finish line. Is it - is it - Yes! A new world recooooord. Jebet the youngest runner in the race has shattered the previous world record! What a phenomenal performance. She looked up and realised that it wasn't her dolls cheering her but the audience in the stadium. She beamed with pride, her smile almost splitting her face as se ran a lap around the stadium. Hoisting the Kenyan flag high, once again, as the entire world cheered. "
}
  ]
};

export const kwameTheGiraffe = {
  bookId: 1,
  bookName: "Jebet - the runner",
  bookCover: BabasPickUpImage,
  credits: {
    illustrator: "Jr Pencil",
    storyBy: "Thayo",
    copyEditor: "Adam Kiboi",
    authorFootnote: "To my baba, See! I turned out great.",
  },
  legal: {
    publishedBy: "Creatives Garage, Nairobi, 2021",
    copywright: "Creatives Garage",
  },
  pagesData: [
    {
        paragraph: "Kwame was a beautiful, tall Giraffe that lived in the savannah. His fur was fine, soft and had a beautiful beige patches. Everyone marveled at his beauty"
    },
    {
        paragraph: "He could also run as fast as Kenyan runners"
    },
    {
        paragraph: "And loved to dance with Kamba traditional dancers. He could sing too!. All the other animals loved to sit around him to listen to his stories,"
    },
    {
        paragraph: "But the best thing about Kwame was... He thought of himself as a lion. He felt like a lion. He would strut majestically in the savannah like the mighty lion he thought he was. When he looked at his reflection in the watering hole, he saw a fierce lion. Glorious mane and all."
    },
    {
        paragraph: "He would tell his friends about it and they always laughed at him. This made himsad but he knew who he was inside and remained determined"
    },
    {
        paragraph: "The hyenas always treated the other animals badly and this would always worry Kwame. The Hyenas bully othe animals and sometimes chase them away from their home. Kwame decided to do something about it."
    },
    {
      paragraph: "Everyday, Kwame would go away from the watering hole, deep into the bush where no other animals could see him. When he thought he was alone he would try to let out a big roar but all that came out was a meek growl."
    },
    {
      paragraph: "The hyenas, were always jealous of Kwame. 'Look at him,' Dush the Hyena said. 'Look at how he walks around the watering hole. Singing. Dancing and telling stories like he's so special! Everybody likes him. He needs to go!' One day, the hyenas followed Kwame when he was going out into the bush to practice his roar. They wanted to get rid of him. When his back was turned, they rushed Kwame from behind to attack him!"
    },
    {
      paragraph: "But as they ran towards Kwame, he turned around gathered all his courage, took a deep breath. And let out a fierce roar that was heard all over the savannah! The hyenas were so scared by Kwame's bravery and roar that they ran away and never went back to the watering hole to bully the other animals."
    },
    {
      paragraph: "Everyone at the watering hole was very grateful for what Kwame had done for them. Even the lions were impressed by him."
    },
    {
      paragraph: "The End."
    }
  ]    
}

export const ayannaTheMakanga = {
  bookId: 1,
  bookName: "Ayanna the Makanga",
  bookCover: BabasPickUpImage,
  credits: {
    illustrator: "Jr Pencil",
    storyBy: "Thayo",
    copyEditor: "Adam Kiboi",
    authorFootnote: "To my baba, See! I turned out great.",
  },
  legal: {
    publishedBy: "Creatives Garage, Nairobi, 2021",
    copywright: "Creatives Garage",
  },
  pagesData: [
    {
        paragraph: "When Ayanna was a young child, she always wanted to be on long winding roads. Riding in cars and soaking up the beauty of everything. Matatus, buses and lorries would zoom past her and she hoped that one day she would work in public transport. Imagine such fun! Travelling all over the place. Meeting new people and helping them get to where they were going."
    },
    {
      paragraph: "Everyone would tell her that dreaming to work in transport was for boys. 'Girls are supposed to dream about cooking. Making pretty clothes and being mum Ayanna!' However Ayanna didn't care."
    },
    {
      paragraph: "She'd pretend that she was a makanga when she was on the merry-go-round shouting 'Beba! Beba! 20 bob to fun town!' Wheneer anyone got on and made vrooom vroooooom noises as it spun around, Ayanna knew she could do anything she set her mind to."
    },
    {
      paragraph: "Ayanna's dream never died or fizzled out. If anything, it got stronger! Ayanna went to driving school and got all the right licences to become a driver. However when she looked around for work everyone kept telling her the same thing."
    },
    {
      paragraph: "'You're a woman. You can't do this work. It needs tough men'. However, at one job interview she met Mary, a matatu owner who had been told the same things when she was starting her matatu business. I like your energy. And I can tell you're a hard worker. I don't have any jobs for driver's right now but. Do you want to be a makanga' Ayanna had always wanted to be the driver but she was all too happy to start somewhere in transport."
    },
    {
      paragraph: "Ayanna always noticed that some makangas were mean to passengers and some of the drivers drove recklessly...Many people had started disliking everyone who worked in transport because of a few bad bananas in the bunch."
    },
    {
      paragraph: "She knew that the only way she could change how people thought about makangas and drivers was with kindness and by being the best makanga she could be."
    },
    {
      paragraph: "So, every morning she woke up bright and early, dressed in her beautiful maroon uniform, wore a smile on her face and went to work. At work she ushered every passenger in with a smile and a greeting. 'Hujambo' 'How are you this morning!' 'You're looking great today!' 'Karibu! Let me help you with your bag.'"
    },
    {
      paragraph: "Her matatu would always fill faster than all the others because Ayanna was always so polite. She would even remember the names of all her regular customers and start conversations with them just to see how they were doing. When old ladies were going to sell their goods at the market, Ayanna made sure that there was always someone at their destination to help them carry their goods. The customers loved her and all the other makangas began to take notice. Soon, all the other makangas started taking their work seriously like Ayanna."
    },
    {
      paragraph: "Mary was pleased with Ayanna's work and asked her if she would like to become the manager of her fleet of matatus. 'Pole Madame Mary, but for now I just want to drive the passengers!' As soon as Mary heard that she gave Ayanna the keys to her newest matatu. It wasn't long before Ayanna became known as the best matatu driver. She was always polite to other drivers cars on the road, adhered to traffic rules, and was even appointed  as an ambassador of road safety by the traffic police."
    },
    {
      paragraph: "Years later, through her determination, bravery and believe in herself, Ayanna had her own fleet of matatus. All the drivers and makangas who worked for her were women and they all worked exactly as she had! Ayanna never gave up on her dream and she helped more women follow theirs . And even if Ayanna was the owner of the matatus, she never stopped being a driver!"
    }
  ]
}
export const books = [
  {
    name: "Baba's Pick up",
    data: babasPickUp,
  },
  {
    name: "Jebet the Runner",
    data: jebetTheRunner,
  },
  {
    name: "Kwame the Giraffe",
    data: kwameTheGiraffe,
  },
  {
  name: "Ayanna the Makanga",
  data: ayannaTheMakanga,
  },
  {
    name: ""
  }
];
