import React from 'react'
import tb2 from './twobox/tb2.png'
import tb1 from './twobox/tb1.png'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex: 1 0 50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function Twobox() {
  return (


    <Container>
      <Box backgroundColor="lightblue">
        <Image src={tb1} alt="Image 1" />
       
      </Box>
      <Box backgroundColor="lightgreen">
        <Image src={tb2} alt="tb1" />
       
      </Box>
    </Container>


  )
}

export default Twobox