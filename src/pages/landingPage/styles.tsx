import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 24px;

  color: white;
  span {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.2rem;
    img {
      width: 50px;
      height: 50px;
      margin-right: 12px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    .signup {
      background-color: #e6ae14;
      color: white;
      width: 100px;
      height: 30px;
      border-radius: 10px;
    }
  }
`;

const FromLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(-100px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`;

const FromRight = keyframes`
  from{
    opacity:0;
    transform:translateX(50px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`;

export const Functionalities = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: white;
  text-align: center;
  .func__col-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    animation: ${FromLeft} 1s linear;
    img {
      width: 60%;
    }
  }
  .func__col-2 {
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    animation: ${FromRight} 1s linear;

    h1 {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffff;
      text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
    }

    button {
      text-decoration: none;
      padding: 8px 12px;
      text-transform: capitalize;
      font-size: 1.3rem;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background-color: #71b3b3;
      color: #fff;
      transition: all 0.4s linear;
      box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      :hover {
        background-color: #59a5a5;
      }
    }
  }

  @media (max-width: 428px) {
    .func__col-1 {
      display: none;
    }
    .func__col-2 {
      width: 100%;
    }
  }
`;

export const Voluntaries = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 94px 30px 160px;
  margin-bottom: -120px;
  font-size: 1rem;
  background: linear-gradient(
    90deg,
    #59a5a5 26.74%,
    #3f8e8e 72.27%,
    #227475 98.23%
  );
  color: white;
  clip-path: polygon(0 0, 100% 9%, 100% 100%, 0 91%);
  .InformationsCards {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const InformationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #227475;
  text-shadow: 1px 2px 3px rgba(150, 150, 150, 1);
  font-weight: 900;
  width: 200px;
  height: 300px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  transition: all 0.35s linear;
  :hover {
    transform: scale(1.05);
  }
  h3 {
    margin-bottom: -8px;
  }
  img {
    width: 220px;
  }
`;

export const Institutions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -110px;
  padding: 120px 0 50px;
  background: linear-gradient(
    117.06deg,
    #59a5a5 26.74%,
    #3f8e8e 72.27%,
    #227475 98.23%
  );
  color: black;
  clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 100%);

  .InstitutionsCards {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  button {
    margin: 32px 0 12px;
    padding: 8px 12px;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: #fcbe14;
    color: #fff;
    transition: all 0.4s linear;
    box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    :hover {
      background-color: #e6ae14;
    }
  }
`;

export const InstitutionsCard = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 100%;
  box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  transition: all 0.35s linear;
  h3 {
    margin-bottom: -5px;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const Footer = styled.footer`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background-color: #227475;
  color: white;
`;

export const Buttons = styled.div`
  width: 80px;
  border: none;
  color: #e6ae14;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Container = styled.div`
  background: linear-gradient(
    117.06deg,
    #59a5a5 26.74%,
    #3f8e8e 72.27%,
    #227475 98.23%
  );
`;
