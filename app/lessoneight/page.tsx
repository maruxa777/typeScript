import React from "react";

type User = {
  name: string;
  age: number;
};

function getOlderUser(user1: User, user2: User) {
  if (user1.age > user2.age) {
    return user1.name;
  }
  if (user1.age < user2.age) {
    return user2.name;
  } else {
    return null;
  }
}

const user1: User = { name: "Petr", age: 17 };
const user2: User = { name: "Isidor", age: 18 };

const page = () => {
  const user = getOlderUser(user1, user2);
  console.log(user);
  return <div>{user}</div>;
};

export default page;
