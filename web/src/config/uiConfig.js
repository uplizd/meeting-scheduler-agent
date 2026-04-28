/**
 * Sidebar copy + integrations list (matches the Meeting Scheduler flow on UPLIZD).
 */

export const BRAND = Object.freeze({
  logoLetters: "MS",
  title: "Meeting Scheduler Agent",
  poweredBy: "Powered by UPLIZD",
});

/** @type {{ label: string, color: string }[]} */
export const SIDEBAR_TOOLS = Object.freeze([
  { label: "Cal.com (Composio)", color: "#111111" },
  { label: "Gmail (Composio)", color: "#EA4335" },
  { label: "Google Calendar (Composio)", color: "#4285F4" },
  { label: "HubSpot (Composio)", color: "#FF7A59" },
]);

/** @type {readonly string[]} */
export const QUICK_PROMPTS = Object.freeze([
  "Send a meeting confirmation for tomorrow 2pm PT and add a Google Calendar block (30 min) for the prospect",
  "Check my calendar for conflicts this week and draft a Gmail to propose two alternative slots",
  "A lead no-showed — follow up with a Cal.com rebook link and log next step in HubSpot",
  "Reschedule the 3pm call to next Monday; update the calendar event and email all participants",
]);

export const SIDEBAR_SECTION_TOOLS = "Flow tools";
export const SIDEBAR_SECTION_PROMPTS = "Quick prompts";
