export interface Technology {
  id: string;
  name: string;
  description: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps";
  badgeText: string;
  badgeColor: string;
  experienceLevel: "Beginner-Friendly" | "Intermediate";
  rating: number;
  iconBg: string;
  icon: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    id: "react",
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    badgeText: "Popular",
    badgeColor: "bg-sky-100 text-sky-600",
    experienceLevel: "Beginner-Friendly",
    rating: 4.8,
    iconBg: "bg-sky-50",
    icon: "/icon/React.png",
  },

  {
    id: "vue",
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    badgeText: "Versatile",
    badgeColor: "bg-emerald-100 text-emerald-600",
    experienceLevel: "Beginner-Friendly",
    rating: 4.8,
    iconBg: "bg-emerald-50",
    icon: "/icon/Vue.js.png",
  },

  {
    id: "svelte",
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero runtime framework overhead.",
    category: "Frontend",
    badgeText: "Fast",
    badgeColor: "bg-orange-100 text-orange-600",
    experienceLevel: "Intermediate",
    rating: 4.8,
    iconBg: "bg-orange-50",
    icon: "/icon/Svelte.png",
  },

  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    badgeText: "Standard",
    badgeColor: "bg-teal-100 text-teal-600",
    experienceLevel: "Intermediate",
    rating: 4.9,
    iconBg: "bg-gray-100",
    icon: "/icon/Next.js.png",
  },

  {
    id: "nodejs",
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    badgeText: "Standard",
    badgeColor: "bg-green-100 text-green-600",
    experienceLevel: "Intermediate",
    rating: 4.8,
    iconBg: "bg-green-50",
    icon: "/icon/Node.js.png",
  },

  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    badgeText: "Top SQL",
    badgeColor: "bg-blue-100 text-blue-600",
    experienceLevel: "Intermediate",
    rating: 4.9,
    iconBg: "bg-blue-50",
    icon: "/icon/Postgres.png",
  },

  {
    id: "redis",
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    badgeText: "Cache",
    badgeColor: "bg-red-100 text-red-600",
    experienceLevel: "Intermediate",
    rating: 4.8,
    iconBg: "bg-red-50",
    icon: "/icon/Redis.png",
  },

  {
    id: "javascript",
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    badgeText: "Ubiquitous",
    badgeColor: "bg-amber-100 text-amber-700",
    experienceLevel: "Beginner-Friendly",
    rating: 4.9,
    iconBg: "bg-amber-100",
    icon: "/icon/JavaScript.png",
  },

  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    badgeText: "Essential",
    badgeColor: "bg-blue-100 text-blue-600",
    experienceLevel: "Intermediate",
    rating: 4.9,
    iconBg: "bg-blue-50",
    icon: "/icon/TypeScript.png",
  },
];