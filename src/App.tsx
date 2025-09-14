import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  MapPin,
  Calendar,
  GraduationCap,
  Code2,
  Sparkles,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// ---------- EDIT THESE SECTIONS ----------
const PROFILE = {
  name: "",
  tagline: "Mahima Jagadeesh Patel",
  location: "Pittsburgh, PA",
  email: "mjagadee@andrew.cmu.edu",
  resumeUrl: "https://drive.google.com/file/d/17OOUl54cnmqA367rViIC6vE6ozC1VKbK/view?usp=sharing",
  avatar: "/ProfilePhoto.png",
  socials: {
    github: "https://github.com/mahima-jpatel",
    linkedin: "https://www.linkedin.com/in/mahima-jagadeesh-patel-8641441a3/",
  },
};

const HIGHLIGHTS = [
  "M.S. in Computational Data Science, Carnegie Mellon University (2024–2025)",
];

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "Spark", "Kubernetes", "Airflow",
  "SQL", "ClickHouse", "PostgreSQL", "Docker", "AWS", "GCP",
  "React", "TypeScript"
];

const EXPERIENCE = [
  {
    role: "Data Science Intern, Seagate Research Group",
    company: "Seagate Technology",
    location: "Minneapolis, MN",
    start: "May 2025",
    end: "Aug 2025",
    points: [
      "Architected a legacy PostgreSQL pipeline by integrating ClickHouse, achieving 100x faster aggregations, 67% less storage on large-scale test data and enabling near real-time analytics for memory characterization.",
      "Built a hierarchical transformer model for ferroelectric defect detection, achieving 97% accuracy on synthetically modeled data and accelerating analysis for ongoing research efforts.",
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
    role: "Data Scientist",
    company: "Pixis",
    location: "Bangalore, IN",
    start: "2022",
    end: "2024",
    points: [
      "Engineered a clustering and recommendation system that segmented Google Display products to personalize ad targeting, boosting advertising efficiency and driving adoption across 30+ brands.",
      "Led the development and deployment of Bid and Budget models with Kubeflow, transitioning 200+ pipelines in a short period and earning the “Performer of the Month” award.",
      "Developed a budget optimization AI Recommendation model, improving Customer Acquisition Cost (CAC) by 33% and Conversion Rate (CVR) by 30% while optimizing ROAS, leading to Substantial revenue growth for Pixis.",
    ],
  },
  {
    role: "Product Analyst Intern",
    company: "Pixis",
    location: "Bangalore, IN",
    start: "2021",
    end: "2022",
    points: [
      "Spearheaded AI-powered solutions crucial for clients, boosting product performance and operational efficiency, and contributing to 70% of the company’s total revenue.",
      "Deciphered and transformed business needs into intuitive, user-centric products, which encompassed close collaboration with stakeholders, in-depth user research, and comprehensive data analysis.",
    ],
  },
  {
    role: "AI Developer Intern",
    company: "Pixis",
    location: "Bangalore, IN",
    start: "2021",
    end: "2022",
    points: [
      "Built AI models with Computer Vision and Image Processing for a blockchain-based food supply chain, achieving 87% test accuracy and delivering real-time automation and insights, enhancing efficiency and reducing costs.",
    ],
  },
];
// ----------------------------------------

// Small helper to merge class names without bringing in an external util
function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Section = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={cx("scroll-mt-24 py-10 sm:py-14", className)}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
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

  // const filteredProjects = PROJECTS.filter(p =>
  //   [p.title, p.desc, ...(p.tags || [])].join(" ").toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <nav className="hidden sm:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            {/* <NavLink href="#projects">Projects</NavLink> */}
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button asChild className="rounded-xl">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileDown className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                <span>Resume</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Hero (tightened) */}
      <header id="home" className="max-w-6xl mx-auto px-4 pt-10 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={PROFILE.avatar}
            alt="avatar"
            className="w-100 h-100 sm:w-120 sm:h-120 md:w-96 md:h-96 rounded-2xl object-cover shadow-lg"
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
              I build reliable ML systems end-to-end, data, models, and product. I enjoy shipping polished experiences that make complex tech feel effortless.
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
              {/* <Button asChild className="rounded-xl">
                <a href="#projects" className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span>See Projects</span>
                  <ArrowRight className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                </a>
              </Button> */}
              <Button asChild variant="outline" className="rounded-xl">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 whitespace-nowrap">
                  <Mail className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                  <span>Contact</span>
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

      {/* About (tighter internal spacing) */}
      <Section id="about" title="About Me" className="py-8 sm:py-10">
        <Card className="rounded-2xl">
          <CardHeader className="pb-1"></CardHeader>
          <CardContent className="pt-0 text-gray-700 space-y-3">
            <p>
              Hi, I’m Mahima Jagadeesh Patel, a graduate student at Carnegie Mellon University’s{" "}
              <a
                href="https://lti.cs.cmu.edu"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline text-[#A6192E]"
              >
                Language Technologies Institute
              </a>
              , specializing in multimodal machine learning, recommender systems, and large-scale data systems.
              My passion lies in bridging the gap between cutting-edge research and real-world applications.
            </p>

            <p>
              Technically, I’ve shipped production-ready ML models and built end-to-end pipelines that handle scale
              and reliability. At{" "}
              <a
                href="https://pixis.ai/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline text-[#A6192E]"
              >
                Pixis
              </a>, I deployed bandit-based optimization models and clustering algorithms that
              powered thousands of daily recommendations, improving CAC by 33% and CVR by 30%. At Seagate Research,
              I built hierarchical Transformer models for ferroelectric loop classification and re-architected data
              pipelines with ClickHouse, achieving a 100× speedup in analytics performance. I’ve also contributed to
              academic projects like{" "}
              <a
                href="https://www.open-reco-bench.ai/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline text-[#A6192E]"
              >
                ORBIT
              </a>{" "}
              (a NeurIPS submission) and led discussions as a Graduate Teaching Assistant for the{" "}
              <a
                href="https://mcds-cmu.github.io/11637/f25/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline text-[#A6192E]"
              >
                Foundations of Computational Data Science
              </a>{" "}
              course at CMU.
            </p>

            <p>
              Beyond work, I’ve grown by embracing challenges, from trekking the Himalayas to diving deep seas in Indonesia. I’m also a long-distance runner and Strava enthusiast,
              always chasing new milestones on and off the track.
            </p>

            <p>
              I’m excited about building systems that make AI transparent, impactful, and accessible through research,
              engineering, and product development.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" className="py-8 sm:py-10">
        <div className="grid gap-4">
          {EXPERIENCE.map((job) => (
            <Card key={job.role + job.company} className="rounded-2xl">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-semibold">{job.role} · {job.company}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.start} – {job.end}</div>
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</div>
                </div>
                <ul className="list-disc ml-4 space-y-1.5 text-gray-700">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects (kept commented, but with tighter defaults if used) */}
      {/*
      <Section id="projects" title="Projects" className="py-8 sm:py-10">
        <div className="mb-4 max-w-md">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Filter projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((p) => (
            <Card key={p.title} className="group rounded-2xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
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
      */}


      {/* Education */}
      <Section id="education" title="Education" className="py-8 sm:py-10">
        {/* CMU */}
        <Card className="rounded-2xl">
          <CardHeader className="pb-1">
            <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
              <GraduationCap className="w-5 h-5" />
              Carnegie Mellon University
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>M.S. in Computational Data Science</span>
              <span>·</span>
              <span>2024–2025</span>
              <span>·</span>
              <span>GPA: 4.08/4.00</span>
            </div>
          </CardContent>
        </Card>

        {/* DSCE (UG) */}
        <Card className="rounded-2xl mt-4">
          <CardHeader className="pb-1">
            <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
              <GraduationCap className="w-5 h-5" />
              Dayananda Sagar College of Engineering
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>B.E. in Computer Science and Engineering</span>
              <span>·</span>
              <span>2018–2022</span>
              <span>·</span>
              <span>GPA: 9.76/10.00</span>
            </div>

            {/* Award */}
            <div className="mt-3 flex items-start gap-2 text-sm">
              <Award className="w-4 h-4 mt-0.5 text-yellow-600" />
              <div className="text-gray-700">
                <span className="font-medium">Dr. D Hemachandra Sagar Distinction Award</span>
                <span className="block text-gray-600">
                  Recipient for securing the third-highest GPA among graduating B.E. students (Jan 2023),
                  associated with Dayananda Sagar College of Engineering, Bangalore.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" className="py-8 sm:py-10">
        <Card className="rounded-2xl">
          <CardContent className="px-6 pt-3 pb-5">
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <Badge key={s} className="px-3 py-1">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" className="py-8 sm:py-10">
        <Card className="rounded-2xl">
          <CardHeader className="pb-1"></CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-gray-700">
                I’m open to collaborations. Reach me at{" "}
                <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
              </div>

              <div className="flex gap-3">
                <Button asChild variant="outline" className="rounded-xl">
                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Github className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                    <span>GitHub</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="rounded-xl">
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Linkedin className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                    <span>LinkedIn</span>
                  </a>
                </Button>

                <Button asChild className="rounded-xl">
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <FileDown className="h-4 w-4 shrink-0 -translate-y-[1px]" />
                    <span>Resume</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}
