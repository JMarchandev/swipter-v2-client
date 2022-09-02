import { PetType } from "../../services/types/Pet";
import SwipePetCard from "../../components/play/swipePetCard";
import TinderCard from "react-tinder-card";

type Props = {
  pets: PetType[];
  onSwipe: (dir: any, pet: PetType) => void;
  onCardLeftScreen: (pet: PetType) => void;
};

export const SwipePlayer = ({ pets, onSwipe, onCardLeftScreen }: Props) => {
  return (
    <>
      {pets.map((pet: PetType) => (
        <TinderCard
          className="swipe absolute w-full"
          key={pet.id}
          onSwipe={(dir) => onSwipe(dir, pet)}
          onCardLeftScreen={() => onCardLeftScreen(pet)}
        >
          <SwipePetCard
            name={pet.name}
            age={pet.age}
            description={pet.description}
            ownerName={pet.ownerName}
            petImage={pet.image}
          />
        </TinderCard>
      ))}
    </>
  );
};

export default SwipePlayer;
