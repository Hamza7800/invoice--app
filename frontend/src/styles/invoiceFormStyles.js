import styled from 'styled-components';

const Section = styled.section`
  position: fixed;
  width: 100%;
  max-width: 700px;
  overflow-y: scroll;
  background-color: #141625;
  top: 10vh;
  padding-top: 25px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
    font-size: 1.7rem;
    font-weight:bold;
    margin-left: 5%;
    margin-top: 30px;
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
  .dropdown{
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .option{
    cursor: pointer;
    background-color: #1e2139;
    box-sizing: border-box;
    padding: 20px;
  }
  .p{
    position: absolute;
    background-color: #1e2139;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 5px;
  }
  .dropdownItem{
    /* margin-top: 6px; */
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid rgba(255,255,255,0.4);
    &:hover {
      color: #7c5dfa;
      box-shadow: 0 0 0 2px white; 
    }
  }

  .buttons{
    background-color: #1e2139;
    padding: 20px;
    text-align: right;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    box-sizing: border-box;
    button{
      cursor: pointer;
      font-weight: bold;
      padding:15px 20px;
      border-radius: 2.5rem;
      border: 0;
    }
    .discard{
      color: white;
      transition:all 0.3s ease;
      background-color: #141625;;
      &:hover{
        background-color: white;
        color:black
      }
    }
    .draft{
      color: white;
      transition:all 0.3s ease;
      background-color: #373b53;
      &:hover{
        background-color: #252945;
        color:white;
      }
    }
    .pending{
      color: white;
      transition:all 0.3s ease;
      background-color:#7c5dfa;
      &:hover{
        background-color: #9277ff;
        color:white;
      }
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
  .c-p{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 20px;
    /* grid-column-start:span 4 ; */
  }
  transform: translateX(-100%);
  opacity: 0%;
  pointer-events: none;
  transition: all 0.5s ease;

  .add-button{
    width: 100%;
    padding: 17px;
    border: 0;
    margin: 25px auto;
    background-color: #1e2139;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    
    &:hover{
      background-color: #1e21399b;;
    }
  }

  .items-add{
    margin-top: 30px;
  }
  @media (min-width: 768px) {
    .grid-container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      input{
      /* width: unset; */
    }
    .c-p{
    grid-template-columns:repeat(2, 1fr);
    gap: 20px;
    grid-column-start:span 2 ;
  }
  }
}

  @media (min-width: 1440px) {
    top: 0;
    left: 100px;
  }
`;

export { Section };