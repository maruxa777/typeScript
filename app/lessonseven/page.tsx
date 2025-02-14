import { useState } from "react";
import React from "react";

enum ModalStatus {
  Opened = "Opened",
  Closed = "Closed",
}

function buildModal(
  text: string,
  status: ModalStatus
): { text: string; status: ModalStatus } {
  return {
    text,
    status,
  };
}
const modal1 = buildModal("Добро пожаловать", ModalStatus.Opened);
const modal2 = buildModal("Окно закрыто. Скоро откроемся", ModalStatus.Closed);

const page = () => {
  console.log(modal1);

  console.log(modal2);
  return (
    <div>
      <p>Задача 1</p>
      <div>{ModalStatus.Opened}</div>
      <p>Задача 2</p>
      <div className="flex flex-col">
        <div>
          {modal1.status} {modal1.text}
        </div>
        <div>
          {modal2.status} {modal2.text}
        </div>
      </div>
    </div>
  );
};

export default page;
