import { WhyUsContent } from "@/types/whyUs";

// const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const BASE_URL = "http://localhost:3000";

export const getWhyUsContent = async (): Promise<WhyUsContent | null> => {
  try {
    const response = await fetch(`${BASE_URL}/api/why-us`);
    if (!response.ok) throw new Error("Failed to fetch why-us content");
    return response.json();
  } catch (error) {
    console.error("Error fetching why-us:", error);
    return null;
  }
};
