import LoginCard from "../../components/auth/loginCard";
import RegisterCard from "../../components/auth/registerCard";
import auth from "../../assets/images/auth/auth.jpg";
import { authStyle } from "../../assets/style/auth";
import { useState } from "react";

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

export const Auth = () => {
  const [authType, setAuthType] = useState<"LOGIN" | "REGISTER">("REGISTER");

  return (
    <>
      {/* @ts-ignore */}
      <style>{authStyle(innerHeight, innerWidth, auth)}</style>
      <div className="body--auth items-center">
        <div className="flex min-h-screen items-center w-4/5 m-auto">
          {authType === "LOGIN" && (
            <LoginCard onChangeTypeAuthForm={() => setAuthType("REGISTER")} />
          )}
          {authType === "REGISTER" && (
            <RegisterCard onChangeTypeAuthForm={() => setAuthType("LOGIN")} />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
