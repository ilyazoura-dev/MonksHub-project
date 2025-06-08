import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Btn from "../Btn";

interface SubLink {
  title: string;
  link: string;
}

interface NavLink {
  title: string;
  link?: string;
  subTitle?: SubLink[];
}

const Header = () => {
  const links: NavLink[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Pages",
      subTitle: [
        { title: "Contact Us", link: "/contact-us" },
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Terms & Conditions", link: "/terms-conditions" },
        { title: "Licenses", link: "/licenses" },
        { title: "Change Log", link: "/change-log" },
        { title: "404", link: "/404" },
      ],
    },
    {
      title: "Courses",
      link: "/courses",
    },
    {
      title: "Mentors",
      link: "/mentors",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
  ];

  return (
    <div className="absolute left-0 top-0 w-full z-50">
      <div className="py-5 container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex justify-center gap-8">
          {links.map((l, i) => (
            <Link href={`${l.link}`} key={i}>
              <p className="bm">{l.title}</p>
            </Link>
          ))}
        </div>
        <Btn link="/mentors">View All Mentors</Btn>
      </div>
    </div>
  );
};

export default Header;
