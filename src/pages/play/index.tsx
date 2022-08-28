import ActionButtons from "../../components/play/actionButtons";
import Layout from "../../layout";
import PetInformations from "../../components/play/petInformations";
import dog1 from "../../assets/images/play/dog1.jpg";

export const Play = () => {
  return (
    <Layout>
      <div
        style={{
          minHeight: window.innerHeight - 2 * 75,
          maxHeight: window.innerHeight - 2 * 75,
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.52)), url(${dog1})`,
        }}
        className="m-3 bg-cover bg-center flex flex-col justify-end rounded shadow-xl"
      >
        <PetInformations
          name="Fox"
          age={3}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A assumenda optio rem, nobis odio consequuntur error commodi hic temporibus quod, laudantium tempora aperiam sunt quae praesentium voluptatum itaque! Modi, error? Earum nisi in, quidem, optio, repellat eveniet voluptates magnam similique fuga id quia rem provident mollitia architecto quibusdam voluptatum. Necessitatibus?"
          owner="Roger"
        />
        <ActionButtons />
      </div>
    </Layout>
  );
};

export default Play;
