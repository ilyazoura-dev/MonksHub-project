type courseCategory =
  | "development"
  | "UI/UX design"
  | "project management"
  | "accounting"
  | "marketing";

interface Course {
  image: string;
  category: courseCategory;
  title: string;
  duration: number;
  lectures: number;
  price: number;
}

export const courses: Course[] = [
  {
    image: "img1",
    category: "development",
    title: "HTML, CSS, and JavaScript",
    duration: 4,
    lectures: 21,
    price: 220,
  },
  {
    image: "img2",
    category: "project management",
    title: "UX Research & Usability Testing",
    duration: 3,
    lectures: 43,
    price: 150,
  },
  {
    image: "img3",
    category: "UI/UX design",
    title: "Email Marketing Techniques",
    duration: 504,
    lectures: 32,
    price: 122,
  },
  {
    image: "img4",
    category: "accounting",
    title: "Cloud Computing Introduction",
    duration: 840,
    lectures: 42,
    price: 119,
  },
  {
    image: "img5",
    category: "marketing",
    title: "UI/UX Essentials for Engaging",
    duration: 1008,
    lectures: 23,
    price: 221,
  },
  {
    image: "img6",
    category: "accounting",
    title: "Financial Accounting Essentials",
    duration: 840,
    lectures: 22,
    price: 212,
  },
  {
    image: "img7",
    category: "accounting",
    title: "Stakeholders Management",
    duration: 2,
    lectures: 12,
    price: 110,
  },
  {
    image: "img8",
    category: "marketing",
    title: "Google Ads & PPC Campaigns",
    duration: 2,
    lectures: 32,
    price: 210,
  },
  {
    image: "img9",
    category: "marketing",
    title: "Data Analytics Fundamentals",
    duration: 672,
    lectures: 54,
    price: 221,
  },
];
