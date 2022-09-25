import AuthTextInput from "../../auth/authTextInput";
import { Formik } from "formik";
import { LoginRequest } from "../../../services/types/auth";

type Props = {
  onChangeTypeAuthForm: () => void;
  onSubmit: (req: LoginRequest) => void;
};

const loginInitialValues = {
  email: "test@test.fr",
  password: "azerty",
};

export const LoginForm = ({ onChangeTypeAuthForm, onSubmit }: Props) => {
  return (
    <form>
      <Formik
        initialValues={loginInitialValues}
        onSubmit={(values: LoginRequest) => onSubmit(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <div>
            <AuthTextInput
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                className="shadow appearance-none border w-full rounded mb-3 bg-white text-black opacity-85"
              />
            </div>
            <div>
              <AuthTextInput
                value={values.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                className="shadow appearance-none border w-full rounded mb-3 bg-white text-black opacity-85"
              />
            </div>
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Connexion
            </button>
            <div>
              <button
                type="button"
                onClick={onChangeTypeAuthForm}
                className="text-white underline text-sm float-right mt-1"
              >
                Créer un compte
              </button>
            </div>
          </>
        )}
      </Formik>
    </form>
  );
};

export default LoginForm;
