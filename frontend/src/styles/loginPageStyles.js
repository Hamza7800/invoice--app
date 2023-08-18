import styled from 'styled-components';

const Section = styled.section`
  background-color: #141625;
  margin: 0 auto;
  margin-top: 10vh;
  padding-top: 25px;
  /* bottom: 0; */
  /* left: 0; */
  /* right: 0; */
  /* z-index: 1000; */
  max-width: 600px;

  color:white;
  box-sizing: border-box;

  .link{
    color:white;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.8rem;
    transition: all 200 ease;
    img{
      margin-right: 10px;
    }
    &:hover{
      color: #888eb0;
    }
  }
  h2{
    font-size: 1.9rem;
    font-weight:bold;
    margin-left: 5%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  h3{
    margin-bottom: 20px;
    font-weight: bold;
    color: #7c5dfa;
    margin-top: 40px;
  }
  .go-back{
    margin-left: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    width: fit-content;
  }

  form{
    padding: 20px;
    width: 90%;
    margin: 0 auto;
  }
  input{
    box-sizing: border-box;
    width: 100%;
    margin: .7rem auto;
    display: block;
    padding: 20px;
    background-color: #1e2139;
    color: white;
    border-radius: 4px;
    outline: 0;
    border: 0;
    font-size: 16px;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.3s ease-in-out;
    &:focus {
    box-shadow: 0 0 0 2px white; 
    }
  }
 
  .pending{
    margin-top: 20px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: #1e2139;
    padding: 20px 30px;
    font-size: 20px;
    text-align: right;
    box-sizing: border-box;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.3s ease-in-out;
   
      color: white;
      transition:all 0.3s ease;
      background-color:#7c5dfa;
      &:hover{
        background-color: #9277ff;
        box-shadow: 0 0 0 2px white; 
        color:white;
      }
    }
  label{
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      color: red;
    }
  }

 
`;

export { Section };