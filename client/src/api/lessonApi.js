import axios from "axios";
import { lessonMapper } from "./mappers/lessonMapper.js";

import { serverUrl } from "../api/index.js";

export const createLesson = async (lesson) => {
  try {
    const response = await axios.post(`${serverUrl}/lessons`, lesson);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error adding the lesson!", error);
    throw error;
  }
};

export const getLessons = async (date) => {
  try {
    const response = await axios.get(`${serverUrl}/lessons`, {
      params: { date },
    });
    const lessonsRes = response.data;
    const lessons = lessonsRes.map((lesson) => {
      return lessonMapper(lesson);
    });
    return lessons;
  } catch (err) {
    console.log(err);
  }
};
