import React from "react";
import image from "../../../data/assistant_me.png";
import "./assistant.css";

const Assistant = ({ assistantContent }) => {
  return (
    <div className="assistant">
      {assistantContent && (
        <p className="assistant-content">{assistantContent}</p>
      )}
      <a href="/about">
        <img src={image} alt="me" />
      </a>
    </div>
  );
};

export default Assistant;
