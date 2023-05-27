import mongoose, { SchemaType } from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    sprint: { type: String },
    ticket: { type: String, required: true },
    jira: { type: String },
    jira_state: { type: String },
    enviroment: { type: String },
    type: { type: String },
    app: { type: String },
    dev: { type: String },
    description: { type: String },
    done: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

export const Task = mongoose.model("Task", TaskSchema, "tasks");
