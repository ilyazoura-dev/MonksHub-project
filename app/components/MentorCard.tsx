import Image from "next/image";
import React from "react";

export interface MentorCardProps {
  image: string;
  name: string;
  career: string;
  skills: string[];
}

const MentorCard = ({ image, name, career, skills }: MentorCardProps) => {
  return (
    <div className="rounded-2xl bg-background p-8 space-y-5 border border-foreground-shade-5 hover:border-primary hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300">
      <div className="w-1/3 mx-auto rounded-full overflow-hidden bg-primary-shade-2">
        <Image
          src={`/mentorsCard/${image}.png`}
          alt={name}
          height={1000}
          width={1000}
        />
      </div>
      <div>
        <h5 className="capitalize text-center">{name}</h5>
        <p className="capitalize text-center">{career}</p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((s, i) => (
          <p
            key={i}
            className="br py-1 px-3 rounded-full border border-foreground-shade-5 capitalize w-fit"
          >
            {s}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MentorCard;
