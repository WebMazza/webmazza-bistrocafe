import React from "react";
// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { name: "Home", id: "Hero" },
  { name: "About", id: "About" },
  { name: "Menu", id: "Menu" },
  { name: "Our Chef", id: "Team" },
  { name: "Testimonials", id: "Testimonials" },
  { name: "Reservation", id: "Reservation" },
  { name: "Contact", id: "Footer" },
];

export const heroData = {
  pretitle: "Nothing brings people together like",
  title: "Bistro Cafe",
  subtitle1: "Discover the Warmth and Flavor of Our Inviting Bistro Cafe,",
  subtitle2: "Where Great Food and Great Company Meet.",
  btnText: "Find out more",
};

export const socialData = [
  { href: "", icon: <FaYoutube /> },
  { href: "", icon: <FaFacebookF /> },
  { href: "", icon: <FaInstagram /> },
  { href: "", icon: <FaPinterestP /> },
  { href: "", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "who we are",
  subtitle:
    "Our restaurant was founded with the simple mission of offering great food and service in a welcoming environment. We've created a space where you may mark big occasions or simply relax while sharing a wonderful dinner with friends. Come and join our tale and let us share our passion for food and hospitality with you!",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "delicious flavour of autumn",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Fruity Cheesecake",
      price: "$7.99",
      alt: "Fruity Cheesecake.",
      description:
        "Creamy and refreshing Fruity Cheesecake. Perfect balance of tangy and sweet flavors.",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      alt: "Veggie Burger.",
      description:
        "Flavorful Veggie Burger, made with a juicy veggie patty, fresh toppings, and served on a fluffy bun.",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      alt: "King Burger.",
      description:
        "Savory King Burger, made with mouthwatering beef, melted cheese, crisp lettuce, juicy tomato, and a special secret sauce.",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      alt: "Mexican Burger.",
      description:
        "Bold and zesty Mexican Burger, made with juicy beef, melted cheese, fresh guacamole, tangy salsa, and crisp lettuce on a soft bun.",
    },
  ],
};

export const teamData = {
  pretitle: "team",
  title: "meet our chef",
  sub1: " With a decade of culinary experience, Chef Bruno has honed his skills in some of the best kitchens in the world. His passion for making each guest feel unique is what we adore about him the most. Chef Bruno will go above and beyond to ensure that you leave our restaurant with a smile on your face. So if you're looking for a dining experience that combines exceptional cuisine, warm hospitality, and a touch of magic, come to meet.",
  sub2: "We promise you won't be disappointed!",
  name: "Bruno Dias",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what clients' say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Great dinner! Both the food and the service were excellent. Each flavor of my meal matched and the ingredients were fresh. I highly recommend the King Burger, it's gorgeous. Thank you for the lovely night!",
      image: Avatar1,
      alt: "Satisfied Client No.1.",
      name: "Michael J.",
      occupation: "Software Engineer",
    },
    {
      message:
        "I took my family here for a special occasion, and EVERYTHING completely blew us away! We enjoyed the atmosphere and we were impressed by the care that had been taken with every part of our meal. We can't wait to come back and try more of the menu!",
      image: Avatar2,
      alt: "Satisfied Client No.2.",
      name: "David R.",
      occupation: "High School Teacher",
    },
    {
      message:
        "I've dined at many restaurants in the city, but this one truly stands out. The food was exceptional, amazing job by Chef Bruno. I would highly recommend this restaurant to anyone looking for a top-notch dining experience.",
      image: Avatar3,
      alt: "Satisfied Client No.3.",
      name: "John S.",
      occupation: "Sales Executive",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable. Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "", icon: <FaYoutube /> },
      { href: "", icon: <FaFacebookF /> },
      { href: "", icon: <FaInstagram /> },
      { href: "", icon: <FaPinterestP /> },
      { href: "", icon: <FaDiscord /> },
    ],
  },
};
