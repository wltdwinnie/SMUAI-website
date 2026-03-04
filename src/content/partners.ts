export type Partner = {
    name: string;
    website: string;
    tagline?: string;
    logo?: string; // later: /images/partners/xxx.svg
  };
  
  export const partners: Partner[] = [
    { name: "Example Partner", website: "https://example.com", tagline: "Supporter" },
  ];