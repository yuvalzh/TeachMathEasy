import React from "react";
import { useState } from "react";
import LessonForm from "../LessonForm/LessonForm.js";
import LessonList from "../LessonList/LessonsList.js";
import AppBar from "../AppBar/AppBar.js";
import { ScheduleTeacherContainer } from "./ScheduleTeacherPage.styled";

const ScheduleTeacherPage = () => {
  return (
    <ScheduleTeacherContainer>
      <AppBar></AppBar>
      <LessonList></LessonList>
      <LessonForm></LessonForm>
    </ScheduleTeacherContainer>
  );
};

export default ScheduleTeacherPage;
