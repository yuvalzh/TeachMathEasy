import React from "react";
import { useEffect } from "react";
import ScheduleTeacherPage from "./components/Pages/ScheduleTeacherPage";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getLessons());
  // }, [dispatch]);

  return <ScheduleTeacherPage></ScheduleTeacherPage>;
  // return <Login></Login>;
};

export default App;
