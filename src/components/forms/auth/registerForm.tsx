import AuthTextInput from "../../auth/authTextInput";

type Props = {
  onChangeTypeAuthForm: () => void;
};

export const RegisterForm = ({ onChangeTypeAuthForm }: Props) => {
  return (
    <form>
      <div className="flex">
        <AuthTextInput
          type="email"
          placeholder="Prenom"
          className="shadow appearance-none border w-full mr-1 rounded mb-3 bg-white text-black opacity-85"
        />
        <AuthTextInput
          type="email"
          placeholder="Nom"
          className="shadow appearance-none border w-full ml-1 rounded mb-3 bg-white text-black opacity-85"
        />
      </div>
      <div>
        <AuthTextInput
          type="email"
          placeholder="Email"
          className="shadow appearance-none border w-full rounded mb-3 bg-white text-black opacity-85"
        />
      </div>
      <div>
        <AuthTextInput
          type="password"
          placeholder="password"
          className="shadow appearance-none border w-full rounded mb-3 bg-white text-black opacity-85"
        />
      </div>
      <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Envoyer
      </button>
      <div>
        <button onClick={onChangeTypeAuthForm} className="text-white underline text-sm float-right mt-1">J'ai déjà un compte</button>
      </div>
    </form>
  );
};

export default RegisterForm;
