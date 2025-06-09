import React from "react";
import { courses } from "@/lib/data";
import Image from "next/image";
import {
  ClipboardDocumentListIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Btn from "../components/Btn";
import CourseNav2 from "../components/CourseNav2";
import MentorsShowCase from "../components/MentorsShowCase";
import StudentReviews from "../components/StudentReviews";
import JoinUsCard from "../components/JoinUsCard";

const CoursesPage = () => {
  return (
    <main className="pt-10">
      <section>
        <h1 className="max-w-4xl">
          We Offer an Outstanding Learning Experience
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <div
              key={i}
              className={`${i === 0 && `col-span-3 grid grid-cols-2 gap-12`} ${
                i > 0 && `hidden`
              } p-5 group bg-background rounded-3xl border border-foreground/10 space-y-5`}
            >
              <div
                className={`rounded-2xl overflow-hidden w-full ${
                  i === 0 && `h-full`
                }`}
              >
                <Image
                  src={`/courses/${c.image}.webp`}
                  alt={c.title}
                  height={1000}
                  width={1000}
                  className="group-hover:scale-125 transition-all duration-300 w-full h-full"
                />
              </div>
              <div
                className={`space-y-5 ${
                  i === 0 && `flex flex-col justify-between`
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="py-1 px-4 rounded-full capitalize border border-foreground/10">
                    {c.category}
                  </span>
                  <h5 className={`${i === 0 && `hidden`} text-primary`}>
                    ${c.price}.00
                  </h5>
                  {i === 0 && (
                    <span
                      className={`bm bg-foreground rounded-full py-2 px-4 text-background`}
                    >
                      🔥 Popular
                    </span>
                  )}
                </div>
                <h5 className={`${i === 0 && `hidden`}`}>{c.title}</h5>
                <h3 className={`${i === 0 ? `block` : `hidden`}`}>{c.title}</h3>
                {i === 0 && (
                  <p className="bl">
                    This course provides an in-depth exploration of HTML, CSS,
                    and advanced web development techniques.
                  </p>
                )}
                <div
                  className={`flex justify-between items-center ${
                    i === 0 && `border-b border-foreground/10 pb-5`
                  }`}
                >
                  <span className="flex gap-2 items-center">
                    <ClockIcon className="size-5" />
                    <p className="br">
                      {c.duration > 24
                        ? `${c.duration / 24} weeks`
                        : `${c.duration}h`}
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <ClipboardDocumentListIcon className="size-5" />
                    <p className="br">{c.lectures} lectures</p>
                  </span>
                </div>
                {i === 0 && (
                  <div className="flex justify-between items-center">
                    <h3 className="text-primary">${c.price}.00</h3>
                    <Btn link="/">View Details</Btn>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-back-shade-2">
        <section>
          <h2 className="text-center">Explore Our All Courses</h2>
          <CourseNav2 />
          <Btn link="/courses">View More Courses</Btn>
        </section>
      </div>
      <div className="bg-foreground">
        <section>
          <div className="flex justify-between items-center">
            <h2 className="max-w-3xl text-background">
              Learn from the Best Talent in the Industry
            </h2>
            <Btn link="/mentors">View All Mentors</Btn>
          </div>
          <MentorsShowCase />
        </section>
      </div>
      <section>
        <h2 className="max-w-2xl mx-auto text-center">
          Happy Students Say About Our Courses
        </h2>
        <StudentReviews />
      </section>
      <JoinUsCard />
    </main>
  );
};

export default CoursesPage;
