import { CSSProperties } from "react";

type Props = {
  type: "email" | "password" | "text";
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  onChange?: (e: React.ChangeEvent<any>) => void;
  name?: string;
  value?: string;
};
export const TextInput = ({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`${className} input`}
    />
  );
};

export default TextInput;
