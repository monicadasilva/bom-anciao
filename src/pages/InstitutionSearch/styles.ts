import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: black;
  background-color: #f5f8fa;

  svg.Open {
    width: 30px;
    height: 30px;
  }
  .search-container {
    background-color: #59a5a5;
    height: 100vh;
    border-radius: 20px;
    padding-top: 5vh;
    max-width: 87%;
    margin-left: 5vw;
  }
  .search-input {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6vh;
    margin-right: 5vw;

    input {
      background: #f5f8fa;
      border-radius: 10px;
      width: 60%;
      height: 5vh;
      border: none;
      padding: 10px;
      margin-right: 5vw;
      font-size: 0.9rem;
    }
    button {
      background: #f5f8fa;
      border-radius: 15px;
      width: 25%;
      height: 5vh;
      border: none;
      color: #70cccc;
      font-weight: bolder;
      font-size: 0.8rem;
      margin-left: 4vw;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }

  .list-container {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
    display: flex;
    justify-content: center;
    color: #f5f8fa;
    font-weight: 500;

    .list-item-container {
      /* height: 100%; */
      ul {
        padding-left: 2vw;
        border-left: 4px solid #f5f8fa;
      }
      li {
        list-style-type: none;
        margin-bottom: 3vh;
        border-bottom: 2px solid #f5f8fa;
        cursor: pointer;
      }
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;

    .white-container {
      width: 100vw;
      height: 70vh;
      margin-top: 15vh;
      background-color: #ffffff;
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .Open {
      display: none;
    }
    .search-container {
      max-height: 65vh;
      width: 55vw;
    }
    .search-input {
      height: 5vh;
      margin-left: 5vw;

      input {
        font-size: 1rem;
      }
      button {
        width: 43%;
      }
    }

    .list-container {
      height: 45vh;
    }
  }
`;
