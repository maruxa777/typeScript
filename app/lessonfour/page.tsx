import React from "react";

const numbers = [5, 4, 10, 12, 13, 99, 66];
const evennumber = (name: number[]) =>
  name.filter((number) => number % 2 === 0);

const result2 = evennumber(numbers).join(", ");
const result = evennumber([2, 10, 56, 9, 8, 2, 5, 6, 7, 18]).join(", ");

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{result2}</p>
      <h1>Пример 2</h1>
      <p>{result}</p>
    </div>
  );
};

export default page;
