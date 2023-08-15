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

`;

export { Home };