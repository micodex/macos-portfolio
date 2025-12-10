import { type IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

interface NodeLinks {
  label: string;
  icon: IconType;
  url: string;
}

export const NOTE_LINKS: NodeLinks[] = [
  {
    label: "Github",
    icon: FaGithub,
    url: "https://github.com/micodex",
  },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/milad-gharibi-9ba94835a",
  },
  {
    label: "Telegram",
    icon: FaTelegramPlane,
    url: "https://t.me/heyitsmg",
  },
];
