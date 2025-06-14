import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
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
    </Link>
  );
};

export default Logo;
