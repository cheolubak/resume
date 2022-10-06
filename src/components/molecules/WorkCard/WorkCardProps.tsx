export interface WorkCardProps {
  corpName: string;
  started: string;
  ended?: string;
  description: string;
  skills: { title: string; sub: string[] }[];
  projects: string[];
}
