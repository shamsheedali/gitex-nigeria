interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
}

export const Input = ({ required = false, ...props }: InputProps) => (
  <input {...props} required={required} className="w-full border border-[#D3D3D3] rounded p-2" />
);
