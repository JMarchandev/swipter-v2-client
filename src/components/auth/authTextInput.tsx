import TextInput from "../common/fields/textInput"

type Props ={
    type: "email" | "password";
    placeholder?: string;
    className?: string;
    // style?: CSSProperties
}

export const AuthTextInput = ({ type, placeholder, className }: Props) => {

    return (
        <TextInput type={type} className={`${className}`} placeholder={placeholder} />
    )
}

export default AuthTextInput