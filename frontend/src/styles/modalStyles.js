import { styled } from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  background-color: green;
  top: 50%;
  width: 70%;
  max-width: 500px;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white; 
  background-color: #1e2139;
  padding:30px 20px;
  border-radius: 20px;
  h2{
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.3rem;
  }
  p{
    line-height: 20px;
    font-size: .8rem;
    margin-bottom: 20px;
  }
  .btns{
    text-align: right;
    button{
      cursor: pointer;
      font-weight: bold;
      padding:15px 20px;
      border-radius: 2.5rem;
      border: 0;
    }
  }
  .cancel{
      color: white;
      transition:all 0.3s ease;
      background-color: #141625;
      margin-right: 15px;
      &:hover{
        background-color: white;
        color:black
      }
    }
    .delete{
      color: white;
      transition:all 0.3s ease;
      background-color:  #ec5757;
      &:hover{
        background-color: #ff9797;
        color:white
      }
    }
`;


export { ModalContainer };