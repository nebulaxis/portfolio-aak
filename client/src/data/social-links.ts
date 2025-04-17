import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  BookOpen,
  type LucideIcon 
} from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/aakashdhar",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aakashdhar",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/aakashdhar",
    icon: Code2,
  },
  {
    name: "Blog",
    url: "https://aakashdubey-blog.dev",
    icon: BookOpen,
  },
  {
    name: "Email",
    url: "mailto:aakash@example.com",
    icon: Mail,
  },
];
