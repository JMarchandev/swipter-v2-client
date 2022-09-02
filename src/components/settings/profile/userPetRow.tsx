import PetCard from "./petCard";

type Props = {
  pets: {
    name: string;
    image: string;
  }[];
};

export const UserPetRow = ({ pets }: Props) => {
  return (
    <>
      <h3 className="text-m text-[#FA6650] -mt-16">Mes animaux</h3>
      <div className="my-3 flex">
        {pets.map((pet, i) => (
          <PetCard key={i} petImage={pet.image} petName={pet.name} />
        ))}
      </div>
    </>
  );
};
