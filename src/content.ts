// All site copy lives here so updating the portfolio never means touching layout code.

export const profile = {
  name: "Daxil Vala",
  role: "Backend & AI Software Engineer",
  location: "Boston, MA",
  email: "daxil.work99@gmail.com",
  github: "https://github.com/codexvala-da",
  linkedin: "https://www.linkedin.com/in/daxilvala1712",
  resume: "/Daxil_Vala_Resume.pdf",
  description:
    "Backend and AI engineer in Boston. Early engineer at Elocity and Medlaunch, previously at Apollo.io and Open. M.S. in Computer Science at Northeastern.",
};

export type Job = {
  company: string;
  url: string;
  role: string;
  years: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Medlaunch Concepts",
    url: "https://www.medlaunchconcepts.com/",
    role: "Founding Software Engineer (Co-op)",
    years: "2025",
    period: "May 2025 – Dec 2025",
    location: "Clearwater, FL",
    summary: "Healthcare AI startup.",
    points: [
      "Helped choose the initial stack and built the first version of the product with a small backend team.",
      "Built CLARA, an internal AI agent on AWS Bedrock and LangChain that answers hospital policy questions using RAG over the company's data sources.",
      "Automated hospital policy document generation by aggregating structured data across entities.",
      "Built AWS Lambda pipelines that parse unstructured policy documents into structured data.",
      "Designed a polymorphic MongoDB schema so all certification types share one model.",
      "Set up Docker and AWS ECS deployments with CI/CD, and mentored junior engineers as the team grew.",
    ],
    stack: ["TypeScript", "NestJS", "MongoDB", "AWS Bedrock", "LangChain", "Lambda", "ECS"],
  },
  {
    company: "Apollo.io",
    url: "https://www.apollo.io/",
    role: "Senior Backend Engineer",
    years: "2023 – 24",
    period: "May 2023 – Aug 2024",
    location: "Bengaluru, India",
    summary: "Deals Intelligence team.",
    points: [
      "Worked on core features of the Deals product.",
      "Led the integration of Deals with Apollo Plays, working across several engineering teams.",
      "Ran large data migrations on the production MongoDB cluster using horizontally scaled Sidekiq jobs and rolling batch updates.",
      "Built Elasticsearch-backed fuzzy search and filtering to speed up deal creation.",
      "Built the data aggregation layer behind the deal analytics dashboard.",
    ],
    stack: ["Ruby on Rails", "Sidekiq", "MongoDB", "Elasticsearch", "Redis"],
  },
  {
    company: "Open Financial Technologies",
    url: "https://open.money/",
    role: "Software Engineer",
    years: "2022 – 23",
    period: "Sep 2022 – May 2023",
    location: "Bengaluru, India",
    summary: "Fintech platform for SMB banking and lending.",
    points: [
      "Helped break a legacy monolith into NestJS and TypeScript microservices.",
      "Added New Relic observability to the lending services and fixed the database bottlenecks it surfaced.",
      "Built a loan integration service in Go for ICICI Bank, starting as a proof of concept for adopting Go on the team.",
      "Normalized an overloaded PostgreSQL JSON column into a relational schema.",
    ],
    stack: ["TypeScript", "NestJS", "Go", "PostgreSQL", "New Relic"],
  },
  {
    company: "Elocity",
    url: "https://elocitytech.com/",
    role: "Founding Software Engineer",
    years: "2021 – 22",
    period: "May 2021 – Sep 2022",
    location: "Bengaluru, India",
    summary: "EV charging management platform.",
    points: [
      "Redesigned the KPI analytics pipeline around precomputed Elasticsearch aggregations instead of in-memory computation.",
      "Built a Python/Flask service that schedules parallel EV charging within grid limits, with real-time charger updates over WebSockets.",
      "Built Kafka consumers for charger–CPMS communication, ingesting OCPP telemetry into Elasticsearch for fleet monitoring.",
      "Reworked the backend to support multi-tenancy and white-labeling.",
    ],
    stack: ["Python", "Flask", "Kafka", "Elasticsearch", "WebSockets", "OCPP"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  kind: string;
  context: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "RareSense",
    tagline: "LLM diagnostic aid for rare diseases",
    kind: "Hackathon",
    context: "Harvard Rare Disease Hackathon",
    description:
      "An LLM-based diagnostic aid that extracts phenotypes from clinical notes, ranks candidate rare-disease diagnoses, and suggests related phenotypes to help clinicians reach a confident diagnosis sooner.",
    stack: ["Python", "Flask", "LLMs", "NLP", "Prompt engineering"],
    links: [
      { label: "Code", href: "https://github.com/codexvala-da/Harvard-Rare-Diseases-Hackathon" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=8IrL0S5FiaA" },
    ],
  },
  {
    title: "LLaMA Fine-Tuning at Scale",
    tagline: "Multi-GPU fine-tuning on an HPC cluster",
    kind: "Coursework",
    context: "High Performance Computing · Northeastern",
    description:
      "A distributed pipeline for fine-tuning Llama 3.2 1B Instruct on the ORPO-DPO-Mix-40k dataset across multiple GPUs on Northeastern's HPC cluster. We used Hugging Face Accelerate for data loading and cross-GPU gradient sync, with 4-bit quantization and mixed precision to keep memory low, which roughly halved training time going from one GPU to four.",
    stack: ["Python", "PyTorch", "Hugging Face Accelerate", "BitsAndBytes", "TRL (ORPO)", "LoRA"],
    links: [{ label: "Code", href: "https://github.com/codexvala-da/fine_tunning_multi_gpu" }],
  },
  {
    title: "Lido Subgraph",
    tagline: "Faster staking data on The Graph",
    kind: "Web3",
    context: "The Graph Network",
    description:
      "An optimized subgraph for Lido Finance on The Graph, restructuring entities and GraphQL queries so on-chain staking data is faster to index and simpler to query.",
    stack: ["TypeScript", "GraphQL", "The Graph", "Node.js"],
    links: [
      { label: "Code", href: "https://github.com/codexvala-da/lido_modified_sub" },
      {
        label: "Explorer",
        href: "https://thegraph.com/explorer/subgraphs/fdeuzYk95szmAu7ZsNj6vXYrwNfGSudaVyXz8GkEMVY?view=Query&chain=arbitrum-one",
      },
    ],
  },
  {
    title: "Clickstream Insights",
    tagline: "How shoppers move through a store",
    kind: "Analysis",
    context: "Data analysis",
    description:
      "Clickstream analysis of an online maternity-clothing store, surfacing browsing patterns, product engagement and navigation drop-offs to inform UX improvements.",
    stack: ["Python", "Pandas", "NumPy", "SQL", "Data visualization"],
    links: [
      { label: "Code", href: "https://github.com/codexvala-da/Clickstream-Data-Analysis" },
      { label: "Walkthrough", href: "https://youtu.be/MSYzN7oJnAs" },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript / JavaScript", "Go", "Ruby", "Java", "SQL"] },
  { group: "Backend", items: ["Node.js / NestJS", "Flask", "Ruby on Rails", "REST APIs", "Microservices", "WebSockets"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "Kafka", "RabbitMQ", "Sidekiq"] },
  { group: "Cloud", items: ["AWS (ECS, Lambda, Bedrock, EC2)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
  { group: "AI / ML", items: ["LangChain", "LangGraph", "RAG", "MCP", "Vector databases", "Hugging Face", "PyTorch", "QLoRA"] },
];

export const education = [
  {
    school: "Northeastern University",
    degree: "M.S. in Computer Science",
    detail: "GPA 3.76 / 4.00",
    period: "Sep 2024 – Dec 2026",
    location: "Boston, MA",
  },
  {
    school: "National Institute of Technology Karnataka",
    degree: "B.Tech in Electrical & Electronics Engineering",
    detail: "",
    period: "2017 – 2021",
    location: "Surathkal, India",
  },
];

export const leadership = [
  {
    title: "Tech Senator, Graduate Student Government",
    period: "Jul 2026 – Nov 2026",
    detail: "Maintained the GSG website, built event-registration workflows and automated routine updates for the executive board.",
  },
  {
    title: "P&O Senator, Graduate Student Government",
    period: "Aug 2025 – Jul 2026",
    detail: "Represented graduate students in university governance and helped organize campus events, including the Fall Brunch.",
  },
];

export const certifications = [
  "Graduate Leadership Institute, Northeastern University",
  "Basics of Neo4j: Graph Data Science Library",
];
