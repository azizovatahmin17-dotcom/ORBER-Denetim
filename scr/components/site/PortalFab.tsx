import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export function PortalFab() {
  return (
    <Link
      to="/portal"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-turquoise px-5 py-3 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow transition-transform hover:scale-105"
      aria-label="Portal Girişi"
    >
      <LogIn className="h-4 w-4" />
      Portal
    </Link>
  );
}
