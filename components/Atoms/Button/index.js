import React from 'react';
import { StyledButton, StyledText } from './styled';

const index = ({ title, onPress, ...props }) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>
        {title}
      </StyledText>
    </StyledButton>
  )
}

export default index
