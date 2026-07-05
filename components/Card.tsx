import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-7 shadow-panel backdrop-blur-sm sm:p-9 ${className}`}>
      {children}
    </div>
  );
}
