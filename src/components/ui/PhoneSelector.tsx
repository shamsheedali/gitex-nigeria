import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import type { CountryData } from "react-phone-input-2";

interface Props {
  value: string;
  onChange: (
    value: string,
    country: CountryData,
    e: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
}

export const PhoneSelector = ({ value, onChange }: Props) => {
  return (
    <PhoneInput
      country="ng"
      value={value}
      onChange={onChange}
      inputProps={{ readOnly: true }}
      disableCountryCode
      disableSearchIcon
      enableSearch={false}
      disableDropdown={false}
      inputClass="!h-[42px] !w-[90px] !text-base !border-none !bg-white !pl-14 !text-black"
      containerClass="!w-fit !h-[42px] !rounded-md !border !border-[#D3D3D3] !bg-white"
      buttonClass="!border-none !bg-white !px-2"
      dropdownClass="!z-50"
    />
  );
};
