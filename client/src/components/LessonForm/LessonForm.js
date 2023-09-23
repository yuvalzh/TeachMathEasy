import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

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
  const [startLesson, setStartLesson] = useState("");
  const [endLesson, setEndLesson] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(date);
    console.log(startLesson);
    console.log(endLesson);
  };

  return (
    <LessonFormContainer onSubmit={handleSubmit}>
      <Title>Add new lesson</Title>
      <InputContainer>
        <Label>Date:</Label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </InputContainer>
      <InputContainer>
        <Label>Start Lesson:</Label>
        <TimePicker onChange={setStartLesson} value={startLesson} />
      </InputContainer>
      <InputContainer>
        <Label>End Lesson:</Label>
        <TimePicker onChange={setEndLesson} value={endLesson} />
      </InputContainer>
      <SubmitButton type="submit">Add Lesson</SubmitButton>
    </LessonFormContainer>
  );
};

export default LessonForm;
