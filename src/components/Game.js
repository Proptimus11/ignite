import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = (props) => {
  return (
    <StyledGame>
      <h3>{props.name}</h3>
      <h4>{props.released}</h4>
      <img src={props.image} alt={props.name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  img {
    width: 100%;
  }
`;

export default Game;
