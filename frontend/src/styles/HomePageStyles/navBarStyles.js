import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  z-index: 8000;
  width: 100%;
  top: 0;
  height: 10vh;
  background-color: #252945;
  overflow: hidden;
  @media (min-width: 1440px) {
  width: 100px;
  top: 0;
  left: 0;
  height: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (min-width: 1440px) {
    flex-direction: column;
  }
 
`;

const LogoContainer = styled.div`
  background-color: #7c5dfa;
  height:100%;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  > img {
    z-index: 99;
  }
  > div {
    position: absolute;
    background-color: #9277ff;
    height: 50%;
    width: 100%;
    bottom: 0;
    border-top-left-radius: 25px;
    transition: all .5s ease;
   
  }
  &:hover > div{
    height: 90%;
  }

  @media (min-width: 1440px) {
  height:100px;
  width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
  > div {
    margin-left: 20px;
  };
  > div > img{
    /* width: 30px; */
    cursor: pointer;
    border-radius: 999px;
  }
  .avatar{
    width: 30px;
    transition: all .1s ease-in;
    &:hover{
      outline: 3px solid #7c5dfa;
    }
  };
  .divider{
    width: 1px;
    height: 10vh;
    border-left: 1px solid white;
  }
  h2{
    /* position: absolute; */
    font-weight: bold;
    color:white;
    /* background-color: white; */
    padding: 15px;
    bottom: 0px;
    z-index: 9999;
    &:hover{
      color: #7c5dfa;
      cursor: pointer;
    }
  }

  @media (min-width: 1440px) {
  flex-direction: column;
  position: relative;
  width: 100%;
  > div {
    margin-left: 0px;
  };
  > div > img{
    /* width: 30px; */
    cursor: pointer;
    border-radius: 999px;
  }
  .avatar{
    margin-top: 20px;
  };
  .divider{
    position: absolute;
    width: 100%;
    height: 1px;
    top: 45%;
    transform: translateY(-50%);
    border-top: 1px solid white;
  }
  }
`;

export { Nav, Header, ImageContainer, LogoContainer };