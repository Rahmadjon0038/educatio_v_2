import styled from 'styled-components'

import nodata from '../assets/nodata.png'

const Defaultvalue = styled.div`
  z-index: 100;
  border: 1px solid #8c2b3c;
  margin-top: 50px;
  height: 300px;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color:${({ color }) => color ? color : "white"};

  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    z-index: -1;
    filter: grayscale(0.6);
  }
`
function DefaultComponent({ text, color }) {
    return (
        <Defaultvalue color={color} ><h1>{text}</h1> <img src={nodata} alt="img" /></Defaultvalue>
    )
}

export default DefaultComponent