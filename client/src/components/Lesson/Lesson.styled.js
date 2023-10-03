import styled from "styled-components";

export const LessonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: LightGray;
  border-radius: 40px;
  font-family: "Century Gothic", sans-serif;
  font-size: 22px;
  padding: 5px;
  height: 60px;
  width: 600px;
`;

export const LessonItem = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Century Gothic", sans-serif;
`;

export const AvailabilityItem = styled.label`
  display: flex;
  padding: 20px;
  align-items: center;
  border-radius: 40px;
  background: #00fa9a;
  height: 5px;
`;
