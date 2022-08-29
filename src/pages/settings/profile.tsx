import InformationUserCard from "../../components/settings/profile/informationUserCard";
import Layout from "../../layout";
import { UserPetRow } from "../../components/settings/profile/userPetRow";
import { user } from "../../services/constants";

export const Profile = () => {
  return (
    <Layout>
      <div className="m-3">
        <div className="mt-5">
          <InformationUserCard
            userImage={user.image}
            userName={user.fullName}
            userAge={user.age}
            userDescription={user.description}
            score={user.score}
          />
        </div>
        <UserPetRow pets={user.pets} />
      </div>
    </Layout>
  );
};

export default Profile;
