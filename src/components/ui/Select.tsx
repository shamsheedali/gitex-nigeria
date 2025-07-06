interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  required?: boolean;
  children?: React.ReactNode;
}

export const Select = ({
  required = false,
  children,
  ...props
}: SelectProps) => (
  <select {...props} required={required} className="w-full border border-[#D3D3D3] rounded p-2">
    {children}
  </select>
);
