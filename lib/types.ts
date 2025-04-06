import { CountryCode } from "./countries";

export interface User {
  id: string;
  occupation: string;
  country: CountryCode;
}

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
  user: User;
  activities: Activity[];
}
