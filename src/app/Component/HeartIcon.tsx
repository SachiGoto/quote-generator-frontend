import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';


type HeartProps = {
  onClick?: () => void;
  isClicked:boolean

}

export function HeartIcon({onClick, isClicked}:HeartProps) {
    const [hover, setHover] = useState(false);
  return (
    <Icon
      onClick={onClick}
      as={(hover || isClicked) ? FaHeart : FaRegHeart}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      width="1.5rem"
      height="1.5rem"
      style={{ fill: hover ? "red" : "red" }}
    />
  );
}


