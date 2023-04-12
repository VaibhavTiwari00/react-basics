import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div
      style={{
        marginBottom: "2%",
        padding: "12px",
        border: "1px solid #222",
      }}
    >
      <h3
        style={{
          marginBottom: "1%",
        }}
      >
        {title}
      </h3>
      {isVisible && <p>{description}</p>}
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible("none");
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("first");
  return (
    <div style={{ padding: "2% 5%" }}>
      <Section
        title={"This is our first heading"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam expedita quos perferendis, nulla obcaecati iusto tempore possimus, accusantium sed esse culpa eaque sunt excepturi! Quis, nulla quasi molestias suscipit ducimus earum dolores odio commodi laudantium aliquam deserunt libero cumque excepturi harum exercitationem beatae, accusamus tenetur quidem tempore repellat atque."
        }
        isVisible={isVisible === "first"}
        setIsVisible={() => {
          setIsVisible("first");
        }}
      />
      <Section
        title={"This is our second heading"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam expedita quos perferendis, nulla obcaecati iusto tempore possimus, accusantium sed esse culpa eaque sunt excepturi! Quis, nulla quasi molestias suscipit ducimus earum dolores odio commodi laudantium aliquam deserunt libero cumque excepturi harum exercitationem beatae, accusamus tenetur quidem tempore repellat atque."
        }
        isVisible={isVisible === "second"}
        setIsVisible={() => {
          setIsVisible("second");
        }}
      />
      <Section
        title={"This is our Third  heading"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam expedita quos perferendis, nulla obcaecati iusto tempore possimus, accusantium sed esse culpa eaque sunt excepturi! Quis, nulla quasi molestias suscipit ducimus earum dolores odio commodi laudantium aliquam deserunt libero cumque excepturi harum exercitationem beatae, accusamus tenetur quidem tempore repellat atque."
        }
        isVisible={isVisible === "third"}
        setIsVisible={() => {
          setIsVisible("third");
        }}
      />
    </div>
  );
};

export default Instamart;
