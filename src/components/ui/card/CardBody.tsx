type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBody = ({ children, className = '' }: CardBodyProps) => {
  return (
    <div className={`px-8 py-4 flex flex-col gap-3 ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;
