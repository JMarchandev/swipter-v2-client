import LoginForm from "../forms/auth/loginForm";

type Props = {
  onChangeTypeAuthForm: () => void;
  onSubmit: () => void;
};

export const LoginCard = ({ onChangeTypeAuthForm, onSubmit }: Props) => {
  return (
    <div className="w-full">
      <div className="text-white text-2xl mb-2">
        <h3>Connectez vous</h3>
      </div>
      <LoginForm onSubmit={onSubmit} onChangeTypeAuthForm={onChangeTypeAuthForm} />
    </div>
  );
};

export default LoginCard;
