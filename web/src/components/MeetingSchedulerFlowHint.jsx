import React from "react";

/**
 * Mirrors the Langflow canvas: prompt template `{agent} {rules}` plus Composio toolkits.
 */
export default function MeetingSchedulerFlowHint() {
  return (
    <p className="sidebar-hint">
      Model: <strong>gpt-4o-mini</strong>. Instructions = prompt template{" "}
      <code>{"{agent} {rules}"}</code> (text inputs for agent definition + workflow rules). In the
      flow, wire Gmail (send / draft), Google Calendar (create / list / update), Cal.com, and
      HubSpot via Composio.
    </p>
  );
}
