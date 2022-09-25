import RegisterForm from "../forms/auth/registerForm";
import { RegisterRequest } from "../../services/types/auth";

type Props = {
  onChangeTypeAuthForm: () => void;
  onSubmit: (req: RegisterRequest) => void
};

export const RegisterCard = ({ onChangeTypeAuthForm, onSubmit }: Props) => {
  return (
    <div className="w-full">
      <div className="text-white text-2xl mb-2">
        <h3>Inscription</h3>
      </div>
      <RegisterForm onSubmit={onSubmit} onChangeTypeAuthForm={onChangeTypeAuthForm} />
    </div>
  );
};

export default RegisterCard;
