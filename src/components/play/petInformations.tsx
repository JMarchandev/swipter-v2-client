import { Link } from "react-router-dom";

type Props = {
  name: string;
  age: number;
  description: string;
  owner: string;
};

export const PetInformations = ({ name, description, age, owner }: Props) => {
  const petNameRow = `${name}, ${age} ${age > 1 ? "ans" : "an"}`;

  const petDescriptionRow = `${description.slice(0, 29)} ${
    description.length > 30 && "..."
  }`;
  return (
    <div className="text-white mx-3">
      <h3 className="text-2xl">
        {petNameRow} -{" "}
        <span className="underline text-xl">
          <Link to="/auth">{owner}</Link>
        </span>
      </h3>
      <p className="text-sm text-base-500 mb-3">{petDescriptionRow}</p>
    </div>
  );
};

export default PetInformations;
