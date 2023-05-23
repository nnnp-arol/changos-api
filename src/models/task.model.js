import mongoose, { SchemaType } from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    ticket: { type: String, required: true },
    type: { type: String },
    description: { type: String },
    done: { type: Boolean, default: false },
    enviroment: { type: String },
    dev: { type: String },
    jira: { type: String },
    sprint: { type: String },
    jira_state: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const Task = mongoose.model("Task", TaskSchema, "tasks");
