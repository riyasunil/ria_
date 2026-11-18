// All site copy lives here so it can be updated without touching layout code.

// The work timeline is drawn on an axis from AXIS_START to today.
export const AXIS_START = "2024-10";

export const work = [
  {
    company: "Keyvalue Software Systems",
    role: "Associate Software Engineer · AI, backend & full-stack",
    place: "Kochi",
    start: "2025-05",
    end: null, // ongoing
    projects: [
      {
        name: "Netra",
        tag: "AI agent observability & evaluation",
        stack: "Python · TypeScript · Next.js · NestJS · PostgreSQL · ClickHouse",
        points: [
          "Built tracing and evaluation into the Python and JavaScript SDKs, so teams can see inside multi-step agent workflows.",
          "Wrote custom instrumentations for ElevenLabs, Cartesia and the Claude Agent SDK.",
          "Built multi-turn agent simulation, LLM-as-a-judge evaluators and end-to-end audit logs — and made the ClickHouse dashboards fast.",
        ],
      },
      {
        name: "AI ad generation platform",
        tag: "Multi-agent · multimodal RAG",
        stack: "Python · Node.js · Google ADK · GCP",
        points: [
          "Designed a hierarchical multi-agent system on Google ADK that coordinates specialised sub-agents to generate ads.",
          "Built a multimodal RAG pipeline over text, audio and video, grounded in customer content with pgvector and AlloyDB.",
        ],
      },
      {
        name: "Voice front desk for hotels",
        tag: "Voice agents",
        stack: "Vapi · REST APIs",
        points: [
          "Connected Oracle OPERA Cloud and Mews PMS to voice agents that handle reservations and guest requests.",
        ],
      },
    ],
  },
  {
    company: "Siemens Healthineers",
    role: "Machine Learning & AI Intern",
    place: "Bangalore",
    start: "2025-03",
    end: "2025-05",
    summary:
      "Built ETL and generative AI workflows in KNIME, with a UI for real-time multilingual translation on Azure Translator.",
  },
  {
    company: "Pentadots",
    role: "Full Stack Developer",
    place: "Kerala",
    start: "2024-10",
    end: "2025-03",
    summary:
      "Architected and shipped client-facing web apps with Next.js, Vue.js and Node.js alongside cross-functional teams.",
  },
];

export const earlier =
  "Before all that: a software internship at Lektik, where I shipped the beta of a web + browser-extension product, and a project internship at Techgentsia building a sentiment analyser for e-commerce reviews.";

export const projects = [
  {
    title: "Dr. Jai Reddy",
    kind: "Client site",
    description: "A quiet, minimal portfolio for a dental surgeon's work.",
    image: "/jaireddy.png",
    imagePosition: "top",
    url: "https://www.jaireddy.uk",
  },
  {
    title: "HelpNow",
    kind: "Hackathon · 1st at IBeTo",
    description:
      "Dashboard for a temperature and crash detection system that flags accidents and fires as they happen.",
    image: "/helpnow.png",
    url: "https://github.com/jamaljm/HelpNow",
  },
  {
    title: "Drowning detection",
    kind: "Computer vision",
    description:
      "A YOLO-based model that spots possible drowning incidents in video, served through Streamlit.",
    url: "https://github.com/riyasunil",
  },
  {
    title: "Petfolio",
    kind: "Hackathon · Hack for Tomorrow",
    description: "A low-tech way to keep your pets safe, built in a weekend.",
    image: "/petfolio.jpg",
    url: "https://github.com/riyasunil/PETFOLIO",
  },
  {
    title: "The Social Network",
    kind: "Just for fun",
    description: "A silly, invite-only social app for my friends and family.",
    image: "/social-network.png",
    imagePosition: "top",
    url: "https://social-network-vert-iota.vercel.app/",
  },
];

export const recognition = [
  { year: "2024", text: "Grace Hopper Scholar, GHC 24 (AnitaB.org)" },
  { year: "2023", text: "1st place, TechnoHack" },
  { year: "2022", text: "1st place, IBeTo" },
  { year: "2022", text: "1st place, Hack for Tomorrow" },
];

export const roles = [
  "Leading AI upskilling at Keyvalue — learning plans and hands-on sessions on LangChain, LangGraph, Deep Agents and Mastra.",
  "At MEC: app lead for GDSC, webmaster for IEEE SB, tech lead for TEDxMEC.",
];

export const socials = [
  { name: "GitHub", url: "https://github.com/riyasunil" },
  { name: "LinkedIn", url: "https://linkedin.com/in/riyasunil" },
  { name: "Email", url: "mailto:riyasunil2025@gmail.com" },
  { name: "Twitter", url: "https://twitter.com/riamisuu" },
  { name: "Instagram", url: "https://instagram.com/riamisuu" },
];

// One line under the greeting. Update whenever you're working on something new.
export const currently = "making AI agents observable at Keyvalue";
