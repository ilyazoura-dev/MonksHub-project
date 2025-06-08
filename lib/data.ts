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

interface ShowCase {
  image: string;
  name: string;
  career: string;
}

interface FAQ {
  title: string;
  text: string;
}

interface Blog {
  image: string;
  auther: string;
  time: number;
  title: string;
  description: string;
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

export const showCases: ShowCase[] = [
  {
    image: "img1",
    name: "robert david",
    career: "UX designer",
  },
  {
    image: "img2",
    name: "ethan samuel",
    career: "product design",
  },
  {
    image: "img3",
    name: "william henry",
    career: "developer",
  },
  {
    image: "img4",
    name: "john david",
    career: "developer",
  },
];

export const faqs: FAQ[] = [
  {
    title: "Can I Track My Assignment and Grades",
    text: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Does the LMS Support Video Lessons and Live Classes",
    text: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How Can I Communicate with My Instructor",
    text: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What Support is Available for Students and Instructors",
    text: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Are there Interactive Features for Students",
    text: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export const blogs: Blog[] = [
  {
    image: "img1",
    auther: "William Henry",
    time: 15,
    title: "Top Marketing Skills to Boost Your Brand Engagement and Reach",
    description:
      "Learn essential security practices to protect your CMS from threats",
  },
  {
    image: "img2",
    auther: "Ethan Samuel",
    time: 6,
    title: "5 High-Impact Communication Skills for Every Professional",
    description:
      "Learn essential security practices to protect your CMS from threats",
  },
  {
    image: "img3",
    auther: "Robert David",
    time: 8,
    title: "Building a LinkedIn Profile that Attracts Opportunities",
    description:
      "Learn essential security practices to protect your CMS from threats",
  },
  {
    image: "img4",
    auther: "Alexander Paul",
    time: 9,
    title: "Effective Networking Strategies to Boost Career Success",
    description:
      "Learn essential security practices to protect your CMS from threats",
  },
  {
    image: "img5",
    auther: "Ethan Samuel",
    time: 10,
    title: "Top Accounting Skills for a Data-Driven World",
    description:
      "Learn essential security practices to protect your CMS from threats",
  },
];
