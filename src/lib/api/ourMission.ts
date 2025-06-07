import { OurMissionContent } from "@/types/ourMission";

// const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const BASE_URL = "http://localhost:3000";

export async function getOurMissionContent(): Promise<OurMissionContent> {
  const response = await fetch(`${BASE_URL}/api/our-mission`);

  if (!response.ok) throw new Error("Failed to fetch OurMission data");
  return response.json();
}

export async function updateMission(id: string, formData: FormData) {
  const response = await fetch(`${BASE_URL}/api/our-mission/${id}`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to update mission");
  return await response.json();
}
