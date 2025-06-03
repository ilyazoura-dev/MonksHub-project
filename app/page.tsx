import {
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import MentorCard, { MentorCardProps } from "./components/MentorCard";
import Btn from "./components/Btn";
import CourseNav from "./components/CourseNav";

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

  return (
    <main>
      <div className="bg-gradient-to-b from-primary/50 to-transparent">
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
    </main>
  );
}
