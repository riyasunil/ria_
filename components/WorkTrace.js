import { AXIS_START, earlier, work } from "@/lib/content";

// Experience drawn like a trace: each job is a span on a shared time axis,
// and the projects inside a job are its child spans.

const toMonths = (ym) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};
const nowYM = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const fmt = (ym) => {
  if (!ym) return "now";
  const [y, m] = ym.split("-").map(Number);
  const mon = new Date(y, m - 1).toLocaleString("en", { month: "short" });
  return `${mon} ’${String(y).slice(2)}`;
};
const duration = (start, end) => {
  const n = toMonths(end ?? nowYM()) - toMonths(start);
  if (n < 12) return `${n} mo`;
  const y = Math.floor(n / 12);
  const r = n % 12;
  return r ? `${y} yr ${r} mo` : `${y} yr`;
};

export default function WorkTrace() {
  const axis0 = toMonths(AXIS_START);
  const axis1 = toMonths(nowYM());
  const span = Math.max(axis1 - axis0, 1);
  const pos = (ym) => ((toMonths(ym ?? nowYM()) - axis0) / span) * 100;

  return (
    <div>
      <div
        aria-hidden="true"
        className="mb-6 flex justify-between font-mono text-[13px] text-muted"
      >
        <span>{fmt(AXIS_START)}</span>
        <span>now</span>
      </div>

      <ol className="space-y-12">
        {work.map((job, i) => {
          const left = pos(job.start);
          const width = Math.max(pos(job.end) - left, 2);
          const live = !job.end;
          return (
            <li key={job.company} className="reveal">
              <div className="relative h-2 rounded-full bg-line" aria-hidden="true">
                <div
                  className="span-bar absolute inset-y-0 rounded-full bg-accent"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
                {live && (
                  <span className="live-dot absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-live ring-4 ring-bg" />
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                <p className="font-mono text-[13px] text-muted">
                  {fmt(job.start)} – {live ? <span className="text-live">now</span> : fmt(job.end)}
                  <span className="mx-2">·</span>
                  {duration(job.start, job.end)}
                </p>
              </div>
              <p className="mt-1 text-[15px] text-muted">
                {job.role} · {job.place}
              </p>

              {job.summary && <p className="mt-4">{job.summary}</p>}

              {job.projects && (
                <div className="tree-wrap relative mt-6">
                  <span
                    aria-hidden="true"
                    className="tree-line absolute inset-y-0 left-0 w-px bg-line"
                  />
                  <ul className="space-y-8 pl-5 sm:pl-6">
                    {job.projects.map((p) => (
                      <li key={p.name} className="reveal trace-child relative">
                        <span
                          aria-hidden="true"
                          className="connector absolute -left-5 top-[0.8em] h-px w-3 bg-accent sm:-left-6 sm:w-4"
                        />
                        <h4 className="font-semibold">
                          {p.name}
                          <span className="font-normal text-muted"> — {p.tag}</span>
                        </h4>
                        <ul className="mt-2 space-y-2 text-[16px] leading-relaxed">
                          {p.points.map((pt) => (
                            <li key={pt} className="point">
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <p className="point mt-3 font-mono text-[13px] leading-relaxed text-muted">
                          {p.stack}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <p className="reveal mt-12 border-t border-line pt-6 text-[15px] text-muted">
        {earlier}
      </p>
    </div>
  );
}
