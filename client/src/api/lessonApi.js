import axios from "axios";

import { serverUrl } from "../api/index.js";

export const createLesson = async (lesson) => {
  try {
    const response = await axios.post(`${serverUrl}/lesson`, lesson);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error adding the lesson!", error);
    throw error;
  }
};

export const getLesson = () => {};

export const getLessons = () => {};
