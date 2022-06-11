import React from 'react';
import styled from 'styled-components';
import { SectionBox, SectionContainer, SubTitle } from '../UI';
import BackgroundImage from "../../assets/images/tasting.jpg";
import { primaryColor } from '../UI/variaveis';

const Container = styled(SectionContainer)`
  background-color: #f8e5bb;
  height: auto;

  @media (min-width: 1024px) {
    padding: 0;
  }
`

const ImageBox = styled(SectionBox)`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 500px;
`;

const TextBox = styled(SectionBox)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px 0;
  padding: 20px;
  height: auto;
  overflow: visible;

  @media (min-width: 768px) {
    padding: 100px 30px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const BoxTitle = styled(SubTitle)`
  font-family: 'Ribeye', cursive;
  color: ${primaryColor};
  overflow: visible;
`;

const TastingSection = () => {
  return(
    <Container>
      <TextBox>
        <BoxTitle>Participe de Degustações</BoxTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
        </p>
      </TextBox>
      <ImageBox />
      
    </Container>
  )
}
export default TastingSection