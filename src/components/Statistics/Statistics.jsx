import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #9a9a9a;

  text-align: center;

  padding: 15px;
`;

export const Title = styled.h1`
  color: #010101;

  margin: 0px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;

  width: 150px;
  height: 30px;
  border: 2px solid black;
  background-color: aquamarine;

  margin-right: 10px;

  &:hover,
  &:focus {
    color: red;
  }

  &:nth-of-type(3) {
    margin-right: 0px;
  }
`;

export const Undertitle = styled.h2`
  margin: 0px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StatsList = styled.ul`
  list-style: none;

  margin: 0px;
  padding: 0px;
`;

export const StatsItem = styled.li`
  font-size: 20px;

  margin-bottom: 10px;

  &:nth-of-type(3) {
    margin-bottom: 0px;
  }
`;
