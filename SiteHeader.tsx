import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Mail, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAV_ITEMS } from "./nav-data";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-turquoise font-display text-lg font-bold text-turquoise-foreground">
        O
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight text-navy-foreground">
          ORBER<span className="text-turquoise"> Denetim</span>
        </span>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-navy-foreground/60 sm:block">
          Bağımsız Denetim & YMM A.Ş.
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 surface-navy border-b border-white/10">
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-navy-foreground/70">
          <span>{COMPANY.address}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-turquoise">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-turquoise">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-white/10 hover:text-navy-foreground"
                  activeProps={{ className: "text-turquoise" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-elegant transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      params={child.params as never}
                      className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      activeProps={{ className: "bg-accent text-accent-foreground font-semibold" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-white/10 hover:text-navy-foreground"
                activeProps={{ className: "text-turquoise" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/portal"
            className="ml-3 inline-flex items-center rounded-md bg-turquoise px-5 py-2 text-sm font-bold uppercase tracking-wide text-turquoise-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Portal
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/portal"
            className="inline-flex items-center rounded-md bg-turquoise px-3 py-2 text-xs font-bold uppercase tracking-wide text-turquoise-foreground"
          >
            Portal
          </Link>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-navy-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "surface-navy overflow-y-auto border-t border-white/10 lg:hidden",
          open ? "max-h-[75vh]" : "max-h-0 overflow-hidden border-t-0",
        )}
      >
        <div className="px-4 py-3">
          <Accordion type="single" collapsible className="w-full">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <AccordionItem key={item.label} value={item.label} className="border-white/10">
                  <AccordionTrigger className="py-3 text-sm font-semibold text-navy-foreground hover:no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col border-l border-turquoise/40 pl-3">
                      <Link
                        to={item.to}
                        className="py-2 text-sm font-medium text-turquoise"
                      >
                        Tümüne Bak
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          params={child.params as never}
                          className="py-2 text-sm text-navy-foreground/75"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.label} className="border-b border-white/10">
                  <Link
                    to={item.to}
                    className="block py-3 text-sm font-semibold text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </Accordion>
          <Link
            to="/portal"
            className="mt-4 mb-2 flex items-center justify-center rounded-md bg-turquoise px-4 py-3 text-sm font-bold uppercase tracking-wide text-turquoise-foreground"
          >
            Portal Girişi
          </Link>
        </div>
      </div>
    </header>
  );
}
