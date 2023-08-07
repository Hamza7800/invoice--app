import { styled } from 'styled-components';

const Section = styled.section`
  padding: 20px;
  width: 85%;
  margin: 2rem auto;
  margin-top: 12vh;

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

  .id{
    font-weight: bold;
    font-size: 0.8rem;
  }
  .container{
    background-color: #1e2139;
    padding: 2rem;
    border-radius: 0.6rem;
    margin-bottom: 20px;
    margin-top: 2rem;
  }
  .date{
    margin-right: 3rem;
    margin-top: 1rem;
  }
  .bill{
    margin-top: 1rem;
  }
  .title{
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .subtitle{
    margin-bottom: 13px;
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
`;

const ItemsContainer = styled.section`
  background-color: #252945;
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  padding-top: 1rem;
  h2 {
    margin-bottom: 20px;
  }
  .item{
    padding: 15px 20px;
  }

  .total{
    margin-top: 2rem;
    background-color:  #0c0e16;
    padding: 2.3rem 1.5rem;
    border-bottom-right-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
    h2{
      font-weight: bold;
    }
    .total-amount{
      font-size: 1.2rem;
    }
  }
`;

export { Section, ItemsContainer };