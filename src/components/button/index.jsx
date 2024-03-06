import React, { useState } from 'react';
import { ButtonContainer} from './styles';

const Button = ({name, secondary, onClick, width='15vw', height='40px'}) => {
    return(
      <ButtonContainer 
				secondary={secondary} 
				width={width}
				height={height}
				onClick={onClick}
	  >
        {name}
      </ButtonContainer>
    )
}

export default Button;
