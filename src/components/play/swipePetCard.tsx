import ActionButtons from "./actionButtons";
import PetInformations from "./petInformations";

type Props = {
  name: string;
  age: number;
  description: string;
  petImage: string;
  ownerName: string;
};

export const SwipePetCard = ({
  name,
  description,
  age,
  ownerName,
  petImage,
}: Props) => {
  return (
    <div
      style={{
        minHeight: window.innerHeight - 2 * 75,
        maxHeight: window.innerHeight - 2 * 75,
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.52)), url(${petImage})`,
      }}
      className="m-3 bg-cover bg-center flex flex-col justify-end rounded shadow-xl"
    >
      <PetInformations
        name={name}
        age={age}
        description={description}
        ownerName={ownerName}
      />
      <ActionButtons />
    </div>
  );
};

export default SwipePetCard;
