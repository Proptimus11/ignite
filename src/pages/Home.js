import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
      padding: 5rem 0rem;
    }
  `;
  const Games = styled(motion.div)`
    display: grid;
    min-height: 80vh;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  `;

  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

export default Home;
