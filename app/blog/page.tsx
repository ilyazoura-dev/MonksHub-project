import { blogs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../components/Btn";
import SocialIcons from "../components/SocialIcons";
import JoinUsCard from "../components/JoinUsCard";

const BlogPage = () => {
  return (
    <main>
      <div className="gradient">
        <div className="gradient-blend">
          <section>
            <h1 className="max-w-4xl">
              Empower Your Journey with Expert Career Insights
            </h1>
          </section>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-2 gap-5">
          <div>
            {blogs.map((b, i) => (
              <Link
                href={`/`}
                className={`${i > 0 && `hidden`} group w-full h-full`}
                key={i}
              >
                <div className=" space-y-3 ">
                  <div className="rounded-2xl h-96 overflow-hidden">
                    <Image
                      src={`/blogs/${b.image}.webp`}
                      alt={b.auther}
                      height={2000}
                      width={2000}
                      className="object-cover h-full group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="br">
                    {b.auther} - {b.time} min
                  </p>
                  <h5>{b.title}</h5>
                  <p className="br">{b.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5">
            {blogs.map((b, i) => (
              <Link
                href={`/`}
                className={`${i < 1 && `hidden`} group w-full h-full`}
                key={i}
              >
                <div className=" space-y-3 ">
                  <div className="rounded-2xl h-48 overflow-hidden">
                    <Image
                      src={`/blogs/${b.image}.webp`}
                      alt={b.auther}
                      height={2000}
                      width={2000}
                      className="object-cover h-full group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="br">
                    {b.auther} - {b.time} min
                  </p>
                  <h5>{b.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <h2 className="text-center">Explore All Insights</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 grid grid-cols-2 gap-5">
            {blogs.map((b, i) => (
              <Link href={`/`} className={`group w-full h-full`} key={i}>
                <div className=" space-y-3 ">
                  <div className="rounded-2xl h-64 overflow-hidden">
                    <Image
                      src={`/blogs/${b.image}.webp`}
                      alt={b.auther}
                      height={2000}
                      width={2000}
                      className="object-cover h-full group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <p className="br">
                    {b.auther} - {b.time} min
                  </p>
                  <h5>{b.title}</h5>
                </div>
              </Link>
            ))}
            <div className="col-span-2 flex justify-center">
              <Btn link="blog">View More Blogs</Btn>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h4>Categories</h4>
              <div className="flex flex-col gap-3">
                <Link href="/blog-category/">
                  <p className="br hover:text-secondary transition-all">
                    Industry Insights
                  </p>
                </Link>
                <Link href="/blog-category/">
                  <p className="br hover:text-secondary transition-all">
                    Technology Trends
                  </p>
                </Link>
                <Link href="/blog-category/">
                  <p className="br hover:text-secondary transition-all">
                    Personal Growth
                  </p>
                </Link>
                <Link href="/blog-category/">
                  <p className="br hover:text-secondary transition-all">
                    Career Development
                  </p>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4>Recent Blogs</h4>
              <div className="flex flex-col gap-5">
                {blogs.map((b, i) => (
                  <div className={`flex gap-5 ${i > 2 && `hidden`}`} key={i}>
                    <div className="h-28 w-28 min-w-28 rounded-xl overflow-hidden">
                      <Image
                        src={`/blogs/${b.image}.webp`}
                        alt={b.title}
                        height={1000}
                        width={1000}
                        className="object-cover h-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="bl font-medium">{b.title}</p>
                      <p className="br">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 flex gap-3">
              <h5>Follow Us:</h5>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      <JoinUsCard />
    </main>
  );
};

export default BlogPage;
