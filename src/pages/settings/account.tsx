import Layout from "../../layout";
import SettingsTextField from "../../components/settings/settings-fields/settingsTextField";
import Switch from "../../components/common/fields/switch";

export const Account = () => {
  return (
    <Layout>
      <div className="m-3 text-black">
        <div className="my-3">
          <h3 className="text-lg text-[#FA6650]">Réglages</h3>
          <div className="flex justify-between">
            <p className="">Compte activé</p>
            <Switch />
          </div>
        </div>
        <div className="my-3">
          <h3 className="text-lg text-[#FA6650]">Mes infos</h3>
          <div className="flex">
            <div className="my-2 mr-2">
              <p className="">Prenom:</p>
              <SettingsTextField type="email" />
            </div>
            <div className="my-2">
              <p className="">Nom:</p>
              <SettingsTextField type="email" />
            </div>
          </div>
          <div className="my-2">
            <p className="mb-1">Email:</p>
            <SettingsTextField type="email" />
          </div>
          <div className="my-2">
            <p className="mb-1">Password:</p>
            <SettingsTextField type="email" />
          </div>
          <div className="my-2">
            <p className="mb-1">Adresse:</p>
            <SettingsTextField type="email" />
          </div>
          <div className="flex">
            <div className="my-2 mr-2">
              <p className="">Ville:</p>
              <SettingsTextField type="email" />
            </div>
            <div className="my-2">
              <p className="">Code postal:</p>
              <SettingsTextField type="email" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
