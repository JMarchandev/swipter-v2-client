import TextInput from "../common/fields/textInput";

type Props = {
  value: string;
  name: string;
  type: "email" | "password" | "text";
  onChange: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  className?: string;
  // style?: CSSProperties
};

export const AuthTextInput = ({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <TextInput
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      className={`${className}`}
      placeholder={placeholder}
    />
  );
};

export default AuthTextInput;
