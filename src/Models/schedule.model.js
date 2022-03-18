const { Schema, model } = require("mongoose");

const scheuleSchema = new Schema(
  {
    text: { type: String, require: true },
    dateTime: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("schedule", scheuleSchema);
