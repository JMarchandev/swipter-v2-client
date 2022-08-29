type Props = {
  petImage: string;
  petName: string;
};

export const PetCard = ({ petImage, petName }: Props) => {
  return (
    <div className="w-1/4 mr-2">
      <div className="card shadow-xl">
        <img className="object-cover" src={petImage} alt="alt" />
      </div>
      <p className="text-center">{petName}</p>
    </div>
  );
};

export default PetCard;
