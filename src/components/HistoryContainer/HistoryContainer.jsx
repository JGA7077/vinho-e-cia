import React from 'react';
import styled from 'styled-components';
import AsideImage from '../AsideImage/AsideImage';
import HistoryText from '../HistoryText/HistoryText';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    display: block;
  }
`

const HistoryContainer = () => {
  return(
      <>
        <SectionWrapper>
          <AsideImage />
          <HistoryText />
        </SectionWrapper>
      </>
  )
}

export default HistoryContainer