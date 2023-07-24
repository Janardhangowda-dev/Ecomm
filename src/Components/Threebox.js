import React from 'react'
import styled from 'styled-components';
import c1 from './comment - Copy/c1.jpg'
import c2 from './comment - Copy/c2.jpg'
import c3 from './comment - Copy/c3.jpg'




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
function Threebox() {
  return (
    <Container>
      <Box backgroundColor="lightblue">
        <Image src="path/to/your/image1.jpg" alt="Image 1" />
        <p>Box 1 Text</p>
      </Box>
      <Box backgroundColor="lightgreen">
        <Image src="path/to/your/image2.jpg" alt="Image 2" />
        <p>Box 2 Text</p>
      </Box>
      <Box backgroundColor="lightcoral">
        <Image src="path/to/your/image3.jpg" alt="Image 3" />
        <p>Box 3 Text</p>
      </Box>
    </Container>
  )
}

export default Threebox