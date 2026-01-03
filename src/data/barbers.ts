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
    image: "https://i.postimg.cc/4yCKZRkY/pedro-hs.jpg",
    specialties: ["Skin Fades", "Traditional Cuts", "Beard Trims", "Kids Cuts"],
    bookingUrl: "https://booksy.com/en-us/533995_pedro-s-barbershop_barber-shop_20362_olathe"
  },
  {
    name: "Jesus Silva",
    title: "Senior Barber",
    bio: "Jesus brings fresh energy and contemporary styling to the team. Known for his innovative approach to modern cuts and exceptional attention to detail, he's quickly become a favorite among clients seeking the latest trends while maintaining a professional edge.",
    image: "https://i.postimg.cc/qvQCKFy4/jesus-hs.jpg",
    specialties: ["Skin Fades", "Burst Fades",  "Beard Trims", "Kids Cuts"],
    bookingUrl: "https://booksy.com/en-us/601301_jesus-silva-j-cutz-pedros-barbershop-in-olathe-kansas_barber-shop_20362_olathe#ba_s=sh_1"
  },
  {
    name: "Jerimyah Neely",
    title: "Barber",
    bio: "Originally from Mississippi, Jerimyah brings Southern hospitality and precision to every cut. Having called Kansas City home for the past few years, he's quickly adapted to the local style while maintaining his roots in classic barbering techniques. His friendly demeanor and attention to detail make every client feel welcome and leave looking their absolute best.",
    image: "https://i.postimg.cc/rFQGkzsc/jerimyah-5.jpg",
    specialties: ["Classic Cuts", "Fade Styles", "Beard Grooming", "Hot Towel Shaves"],
    bookingUrl: "https://booksy.com/en-us/1505171_jerimyah-neely-pedros-barbershop_barber-shop_20362_olathe#ba_s=seo"
  }
];