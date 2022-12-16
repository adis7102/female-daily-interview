import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { children, onClick, variant, width, height } = props;

  const ButtonWrap = styled.button`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.variant === 'primary' ? '#6F32D2' : 'white'};
    border: ${(props) => props.variant !== 'primary' ? '1px solid #6F32D2' : 'none'};
    border-radius: 8px;
    display: grid;
    place-items: center;
    color: ${(props) => props.variant === 'primary' ? 'white' : '#6F32D2'};
    cursor: pointer;
  `

  return (
    <ButtonWrap variant={variant} width={width} height={height} onClick={() => onClick()}>{children}</ButtonWrap>
  )
}

export default Button;