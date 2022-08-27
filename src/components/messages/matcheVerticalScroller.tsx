import ImageCircle from "./imageCircle";
import { MatchType } from "../../services/types/Matche";

type Props = {
  matches: MatchType[];
};

export const MatchVerticalScroller = ({ matches }: Props) => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="flex overflow-x-scroll p-3 py-2 shadow"
    >
      {matches.map((match, i) => (
        <div key={match.pet.name + i} className="mr-3 flex-shrink-0">
          <ImageCircle img={match.pet.img} alt={match.pet.name} />
        </div>
      ))}
    </div>
  );
};

export default MatchVerticalScroller;
