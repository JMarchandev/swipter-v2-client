type Props = {
  userImage: string;
  userName: string;
  userAge: number;
  userDescription: string;
  score: {
    friends: number;
    points: number;
  };
};

export const InformationUserCard = ({
  userImage,
  userName,
  userAge,
  userDescription,
  score,
}: Props) => {
  const userNameRow = `${userName}, ${userAge} ${userAge > 1 ? "ans" : "an"}`;

  return (
    <>
      <img
        className="m-auto relative z-20  object-cover rounded-full border w-4/6 h-4/6"
        src={userImage}
        alt={userName + "-img"}
      />
      <div className="card bg-[#FA6650] relative bottom-20 pt-14 shadow-xl">
        <div className="card-body text-white">
          <p className="text-center text-2xl mt-3">{userNameRow}</p>
          <p className="text-center text-sm text-gray">{userDescription}</p>
          <div className="flex justify-around mt-3 p-3">
            <div>
              <p className="text-center">{score.friends}</p>
              <p className="text-center text-sm">amis</p>
            </div>
            <div>
              <p className="text-center">{score.points}</p>
              <p className="text-center text-sm">points</p>
            </div>
            <div>
              <p className="text-center">{score.friends}</p>
              <p className="text-center text-sm">amis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationUserCard;
