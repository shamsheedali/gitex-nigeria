type CardProps = {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
};

const Card = ({ children, className = "", bgImage }: CardProps) => {
  return (
    <div
      className={`relative md:h-[370px] w-[420px] h-[450px] rounded-3xl text-white shadow-md bg-cover bg-center  ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
