import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100vw;
  max-width: 100%;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    font-weight: 300;
    font-size: 45px;
    color: #444;
  }

  span {
    width: 80vw;
    display: flex;
    justify-content: flex-end;
  }
`;
