import React from "react";

function filterAnagrams(word: string, array: string[]) {
  const sortedWord = word.split("").sort().join("");

  return array.filter((item) => {
    return item.split("").sort().join("") === sortedWord;
  });
}

const result1 = filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]).join(
  ", "
);
const result2 = filterAnagrams("racer", [
  "crazer",
  "carer",
  "racar",
  "caers",
  "racer",
]).join(", ");

const result3 = filterAnagrams("laser", ["lazing", "lazy", "lacer"]).join(", ");

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{result1}</p>
      <h1>Пример 2</h1>
      <p>{result2}</p>
      <h1>Пример 3</h1>
      <p>{result3}</p>
    </div>
  );
};

export default page;
