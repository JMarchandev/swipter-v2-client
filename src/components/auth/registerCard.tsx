import RegisterForm from "../forms/auth/registerForm";

type Props = {
  onChangeTypeAuthForm: () => void;
};

export const RegisterCard = ({ onChangeTypeAuthForm }: Props) => {
  return (
    <div className="w-full">
      <div className="text-white text-2xl mb-2">
        <h3>Inscription</h3>
      </div>
      <RegisterForm onChangeTypeAuthForm={onChangeTypeAuthForm} />
    </div>
  );
};

export default RegisterCard;
