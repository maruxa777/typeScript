import React from "react";

function repeat(text: string, times: number) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text;
  }
  return result;
}

const result1 = repeat("sometext", 2);
const result2 = repeat("wo", 3);

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{result1}</p>
      <h1>Пример 2</h1>
      <p>{result2}</p>
    </div>
  );
};

export default page;
