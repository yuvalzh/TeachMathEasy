export const lessonMapper = (lesson) => {
  return { ...lesson, date: new Date(lesson.date) };
};
