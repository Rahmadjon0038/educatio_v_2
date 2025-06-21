import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color:#812333;
  z-index: 1000;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 1920px;

`
export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1{
    font-size: 30px;
  }
  .cube{
    border: 3px solid #00FFF0;
    width: 54px;
    border-radius: 7px;
    height: 54px;
    transform: rotate(45deg);
  }
  img{
    width: 100px;
  }
`
export const Navigate = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  .a{
  text-decoration: none;
  font-size: 18px;
  color: white;
  }

  .a:hover{
  color: rgb(226, 226, 226);
  }
  .btn{
    padding: 10px 30px;
    border-radius: 30px;
    border: none;
    background-color: white;
    color: #5B5B5B;
    font-weight: bold;

    margin-left: 20px;
}
.btn:hover{
  cursor: pointer;
  background-color: rgb(184, 83, 100);
  color: #FFFFFF;
}


`