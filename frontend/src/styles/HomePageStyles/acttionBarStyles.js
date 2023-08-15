import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  margin-top: 12vh;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  max-width: 850px;
  .action-bar{
    padding: 25px;
  }
  .title{
    > h2 {
      font-weight: bold;
      font-size:1.4rem;
      
    }
    > p{
      text-align: left;
      font-size: .9rem;
      margin-top: 6px;
    }
  }
  .addNewInvoice{
    background-color:#7c5dfa;
    cursor: pointer;
    padding:3px 0;
    padding-left: 3px;
    padding-right: 10px;
    border-radius: 20px;
    margin-left: 20px;
    font-weight: bold;
    transition: all 200 ease-in;
    &:hover{
      background-color:#9277ff;
    }
    > img{
      background-color: white;
      border-radius: 999px;
      padding: 15px;
      margin-right: 7px;
    }
  }

  .filter{
    cursor: pointer;
    position: relative;
    z-index: 20;
    > h2 {
      margin-right: 7px;
      font-size: .9rem;
      img{
        margin-left: 5px;
      }
    }
  }
  .filterSelect{
  position: absolute;
  /* right: 20px; */
  left: -30px;
  background-color: #1e2139;
  box-shadow:0px 5px 5px #141625;
  top:2rem;
  padding: 15px;
  border-radius: 0.4rem;
  }

  .input{
    text-align: left;
    width: 100px;
    margin-bottom: 10px;
    label{
      margin-left: 15px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  @media (min-width: 1440px) {
    margin-top: 2rem;
  }
`;


export { Section };