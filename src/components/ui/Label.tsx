interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const Label = ({
  htmlFor,
  children,
  required = false,
  className = "",
}: LabelProps) => (
  <label htmlFor={htmlFor} className={`block font-medium ${className}`}>
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);
