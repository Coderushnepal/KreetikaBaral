import React from "react";
import PoemSummary from "./PoemSummary";

const PoemList = ({ poems }) => {
  return (
    <div className="poem-list section">
      {poems &&
        poems.map((poem) => {
          return <PoemSummary poem={poem} key={poem.id} />;
        })}
      {/* <PoemSummary />
      <PoemSummary />
      <PoemSummary />
      <PoemSummary /> */}
    </div>
  );
};

export default PoemList;
