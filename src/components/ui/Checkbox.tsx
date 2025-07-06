interface CheckboxProps {
  label: string;
  id: string;
}

export const Checkbox = ({ label, id }: CheckboxProps) => (
  <label htmlFor={id} className="flex items-center gap-2">
    <input type="checkbox" id={id} className="accent-black" />
    {label}
  </label>
);
