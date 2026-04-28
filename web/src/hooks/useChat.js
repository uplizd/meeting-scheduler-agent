import { useState, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { runFlow } from "../lib/uplizd";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: `Hi! I'm your Meeting Scheduler Agent.\n\nAsk me to confirm meetings, send reminders, reschedule, or recover no-shows. The flow on UPLIZD uses Cal.com for booking, Gmail for email, Google Calendar for events, and HubSpot for CRM—connected through Composio.\n\nConfigure OpenAI (gpt-4o-mini), Composio, and Cal.com in the flow editor. Enable Gmail actions (send / draft) and Google Calendar (create / get / update) on the tool nodes.`,
      ts: Date.now(),
    },
  ]);
  const [status, setStatus] = useState("idle"); // idle | running | error
  const sessionId = useRef(uuidv4());

  const send = useCallback(async (text) => {
    if (!text.trim() || status === "running") return;

    const userMsg = { id: uuidv4(), role: "user", text: text.trim(), ts: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setStatus("running");

    try {
      const { text: reply } = await runFlow(text.trim(), sessionId.current);
      const assistantMsg = {
        id: uuidv4(),
        role: "assistant",
        text: reply || "Flow completed — no text output returned.",
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setStatus("idle");
    } catch (err) {
      const errMsg = {
        id: uuidv4(),
        role: "error",
        text: `Error: ${err.message}`,
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, errMsg]);
      setStatus("error");
    }
  }, [status]);

  const reset = useCallback(() => {
    sessionId.current = uuidv4();
    setMessages([]);
    setStatus("idle");
  }, []);

  return { messages, status, send, reset, sessionId: sessionId.current };
}
