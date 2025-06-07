import { Schema, model, models } from "mongoose";

const OurMissionSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

export const OurMission =
  models.OurMission || model("OurMission", OurMissionSchema);
