export type EventItem = {
    title: string;
    date: string;
    poster?: string; // later: /images/events/xxx.png
    registration?: string;
    details?: string;
  };
  
  export const eventsByYear: Record<string, EventItem[]> = {
    "26/27": [
      {
        title: "AI 101 Workshop",
        date: "TBC",
        registration: "",
        details: "",
      },
    ],
    "25/26": [
      { title: "Example Event", date: "TBC", registration: "" },
    ],
  };