import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../UI';

const TextTitle = styled(SubTitle)`
  font-family: "Ribeye", cursive;
  @media (min-width: 1024px) {
    padding-left: 20px;
  }
`

const Paragraph = styled.p`
  text-align: justify;
  padding: 10px 15px;

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const HistoryText = () => {
  return(
    <>
      <TextTitle>Nossa História</TextTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sit amet eros in scelerisque. Nullam vehicula commodo posuere. Praesent viverra placerat quam eget eleifend. Duis et risus felis. Etiam volutpat tellus id nulla dignissim cursus. Pellentesque vulputate, neque ac rhoncus commodo, urna nibh cursus magna, quis porta nibh orci et nibh. Integer a lacus tortor. Suspendisse quis pulvinar metus, non euismod libero. Aenean tempor consequat posuere.
      </Paragraph>
    </>
  )
}

export default HistoryText