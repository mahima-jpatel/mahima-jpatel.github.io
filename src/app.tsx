import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Code2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// ---------- EDIT THESE SECTIONS ----------
const PROFILE = {
  name: "Mahima Jagadeesh Patel",
  tagline: "Machine Learning Engineer • Builder • Problem Solver",
  location: "Pittsburgh, PA",
  email: "you@example.com",
  resumeUrl: "https://example.com/your_resume.pdf", // <— replace with your resume link
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&h=240&fit=crop&auto=format",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
  },
};

const HIGHLIGHTS = [
  "Built 100× faster analytics pipeline with ClickHouse",
  "Shipped interactive podcast app prototype in 3 weeks",
  "Published benchmark paper submission (ORBIT)"
];

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "Spark", "Kubernetes", "Airflow",
  "SQL", "ClickHouse", "PostgreSQL", "Docker", "AWS", "GCP",
  "React", "TypeScript"
];

const EXPERIENCE = [
  {
    role: "Data Scientist Intern",
    company: "Seagate Research",
    location: "Shakopee, MN",
    start: "May 2025",
    end: "Aug 2025",
    points: [
      "Designed OLAP pipeline (PostgreSQL → ClickHouse) with 100× query speedup.",
      "Trained hierarchical Transformer for ferroelectric sequence classification.",
      "Built dashboards to visualize wafer analytics across product lines.",
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    start: "Jan 2025",
    end: "Present",
    points: [
      "Led recitations on ML fundamentals (SVMs, logistic regression, NLP).",
      "Created auto-graded assignments and debugging toolkits for 200+ students.",
    ],
  },
  {
    role: "Associate Data Scientist",
    company: "Pixis",
    location: "Bangalore, IN",
    start: "2022",
    end: "2023",
    points: [
      "Deployed bandit-based budget optimizer generating 5k+ recs/day.",
      "Partnered with product to ship models impacting revenue at scale.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Decibl – AI Podcast Platform",
    desc: "Transforms written content into interactive, on-demand podcasts with question-aware flows.",
    tags: ["Next.js", "LangGraph", "OpenAI", "Postgres"],
    links: {
      demo: "https://example.com/decibl-demo",
      repo: "https://github.com/yourhandle/decibl",
    },
  },
  {
    title: "ORBIT Benchmark",
    desc: "Open recommendation benchmark with evaluation pipelines and leaderboard UI.",
    tags: ["Python", "RecBole", "HF Spaces"],
    links: {
      demo: "https://example.com/orbit",
      repo: "https://github.com/yourhandle/orbit",
    },
  },
  {
    title: "Ferroelectric Classifier",
    desc: "Hierarchical Transformer that detects wake-up → ideal → fatigue phases from loop data.",
    tags: ["PyTorch", "Transformers", "Matplotlib"],
    links: {
      demo: "https://example.com/ferro-demo",
      repo: "https://github.com/yourhandle/ferro-classifier",
    },
  },
];
// ----------------------------------------

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-10">
        <Sparkles className="w-5 h-5" />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, children }: any) => (
  <a href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

export default function Portfolio() {
  const [query, setQuery] = useState("");

  const filteredProjects = PROJECTS.filter(p =>
    [p.title, p.desc, ...(p.tags || [])].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <nav className="hidden sm:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button asChild size="sm" className="rounded-xl">
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <FileDown className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header id="home" className="max-w-6xl mx-auto px-4 pt-14 sm:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={PROFILE.avatar}
            alt="avatar"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow"
          />
          <div>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight"
            >
              {PROFILE.tagline}
            </motion.h1>
            <p className="mt-4 text-gray-600 max-w-2xl">
              I build reliable ML systems end‑to‑end—data, models, and product. I enjoy shipping polished experiences that make complex tech feel effortless.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="secondary" className="px-3 py-1">
                <MapPin className="w-3.5 h-3.5 mr-1" /> {PROFILE.location}
              </Badge>
              {HIGHLIGHTS.map((h) => (
                <Badge key={h} className="px-3 py-1">{h}</Badge>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild className="rounded-xl">
                <a href="#projects">
                  See Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </a>
              </Button>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg border hover:bg-gray-50">
                <Github className="w-5 h-5" />
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border hover:bg-gray-50">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="About">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <p className="leading-7 text-gray-700">
              I’m a graduate student at CMU’s LTI with a focus on multimodal ML and large‑scale data systems. I’ve shipped production models, improved infra performance, and love turning research ideas into products people actually use.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-6">
          {EXPERIENCE.map((job) => (
            <Card key={job.role + job.company} className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-semibold">{job.role} · {job.company}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.start} – {job.end}</div>
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</div>
                </div>
                <ul className="list-disc ml-4 space-y-2 text-gray-700">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="mb-6 max-w-md">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Filter projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <Card key={p.title} className="group rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-7">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags?.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {p.links?.demo && (
                    <Button asChild size="sm" className="rounded-xl">
                      <a href={p.links.demo} target="_blank" rel="noreferrer">
                        Live <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {p.links?.repo && (
                    <Button asChild size="sm" variant="outline" className="rounded-xl">
                      <a href={p.links.repo} target="_blank" rel="noreferrer">
                        Code <Code2 className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <Badge key={s} className="px-3 py-1">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Education (optional) */}
      <Section id="education" title="Education">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-gray-700">
              <GraduationCap className="w-5 h-5" />
              <div>
                <div className="font-medium">Carnegie Mellon University</div>
                <div className="text-sm text-gray-600">M.S. in Computational Data Science · 2024–2026</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-gray-700">
                I’m open to internships and collaborations. Reach me at
                {" "}
                <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={PROFILE.socials.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild className="rounded-xl">
                  <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                    <FileDown className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}
