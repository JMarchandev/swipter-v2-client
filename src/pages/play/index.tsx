import Layout from "../../layout";
import SwipePlayer from "../../components/play/swipePlayer";
import { pets } from "../../services/constants";
import { useState } from "react";

export const Play = () => {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!");
  };

  return (
    <Layout>
      <SwipePlayer pets={pets} onCardLeftScreen={outOfFrame} onSwipe={swiped} />
    </Layout>
  );
};

export default Play;
