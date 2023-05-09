import React from "react";
import TextLabel from "./TextLabel";
import Button from "./Button";

function Card() {
  return (
    <>
      <div className="trainingLogoDiv">
        <img
          class="trainingLogo"
          src={"../images/logo.png"}
          alt="there should be a logo"
        ></img>
      </div>
      <div className="title">
        <TextLabel className="title">TEST123</TextLabel>
      </div>

      <div className="description">
        <TextLabel className="description">TEST123</TextLabel>
      </div>
      <div className="aboutCourse">
        <div class="information">
          <img
            class="icon"
            src={require("../images/lessons.png")}
            alt="Lessons"
          />
          <span className="spanUser">10</span>
        </div>
        <div class="information">
          <img class="icon" src={require("../images/time.png")} alt="Time" />
          <span className="spanUser">10</span>
        </div>
      </div>
      <Button label={"Button"}></Button>

      <TextLabel children="Registered!" className="registerLabel"></TextLabel>
    </>
  );
}

export default Card;
