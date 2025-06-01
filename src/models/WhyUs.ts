import { Schema, model, models } from "mongoose";

const BenefitSchema = new Schema({
  id: String,
  title: String,
  description: String,
});

const WhyUsSchema = new Schema(
  {
    heading: { type: String, required: true },
    benefits: [BenefitSchema],
  },
  { timestamps: true }
);

const WhyUs = models.WhyUs || model("WhyUs", WhyUsSchema);

export default WhyUs;
