// array of objects that will store card data
import DetroitMurals from "./images/detroit-murals.jpeg";
import EmergingArtists from "./images/emerging-artists.webp";
import catImage from "./images/cat.jpg";

const dats = [
  {
    id: 1,
    title: "Detroit Murals on e-Bike",
    description: "watch detroit mural on e-bike",
    price: 45,
    coverImg: DetroitMurals,
    stats: {
      rating: 5.0,
      reviewCount: 20,
    },
    location: "Detroit",
    openSpots: 30,
  },
  {
    id: 2,
    title: "Emerging Artists of Detroit",
    description: "watch emerging artists in detroit",
    price: 97,
    coverImg: EmergingArtists,
    stats: {
      rating: 4.9,
      reviewCount: 40,
    },
    location: "Detroit",
    openSpots: 0,
  },
  {
    id: 3,
    title: "Chat with my Cat",
    description: "Wanna meow back to my cat?",
    price: 5,
    coverImg: catImage,
    stats: {
      rating: 4.7,
      reviewCount: 150,
    },
    location: "Online",
    openSpots: 10,
  },    
];
