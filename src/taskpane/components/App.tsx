import React, { useState } from "react";
import { Stack, TextField, PrimaryButton, MessageBar, MessageBarType } from "@fluentui/react";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTitle("");
    setDescription("");
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <Stack
      tokens={{ childrenGap: 32 }}
      style={{ minHeight: "100vh", padding: "32px", paddingTop: "8px", paddingBottom: "16px" }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ lineHeight: "1.2" }}>AiClues Task Manager</h1>
        <Stack tokens={{ childrenGap: 24 }}>
          <TextField
            label="Task Title"
            required
            value={title}
            onChange={(_, val) => setTitle(val ?? "")}
            styles={{
              fieldGroup: { height: 40, boxShadow: "0 0 0 1px #ced4da" },
            }}
          />

          <TextField
            label="Task Description"
            multiline
            rows={5}
            resizable={false}
            value={description}
            onChange={(_, val) => setDescription(val ?? "")}
            styles={{ fieldGroup: { boxShadow: "0 0 0 1px #ced4da" } }}
          />

          <PrimaryButton type="submit" text="Save Task" styles={{ root: { marginTop: 8 } }} />
        </Stack>
      </form>

      {showConfirmation && (
        <MessageBar
          messageBarType={MessageBarType.success}
          styles={{
            root: {
              position: "fixed",
              bottom: 20,
              left: 20,
              right: 20,
              padding: "8px 0px",
              maxWidth: "calc(100% - 40px)",
            },
            text: { paddingLeft: 0, marginLeft: "-8px" },
          }}
        >
          Task saved successfully!
        </MessageBar>
      )}
    </Stack>
  );
}
