const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  location: { type: String, required: true },
  type: { type: String, enum: ["Rent", "Sale"], required: true },
  subType: { type: String, default: "" },
  furnishing: { type: String, enum: ["Unfurnished", "Semi Furnished", "Furnished", "Fully Furnished", ""], default: "" },
  description: { type: String, maxlength: 1000 },
  contact: { type: String, required: true },
  image: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Property", PropertySchema);
