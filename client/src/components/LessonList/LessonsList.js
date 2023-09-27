import React from "react";
import Lesson from "../Lesson/Lesson";
import { LessonListContainer } from "./LessonList.styled";

const LessonsList = () => {
  return (
    <LessonListContainer>
      <Lesson>
        <h1>LESSONS</h1>
      </Lesson>
    </LessonListContainer>
  );
};
export default LessonsList;
