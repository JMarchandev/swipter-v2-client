import TextInput from "../../common/fields/textInput";

type Props = {
  type: "email" | "password" | "text";
};

export const SettingsTextField = ({ type }: Props) => {
  return (
    <TextInput
      type={type}
      className="bg-white input-bordered input-sm w-full border-black"
    />
  );
};

export default SettingsTextField;
