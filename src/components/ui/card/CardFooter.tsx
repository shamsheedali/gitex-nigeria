type CardFooterProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`absolute bottom-0 w-full rounded-b-3xl py-5 px-8 text-sm text-gray-500 ${className}`}>
      {children}
    </div>
  );
};

export default CardFooter;
