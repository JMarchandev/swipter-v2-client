type Props = {
  className?: string;
  img: string;
  alt: string;
};

export const CircleImage = ({ img, alt, className }: Props) => {
  return (
    <img
      className={`object-cover rounded-full border w-8 h-8 ${className}`}
      src={img}
      alt={alt}
    />
  );
};

export default CircleImage;
