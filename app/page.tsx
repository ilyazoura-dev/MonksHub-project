import {
  AcademicCapIcon,
  ArrowUpOnSquareStackIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import MentorCard, { MentorCardProps } from "./components/MentorCard";
import Btn from "./components/Btn";
import CourseNav from "./components/CourseNav";
import { blogs, showCases } from "@/lib/data";
import FAQs from "./components/FAQs";
import Link from "next/link";
import JoinUsCard from "./components/JoinUsCard";

interface WhyUsCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  const mentorImages: string[] = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
  ];

  const mentors: MentorCardProps[] = [
    {
      image: "img1",
      name: "Robert David",
      career: "UX/UI Designer",
      skills: ["photoshop", "nation", "shopify"],
    },
    {
      image: "img2",
      name: "Ethan Samuel",
      career: "Software Engineer",
      skills: ["illustrator", "webflow", "wordpress"],
    },
    {
      image: "img3",
      name: "Alexander Paul",
      career: "Project Manager",
      skills: ["illustrator", "photoshop", "webflow"],
    },
    {
      image: "img4",
      name: "William Henry",
      career: "Digital Marketer",
      skills: ["photoshop", "illustrator", "webflow"],
    },
    {
      image: "img5",
      name: "James Robert",
      career: "Project Manager",
      skills: ["figma", "photoshop", "wix"],
    },
    {
      image: "img6",
      name: "Brandon Mechael",
      career: "Digital Marketer",
      skills: ["figma", "photoshop", "wix"],
    },
    {
      image: "img7",
      name: "Matthew John",
      career: "Software Engineer",
      skills: ["illustrator", "photoshop", "wix"],
    },
    {
      image: "img8",
      name: "Joseph Andrew",
      career: "UI/UX Designer",
      skills: ["illustrator", "photoshop", "shopify"],
    },
  ];

  const whyUsCards: WhyUsCard[] = [
    {
      icon: <UserGroupIcon />,
      title: "expert instructores",
      description:
        "Learn from top industary professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques and insights needed to excel in your field.",
    },
    {
      icon: <RocketLaunchIcon />,
      title: "career-boost certify",
      description:
        "Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industary recognation and open doors to new career opportunities.",
    },
    {
      icon: <ArrowUpOnSquareStackIcon />,
      title: "flexible learning schedules",
      description:
        "At MonksHub, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are availalbe on-demand, allowing you to learn at your own pace, anytime and anywhere.",
    },
    {
      icon: <ChartBarIcon />,
      title: "100+ high impact courses",
      description:
        "MonksHub offers over 100 courses that cover essential skills in today's tech industary. Whether you'are a beginner or an experienced professional, our courses in web development, data science, and cybersecurity provide practical, hands-on learning to help you apply your skills immediately & competitive.",
    },
  ];

  return (
    <main>
      <div className="bg-gradient-to-r from-primary-shade-2 via-secondary-shade-2 to-accent-shade-2 pt-10">
        <div className="bg-gradient-to-t from-back-shade-2 from-0% to-transparent to-60%">
          <section className="relative">
            <div className="space-y-4">
              <div className="px-4 flex items-center gap-3 w-fit mx-auto py-1 rounded-full bg-background/50 backdrop-blur-lg border border-white/25">
                <AcademicCapIcon className="size-6 text-primary" />
                <p className="bm">Learn From the Top Experts</p>
              </div>
              <h1 className="max-w-4xl mx-auto text-center">
                Building Futures Together By Empowering Minds
              </h1>
              <p className="bl max-w-2xl mx-auto text-center">
                Join us in shaping a brighter future by nurturing potential,
                empowering minds, and fostering growth through education and
                collaboration.
              </p>
              <br />
              <div className="bg-white border border-gray-500/25 rounded-full w-fit mx-auto flex items-center gap-3 pr-6">
                <input
                  type="text"
                  placeholder="e.g. UX Design"
                  className="w-full h-full py-4 px-8 focus:outline-none rounded-full "
                />
                <MagnifyingGlassIcon className="size-8 cursor-pointer" />
              </div>
            </div>
            <Image
              src="/code_window.svg"
              alt="code_window"
              height={1000}
              width={1000}
              className="absolute left-32 bottom-96 w-32 blur-xs"
            />
            <Image
              src="/brush_ill.svg"
              alt="brush_illustration"
              height={1000}
              width={1000}
              className="absolute right-32 bottom-96 w-32 blur-xs"
            />
            <div className="flex gap-5 translate-y-40">
              {mentorImages.map((m, i) => (
                <div
                  key={i}
                  className="w-full rounded-full overflow-hidden odd:bg-secondary-shade-2 border odd:border-secondary-shade-1 even:bg-primary-shade-2 even:border-primary-shade-1"
                >
                  <Image
                    src={`/mentors/${m}.png`}
                    alt={m}
                    height={2000}
                    width={2000}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="bg-back-shade-2 pt-24">
        <section>
          <div className="space-y-4">
            <h2 className="max-w-2xl mx-auto text-center">
              Meet the Next Generation of Masterful Mentors
            </h2>
            <p className="br max-w-xl mx-auto text-center">
              Connect with the next wave of expert mentors, guiding you with
              fresh perspectives, innovative insights, and proven expertise.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {mentors.map((m, i) => (
              <MentorCard
                key={i}
                image={m.image}
                name={m.name}
                career={m.career}
                skills={m.skills}
              />
            ))}
          </div>
          <div className="mx-auto w-fit">
            <Btn link="/mentors">View All Mentors</Btn>
          </div>
        </section>
      </div>
      <section>
        <h2 className="max-w-2xl mx-auto text-center">
          Become In Demand On the Job Market Today!
        </h2>
        <CourseNav />
        <div className="w-fit mx-auto">
          <Btn link="/">View All Courses</Btn>
        </div>
      </section>
      <div className="bg-back-shade-2">
        <section>
          <div className="space-y-5">
            <h2 className="max-w-2xl mx-auto text-center">
              Why <span className="text-primary">MonksHub</span> is The Best
              Choice for You
            </h2>
            <p className="br max-w-lg mx-auto text-center">
              Masters in Hub offers expert-led courses, hands-on training, and
              industry insights to accelerate career growth rapidly.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {whyUsCards.map((u, i) => (
              <div
                key={i}
                className={`${
                  i === 2 ? `bg-primary text-background` : `bg-background`
                } p-8 rounded-2xl space-y-5 ${i === 2 && `row-span-2`} ${
                  i === 3 && `col-span-2`
                }`}
              >
                <div
                  className={`size-16 p-3 rounded-full border-2 ${
                    i === 2 ? `border-background` : `border-foreground`
                  }`}
                >
                  {u.icon}
                </div>
                <h3 className="capitalize">{u.title}</h3>
                <p className="br text-justify">{u.description}</p>
                {i === 2 && (
                  <p className="br">
                    Whether your working professional or a student, you can
                    customize your schedule to fit your needs.
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="w-fit mx-auto">
            <Btn link="/">Get Started</Btn>
          </div>
        </section>
      </div>
      <section className="flex gap-12">
        <div className="w-full relative h-[35rem]">
          <div className="rounded-2xl z-20 p-5 border border-primary/10 bg-background flex flex-col gap-3 items-center absolute right-5 top-8">
            <h4>100K Students</h4>
            <Image
              src="/students.png"
              alt="students"
              height={230}
              width={230}
              draggable="false"
            />
          </div>
          <div className="rounded-4xl overflow-hidden absolute left-0 top-0 w-4/6 z-10 border-[20px] border-background">
            <Image
              src="/left_1.webp"
              alt="student"
              height={1000}
              width={1000}
            />
          </div>
          <div className="rounded-4xl overflow-hidden absolute right-0 bottom-0 w-4/6 border-[20px] border-background">
            <Image
              src="/left_2.webp"
              alt="student"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="w-full space-y-12">
          <h2 className="flex">
            Take Your Expertise to the Next Level{" "}
            <Image
              src="/right_arrow.svg"
              alt="arrow"
              height={200}
              width={200}
              className="w-32"
            />
          </h2>
          <div className="space-y-5 w-fit">
            <div className="flex items-center gap-5 p-5 hover:shadow-2xl transition-shadow duration-200 shadow-primary-shade-3 rounded-2xl bg-background border border-foreground-shade-2/10">
              <div className="p-4 h-fit rounded-full bg-primary-shade-3">
                <UserIcon className="size-9 text-primary" />
              </div>
              <div>
                <h5>Sign up and get started</h5>
                <p className="br">
                  Create your account and start learning instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-5 hover:shadow-2xl transition-shadow duration-200 shadow-primary-shade-3 rounded-2xl bg-background border border-foreground-shade-2/10">
              <div className="p-4 h-fit rounded-full bg-secondary-shade-3">
                <AcademicCapIcon className="size-9 text-secondary" />
              </div>
              <div>
                <h5>Explore courses tailored to you</h5>
                <p className="br">
                  Browse a range of courses across various fields
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-5 hover:shadow-2xl transition-shadow duration-200 shadow-primary-shade-3 rounded-2xl bg-background border border-foreground-shade-2/10">
              <div className="p-4 h-fit rounded-full bg-accent-shade-3">
                <ChartBarIcon className="size-9 text-accent" />
              </div>
              <div>
                <h5>Keep learning and growing</h5>
                <p className="br">
                  Continue exploring and advancing your skills!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-back-shade-2 px-5 xl:px-0 py-24 space-y-12">
        <h2 className="max-w-3xl mx-auto text-center">
          Key Takeaways from Successful Graduate Experiences
        </h2>
        <div className="px-5 flex overflow-hidden">
          <div className="w-full flex gap-8 animate-scroll">
            {showCases.map((c, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl min-w-96 w-96 h-[31rem]"
              >
                <Image
                  src={`/showCases/${c.image}.jpg`}
                  alt={c.name}
                  height={2000}
                  width={2000}
                  className="w-full object-cover"
                />
                <div className="bg-gradient-to-t from-foreground from-0% to-transparent to-40% z-10 h-full text-background flex flex-col justify-end absolute left-0 bottom-0 w-full p-5">
                  <h4 className="capitalize">{c.name}</h4>
                  <p className="br capitalize">{c.career}</p>
                </div>
              </div>
            ))}
            {showCases.map((c, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl min-w-96 w-96 h-[31rem]"
              >
                <Image
                  src={`/showCases/${c.image}.jpg`}
                  alt={c.name}
                  height={2000}
                  width={2000}
                  className="w-full object-cover"
                />
                <div className="bg-gradient-to-t from-foreground from-0% to-transparent to-40% z-10 h-full text-background flex flex-col justify-end absolute left-0 bottom-0 w-full p-5">
                  <h4 className="capitalize">{c.name}</h4>
                  <p className="br capitalize">{c.career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section>
        <div className="space-y-5">
          <h2 className="max-w-3xl mx-auto text-center">
            Frequently Asked Questions
          </h2>
          <p className="br max-w-xl mx-auto text-center">
            Frequently Asked Questions offers quick answers to common queries,
            guiding users through features and fucntionalities effortlessly.
          </p>
        </div>
        <FAQs />
      </section>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="max-w-2xl">
            Empower Your Journey with Expert Career Insights
          </h2>
          <Btn link="/">View All Blogs</Btn>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            {blogs.map((b, i) => (
              <Link
                href={`/`}
                className={`${i > 0 && `hidden`} group w-full h-full`}
                key={i}
              >
                <div className=" space-y-3 ">
                  <div className="rounded-2xl h-96 overflow-hidden">
                    <Image
                      src={`/blogs/${b.image}.webp`}
                      alt={b.auther}
                      height={2000}
                      width={2000}
                      className="object-cover h-full group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="br">
                    {b.auther} - {b.time} min
                  </p>
                  <h5>{b.title}</h5>
                  <p className="br">{b.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5">
            {blogs.map((b, i) => (
              <Link
                href={`/`}
                className={`${i < 1 && `hidden`} group w-full h-full`}
                key={i}
              >
                <div className=" space-y-3 ">
                  <div className="rounded-2xl h-48 overflow-hidden">
                    <Image
                      src={`/blogs/${b.image}.webp`}
                      alt={b.auther}
                      height={2000}
                      width={2000}
                      className="object-cover h-full group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="br">
                    {b.auther} - {b.time} min
                  </p>
                  <h5>{b.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <JoinUsCard />
    </main>
  );
}
