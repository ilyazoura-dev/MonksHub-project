"use client";
import Image from "next/image";
import React, { useState } from "react";

interface StudentReview {
  image?: string;
  text?: string;
  name: string;
  field: string;
}

const StudentReviews = () => {
  const [activeDot, setActiveDot] = useState<number>(0);

  const reviews: StudentReview[] = [
    {
      text: "This platform transformed my skills! Engaging courses, well-structured, with knowledgeable instructors who simplify complex topics. Covers essentials—highly recommended for growth!",
      name: "Samuel John",
      field: "UI/UX Designer",
    },
    {
      image: "img1",
      name: "Michael Anthony",
      field: "Software Engineer",
    },
    {
      text: "Exceptional platform for career growth! The up-to-date curriculum, skilled instructors, and hands-on exercises make learning impactful and rewarding. Truly worth every moment spent!",
      name: "Tomas Edward",
      field: "Digital Marketer",
    },
    {
      image: "img2",
      name: "Rovman Rail",
      field: "Lead Developer",
    },
    {
      text: "The courses are engaging, and taught by knowledgeable instructors who break down complex topics with ease. It covers all the essentials—highly recommended for personal and professional growth!",
      name: "Samuel John",
      field: "UI/UX Designer",
    },
    {
      image: "img3",
      name: "Micky Aurthor",
      field: "Professor",
    },
    {
      text: "This enhanced my skills! Interactive courses, well-organized, with expert instructors who make complex topics easy to grasp. Covers all the essentials—highly recommended for development!",
      name: "Tomas Edward",
      field: "Digital Marketer",
    },
  ];

  const navigationDots: React.ReactNode[] = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="fill-foreground-shade-3 size-4"
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="fill-foreground-shade-3 size-4"
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="fill-foreground-shade-3 size-4"
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="fill-foreground-shade-3 size-4"
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="fill-foreground-shade-3 size-4"
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>,
  ];

  return (
    <div className="overflow-hidden">
      <div
        style={{ transform: `translateX(-${activeDot * 34}%)` }}
        className={`flex gap-5 transition-all duration-300`}
      >
        <div className="flex gap-5 min-w-full max-h-[35rem]">
          {reviews.map((r, i) => (
            <div key={i} className={`${i > 2 && `hidden`}`}>
              {r.text ? (
                <div className="bg-back-shade-2 w-full h-full p-8 rounded-2xl flex flex-col justify-between gap-8">
                  <Image
                    src={`/doubleCoute.svg`}
                    alt="doube qoute"
                    height={1000}
                    width={1000}
                    className="w-14"
                  />
                  <h5>{r.text}</h5>
                  <div>
                    <h3>{r.name}</h3>
                    <p className="bl">{r.field}</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={`/students/${r.image}.jpg`}
                    alt={r.name}
                    height={2000}
                    width={2000}
                    className="h-full object-cover"
                  />
                  <div className="absolute left-0 bg-gradient-to-t from-foreground to-transparent to-40% top-0 p-8 w-full h-full flex flex-col justify-end">
                    <div className="text-background">
                      <h3>{r.name}</h3>
                      <p className="br">{r.field}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-5 min-w-full max-h-[35rem]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`${i < 3 && `hidden`} ${i > 5 && `hidden`}`}
            >
              {r.text ? (
                <div className="bg-back-shade-2 h-full w-full p-8 rounded-2xl flex flex-col justify-between gap-8">
                  <Image
                    src={`/doubleCoute.svg`}
                    alt="doube qoute"
                    height={1000}
                    width={1000}
                    className="w-14"
                  />
                  <h5>{r.text}</h5>
                  <div>
                    <h3>{r.name}</h3>
                    <p className="bl">{r.field}</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={`/students/${r.image}.jpg`}
                    alt={r.name}
                    height={2000}
                    width={2000}
                    className="h-full object-cover"
                  />
                  <div className="absolute left-0 bg-gradient-to-t from-foreground to-transparent to-40% top-0 p-8 w-full h-full flex flex-col justify-end">
                    <div className="text-background">
                      <h3>{r.name}</h3>
                      <p className="br">{r.field}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-fit mx-auto flex gap-3 py-5">
        {navigationDots.map((n, i) => (
          <span
            key={i}
            className={`${
              activeDot === i && `*:fill-foreground`
            } cursor-pointer`}
            onClick={() => setActiveDot(i)}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;
