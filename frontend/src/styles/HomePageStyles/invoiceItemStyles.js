import styled from 'styled-components';

const Section = styled.section`
  outline: none;
  background-color: #1e2139;
  width: 85%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 16px; 
  box-shadow: 0 0 0 0 transparent;
  transition: all 900 ease-in;
  transition: box-shadow 0.1s ease-in-out;
 
  &:hover {
    box-shadow: 0 0 0 2px #7c5dfa; 
  }

  .nameId{
    margin-bottom: 40px;
    .id{
      font-weight: bold;
    }
    span, h2{
      font-size: .8rem;
    }
    .hash{
        color: #7c5dfa;
      }
  }

  .due-date{
    margin-bottom: 20px;
    font-size: 0.7rem;
  }
  .price{
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left;
  }
`;


const Status = styled.div`
  padding:10px 20px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: capitalize;
    background-color: ${ props =>
    props.status === 'paid'
      ? 'rgba(51,214,159,.0571)'
      : props.status === 'pending'
        ? 'rgba(255,143,0,.0571)'
        : props.status === 'draft'
          ? 'rgba(223,227,250,.0571)'
          : '' };
          
  color:${ props =>
    props.status === 'paid'
      ? '#33d69f'
      : props.status === 'pending'
        ? '#ff8f00'
        : props.status === 'draft'
          ? '#fff'
          : '' };
  .circle{
  width: 10px;
  height: 10px;
  margin-right: 7px;
  border-radius: 999px;    
  background-color:${ props =>
    props.status === 'paid'
      ? '#33d69f'
      : props.status === 'pending'
        ? '#ff8f00'
        : props.status === 'draft'
          ? '#fff'
          : '' };
  }

`;

export { Section, Status };