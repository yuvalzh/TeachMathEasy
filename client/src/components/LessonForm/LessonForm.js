import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import * as lessonApi from "../../api/lessonApi.js";

import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import {
  SubmitButton,
  LessonFormContainer,
  Label,
  Title,
  InputContainer,
} from "./LessonForm.styled";

const LessonForm = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const lesson = { date, startTime, endTime };
      // console.log(lesson);
      await lessonApi.createLesson(lesson);
      setDate("");
      setStartTime("");
      setEndTime("");
      // show lesson add successfully
    } catch (error) {
      // handle with error in the UI
      console.error("Error fetching data", error);
    }
  };

  return (
    <LessonFormContainer onSubmit={handleSubmit}>
      <Title>Add new lesson</Title>
      <InputContainer>
        <Label>Date:</Label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(new Date(date))}
        />
      </InputContainer>
      <InputContainer>
        <Label>Start Lesson:</Label>
        <TimePicker onChange={setStartTime} value={startTime} />
      </InputContainer>
      <InputContainer>
        <Label>End Lesson:</Label>
        <TimePicker onChange={setEndTime} value={endTime} />
      </InputContainer>
      <SubmitButton type="submit">Add Lesson</SubmitButton>
    </LessonFormContainer>
  );
};

export default LessonForm;
