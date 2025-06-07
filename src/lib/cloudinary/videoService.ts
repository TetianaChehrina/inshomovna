import { v2 as cloudinary } from "cloudinary";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { writeFile } from "fs/promises";

export async function uploadCloudinaryVideo(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `video-${Date.now()}.mp4`;
  const filePath = path.join("/tmp", fileName);
  await writeFile(filePath, buffer);

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    resource_type: "video",
    folder: "inshomovna",
    public_id: `inshomovna/${uuidv4()}`,
  });

  return uploadResult.secure_url;
}

export async function deleteCloudinaryVideo(publicId: string) {
  return await cloudinary.uploader.destroy(`inshomovna/${publicId}`, {
    resource_type: "video",
  });
}
