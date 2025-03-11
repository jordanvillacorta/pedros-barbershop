export interface Barber {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  bookingUrl: string;
}

export const barbers: Barber[] = [
  {
    name: "Pedro Angel",
    title: "Owner & Senior Barber",
    bio: "With over a decade of experience, Pedro has established himself as one of Olathe's premier barbers. His passion for precision cuts and dedication to client satisfaction has built a loyal following. Specializing in both traditional and modern styles, Pedro brings Puerto Rican flair to every cut.",
    image: "https://github.com/jordanvillacorta/pedros-barbershop/blob/master/images/pedro_hs%20Large.jpeg?raw=true",
    specialties: ["Fades", "Traditional Cuts", "Beard Sculpting", "Kids Cuts"],
    bookingUrl: "https://booksy.com/en-us/533995_pedro-s-barbershop_barber-shop_20362_olathe"
  },
  {
    name: "Jesus Silva",
    title: "Senior Barber",
    bio: "Jesus brings fresh energy and contemporary styling to the team. Known for his innovative approach to modern cuts and exceptional attention to detail, he's quickly become a favorite among clients seeking the latest trends while maintaining a professional edge.",
    image: "https://github.com/jordanvillacorta/pedros-barbershop/blob/master/images/jesus_hs%20Large.jpeg?raw=true",
    specialties: ["Modern Styles", "Skin Fades", "Line-ups", "Kids Cuts"],
    bookingUrl: "https://booksy.com/en-us/601301_jesus-silva-j-cutz-pedros-barbershop-in-olathe-kansas_barber-shop_20362_olathe#ba_s=sh_1"
  }
];