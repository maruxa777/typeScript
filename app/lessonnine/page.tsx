import React from "react";

function getParams(queryString: string): Record<string, string> {
  const paramsArray = queryString.split("&");
  const paramsObject = paramsArray.reduce((acc, param) => {
    const [key, value] = param.split("=");

    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return paramsObject;
}

const page = () => {
  console.log(getParams("per=10&page=5"));
  console.log(getParams("name=hexlet&count=3&order=asc"));
  return <div>page</div>;
};

export default page;
