import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src="/logo.svg"
        alt="MonksHub logo"
        height={200}
        width={200}
        className="w-10"
      />
      <h3>MonksHub</h3>
    </div>
  );
};

export default Logo;
