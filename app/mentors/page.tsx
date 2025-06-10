import Image from "next/image";
import React from "react";
import CourseNav2 from "../components/CourseNav2";
import Btn from "../components/Btn";
import StudentReviews from "../components/StudentReviews";
import JoinUsCard from "../components/JoinUsCard";

const MentorsPage = () => {
  const mentors = [
    {
      image: "img1",
      name: "Robert David",
      career: "UX/UI Designer",
    },
    {
      image: "img2",
      name: "Ethan Samuel",
      career: "Software Engineer",
    },
    {
      image: "img3",
      name: "Alexander Paul",
      career: "Project Manager",
    },
    {
      image: "img4",
      name: "William Henry",
      career: "Digital Marketer",
    },
    {
      image: "img5",
      name: "James Robert",
      career: "Project Manager",
    },
    {
      image: "img6",
      name: "Brandon Mechael",
      career: "Digital Marketer",
    },
    {
      image: "img7",
      name: "Matthew John",
      career: "Software Engineer",
    },
    {
      image: "img8",
      name: "Joseph Andrew",
      career: "UI/UX Designer",
    },
  ];
  return (
    <main className="pt-14">
      <section>
        <h1 className="max-w-4xl">
          Meet Our Industry's Leading Expert Mentors
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {mentors.map((m, i) => (
            <div
              key={i}
              className="p-5 space-y-5 group rounded-2xl bg-background border border-foreground-shade-3/25"
            >
              <div className="w-full rounded-2xl overflow-hidden group-odd:bg-primary-shade-2 group-even:bg-secondary-shade-2">
                <Image
                  src={`/mentorsCard/${m.image}.png`}
                  alt={m.name}
                  height={2000}
                  width={2000}
                  className="w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4>{m.name}</h4>
                <p className="bl">{m.career}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-back-shade-2">
        <section>
          <h2 className="text-center">Our Popular Courses</h2>
          <CourseNav2 />
          <div className="w-fit mx-auto">
            <Btn link="courses">View More Courses</Btn>
          </div>
        </section>
      </div>
      <section>
        <h2 className="text-center max-w-2xl mx-auto">
          Happy Students Say About Our Courses
        </h2>
        <StudentReviews />
      </section>
      <JoinUsCard />
    </main>
  );
};

export default MentorsPage;
