import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <div className="h-[40px] flex mb-[100px] gap-3">
      <Link href="/">1 задача</Link>
      <Link href="/lessontwo">2 задача</Link>
      <Link href="/lessonthree">3 задача</Link>
      <Link href="/lessonfour">4 задача</Link>
      <Link href="/lessonfive">5 задача</Link>
      <Link href="/lessonsix">6 задача</Link>
      <Link href="/lessonseven">7 задача</Link>
      <Link href="/lessoneight">8 задача</Link>
      <Link href="/lessonnine">9 задача</Link>
      <Link href="/lessonten">10 задача</Link>
    </div>
  );
};

export default header;
