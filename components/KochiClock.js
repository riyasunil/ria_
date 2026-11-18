"use client";
import { useEffect, useState } from "react";

const TZ = "Asia/Kolkata";

function describe(now) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      hour: "numeric",
      hourCycle: "h23",
      weekday: "short",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value])
  );
  const hour = Number(parts.hour);
  const weekend = parts.weekday === "Sat" || parts.weekday === "Sun";

  if (hour >= 23 || hour < 7) return "I’m probably asleep, so expect a reply in the morning.";
  if (hour < 9) return "Probably still on my first chai.";
  if (!weekend && hour < 19) return "I’m probably at work, but I’ll reply soon.";
  return "Good time to say hi.";
}

// Difference between Kochi and the visitor, e.g. "5h 30m ahead of you".
function offsetFromVisitor(now) {
  const kochi = new Date(now.toLocaleString("en-US", { timeZone: TZ }));
  const local = new Date(now.toLocaleString("en-US"));
  const mins = Math.round((kochi - local) / 60000);
  if (mins === 0) return "same time as you";
  const abs = Math.abs(mins);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const amount = [h && `${h}h`, m && `${m}m`].filter(Boolean).join(" ");
  return `${amount} ${mins > 0 ? "ahead of" : "behind"} you`;
}

export default function KochiClock() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    let interval;
    // Tick on the minute boundary, then every minute.
    const first = setTimeout(() => {
      setNow(new Date());
      interval = setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  // Rendered only in the browser (time is the visitor's), with the space
  // reserved so nothing shifts when it appears.
  return (
    <div className="min-h-[3.25rem] text-[15px]" aria-live="off">
      {now && (
        <div className="flex items-start gap-3 fade-in">
          <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-live live-dot" />
          <p>
            It’s{" "}
            <time className="font-mono text-ink" dateTime={now.toISOString()}>
              {now.toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" }).replace(/\s+/g, " ").toLowerCase()}
            </time>{" "}
            in Kochi <span className="text-muted">({offsetFromVisitor(now)})</span>.{" "}
            <span className="text-muted">{describe(now)}</span>
          </p>
        </div>
      )}
    </div>
  );
}
