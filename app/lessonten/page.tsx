import React from "react";

namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.includes(`${domain}`);
  }
}

const page = () => {
  console.log(Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io"));
  console.log(Company.isEmployeeEmail("user@example.com", "hexlet.io"));
  return <div>page</div>;
};

export default page;
