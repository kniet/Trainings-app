import { useEffect, useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import "../styles/mainPage.css";
import "../styles/createCourse.css";

function CreateTraining({ value }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lessons, setLessons] = useState("");
  const [hours, setHours] = useState("");
  const [file, setFile] = useState();
  const [isCreatePage, setisCreatePage] = useState(false);

  useEffect(() => {
    setisCreatePage(value === "Create new training");
  });

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleLessonsChange(e) {
    setLessons(e.target.value + " Lessons");
  }

  function handleHoursChange(e) {
    setHours(e.target.value + " Hours");
  }

  return (
    <div>
      <Header
        value="All trainings"
        isCreateTrainingPage={true}
        action={"/homePage"}
      />
      <div class="container">
        <h2>{value}</h2>
        <div class="first-row">
          <div class="input-box">
            <p>Title</p>
            <Input value={title} onChange={handleTitleChange} />
          </div>
          <div class="input-box">
            <p>Lessons</p>
            <Input value={lessons} onChange={handleLessonsChange} />
          </div>
        </div>
        <div class="second-row">
          <div class="input-box">
            <p>Description</p>
            <Input value={description} onChange={handleDescriptionChange} />
          </div>
          <div class="input-box">
            <p>Hours in total</p>
            <Input value={hours} onChange={handleHoursChange} />
          </div>
        </div>
        <div class="buttons">
          <div class="imageUpload">
            <input
              class="custom-file-input"
              type="file"
              on
              onChange={handleFileChange}
            ></input>
          </div>
          <div class="confirmButton">
            {isCreatePage ? (
              <button
                class="orangeButtonCreate"
                type="submit"
              >
                {value}
              </button>
            ) : (
              <button
                class="orangeButtonCreate"
                type="submit"
              >
                {value}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTraining;
