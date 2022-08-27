import AuthTextInput from "../../auth/authTextInput";

type Props = {
  onChangeTypeAuthForm: () => void;
};

export const LoginForm = ({onChangeTypeAuthForm}: Props) => {
  return (
    <form>
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
        Connection
      </button>
      <div>
        <button
          onClick={onChangeTypeAuthForm}
          className="text-white underline text-sm float-right mt-1"
        >
          Créer un compte
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
