const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const horseSchema = new Schema({
  name: { type: String, required: true },
  sire: { type: String, required: true },
  mare: String,
  gender: String,
  age: Number,
  date: { type: Date, default: Date.now }
});

const Horse = mongoose.model("Horse", horseSchema);

module.exports = Horse;
