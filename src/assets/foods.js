import greekSalad from "./greek salad1.jpg";
import bruchetta from "./bruchetta1.jpg";
import lemonDessert from "./lemon dessert.jpg";

const foods = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: greekSalad,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.99,
    image: lemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default foods;
