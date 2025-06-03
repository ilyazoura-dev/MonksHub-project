import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

interface Btn {
  children: React.ReactNode;
  link: string;
}

const Btn = ({ children, link }: Btn) => {
  return (
    <Link href={`/${link}`}>
      <button className="group transition-all duration-400 hover:bg-foreground py-1 pl-5 cursor-pointer pr-1 rounded-full bg-primary text-background flex items-center gap-3">
        {children}
        <div className="bg-background rounded-full p-2">
          <ArrowRightIcon className="size-7 -rotate-45 text-foreground group-hover:-rotate-0 transition-all duration-400" />
        </div>
      </button>
    </Link>
  );
};

export default Btn;
