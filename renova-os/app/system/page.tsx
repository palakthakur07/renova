"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Avatar } from "@/components/ui/Avatar";
import { Skeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";
import { Tooltip } from "@/components/ui/Tooltip";
import { Tag } from "@/components/ui/Tag";
import { TopNav } from "@/components/system/TopNav";
import { Sidebar } from "@/components/system/Sidebar";
import { FolderOpen } from "lucide-react";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--border-hairline)] px-8 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

const swatches: { name: string; varName: string }[] = [
  { name: "Obsidian", varName: "--color-obsidian" },
  { name: "Graphite 800", varName: "--color-graphite-800" },
  { name: "Slate 600", varName: "--color-slate-600" },
  { name: "Fog 200", varName: "--color-fog-200" },
  { name: "Off-white", varName: "--color-off-white" },
  { name: "Teal 500", varName: "--color-teal-500" },
  { name: "Cyan 500", varName: "--color-cyan-500" },
  { name: "Emerald 500", varName: "--color-emerald-500" },
  { name: "Gold 500", varName: "--color-gold-500" },
  { name: "Red 500", varName: "--color-red-500" },
];

export default function SystemPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] pb-32">
      <TopNav />

      <div className="border-b border-[var(--border-hairline)] px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]">
            Phase 0 · Reference
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            Component system
          </h1>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--text-secondary)]">
            Every future screen in ReNova is assembled from these primitives.
            Nothing below is wired to real data — it exists to keep every future
            build visually and behaviorally consistent.
          </p>
        </div>
      </div>

      <Section
        title="Color tokens"
        description="Graphite / obsidian / slate / fog carry the interface. Teal and cyan signal structure and growth. Gold is reserved for achievement — it never appears as decoration."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {swatches.map((s) => (
            <div key={s.name}>
              <div
                className="h-16 w-full rounded-[var(--radius-md)] border border-[var(--border-hairline)]"
                style={{ background: `var(${s.varName})` }}
              />
              <p className="mt-2 text-[12px] text-[var(--text-secondary)]">{s.name}</p>
              <p className="font-mono text-[11px] text-[var(--text-muted)]">{s.varName}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Typography"
        description="Manrope for display, Inter for body, IBM Plex Mono for data and system readouts."
      >
        <div className="space-y-5">
          <p className="font-[family-name:var(--font-display)] text-[42px] font-semibold tracking-[-0.02em]">
            Display / Manrope
          </p>
          <p className="font-[family-name:var(--font-body)] text-[16px] text-[var(--text-secondary)]">
            Body / Inter — used for all long-form reading, descriptions, and UI labels
            that need to stay quiet and legible at length.
          </p>
          <p className="font-mono text-[13px] text-[var(--text-secondary)]">
            font-mono / IBM Plex Mono — 2026-08-06T09:12:04 · ID CR-04471 · 62%
          </p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="critical">Critical</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Badges &amp; tags">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="structure">Structure</Badge>
          <Badge tone="growth">On track</Badge>
          <Badge tone="achievement">Milestone</Badge>
          <Badge tone="critical">Needs review</Badge>
          <Tag>Program · Vocational</Tag>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card>
            <p className="text-[13px] font-medium text-[var(--text-primary)]">Standard card</p>
            <p className="mt-1.5 text-[12px] text-[var(--text-secondary)]">
              Flat surface, hairline border, quiet shadow.
            </p>
          </Card>
          <Card glass>
            <p className="text-[13px] font-medium text-[var(--text-primary)]">Glass card</p>
            <p className="mt-1.5 text-[12px] text-[var(--text-secondary)]">
              Blurred, layered — reserved for panels above ambient light.
            </p>
          </Card>
          <Card interactive>
            <p className="text-[13px] font-medium text-[var(--text-primary)]">Interactive card</p>
            <p className="mt-1.5 text-[12px] text-[var(--text-secondary)]">
              Rises 3px on hover. Nothing more.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Progress, avatars &amp; loading">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="space-y-5">
            <Progress value={72} label="Program completion" tone="primary" />
            <Progress value={94} label="Attendance" tone="growth" />
            <Progress value={40} label="Certification" tone="achievement" />
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Avatar initials="AK" size="sm" />
              <Avatar initials="JD" size="md" ring />
              <Avatar initials="MT" size="lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Inputs &amp; tooltips">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input label="Search records" placeholder="Type to search…" />
          <div className="flex items-center gap-4">
            <Tooltip label="Explains what this control does">
              <Button variant="secondary" size="sm">Hover for tooltip</Button>
            </Tooltip>
          </div>
        </div>
      </Section>

      <Section
        title="Empty state"
        description="Empty screens are treated as an invitation to act, never a dead end."
      >
        <EmptyState
          icon={FolderOpen}
          title="No records yet"
          description="Once a cohort is added, its programs and milestones will appear here."
          actionLabel="Add a record"
        />
      </Section>

      <Section
        title="Navigation patterns"
        description="Reference layout only — labels are placeholders, not real information architecture."
      >
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-hairline)]">
          <div className="flex h-72">
            <Sidebar />
            <div className="flex flex-1 items-center justify-center bg-[var(--color-graphite-900)] text-[13px] text-[var(--text-muted)]">
              Content area
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
