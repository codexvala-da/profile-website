import { ChevronRight } from "lucide-react";
import {
  certifications,
  education,
  experience,
  leadership,
  profile,
  projects,
  skills,
} from "@/content";
import Nav from "./components/Nav";
import ResumeLink from "./components/ResumeLink";
import ContactForm from "./components/ContactForm";

const link =
  "text-fg underline decoration-line decoration-1 underline-offset-[5px] transition-colors hover:decoration-fg";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-20">
      <h2 className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-subtle after:h-px after:flex-1 after:bg-line">
        {title}
      </h2>
      {children}
    </section>
  );
}

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
    </a>
  );
}

// A row that expands in place. Native <details> keeps it accessible and JS-free.
function Row({
  lead,
  title,
  aside,
  open,
  children,
}: {
  lead: string;
  title: string;
  aside: string;
  open?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details open={open} className="group border-b border-line">
      <summary className="-mx-3 my-1 flex cursor-pointer list-none items-baseline gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-surface [&::-webkit-details-marker]:hidden">
        <span className="w-14 shrink-0 font-mono text-xs text-subtle sm:w-[5.5rem]">{lead}</span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-muted">{aside}</span>
        </span>
        <ChevronRight className="size-4 shrink-0 self-center text-subtle transition-transform group-open:rotate-90 group-hover:text-fg" />
      </summary>
      <div className="pb-7 pt-2 sm:pl-[6.5rem]">{children}</div>
    </details>
  );
}

function Stack({ items }: { items: string[] }) {
  return <p className="mt-4 font-mono text-xs leading-relaxed text-subtle">{items.join("  ·  ")}</p>;
}

// Label/value line used for skills, education and the like.
function Line({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
      <dt className="w-[5.5rem] shrink-0 font-mono text-xs leading-[1.6rem] text-subtle">{label}</dt>
      <dd className="leading-relaxed text-muted">{children}</dd>
    </div>
  );
}

function companyLink(name: string) {
  const job = experience.find((j) => j.company.startsWith(name));
  return job ? <External href={job.url}>{name}</External> : name;
}

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Nav />
      <main className="mx-auto max-w-[46rem] px-6 pb-16 pt-14 sm:pt-20">
        <header>
          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-1 text-muted">Backend &amp; AI engineer, {profile.location}</p>
        </header>

        <div className="mt-10 space-y-5 text-[17px] leading-[1.75] text-muted">
          <p>
            Hi, I&apos;m Daxil. I work on backend systems and, more recently, LLM agents and retrieval
            pipelines. I&apos;ve been an early engineer at {companyLink("Elocity")} and{" "}
            {companyLink("Medlaunch")}, and spent time on product teams at {companyLink("Apollo.io")} and{" "}
            {companyLink("Open")}, working on everything from EV charging schedulers to lending services.
          </p>
          <p>
            These days I&apos;m finishing my M.S. in Computer Science at Northeastern. I&apos;m looking for
            a full-time role from January 2027, ideally somewhere I can own a service end to end and keep
            learning from the people around me.
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Links">
          <ResumeLink className={link}>Resume</ResumeLink>
          <External href={profile.github}>GitHub</External>
          <External href={profile.linkedin}>LinkedIn</External>
          <a href={`mailto:${profile.email}`} className={link}>
            Email
          </a>
        </nav>

        <Section id="work" title="Work">
          {experience.map((job, i) => (
            <Row key={job.company} lead={job.years} title={job.company} aside={job.role} open={i === 0}>
              <p className="text-sm text-subtle">
                {job.summary} {job.period}, {job.location}.
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-subtle"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <Stack items={job.stack} />
            </Row>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((project) => (
            <Row key={project.title} lead={project.kind} title={project.title} aside={project.tagline}>
              <p className="text-sm text-subtle">{project.context}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
              <Stack items={project.stack} />
              <p className="mt-4 flex gap-5 text-sm">
                {project.links.map((l) => (
                  <External key={l.href} href={l.href}>
                    {l.label}
                  </External>
                ))}
              </p>
            </Row>
          ))}
        </Section>

        <Section id="skills" title="Tools I use">
          <dl className="space-y-3 text-[15px]">
            {skills.map((s) => (
              <Line key={s.group} label={s.group}>
                {s.items.join(", ")}
              </Line>
            ))}
          </dl>
        </Section>

        <Section id="about" title="A bit more">
          <div className="space-y-5 text-[17px] leading-[1.75] text-muted">
            <p>
              I studied electrical engineering at NIT Karnataka and slowly drifted toward the software side,
              which is where I&apos;ve stayed. Most of what I know I learned by owning things in production,
              alongside teams who were generous with their time and patient with my questions.
            </p>
            <p>
              At Northeastern I&apos;ve also served on the Graduate Student Government, first helping plan
              events and later looking after its website. Outside of all that, I like finding small local
              restaurants (always happy to talk about biryani) and going for evening runs.
            </p>
          </div>

          <dl className="mt-8 space-y-3 text-[15px]">
            {education.map((e) => (
              <Line key={e.school} label={e.period.match(/\d{4}/g)!.at(-1)!}>
                <span className="text-fg">{e.degree}</span>, {e.school}
                {e.detail && <span className="text-subtle"> · {e.detail}</span>}
              </Line>
            ))}
            {leadership.map((l) => (
              <Line key={l.title} label={l.period.match(/\d{4}/)![0]}>
                <span className="text-fg">{l.title.split(", ")[0]}</span>, {l.title.split(", ")[1]}
              </Line>
            ))}
            <Line label="Certificates">{certifications.join("; ")}</Line>
          </dl>
        </Section>

        <Section id="contact" title="Say hello">
          <p className="text-[17px] leading-[1.75] text-muted">
            Email is the easiest way to reach me, at{" "}
            <a href={`mailto:${profile.email}`} className={link}>
              {profile.email}
            </a>
            . Whether it&apos;s about a role, a project, or something you think I&apos;d find interesting,
            I&apos;d be glad to hear from you. You can also leave a note below.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Section>

        <footer className="mt-24 flex justify-between border-t border-line pt-6 text-xs text-subtle">
          <span>© {new Date().getFullYear()} · Built with Next.js</span>
          <a href="#" className="hover:text-fg">
            Back to top
          </a>
        </footer>
      </main>
    </>
  );
}
