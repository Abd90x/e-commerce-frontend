// Speakers
import S1 from "../assets/images/speakers/s- (1).png";
import S2 from "../assets/images/speakers/s- (2).png";
import S3 from "../assets/images/speakers/s- (3).png";
import S4 from "../assets/images/speakers/s- (4).png";
import S5 from "../assets/images/speakers/s- (5).png";
import S6 from "../assets/images/speakers/s- (6).png";
import S7 from "../assets/images/speakers/s- (7).png";
import S8 from "../assets/images/speakers/s- (8).png";
// Headsets
import H1 from "../assets/images/headsets/h- (1).png";
import H2 from "../assets/images/headsets/h- (2).png";
import H3 from "../assets/images/headsets/h- (3).png";
import H4 from "../assets/images/headsets/h- (4).png";
import H5 from "../assets/images/headsets/h- (5).png";
import H6 from "../assets/images/headsets/h- (6).png";
import H7 from "../assets/images/headsets/h- (7).png";
import H8 from "../assets/images/headsets/h- (8).png";
// Keyboards
import K1 from "../assets/images/keyboards/k- (1).png";
import K2 from "../assets/images/keyboards/k- (2).png";
import K3 from "../assets/images/keyboards/k- (3).png";
import K4 from "../assets/images/keyboards/k- (4).png";
import K5 from "../assets/images/keyboards/k- (5).png";
import K6 from "../assets/images/keyboards/k- (6).png";
import K7 from "../assets/images/keyboards/k- (7).png";
import K8 from "../assets/images/keyboards/k- (8).png";
// Mouses
import M1 from "../assets/images/mouses/m- (1).png";
import M2 from "../assets/images/mouses/m- (2).png";
import M3 from "../assets/images/mouses/m- (3).png";
import M4 from "../assets/images/mouses/m- (4).png";
import M5 from "../assets/images/mouses/m- (5).png";
import M6 from "../assets/images/mouses/m- (6).png";
import M7 from "../assets/images/mouses/m- (7).png";
import M8 from "../assets/images/mouses/m- (8).png";

let all_product = [
  {
    id: 1,
    name: "JBL Red Desktop Speakers",
    category: "speakers",
    image: S1,
    new_price: 49.99,
    old_price: 75,
    rating: 4.7,
    rating_count: 8,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 2,
    name: "JBL Square Desktop Speakers",
    category: "speakers",
    image: S2,
    new_price: 69.99,
    old_price: 130,
    rating: 4,
    rating_count: 9,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 3,
    name: "JBL Sub Speakers",
    category: "speakers",
    image: S3,
    new_price: 139.99,
    old_price: 220,
    rating: 4.3,
    rating_count: 24,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 4,
    name: "Gaming Desktop Speakers",
    category: "speakers",
    image: S4,
    new_price: 74.99,
    old_price: 150.0,
    rating: 4.9,
    rating_count: 12,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 5,
    name: "Mini Gaming Desktop Speakers",
    category: "speakers",
    image: S5,
    new_price: 9.99,
    old_price: 25,
    rating: 4.1,
    rating_count: 7,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 6,
    name: "Mini Yellow Desktop Speakers",
    category: "speakers",
    image: S6,
    new_price: 12.99,
    old_price: 25,
    rating: 5,
    rating_count: 1,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 7,
    name: "SVEN Speakers",
    category: "speakers",
    image: S7,
    new_price: 49.99,
    old_price: 75,
    rating: 4.8,
    rating_count: 24,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 8,
    name: "JBL Hand Speakers",
    category: "speakers",
    image: S8,
    new_price: 74.99,
    old_price: 120,
    rating: 4.9,
    rating_count: 6,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our state-of-the-art speakers, redefining the way you experience sound. Elevate your auditory senses with our meticulously crafted speakers designed for unparalleled performance and immersive quality.",
  },
  {
    id: 9,
    name: "S.M Premium Headset Bluetooth",
    category: "headsets",
    image: H1,
    new_price: 19.99,
    old_price: 50,
    rating: 4,
    rating_count: 12,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 10,
    name: "SADES Gaming RGB Headset 7.1",
    category: "headsets",
    image: H2,
    new_price: 34.99,
    old_price: 85,
    rating: 5,
    rating_count: 24,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 11,
    name: "B-TREK Gaming RGB Headset Bluetooth",
    category: "headsets",
    image: H3,
    new_price: 44.99,
    old_price: 90,
    rating: 4.8,
    rating_count: 32,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 12,
    name: "F1 Gaming RGB Headset 7.1",
    category: "headsets",
    image: H4,
    new_price: 79.99,
    old_price: 150,
    rating: 4.1,
    rating_count: 12,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 13,
    name: "Gorsun Headset 7.1",
    category: "headsets",
    image: H5,
    new_price: 159.99,
    old_price: 290,
    rating: 4.8,
    rating_count: 45,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 14,
    name: "Lenovo Gaming RGB Headset 7.1",
    category: "headsets",
    image: H6,
    new_price: 99.99,
    old_price: 220,
    rating: 5,
    rating_count: 78,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 15,
    name: "Sony Gaming Headset Bluetooth 7.1",
    category: "headsets",
    image: H7,
    new_price: 49.99,
    old_price: 90,
    rating: 4.4,
    rating_count: 21,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 16,
    name: "JBL Premium Headset Bluetooth 7.1",
    category: "headsets",
    image: H8,
    new_price: 59.99,
    old_price: 120,
    rating: 4.2,
    rating_count: 11,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Join the ranks of those who demand excellence in sound quality and comfort. Elevate your audio experience with our exceptional headset and indulge in a world of superior sound.",
  },
  {
    id: 17,
    name: "Rayzer Gaming Keyboard RGB",
    category: "keyboards",
    image: K1,
    new_price: 37.99,
    old_price: 75,
    rating: 5,
    rating_count: 10,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 18,
    name: "Red Dragon Gaming Keyboard RGB Red Switch",
    category: "keyboards",
    image: K2,
    new_price: 21.99,
    old_price: 50,
    rating: 4.9,
    rating_count: 21,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 19,
    name: "Red Dragon Gaming Keyboard RGB",
    category: "keyboards",
    image: K3,
    new_price: 39.99,
    old_price: 80,
    rating: 4.7,
    rating_count: 54,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 20,
    name: "Luom Pink Gaming Keyboard RGB",
    category: "keyboards",
    image: K4,
    new_price: 59.99,
    old_price: 120,
    rating: 4.7,
    rating_count: 45,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 21,
    name: "Logitech Gaming Keyboard RGB",
    category: "keyboards",
    image: K5,
    new_price: 44.99,
    old_price: 90,
    rating: 4.1,
    rating_count: 4,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 22,
    name: "Fantech Gold Gaming Keyboard RGB",
    category: "keyboards",
    image: K6,
    new_price: 44.99,
    old_price: 80,
    rating: 5,
    rating_count: 2,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 23,
    name: "Red Dragon Gaming Keyboard RGB Blue Switch",
    category: "keyboards",
    image: K7,
    new_price: 79.99,
    old_price: 120,
    rating: 4.8,
    rating_count: 41,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 24,
    name: "Asus Gaming Keyboard RGB",
    category: "keyboards",
    image: K8,
    new_price: 44.99,
    old_price: 75,
    rating: 4.3,
    rating_count: 18,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Introducing our cutting-edge keyboard designed to revolutionize your typing experience. Crafted with precision and innovation, our keyboard combines ergonomic design with advanced features to cater to both productivity and comfort.",
  },
  {
    id: 25,
    name: "Red Dragon Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M1,
    new_price: 27.99,
    old_price: 80,
    rating: 5,
    rating_count: 17,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 26,
    name: "Logitech Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M2,
    new_price: 19.99,
    old_price: 40,
    rating: 4.6,
    rating_count: 15,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 27,
    name: "Red Dragon Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M3,
    new_price: 32.99,
    old_price: 60,
    rating: 5,
    rating_count: 3,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 28,
    name: "Logitech Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M4,
    new_price: 74.99,
    old_price: 120,
    rating: 4.4,
    rating_count: 2,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 29,
    name: "S.O.G Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M5,
    new_price: 39.99,
    old_price: 90,
    rating: 4.2,
    rating_count: 17,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 30,
    name: "Red Dragon Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M6,
    new_price: 28.99,
    old_price: 50,
    rating: 4.8,
    rating_count: 12,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 31,
    name: "S.O.G Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M7,
    new_price: 34.99,
    old_price: 80,
    rating: 5,
    rating_count: 5,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
  {
    id: 32,
    name: "Fantech Gaming RGB Mouse USB 3.0",
    category: "mouses",
    image: M8,
    new_price: 29.99,
    old_price: 60,
    rating: 4.9,
    rating_count: 1,
    tags: ["Smart", "Portable", "Connected", "Innovative", "Versatile"],
    description:
      "Elevate your interaction with your digital world with our precision-engineered mouse. Embrace comfort, precision, and versatility as you navigate through tasks with ease and finesse.",
  },
];

export default all_product;
