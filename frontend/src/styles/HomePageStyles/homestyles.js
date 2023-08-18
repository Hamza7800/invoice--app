import styled from 'styled-components';

const Home = styled.section`
 .transition{
    pointer-events:visible;
    transform: translateX(0);
    /* transform: translateX(-100%); */
    opacity: 100%;
  }
  
  section::-webkit-scrollbar {
    display: none;
    pointer-events: none;
  }

  .no_invoices{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:white;
    display:flex;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    p{
      margin-bottom: 30px;
    }
    a{
      text-decoration: none;
      color: white;
    font-weight: bold;
    background-color: #7c5dfa;
    padding: 15px;
    border-radius: 10px;
    &:hover{
      background-color:  #9277ff;
      cursor: pointer;
    }
    }
  }

`;

export { Home };