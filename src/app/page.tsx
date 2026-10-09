
"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Cloud,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  X,
  ArrowUp,
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    title: "Linux & Linux Administration",
    items: ["Linux", "Ubuntu", "Red Hat Linux", "Users and Groups", "CLI", "File Permissions", "systemd", "Cron Jobs", "Disk Management"],
  },
  {
    title: "CI/CD Pipelines",
    items: ["Jenkinsfile", "GitHub Actions", "pipeline as code", "webhooks", "Deployment Automation"],
  },
  {
    title: "Cloud & Security",
    items: ["AWS", " IAM Roles", "Oracle Cloud", "EC2", "EBS", "S3", "ECS", "CloudWatch","TLS/SSL", "Secrets Management", "Backup and Recovery"],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "DNS", "IP Addressing", "HTTP/HTTPS Configuration", "Subnetting", "Load Balancing", "NAT Gateway", "VPC", "Security Groups", "Firewalls", "SSH", "Routing Tables", "CIDR"],
  },
  {
    title: "Automation & Scripting",
    items: ["Bash", "Python", "Ansible", "YAML", "Kubernetes", "Terraform"],
  },
  {
    title: "Deployment & Web Servers",
    items: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET MVC", "Entity Framework", "SQL", "Database (MySQL/SQL)", "Reverse Proxy", "NGINX", "Supabase"],
  },
  {
    title: "Containerization & Container Orchestration",
    items: ["Docker Images", "Volumes", "Networks", "Container Registry", "Multi-stage Builds", "Docker Compose", "Kubernetes (K8s)", "Pods", "Deployments"]
  },
  {
    title: "Version Control",
    items: ["Git Branching", "Merging", "Pull Requests", "Conflict Resolution", "GitHub"]
  },
];

const projects = [
  {
    number: "01",
    title: "Library Management System",
    description:
      "Developed and deployed a .NET-based Library Management System using Docker and Jenkins CI/CD. Containerized the application, automated build and deployment through Jenkins, integrated GitHub for version control, and deployed the Docker container on an Ubuntu server.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Docker", "Jenkins", "GitHub", "Linux", "CI/CD"],
    icon: Network,
    github: "https://github.com/VaishnaviIngole-Ops/library-management-sys",
  },
  {
    number: "02",
    title: "Expense Tracker",
    description:
      "Developed an Expense Tracker to record income and expenses, categorize transactions, manage budgets, monitor spending, and set budget alerts. Performed testing and bug fixing to improve application reliability and user experience.",
    stack: ["React", "Node.js", "MongoDB"],
    icon: Code2,
    github: "https://github.com/VaishnaviIngole-Ops/expense-tracker",
  },
];

const certifications = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    short: "2024",
    icon: ShieldCheck,
  },
  {
    title: "Red Hat Certified Specialist in OpenShift AI",
    short: "2024",
    icon: Award,
  },
  {
    title: "OCI Foundations Associate",
    short: "2025",
    icon: Cloud,
  },
];

const navigationItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main
      className="min-h-screen text-slate-100"
      style={{
        background:
          "radial-gradient(ellipse at 12% 12%, rgba(79, 70, 229, 0.12) 0%, transparent 38%), radial-gradient(ellipse at 88% 38%, rgba(37, 99, 235, 0.10) 0%, transparent 42%), radial-gradient(ellipse at 45% 85%, rgba(79, 70, 229, 0.08) 0%, transparent 40%), #020617",
      }}
    >
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-slate-950/85 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-black tracking-tight"
          >
            <span className="text-white">Vaishnavi Ingole</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-500/20 md:block"
          >
            Let&apos;s Connect
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block border-b border-white/5 py-3 text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-[#101a35] to-[#172554] pt-20"
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="section-shell relative grid min-h-[calc(100vh-5rem)] w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-12">
          {/* LEFT SIDE — NAME AND DESCRIPTION */}
          <div className="relative z-10 order-2 text-center sm:text-left lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-400/[0.08] px-4 py-2 text-sm text-indigo-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              DevOps Engineer | Cloud & Automation
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Vaishnavi
              <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Ingole
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
              Building Reliable Applications & Infrastructure
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 sm:mx-0 sm:text-lg">
              I work with Linux, Docker, Jenkins, CI/CD pipelines, AWS, GitHub,
              Kubernetes, and cloud technologies to automate deployments and
              build reliable, scalable application environments.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowDown size={17} />
              </a>
              <a href="/resume.pdf" 
                download="resume.pdf" className="btn-primary">
                Download Resume <ArrowDown size={17} />
              </a>
            </div>

            {/* PERSONAL INFORMATION */}
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm text-slate-300 sm:justify-start">
              <span className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <strong className="text-white">Location:</strong>{" "}
                Aurangabad, Maharashtra
              </span>

              <span className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <strong className="text-white">Education:</strong>{" "}
                B.Tech, ECE (2025)
              </span>

              <span className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <strong className="text-white">Company:</strong>{" "}
                Paytimate Technologies
              </span>
            </div>
          </div>

          {/* RIGHT SIDE — PROFILE PHOTO */}
          <div className="relative order-1 mx-auto w-full max-w-md sm:max-w-lg lg:order-2 lg:max-w-none">
            <div className="absolute inset-8 rounded-full bg-indigo-500/20 blur-[80px]" />

            <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-indigo-400/20 via-slate-900/60 to-blue-500/10 p-3 shadow-2xl shadow-indigo-950/40">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src="/profile.jpg"
                  alt="Vaishnavi Ingole - DevOps Engineer"
                  className="block aspect-[4/5] w-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl sm:block lg:-right-5">
              <Cloud className="text-indigo-300" size={26} />
              <p className="mt-2 text-xs font-semibold text-slate-200">
                Cloud & DevOps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-shell section-pad">
        <SectionHeading
          eyebrow="About"
          title="A DevOps mindset with hands-on experience."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m a passionate DevOps Engineer with hands-on experience in
              Linux, Docker, Jenkins, Git, CI/CD, and cloud technologies.
              Skilled in containerization, deployment automation, and
              infrastructure management, with a focus on building reliable,
              scalable, and production-ready solutions. Continuously exploring
              Kubernetes, Terraform, Ansible, and cloud-native technologies.
            </p>

            <p>
              Focused on building scalable, reliable infrastructure while
              continuously advancing my expertise in cloud-native technologies
              and DevOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-shell section-pad">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-indigo-400/[0.045]"
            >
              <h3 className="mb-5 text-lg font-bold text-white">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-shell section-pad">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-indigo-400/[0.045]"
              >
                <div className="flex items-start justify-between">
                  <div className="icon-box">
                    <Icon size={24} />
                  </div>

                  <span className="font-mono text-sm text-slate-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
                >
                  GitHub <ExternalLink size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-shell section-pad">
        <SectionHeading
          eyebrow="Experience"
          title="Where I gained hands-on experience."
        />

        {/* FIRST EXPERIENCE */}
        <div className="relative border-l border-indigo-400/20 pl-7 md:pl-10">
          <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-indigo-400 ring-8 ring-indigo-400/10" />

          <p className="font-mono text-sm tracking-wide text-indigo-300">
            20 Jan 2025 — 20 July 2025
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
            DevOps Intern
          </h3>

          <p className="mt-2 text-lg font-semibold text-indigo-300">
            Vtelebyte · Sanjeev Group Pvt. Ltd.
          </p>

          <ul className="mt-7 max-w-3xl space-y-4 text-[15px] leading-7 text-slate-300">
            <li>
              • Built and maintained <strong>Jenkins CI/CD pipelines</strong>{" "}
              integrated with GitHub to automate application builds, testing,
              Docker image creation, and deployment.
            </li>

            <li>
              • Containerized an <strong>ASP.NET MVC application</strong> using
              Docker, enabling consistent application environments and
              simplified deployment across systems.
            </li>

            <li>
              • Automated the end-to-end deployment workflow from{" "}
              <strong>GitHub → Jenkins → Docker → Linux server</strong>,
              reducing manual deployment effort and improving delivery
              consistency.
            </li>

            <li>
              • Managed and troubleshot{" "}
              <strong>Linux-based deployment environments</strong>, including
              application services, Docker containers, networking, and remote
              server connectivity.
            </li>

            <li>
              • Diagnosed and resolved{" "}
              <strong>
                CI/CD pipeline, Docker, build, and deployment issues
              </strong>{" "}
              to ensure reliable application releases.
            </li>

            <li>
              • Applied{" "}
              <strong>
                Git/GitHub version control and webhook-based automation
              </strong>{" "}
              to trigger continuous integration workflows from source-code
              changes.
            </li>
          </ul>
        </div>

        {/* SECOND EXPERIENCE */}
        <div className="relative mt-16 border-l border-indigo-400/20 pl-7 md:pl-10">
          <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-indigo-400 ring-8 ring-indigo-400/10" />

          <p className="font-mono text-sm tracking-wide text-indigo-300">
            Aug 2026 — Present
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
            DevOps Intern
          </h3>

          <p className="mt-2 text-lg font-semibold text-indigo-300">
            Paytimate Technologies
          </p>

          <ul className="mt-7 max-w-3xl space-y-4 text-[15px] leading-7 text-slate-300">
            <li>
              • Containerized the <strong>Paytimate web application</strong>{" "}
              using Docker, creating a consistent and reproducible environment
              for application deployment.
            </li>

            <li>
              • Analyzed the application architecture, runtime requirements,
              dependencies, and environment configuration to prepare the
              application for containerized deployment.
            </li>

            <li>
              • Configured{" "}
              <strong>Dockerfiles and multi-stage builds</strong> to optimize
              application images and separate build dependencies from the
              production runtime.
            </li>

            <li>
              • Integrated <strong>Supabase</strong> as the backend data
              platform and configured environment variables for reliable
              application connectivity.
            </li>

            <li>
              • Built, tested, and troubleshot Docker containers locally,
              resolving application startup, dependency, configuration, and
              runtime issues.
            </li>

            <li>
              • Prepared the application for <strong>AWS deployment</strong>,
              focusing on reliable container execution, scalability, and
              production-ready practices.
            </li>
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section-shell section-pad">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that support my foundation."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-indigo-400/[0.045]"
              >
                <div className="icon-box">
                  <Icon size={22} />
                </div>

                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-indigo-300">
                  {cert.short}
                </p>

                <h3 className="mt-2 text-lg font-bold leading-7 text-white">
                  {cert.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-shell section-pad">
        <div className="contact-card">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-indigo-300">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Let&apos;s Connect and Build Together
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m open to DevOps and cloud opportunities where I can apply
            my skills in automation, infrastructure, and deployment, while
            continuing to learn, grow, and contribute to impactful projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:vaishnaviingole340@gmail.com"
              className="btn-primary"
            >
              <Mail size={17} /> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-ingole-1783ba260"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              LinkedIn <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/VaishnaviIngole-Ops"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="section-shell flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vaishnavi Ingole
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-indigo-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}