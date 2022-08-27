import { CSSProperties } from "react";

type Props = {
  type: "email" | "password" | "text"
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
};
export const TextInput = ({ type, placeholder, className }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} input`}
    />
  );
};

export default TextInput;
