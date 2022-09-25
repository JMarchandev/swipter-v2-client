import * as UserService from "../../services/userService";

import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../../services/types/auth";
import { useContext, useState } from "react";

import { AuthContext } from "../../services/providers/AuthProvider";
import LoginCard from "../../components/auth/loginCard";
import RegisterCard from "../../components/auth/registerCard";
import Toast from "../../components/common/toast";
import { authStyle } from "../../assets/style/auth";

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

export const Auth = () => {
  const [authType, setAuthType] = useState<"LOGIN" | "REGISTER">("LOGIN");
  const auth = useContext(AuthContext);

  const handleSubmitRegister = (req: RegisterRequest) => {
    UserService.register(req).then((res: { data: AuthResponse }) => {
      auth?.onLogin(res.data.token);
    });
  };
  const handleSubmitLogin = (req: LoginRequest) => {
    UserService.login(req).then((res: { data: AuthResponse }) => {
      auth?.onLogin(res.data.token);
    });
  };

  return (
    <>
      {/* @ts-ignore */}
      <style>{authStyle(innerHeight, innerWidth, auth)}</style>
      <Toast />
      <div className="body--auth">
        <div
          style={{ minHeight: `${innerHeight}px` }}
          className="flex items-center w-4/5 m-auto"
        >
          {authType === "LOGIN" && (
            <LoginCard
              onSubmit={handleSubmitLogin}
              onChangeTypeAuthForm={() => setAuthType("REGISTER")}
            />
          )}
          {authType === "REGISTER" && (
            <RegisterCard
              onSubmit={handleSubmitRegister}
              onChangeTypeAuthForm={() => setAuthType("LOGIN")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
