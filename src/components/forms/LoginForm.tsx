import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { useState } from "react";
import { Button } from "../ui/button/Button";
import { PhoneSelector } from "../ui/PhoneSelector";

const LoginForm = () => {
  const [selectedMainCategories, setSelectedMainCategories] = useState<
    string[]
  >([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );

  const toggleItem = (
    item: string,
    selectedItems: string[],
    setSelectedItems: (val: string[]) => void
  ) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const [phone, setPhone] = useState("234");

  return (
    <div className="p-6">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <Label htmlFor="firstName" required>
            First name
          </Label>
          <Input id="firstName" type="text" required />
        </div>
        <div>
          <Label htmlFor="lastName" required>
            Last name
          </Label>
          <Input id="lastName" type="text" required />
        </div>

        <div>
          <Label htmlFor="country" required>
            Country of residence
          </Label>
          <Select id="country" required>
            <option>Please Select</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="region">Region</Label>
          <Select id="region">
            <option>Please Select</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="email" required>
            Email address
          </Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="confirmEmail">Confirm Email address</Label>
          <Input id="confirmEmail" type="email" />
        </div>

        <div>
          <Label htmlFor="nationality">Nationality</Label>
          <Select id="nationality">
            <option>Select</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="mobile" required>
            Mobile number
          </Label>
          <div className="flex gap-2">
            <PhoneSelector value={phone} onChange={setPhone} />
            <Input id="mobile" type="tel" required className="flex-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="company" required>
            Company name
          </Label>
          <Input id="company" type="text" required />
        </div>
        <div>
          <Label htmlFor="job">Job title</Label>
          <Input id="job" type="text" />
        </div>

        <div>
          <Label htmlFor="companyType" required>
            Company type
          </Label>
          <Select id="companyType" required>
            <option>Please Select</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="industry" required>
            Industry
          </Label>
          <Select id="industry" required>
            <option>Please Select</option>
          </Select>
        </div>
      </form>

      <div className="mt-8 text-sm">
        <div className="flex justify-between items-center">
          <p className="mb-2 font-medium">
            What products & services are you interested in?{" "}
            <span className="text-red-500">*</span>
          </p>

          <div>
            <Button
              title="Select Solutions/Products"
              size="lg"
              className="bg-gradient-red font-extrabold"
            />
          </div>
        </div>

        {/* Main Categories */}
        <div className="mb-4">
          <p className="font-medium mb-1">Main Categories</p>
          <div className="flex flex-wrap gap-2">
            {["Artificial Intelligence & Robotics"].map((category, idx) => {
              const selected = selectedMainCategories.includes(category);
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() =>
                    toggleItem(
                      category,
                      selectedMainCategories,
                      setSelectedMainCategories
                    )
                  }
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                    selected
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub Categories */}
        <div className="mb-6">
          <p className="font-medium mb-1">Sub Categories</p>
          <div className="flex flex-wrap gap-2">
            {["Edge Computing", "Cloud Computing", "Cognitive Computing"].map(
              (sub, idx) => {
                const selected = selectedSubCategories.includes(sub);
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() =>
                      toggleItem(
                        sub,
                        selectedSubCategories,
                        setSelectedSubCategories
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      selected
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {sub}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Global Leaders Forum !NEW (3 Days)",
            "Digital Cities (1 Day)",
            "GITEX Main Stage",
            "Edtech (1 Day)",
            "Artificial Intelligence & Robotics (15)",
            "Energy Transition (1 Day)",
            "Future Health !NEW (2 Days)",
            "Intelligent Connectivity (1 Day)",
            "Cybersecurity (4 Days)",
            "Digital Finance (1 Day)",
            "Future Health !NEW (2 Days)",
            "Future Mobility (1 Day)",
          ].map((label, idx) => (
            <Checkbox key={idx} id={`workshop-${idx}`} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
