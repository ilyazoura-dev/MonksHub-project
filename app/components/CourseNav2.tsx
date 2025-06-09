"use client";
import { courses } from "@/lib/data";
import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import Btn from "./Btn";

interface NavLink {
  icon: React.ReactNode;
  text: Tabs;
}

type Tabs =
  | "all categories"
  | "development"
  | "UI/UX design"
  | "project management"
  | "accounting"
  | "marketing";

const CourseNav2 = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<Tabs>("all categories");

  const navLinks: NavLink[] = [
    {
      icon: <Squares2X2Icon />,
      text: "all categories",
    },
    {
      icon: <CodeBracketIcon />,
      text: "development",
    },
    {
      icon: <RectangleGroupIcon />,
      text: "UI/UX design",
    },
    {
      icon: <RectangleStackIcon />,
      text: "project management",
    },
    {
      icon: <CurrencyDollarIcon />,
      text: "accounting",
    },
    {
      icon: <ChartBarSquareIcon />,
      text: "marketing",
    },
  ];

  const coursesFilter = courses.filter((v) => {
    if (tab === "all categories") {
      return courses;
    } else {
      return v.category === tab;
    }
  });
  return (
    <div className="space-y-8">
      <div className="flex gap-4 justify-center">
        {navLinks.map((n, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setTab(n.text);
              console.log(n.text);
            }}
            className={`${
              active === i ? `bg-primary text-background border-primary` : ``
            } bg-background rounded-full transition-all duration-300 border border-foreground/25 py-3 px-5 flex gap-3 items-center cursor-pointer`}
          >
            <span className="*:size-6">{n.icon}</span>
            <p className="bm capitalize">{n.text}</p>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {coursesFilter.map((c, i) => (
          <div
            key={i}
            className={`${
              i > 8 && `hidden`
            } p-5 group bg-background rounded-3xl border border-foreground/10 space-y-5`}
          >
            <div className={`rounded-2xl overflow-hidden w-full`}>
              <Image
                src={`/courses/${c.image}.webp`}
                alt={c.title}
                height={1000}
                width={1000}
                className="group-hover:scale-125 transition-all duration-300 w-full h-full"
              />
            </div>
            <div className={`space-y-5`}>
              <div className="flex justify-between items-center">
                <span className="py-1 px-4 rounded-full capitalize border border-foreground/10">
                  {c.category}
                </span>
                <h5 className={`text-primary`}>${c.price}.00</h5>
              </div>
              <h5>{c.title}</h5>
              {/* <h3 className={`${i === 0 ? `block` : `hidden`}`}>{c.title}</h3> */}

              <div className={`flex justify-between items-center`}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNav2;
