import React from "react";
import Header from "../components/Header";
import "../styles/mainPage.css";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
      <Header
        value="Create training"
        isCreateTrainingPage={false}
        action={"/createTraining"}
        isAdmin={true}
      />
      <div class="mainUser">
        <Card />
      </div>
    </>
  );
}

export default HomePage;
