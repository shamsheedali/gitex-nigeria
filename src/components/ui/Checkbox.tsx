interface CheckboxProps {
  id: string;
  label?: string; // optional, if not using children
  children?: React.ReactNode; // JSX-based label
}

export const Checkbox = ({ id, label, children }: CheckboxProps) => (
  <div className="flex items-start gap-2">
    <input type="checkbox" id={id} className="mt-1 accent-black" />
    <label htmlFor={id} className="text-sm text-black">
      {children || label}
    </label>
  </div>
);
