import { CountryCode } from "./countries";

export interface Activity {
  id: string;
  name: string;
  hours: number;
  color: string;
}

export interface Day {
  id: string;
  title: string;
  description?: string;
  date: string;
  occupation: string;
  country: CountryCode;
  activities: Activity[];
}
