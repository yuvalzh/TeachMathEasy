import React from "react";
import { useState } from "react";

import { LessonContainer, AcceptButton, Label } from "./Lesson.styled";

const Lesson = () => {
  const [acceptButton, setAcceptButton] = useState("Free");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(acceptButton);
  };

  return (
    <LessonContainer>
      <AcceptButton> Free </AcceptButton>
      <Label> date and time </Label>
    </LessonContainer>
  );
};

export default Lesson;
