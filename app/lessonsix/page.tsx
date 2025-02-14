import { Result } from "postcss";
import React from "react";

function isComplete(course: { title: string; lessons: string[] }) {
  if (Array.isArray(course.lessons)) {
    console.log("курс пройден");
    let result = "курс пройден";
    return course.lessons.length >= 4;
  }
  console.log("курс пройден");

  return false;
}

const course = {
  title: "Основы программирования",
  lessons: ["Урок 1", "Урок 2", "Урок 3"],
};

console.log(isComplete(course));

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{isComplete(course)}</p>
    </div>
  );
};

export default page;
