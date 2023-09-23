import React from "react";
import { useEffect } from "react";
import LessonForm from "./components/LessonForm/LessonForm";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getLessons());
  // }, [dispatch]);

  return (
    <>
      <LessonForm />
    </>
  );
};

export default App;
