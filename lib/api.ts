import { ENV } from "./env";
import { Day } from "./types";

interface PostDay {
  title: string;
  description: string | null;
  occupation: string;
  country: string;
  activities: {
    id: string;
    name: string;
    hours: number;
    color: string;
  }[];
}

export const API = {
  days: {
    post: async (data: PostDay) => {
      await fetch(`${ENV.API_URL}/days`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    list: async (): Promise<{ days: Day[] }> => {
      const response = await fetch(`${ENV.API_URL}/days`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    },
  },
};
