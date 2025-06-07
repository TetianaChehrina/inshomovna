import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { OurMission } from "@/models/OurMission";
import {
  uploadCloudinaryVideo,
  deleteCloudinaryVideo,
} from "@/lib/cloudinary/videoService";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const formData = await req.formData();
  const id = params.id;

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const description = formData.get("description") as string;
  const file = formData.get("file") as File | null;

  try {
    const mission = await OurMission.findById(id);
    if (!mission)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    let videoUrl = mission.videoUrl;

    if (file && typeof file === "object") {
      const publicId = videoUrl?.split("/").pop()?.split(".")[0];
      if (publicId) {
        await deleteCloudinaryVideo(publicId);
      }

      videoUrl = await uploadCloudinaryVideo(file);
    }

    const updated = await OurMission.findByIdAndUpdate(
      id,
      { title, subtitle, description, videoUrl },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.error("[OUR_MISSION_PATCH_ERROR]", err);
    return NextResponse.json({ error: "Failed to update." }, { status: 500 });
  }
}
