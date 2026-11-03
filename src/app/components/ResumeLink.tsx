"use client";

import { track } from "@vercel/analytics";
import { profile } from "@/content";

export default function ResumeLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("Resume Download")}
    >
      {children}
    </a>
  );
}
