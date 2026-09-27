import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HSN" },
      {
        name: "description",
        content:
          "A personal portfolio with software, hardware, and creative projects, from clinic management systems to retro terminal apps.",
      },
      { property: "og:title", content: "Portfolio of a Maker, Tinkerer, and Developer" },
      {
        property: "og:description",
        content: "A personal portfolio with software, hardware, and creative projects.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { name: "Hackintoshing" },
  { name: "Custom Keyboard Modding" },
  { name: "Arduino & Embedded" },
  { name: "PC Building & Diagnosing" },
  { name: "Disk Recovery" },
  { name: "Cross-Platform Proficiency" },
  { name: "Hardware & Software Troubleshooting" },
  { name: "Software Development" },
  { name: "PHP Programming" },
  { name: "C# Programming" },
  { name: "C++ Programming" },
  { name: "UI/UX Design" },
  { name: "Sound Design" },
  { name: "Technical Writing" },
  { name: "Photography" },
  { name: "Songwriting" },
  { name: "Guitar Playing" },
];

const projects = [
  {
    title: "RabiesResQ",
    tag: "Healthcare · Web App",
    blurb:
      "A clinic app that makes rabies care easier to handle. It tracks patients, flags urgent cases, and keeps vaccinations on schedule through a clean dashboard.",
    role: "QA Tester · Frontend · Tech Writer · Backend (a little)",
    glyph: "⊕",
    link: "https://github.com/Ang3lito/RABIESRESQ",
  },
  {
    title: "Addit '87",
    tag: "Terminal · Diary App",
    blurb:
      "A retro-style terminal diary inspired by The Lake. It looks old school on the outside, with modern security under the hood.",
    role: "Designer · Developer",
    glyph: "▌",
    link: "https://github.com/pancak00/addit-87",
  },
  {
    title: "Weather-Boi",
    tag: "Kotlin · CLI",
    blurb:
      "A clean-looking terminal weather app. It shows real-time forecasts and a 3-day outlook in a colored box, with ASCII weather art that changes with the forecast.",
    role: "Solo build",
    glyph: "≈",
    link: "https://github.com/pancak00/weather_boi",
  },
  {
    title: "Retro Calculator",
    tag: "Web · Toy",
    blurb: "A clean, retro-look calculator that feels like it came straight from a VHS tape.",
    role: "Solo build",
    glyph: "▣",
    link: "https://github.com/pancak00/calc",
  },
  {
    title: "Retro Tape Player",
    tag: "Web · Audio",
    blurb: "A tape deck app that copies the warm, wobbly sound of an old cassette player.",
    role: "Solo build",
    glyph: "⊚",
    link: "https://pancak00.github.io/retrotapeplayer/",
  },
];

const stats: [string, string][] = [
  ["5+", "years tinkering"],
  ["17", "skills"],
  ["∞", "rabbit holes"],
];

const navLinks: [string, string][] = [
  ["about", "#about"],
  ["skills", "#skills"],
  ["work", "#work"],
  ["contact", "#contact"],
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <SectionDivider index="01" label="about" />
        <About />
        <SectionDivider index="02" label="skills" />
        <Skills />
        <SectionDivider index="03" label="work" />
        <Projects />
        <SectionDivider index="04" label="contact" />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur-none transition-shadow ${
        scrolled ? "border-border shadow-soft" : "border-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center bg-brand font-display text-base font-bold text-primary-foreground">
            H
          </span>
          <span className="truncate font-display text-base font-semibold tracking-tight text-foreground">
            portfolio
          </span>
        </a>
        <div className="hidden items-center gap-1 text-sm md:flex">
          <nav className="flex items-center gap-1">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="border-b-2 border-transparent px-4 py-5 text-foreground/80 transition-colors hover:border-brand hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center bg-brand px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
            >
              get in touch
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center bg-brand px-4 text-sm font-medium text-primary-foreground"
          >
            say hi
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative border-b border-border py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl animate-fade-up">
            <span className="block">Maker of</span>
            <span className="block text-brand">curious things.</span>
            <span className="block text-muted-foreground">Hardware,</span>
            <span className="block text-muted-foreground">software, sound.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up delay-100">
            I build apps, mod keyboards, recover dead disks, design interfaces, and write songs on
            the side. I'm equal parts engineer and tinkerer, and I'm happiest when code turns into
            something I can actually hold.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-200">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-hover"
            >
              see the work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              get in touch
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="border border-border bg-card p-2 shadow-soft animate-fade-up delay-100">
            <div className="h-1 w-full bg-brand" />
            <img
              src="/profile.png"
              alt="Portrait of the developer"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          <div className="mt-[-1px] flex items-stretch border border-t-0 border-border bg-card divide-x divide-border">
            {stats.map(([n, l]) => (
              <div key={l} className="flex-1 px-4 py-4">
                <div className="font-display text-2xl font-semibold text-brand">{n}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDivider({ index, label }: { index: string; label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-6">
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <span className="font-mono text-xs text-brand">{index}</span>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            A few words about me.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I like doing a bit of everything, from soldering an Arduino sensor at 1 am to shipping a
            healthcare dashboard the next morning.
          </p>
          <p>
            My favorite projects mix different skills together: a calculator that thinks it lives
            inside a VHS tape, a diary app dressed up like a 1987 terminal, a weather app that draws
            clouds in ASCII. The work I like best always feels like it has its own personality.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Things I do (sometimes all at once).
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <li
              key={s.name}
              className="group flex items-center gap-3 bg-card px-5 py-5 transition-colors hover:bg-brand-soft"
            >
              <span className="text-sm font-medium leading-snug text-foreground">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Selected work.
          </h2>
          <p className="mt-3 text-muted-foreground">
            A mix of finished work and weekend side projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-card p-6 transition-colors hover:bg-brand-soft"
            >
              <div className="h-1 w-8 bg-brand transition-all duration-200 group-hover:w-full" />
              <div className="mt-5 flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand">
                  {p.tag}
                </span>
                <span aria-hidden="true" className="text-lg text-muted-foreground/60">
                  {p.glyph}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{p.role}</span>
                <span
                  aria-hidden="true"
                  className="text-brand transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const email = "stratstrat120@gmail.com";
  return (
    <section id="contact" className="bg-brand py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground/80">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse-dot" />
          let's build something
        </span>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
          Got an idea worth tinkering on?
        </h2>
        <p className="mt-5 max-w-md mx-auto text-primary-foreground/85">
          I'm open to freelance work, team-ups, or just nerdy chats about keyboards and weird
          hardware.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/pancak00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 border border-primary-foreground/40 bg-transparent px-6 py-3 text-sm text-primary-foreground transition-colors hover:border-primary-foreground"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>email me</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · built with a lot of blue and a little stubbornness.
        </p>
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          online
          <span className="inline-block h-2 w-2 rounded-full bg-brand animate-pulse-dot" />
        </span>
      </div>
    </footer>
  );
}
