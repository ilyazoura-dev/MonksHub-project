import React from "react";
import Btn from "./Btn";

const JoinUsCard = () => {
  return (
    <section>
      <div className="shadow-2xl shadow-primary/25 overflow-hidden rounded-3xl text-center bg-gradient-to-r from-primary-shade-2 via-accent-shade-2 to-secondary-shade-2">
        <div className="space-y-12 p-16 h-full w-full bg-gradient-to-t from-background to-transparent">
          <div className="space-y-5">
            <h2 className="max-w-3xl mx-auto">
              Join Driven Professionals & Launch Your Dream Career Today!
            </h2>
            <p className="br max-w-xl mx-auto">
              Connect with a network of driven professionals, gain valuable
              insights, and access resources that propel you toward your dream
              career.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-4 px-6 rounded-full w-1/3 focus:outline-none border border-foreground/10 focus:border-primary bg-background"
            />
            <Btn link="/">Join Us</Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsCard;
