export type TeamMember = {
    name: string;
    position: string;
    photo?: string; // later: /images/team/xxx.jpg
    linkedin?: string;
  };
  
  export const teamByYear: Record<string, TeamMember[]> = {
    "26/27": [
      { name: "Your Name", position: "President", linkedin: "" },
      { name: "Someone Else", position: "Vice President", linkedin: "" },
    ],
    "25/26": [
      { name: "Example", position: "President", linkedin: "" },
    ],
  };