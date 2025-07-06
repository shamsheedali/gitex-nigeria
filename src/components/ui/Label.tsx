interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

export const Label = ({ htmlFor, children, required = false }: LabelProps) => (
  <label htmlFor={htmlFor} className="block font-medium">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);
