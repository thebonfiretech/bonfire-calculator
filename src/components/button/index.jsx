import React, { useState } from 'react';
import { ButtonContainer} from './styles';

const Button = ({name, secondary, onAction, width='25', height='15'}) => {
    return(
      <ButtonContainer 
				secondary={secondary} 
				width={width}
				height={height}
				onClick={() => onAction()}
			>
        {name}
      </ButtonContainer>
    )
}

export default Button;
