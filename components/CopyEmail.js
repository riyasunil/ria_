"use client";
import { useEffect, useState } from "react";

export default function CopyEmail({ email }) {
  // idle | copied | failed
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
      navigator.vibrate?.(12); // Android only; ignored elsewhere
    } catch {
      setState("failed");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        aria-label={state === "copied" ? `Copied ${email}` : `Copy email address ${email}`}
        className="group inline-flex min-h-[44px] max-w-full items-center gap-3 rounded-full border border-line bg-surface py-2 pl-4 pr-3 text-[15px] transition-[border-color,transform] duration-200 hover:border-accent active:scale-[0.97]"
      >
        <span className="min-w-0 truncate font-mono">{email}</span>
        <span
          className={`inline-flex h-7 min-w-7 shrink-0 items-center justify-center gap-1.5 rounded-full px-2 xs:min-w-[4.75rem] xs:px-2.5 text-[13px] font-medium transition-colors duration-300 ${
            state === "copied" ? "bg-live text-bg" : "bg-accent-soft text-accent"
          }`}
        >
          {state === "copied" ? (
            <>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                <path d="M4 10.5l4 4 8-9" className="check-draw" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden xs:inline">Copied</span>
            </>
          ) : (
            <>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              </svg>
              <span className="hidden xs:inline">Copy</span>
            </>
          )}
        </span>
      </button>
      <span role="status" aria-live="polite" className="text-[13px] text-muted">
        {state === "copied" && <span className="sr-only">Email copied to clipboard</span>}
        {state === "failed" && (
          <>
            Couldn’t copy.{" "}
            <a href={`mailto:${email}`} className="text-accent underline underline-offset-4">
              Open in your mail app
            </a>
          </>
        )}
      </span>
    </div>
  );
}
