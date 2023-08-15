import styled from 'styled-components';

const Section = styled.section`
  outline: none;
  background-color: #1e2139;
  width: 85%;
  max-width: 850px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 16px; 
  box-shadow: 0 0 0 0 transparent;
  transition: all 900 ease-in;
  position: relative;
  transition: box-shadow 0.1s ease-in-out;
 .name{
  position: absolute;
  right: 20px;
  top: 20px;
 }
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
    margin-bottom: 0px;
    font-weight: bold;
    text-align: left;
  }
  .price-status{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .img{
    display: none;
  }
  @media (min-width: 850px) {
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    padding: 25px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    .nameId{
    margin-bottom: 0px;
  }

  .due-date{
    margin-bottom: 0px;
  }
  .name{
    position: unset;
    text-align: left;
    margin-left: 20px;
    font-size: 0.8rem;
  }
  .due-date{
    margin-bottom: 0px;
    margin-left: 20px;
  }
  .price{
    margin-bottom: 0px;
    margin-right: 30px;
  }
  .img{
    margin-left: 20px;
    display: block;
  /* width: fit-content; */
  }
  .price-status{
    justify-content: end;
  }
  .id-n-due-date{
    width: 240px;
    /* grid-column-start: 1; */
    /* grid-column-end: span 2; */
    /* width: fit-content; */
    display: flex; 
    align-items: center;
    /* justify-content: space-between; */
  }
  }
`;


const Status = styled.div`
  padding:10px 20px;
  border-radius: 6px;
  width: 68px;
  font-weight: bold;
  font-size: 0.7rem;
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