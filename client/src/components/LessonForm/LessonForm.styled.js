import styled from "styled-components";

export const LessonFormContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const LessonFormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 275px;
  justify-content: center;
  align-items: center;
  height: 400px;
  border: 2px solid #333;
  padding: 20px; /* Add padding for spacing */
  border-radius: 40px; /* Add rounded corners for a nice look */
  background-color: gray;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 10px;
  color: white;
  font-family: "Georgia", sans-serif;
`;

export const Label = styled.label`
  color: white;
  font-family: "Century Gothic", sans-serif;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  font-family: "Century Gothic", sans-serif;
  font-size: 22px;
  color: white; /* Change the button text color */
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 8px;

  &:hover {
    background-color: #ff69b4;
  }
`;
export const TimePickerWrapper = styled.div`
  color: black;
`;
