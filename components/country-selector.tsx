import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { COUNTRIES, CountryCode, getFlagAndName } from "@/lib/countries";
import { memo } from "react";

interface CountrySelectorProps {
  country: string;
  setCountry: (country: CountryCode) => void;
}

function _CountrySelector({ country, setCountry }: CountrySelectorProps) {
  return (
    <>
      <Label htmlFor="country">Country</Label>
      <Select required value={country} onValueChange={setCountry}>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select where you live" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(COUNTRIES).map((code) => (
            <SelectItem key={code} value={code}>
              {getFlagAndName(code as CountryCode)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export const CountrySelector = memo(_CountrySelector);
