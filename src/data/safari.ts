import { Download, Star, type LucideIcon } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

export interface FaveLink {
  id: string;
  title: string;
  icon: LucideIcon | IconType;
  url: string;
  color: string;
}

export const FAVORITES: FaveLink[] = [
  {
    id: "github",
    title: "GitHub",
    icon: FaGithub,
    url: "github.com/alexdev",
    color: "bg-gray-800",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: FaLinkedin,
    url: "linkedin.com/in/alexdev",
    color: "bg-blue-700",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: Star,
    url: "alexdev.com",
    color: "bg-yellow-500",
  },
  {
    id: "resume",
    title: "Resume",
    icon: Download,
    url: "alexdev.com/resume",
    color: "bg-green-600",
  },
];
