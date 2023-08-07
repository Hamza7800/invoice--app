import styled from 'styled-components';

const Section = styled.section`
margin-top: 12vh;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
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
    > h2 {
      margin-right: 7px;
      font-size: .9rem;
    }
  }
`;


export { Section };