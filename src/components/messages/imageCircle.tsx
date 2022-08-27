type Props = {
  img: string;
  alt: string;
};

export const ImageCircle = ({ img, alt }: Props) => {
  return (
    <img
      className="object-cover rounded-full border w-16 h-16"
      src={img}
      alt={alt}
    />
  );
};

export default ImageCircle;