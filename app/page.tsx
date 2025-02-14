import Image from "next/image";
import React from "react";

function multiply(a: number, b: number) {
  return a * b;
}

const result1 = multiply(8, 8);
const result2 = multiply(1, 2);

export default function Home() {
  return (
    <div>
      <div>
        <h1>Пример 1</h1>
        <p>{result1}</p>
        <h1>Пример 2</h1>
        <p>{result2}</p>
      </div>
    </div>
  );
}
