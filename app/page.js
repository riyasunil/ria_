import Image from "next/image";
import { SideNav, TopBar } from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import WorkTrace from "@/components/WorkTrace";
import ContactForm from "@/components/ContactForm";
import Bang from "@/components/Bang";
import ProjectCarousel from "@/components/ProjectCarousel";
import KochiClock from "@/components/KochiClock";
import CopyEmail from "@/components/CopyEmail";
import { currently, projects, recognition, roles, socials } from "@/lib/content";

// Rebuild daily so the "now" end of the work timeline stays current.
export const revalidate = 86400;

function SectionTitle({ children }) {
  return (
    <h2 className="mb-10 font-display text-4xl tracking-tight sm:text-5xl">{children}</h2>
  );
}

function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-1 ${className}`}>
      {socials.map((s) => (
        <li key={s.name}>
          <a
            href={s.url}
            target={s.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[15px] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const withImages = projects.filter((p) => p.image);
  const textOnly = projects.filter((p) => !p.image);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <TopBar />
      <RevealObserver />

      <div className="mx-auto max-w-2xl px-4 sm:px-8 lg:grid lg:max-w-6xl lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-12">
        {/* Desktop sidebar */}
        <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:min-h-fit lg:flex-col lg:justify-between lg:py-20">
          <div>
            <p className="font-display text-6xl leading-none tracking-tight xl:text-7xl">
              Riya Sunil
            </p>
            <p className="mt-5 max-w-xs text-muted">
              Software engineer building generative AI, agentic systems and the backends under them.
            </p>
            <SideNav />
          </div>
          <SocialLinks />
        </aside>

        <main className="pb-24 lg:py-20">
          {/* About */}
          <section id="about" className="pt-12 sm:pt-20 lg:pt-0">
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl">
              hi<Bang /> i’m ria.
            </h1>
            <p className="mt-5 flex items-start gap-2.5 font-mono text-[13px] leading-5 text-muted">
              <span aria-hidden="true" className="live-dot mt-1.5 h-2 w-2 shrink-0 rounded-full bg-live" />
              <span>
                currently: <span className="text-ink">{currently}</span>
              </span>
            </p>
            <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed sm:text-lg">
              <p>
                I’m a software engineer at <strong className="font-semibold">Keyvalue</strong> in
                Kochi, where I build the parts of AI products you don’t see: tracing,
                evaluations and simulations that show what an agent actually did, and the
                multi-agent systems that do the work.
              </p>
              <p className="text-muted">
                It started with watching my dad build RC planes out of foam and a QBasic class in
                6th grade. A CS degree from Model Engineering College (2025) later, I’m still
                tinkering, and still making small websites to keep the indie web alive.
              </p>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="pt-24 sm:pt-32">
            <SectionTitle>Work</SectionTitle>
            <WorkTrace />
          </section>

          {/* Projects */}
          <section id="projects" className="pt-24 sm:pt-32">
            <SectionTitle>Projects</SectionTitle>
            <ProjectCarousel labels={withImages.map((p) => p.title)}>
              {withImages.map((p) => (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-200 ease-out hover:border-accent active:scale-[0.98]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-accent-soft">
                      <div className="settle absolute inset-0">
                        <Image
                          src={p.image}
                          alt={`Screenshot of ${p.title}`}
                          fill
                          sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 84vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          style={{ objectPosition: p.imagePosition ?? "center" }}
                        />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <p className="font-mono text-[13px] text-muted">{p.kind}</p>
                      <h3 className="mt-1 text-lg font-semibold">
                        {p.title}
                        <span
                          aria-hidden="true"
                          className="ml-1 inline-block text-accent transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                    </div>
                  </a>
              ))}
            </ProjectCarousel>
            {textOnly.length > 0 && (
              <ul className="reveal mt-6 divide-y divide-line border-y border-line">
                {textOnly.map((p) => (
                  <li key={p.title}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 py-5 transition-opacity active:opacity-60 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <span className="font-mono text-[13px] text-muted sm:w-36 sm:shrink-0">
                        {p.kind}
                      </span>
                      <span>
                        <span className="font-semibold group-hover:text-accent">{p.title}</span>
                        <span className="text-muted"> — {p.description}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-20 grid gap-12 sm:grid-cols-2">
              <div className="reveal">
                <h3 className="mb-4 font-mono text-[13px] uppercase tracking-wider text-muted">
                  Recognition
                </h3>
                <ul className="space-y-3">
                  {recognition.map((r) => (
                    <li key={r.text} className="flex gap-4">
                      <span className="font-mono text-[13px] leading-7 text-muted">{r.year}</span>
                      <span>{r.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal">
                <h3 className="mb-4 font-mono text-[13px] uppercase tracking-wider text-muted">
                  Teaching &amp; community
                </h3>
                <ul className="space-y-3">
                  {roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="pt-24 sm:pt-32">
            <SectionTitle>Say hi</SectionTitle>
            <p className="mb-6 max-w-[56ch] text-muted">
              Always happy to talk about agents, evals, or something interesting you’re making.
              Drop a note below, or grab my email.
            </p>
            <div className="reveal mb-8 space-y-5">
              <CopyEmail email="riyasunil2025@gmail.com" />
              <KochiClock />
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <ContactForm />
            </div>
            <SocialLinks className="mt-8 lg:hidden" />
          </section>

          <footer className="mt-24 flex items-baseline justify-between border-t border-line pt-6 text-[13px] text-muted">
            <span className="font-script text-3xl text-ink">ria</span>
            <span>© {new Date().getFullYear()} Riya Sunil</span>
          </footer>
        </main>
      </div>
    </>
  );
}
