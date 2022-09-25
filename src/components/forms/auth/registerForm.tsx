import AuthTextInput from "../../auth/authTextInput";
import { Formik } from "formik";
import { RegisterRequest } from "../../../services/types/auth";

type Props = {
  onChangeTypeAuthForm: () => void;
  onSubmit: (req: RegisterRequest) => void;
};

const registerInitialValues = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};

export const RegisterForm = ({ onChangeTypeAuthForm, onSubmit }: Props) => {
  return (
    <form>
      <Formik
        initialValues={registerInitialValues}
        onSubmit={(values: RegisterRequest) => onSubmit(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <div className="flex">
              <AuthTextInput
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Prenom"
                className="shadow appearance-none border w-full mr-1 rounded mb-3 bg-white text-black opacity-85"
              />
              <AuthTextInput
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Nom"
                className="shadow appearance-none border w-full ml-1 rounded mb-3 bg-white text-black opacity-85"
              />
            </div>
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
              Envoyer
            </button>
            <div>
              <button
                type="button"
                onClick={onChangeTypeAuthForm}
                className="text-white underline text-sm float-right mt-1"
              >
                J'ai déjà un compte
              </button>
            </div>
          </>
        )}
      </Formik>
    </form>
  );
};

export default RegisterForm;
