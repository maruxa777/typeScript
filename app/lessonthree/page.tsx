import React from "react";

function getHiddenCard(name: string, star?: number) {
  let stars = "";
  if (star == null) {
    stars = "****";
  } else {
    for (let i = 0; i < star; i++) {
      stars += "*";
    }
  }

  return stars + name.slice(-4);
}

const result1 = getHiddenCard("1234567812345678", 2);
const result2 = getHiddenCard("1234567812345678", 2);
const result3 = getHiddenCard("1234567812345678");
const result4 = getHiddenCard("2034399002121100", 1);

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{result1}</p>
      <h1>Пример 2</h1>
      <p>{result2}</p>
      <h1>Пример 3</h1>
      <p>{result3}</p>
      <h1>Пример 4</h1>
      <p>{result4}</p>
    </div>
  );
};

export default page;
