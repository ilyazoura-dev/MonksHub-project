"use client";
import { faqs } from "@/lib/data";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const FAQs = () => {
  const [open, setOpen] = useState<number>();

  const toggleOpen = (index: number) => {
    if (open === index) {
      setOpen(open - 1);
    }
    setOpen(index);
  };

  return (
    <div className="max-w-4xl flex flex-col gap-5 mx-auto">
      {faqs.map((f, i) => (
        <div
          key={i}
          onClick={() => toggleOpen(i)}
          className={`bg-background cursor-pointer rounded-2xl border border-foreground-shade-2/10 px-8 py-5 transition-all duration-300 shadow-primary/25 ${
            open == i && `shadow-2xl`
          }`}
        >
          <div className="flex justify-between items-center">
            <h3
              className={`${
                open == i && `text-primary`
              } transition-all duration-300`}
            >
              {f.title}
            </h3>
            <PlusIcon
              className={`size-8 transition-all duration-300 ${
                open == i && `rotate-45 text-primary`
              }`}
            />
          </div>
          <div
            className={`${
              open == i ? `max-h-18 opacity-100 pt-5` : `max-h-0 opacity-0`
            } duration-300 transition-all overflow-hidden`}
          >
            <p className="br">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
