import { useState } from "react";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

export default function RegistrationSummary() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalOriginal = 300;
  const discountedTotal = (totalOriginal * (1 - discount)).toFixed(2);

  const handleApply = () => {
    setAppliedCode("GITEX15");
    setDiscount(0.15);
  };

  const handleRemove = () => {
    setPromoCode("");
    setAppliedCode("");
    setDiscount(0);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {/* Header */}
      <div className="bg-gradient-green text-white py-5 rounded-md px-6 flex justify-between items-center flex-wrap">
        <h1 className="font-bold text-xl">Registration Summary</h1>
      </div>

      {/* Ticket details */}
      <div className="mt-6 space-y-3 text-sm sm:text-base text-black">
        <div className="flex justify-between font-bold flex-col md:flex-row">
          <span>PREMIUM TICKET x 2</span>
          <span>
            {discount > 0 ? (
              <div className="flex flex-col">
                <span className="line-through text-gray-500 mr-1">
                  FREE 0.16
                </span>
                <div className="flex ">
                  <span className="text-green-700 font-semibold">
                    FREE 0.16
                  </span>
                  <span className="ml-2 w-fit text-xs bg-green-600 text-green-100 px-2 py-0.5 rounded">
                    -{discount * 100}%
                  </span>
                  <h1 className="font-medium text-[#898787] uppercase ml-2">
                    Incl. 19% VAT
                  </h1>
                </div>
              </div>
            ) : (
              "EUR 40.19"
            )}
          </span>
        </div>
        <hr className="border-t border-[#EBEBEB]" />
        {!appliedCode && (
          <>
            <div className="flex justify-between font-bold flex-wrap">
              <span>Student Ticket Access On Day 3 Only</span>
              <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
            </div>
            <hr className="border-t border-[#EBEBEB]" />
          </>
        )}
      </div>

      {/* Promo code input */}
      <div className="bg-green-50 border border-dashed border-green-300 rounded-md mt-6 p-4 space-y-4">
        <Label htmlFor="promo" className="text-green-700 font-semibold">
          Have a promo code?
        </Label>

        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            id="promo"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Promo code"
          />
          <Button
            title="Apply"
            onClick={handleApply}
            className="bg-gradient-red font-bold text-white"
          />
        </div>

        {appliedCode && (
          <div className="space-y-2 text-sm text-green-800 flex justify-between md:items-center flex-col md:flex-row">
            <div>
              <p>
                Promo code <strong>{appliedCode}</strong> applied successfully!
                Applied to 2 lowest-priced tickets!
              </p>
              <ul className="text-green-700">
                <li>
                  <strong>Promo code applied:</strong> {appliedCode}
                </li>
                <li>
                  <strong>Promo code applied:</strong> {discount * 100}% (EUR
                  {(totalOriginal * discount).toFixed(2)} incl. VAT)
                </li>
                <li>
                  <strong>Applied to:</strong> 2 lowest-priced tickets
                </li>
              </ul>
            </div>
            <Button
              title="Remove"
              size="sm"
              onClick={handleRemove}
              className="bg-none border-[#C7000C] border-2 font-bold "
              style={{ color: "#C7000C" }}
            />
          </div>
        )}
      </div>

      {/* Total */}
      {appliedCode ? (
        <div className="mt-6 flex flex-col justify-end font-bold text-lg sm:text-xl">
          <div className="flex justify-between font-semibold flex-wrap gap-3 md:gap-0">
            <span>Student Ticket Access On Day 3 Only</span>
            <span>EUR 50 40 SUBJECT TO APPROVAL Incl. 19% </span>
          </div>

          <div className="mt-3 text-sm flex justify-between flex-col md:flex-row">
            <div>
              <span>Total:&nbsp;</span>
              <span className="text-gray-600 line-through">EUR 300</span>
              <span className="text-black ml-1">EUR 150</span>
              <span className="text-sm font-normal text-gray-600 ml-1">
                Incl. 19% VAT
              </span>
            </div>

            <div className="flex gap-2 flex-col md:flex-row">
              <Button
                title="Back"
                size="sm"
                className="font-bold border-2 border-black"
                style={{ color: "black" }}
              />
              <Button
                title="Next"
                size="sm"
                className="font-bold bg-gradient-green"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex justify-end items-center font-bold text-lg sm:text-xl">
          <span>Total:&nbsp;</span>
          <span className="text-black">
            {discount > 0 ? `EUR ${discountedTotal}` : "EUR 300"}
          </span>
          <span className="text-sm font-normal text-gray-600 ml-2">
            Incl. 19% VAT
          </span>
        </div>
      )}
      {/* Consent checkboxes */}
      <div className="mt-6 space-y-5 text-sm text-black">
        <Checkbox id="consent1">
          <>
            I have read and accept the
            <a href="#" className="text-red-600 underline">
              terms and conditions, Privacy Policy
            </a>
            , and consent that attendees under the age of 21 will not be
            admitted, and admission to the exhibition is restricted to trade and
            business professionals only, and students above 16 and below 18 can
            attend only if accompanied by school or faculty member
            <span className="text-red-500">*</span>
          </>
        </Checkbox>

        <Checkbox id="consent2">
          <>
            I hereby consent the use of my data by the organiser, exhibitors and
            sponsors of DWTC & KAOUN International to delivering services and
            for marketing purposes. I am aware that I can object to the sending
            of newsletters at any time
            <span className="text-red-500">*</span>
          </>
        </Checkbox>
      </div>
    </div>
  );
}
