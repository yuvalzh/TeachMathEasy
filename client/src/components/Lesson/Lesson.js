import React from "react";
import { useState } from "react";

import { LessonContainer, LessonItem, AvailabilityItem } from "./Lesson.styled";

const Lesson = ({ lesson }) => {
  const date = lesson.date;
  // Define an array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day, month, and year components
  const dayOfWeek = daysOfWeek[date.getUTCDay()]; // Get the day of the week
  const day = date.getUTCDate(); // Get the day of the month
  const month = date.getUTCMonth() + 1; // Get the month (add 1 because months are zero-indexed)
  const year = date.getUTCFullYear(); // Get the year

  // Format the date string as "DayOfWeek - DD/MM/YYYY"
  const formattedDate = `${dayOfWeek}- ${day
    .toString()
    .padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;

  return (
    <LessonContainer>
      <AvailabilityItem> Free Lesson </AvailabilityItem>
      <LessonItem>
        {formattedDate}, {lesson.startTime} - {lesson.endTime}
      </LessonItem>
    </LessonContainer>
  );
};

export default Lesson;
