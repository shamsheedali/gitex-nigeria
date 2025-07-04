type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
};

const CardHeader = ({ children, className = '', bgImage }: CardHeaderProps) => {
  return (
    <div
      className={`py-4 px-8 bg-red-500 font-bold text-white rounded-t-3xl bg-cover bg-center ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default CardHeader;
