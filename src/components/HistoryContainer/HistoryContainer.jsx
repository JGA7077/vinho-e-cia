import React from 'react';
import styled from 'styled-components';
import AsideImage from '../AsideImage/AsideImage';
import HistoryText from '../HistoryText/HistoryText';
import { FlexColumn } from '../UI';

const SectionWrapper = styled.div`
  ${FlexColumn('center', 'center')}

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