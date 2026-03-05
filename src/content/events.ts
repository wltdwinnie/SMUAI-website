export type EventItem = {
  title: string;
  dateLabel: string;
  timeLabel: string;
  startAt: string;
  endAt?: string;
  poster?: string;
  lumaLink?: string;
};

export const eventsByYear: Record<string, EventItem[]> = {
  "25/26": [
    {
      title: "SMUAI x Groq: LLM Inference with Groq",
      dateLabel: "Tuesday, 3 Feb 2026",
      timeLabel: "7:00 PM - 9:30 PM",
      startAt: "2026-02-03T19:00:00+08:00",
      endAt: "2026-02-03T21:30:00+08:00",
      poster: "/events/25-26/2026-02-03-groq-llm-inference.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x SKKU Vibecoding Sprint",
      dateLabel: "22-26 Dec 2025",
      timeLabel: "Multi-day sprint",
      startAt: "2025-12-22T09:00:00+08:00",
      endAt: "2025-12-26T23:59:00+08:00",
      poster: "/events/25-26/2025-12-22-skku-vibecoding-sprint.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x ManusAI x January Capital: Code with ManusAI",
      dateLabel: "29 Oct 2025",
      timeLabel: "7:00 PM - 8:30 PM",
      startAt: "2025-10-29T19:00:00+08:00",
      endAt: "2025-10-29T20:30:00+08:00",
      poster: "/events/25-26/2025-10-29-code-with-manusai.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x SMUBA x AWS: AWS Company Tour",
      dateLabel: "8 Oct 2025",
      timeLabel: "2:00 PM - 3:30 PM",
      startAt: "2025-10-08T14:00:00+08:00",
      endAt: "2025-10-08T15:30:00+08:00",
      poster: "/events/25-26/2025-10-08-aws-company-tour.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x AWS: Build with AWS GenAI",
      dateLabel: "7 Oct 2025",
      timeLabel: "6:30 PM - 8:30 PM",
      startAt: "2025-10-07T18:30:00+08:00",
      endAt: "2025-10-07T20:30:00+08:00",
      poster: "/events/25-26/2025-10-07-build-with-aws-genai.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI Networking Night",
      dateLabel: "1 Oct 2025",
      timeLabel: "6:00 PM - 9:00 PM",
      startAt: "2025-10-01T18:00:00+08:00",
      endAt: "2025-10-01T21:00:00+08:00",
      poster: "/events/25-26/2025-10-01-networking-night.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x Lytehouse: Computer Vision Workshop",
      dateLabel: "12 Sept 2025",
      timeLabel: "6:30 PM - 8:30 PM",
      startAt: "2025-09-12T18:30:00+08:00",
      endAt: "2025-09-12T20:30:00+08:00",
      poster: "/events/25-26/2025-09-12-computer-vision-workshop.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x SASH: Inside the AI Blackbox - Mechanistic Interpretability Workshop",
      dateLabel: "11 Sept 2025",
      timeLabel: "6:30 PM - 8:30 PM",
      startAt: "2025-09-11T18:30:00+08:00",
      endAt: "2025-09-11T20:30:00+08:00",
      poster: "/events/25-26/2025-09-11-ai-blackbox-mechanistic-interpretability.jpg",
      lumaLink: "",
    },
    {
      title: "SMUAI x Heicoders Academy: AI100 Course",
      dateLabel: "Aug 2025",
      timeLabel: "Course run",
      startAt: "2025-08-01T09:00:00+08:00",
      endAt: "2025-08-31T23:59:00+08:00",
      poster: "/events/25-26/2025-08-01-ai100-course.jpg",
      lumaLink: "",
    },
  ],
};
