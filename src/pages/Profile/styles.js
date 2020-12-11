//STYLE
import Paper from "@material-ui/core/Paper";

//DATA
import breadcrumb from "../../assets/images/breadcrumb.jpg";

import styled from "styled-components";

export const Container = styled(Paper)`
  margin: 0 auto;
  width: 90%;
  margin-top: 80px;
  padding: 60px;
  margin-bottom: 100px;
  text-align: justify;

  @media (max-width: 945px) {
    padding: 40px;
  }

  @media (max-width: 455px) {
    padding: 20px;
    margin-top: 40px;
  }
`;

export const Breadcrumb = styled.div`
  background-image: url(${breadcrumb});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  height: 250px;

  @media (max-width: 700px) {
    height: 200px;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
  @media (max-width: 380px) {
    height: 125px;
  }
`;
