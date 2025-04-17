import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Layers, 
  Settings, 
  Rocket,
  FileType,
  CircleDashed,
  MoveHorizontal,
  Terminal,
  Leaf,
  Network,
  Triangle,
  Plug,
  Flame,
  Square,
  Package,
  CircleDot,
  Infinity,
  Cloud,
  CloudOff,
  TestTube,
  Code2,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  CreditCard,
  GitBranch,
  ArrowUpCircle,
  MessageSquare,
  ArrowDownWideNarrow,
  Github,
  type LucideIcon
} from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  title: string;
  icon: string;
  iconColor: "primary" | "secondary";
  skills: Skill[];
  delay?: number;
}

// Map icon names to icon components
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  server: Server,
  database: Database,
  layers: Layers,
  settings: Settings,
  // Replacing "tool" with Settings
  rocket: Rocket,
  fileType: FileType,
  // Replacing "paintBucket" with Code
  circleDashed: CircleDashed,
  moveHorizontal: MoveHorizontal,
  terminal: Terminal,
  leaf: Leaf,
  network: Network,
  // Replacing "triangleRight" with Triangle
  plug: Plug,
  flame: Flame,
  // Replacing "squareCode" with Square
  // Replacing "boxes" with Package
  circleDot: CircleDot,
  infinity: Infinity,
  cloud: Cloud,
  cloudOff: CloudOff,
  testTube: TestTube,
  code2: Code2,
  // Replacing "scanner" with ScanLine
  shieldCheck: ShieldCheck,
  shoppingCart: ShoppingCart,
  creditCard: CreditCard,
  // Replacing "git" with GitBranch
  github: Github,
  arrowUpCircle: ArrowUpCircle,
  messageSquare: MessageSquare,
  arrowDownWideNarrow: ArrowDownWideNarrow,
  // Fallbacks for all the icon strings in our data
  tool: Settings,
  paintBucket: Code,
  triangleRight: Triangle,
  squareCode: Square,
  boxes: Package,
  scanner: ScanLine,
  git: GitBranch,
  nestJs: Code2,
};

const SkillCard = ({ title, icon, iconColor, skills, delay = 0 }: SkillCardProps) => {
  // Get the icon component from our map, or fall back to Code
  const IconComponent = iconMap[icon] || Code;

  return (
    <motion.div
      className="bg-[var(--card-color)] rounded-xl p-6 transition-transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-lg bg-${iconColor} bg-opacity-20 flex items-center justify-center mr-4`}>
          <IconComponent className={`text-${iconColor} w-6 h-6`} />
        </div>
        <h3 className="text-xl font-heading font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => {
          // Get the skill icon component from our map, or fall back to Code
          const SkillIconComponent = iconMap[skill.icon] || Code;

          return (
            <motion.div
              key={skill.name}
              className={`skill-badge flex items-center p-2 rounded-lg bg-[var(--bg-color)] hover:bg-gradient-to-r hover:from-${iconColor} hover:to-${iconColor} hover:bg-opacity-10 group`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 mr-2 flex items-center justify-center">
                <SkillIconComponent className={`w-5 h-5 text-${iconColor} group-hover:animate-pulse`} />
              </div>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillCard;
