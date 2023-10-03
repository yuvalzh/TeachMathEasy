import React, { useState, useEffect } from "react";
import axios from "axios";
import Lesson from "../Lesson/Lesson";
import { LessonListContainer } from "./LessonList.styled";
import * as lessonApi from "../../api/lessonApi.js";

// Function to fetch lessons for a specific day

const LessonsList = () => {
  const fetchLessonsForDay = async (date) => {
    try {
      const response = await lessonApi.getLessons(date);
      console.log("response:" + response.date);
      setLessons(response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  // Use a state variable to store the retrieved lessons
  const [lessons, setLessons] = useState([]);

  // Call fetchLessonsForDay with the desired date
  useEffect(() => {
    const selectedDate = "2023-11-02"; // Replace with your selected date
    const dateObject = new Date(selectedDate);
    fetchLessonsForDay(dateObject);
  }, []);

  return (
    <LessonListContainer>
      {lessons.map((lesson, key) => {
        return <Lesson lesson={lesson} key={key}></Lesson>;
      })}
    </LessonListContainer>
  );
};

export default LessonsList;
