import React from "react";

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <section className={showModal ? "modal show-modal" : "modal"}>
      <h1>about</h1>
      <h1>careers</h1>
      <h1>events</h1>
      <h1>products</h1>
      <h1>support</h1>
    </section>
  );
};
