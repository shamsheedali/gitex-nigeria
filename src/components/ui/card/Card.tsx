type CardProps = {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
};

const Card = ({ children, className = "", bgImage }: CardProps) => {
  return (
    <div
      className={`relative h-[350px] w-[400px] rounded-3xl text-white shadow-md bg-cover bg-center  ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
