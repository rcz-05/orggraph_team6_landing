import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Search,
  LayoutGrid,
  Users,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  GitCommit,
  MessageSquare,
  CheckCircle2,
  Eye,
  TrendingUp,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ───────────── NAVBAR ───────────── */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GitCommit className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">OrgGraph</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#audience" className="text-muted-foreground hover:text-foreground transition-colors">
              Who It&apos;s For
            </a>
          </nav>
          <Button size="sm" render={<a href="#cta" />}>
            Join the Waitlist
          </Button>
        </div>
      </header>

      {/* ───────────── HERO ───────────── */}
      <section className="relative flex flex-col items-center justify-center gap-6 px-6 py-28 text-center md:py-36">
        <Badge variant="secondary" className="text-xs tracking-wide">
          AI-Powered Internal Talent Discovery
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Make Invisible Work{" "}
          <span className="text-primary">Visible</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          OrgGraph automatically surfaces hidden expertise across your
          engineering organization — so the right people get recognized, found,
          and promoted based on real contributions, not office politics.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" render={<a href="#cta" />}>
            Request Early Access <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<a href="#solution" />}>
            See How It Works
          </Button>
        </div>
      </section>

      <Separator />

      {/* ───────────── PROBLEM STATEMENT ───────────── */}
      <section id="problem" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">The Problem</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Your Best Engineers Are Invisible
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As engineering organizations scale, knowledge about who owns what,
            who&apos;s an expert in what, and who&apos;s doing impactful work
            becomes fragmented and lost. The result? Unfair promotions, missed
            internal hires, and talent walking out the door.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Eye className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-base">Expertise Is Hidden</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A Microsoft engineer reported needing to personally pitch his
                work upward because his contributions were otherwise invisible to
                leadership. This is the norm, not the exception.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-base">
                Internal Discovery Is Broken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                An Amazon engineer with 8+ years at the company described how
                internal infrastructure exists, but the discovery layer is
                broken — forcing engineers to build connections entirely on their
                own.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-base">
                Promotions Rely on Narratives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                VPs at FinTech company Jeeves pointed to visibility gaps across
                international teams — where promotions depend on manager
                narratives rather than actual, verifiable contribution data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ───────────── SOLUTION OVERVIEW ───────────── */}
      <section id="solution" className="bg-muted/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">The Solution</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              AI That Reads the Work, Not the Resume
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              OrgGraph connects to the tools your engineers already use —
              GitHub, Jira, and Slack — and uses AI to build rich, evidence-based
              expertise profiles from real work artifacts. No forms. No
              self-assessments. Just actual contributions, made legible.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <GitCommit className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Connect Work Tools</h3>
              <p className="text-sm text-muted-foreground">
                Integrates with GitHub commits, Jira issues, and Slack
                discussions to gather real work signals.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">AI Builds Profiles</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes code contributions, technical discussions, and
                issue resolutions to build a structured expertise graph.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Match &amp; Discover</h3>
              <p className="text-sm text-muted-foreground">
                Engineers get recognized. Managers find the right talent.
                Promotion committees see real evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ───────────── CORE FEATURES ───────────── */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">Core Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Three Pillars of Internal Talent Discovery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each feature directly addresses a validated pain point from our
            customer discovery interviews with engineers, managers, and
            leadership at companies of all sizes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Feature 1 */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-2">
                Automated Expertise Profiles
              </CardTitle>
              <CardDescription>
                Make invisible work legible — automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  AI-generated skill graphs from GitHub, Jira, and Slack data
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Engineers review and confirm profiles before they go live
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Editable preferences for transfer interest and growth goals
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-2">
                Skill-Based Talent Search
              </CardTitle>
              <CardDescription>
                Find the right people inside your company — fast.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Natural language queries like &ldquo;who has React
                  experience&rdquo;
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Ranked candidate results based on real expertise and transfer
                  interest
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Summarized candidate profiles with skills, projects, and
                  evidence at a glance
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <LayoutGrid className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-2">
                Team &amp; Project Discovery
              </CardTitle>
              <CardDescription>
                Explore teams before a job posting even exists.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Auto-generated team pages with tech stacks, projects, and
                  skill gaps
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Filter teams by technology, project type, or domain
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  AI-recommended teams matched to your expertise and interests
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ───────────── TARGET AUDIENCE ───────────── */}
      <section id="audience" className="bg-muted/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Who It&apos;s For</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for Engineering Organizations That Value Their People
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              OrgGraph serves three key personas inside growing engineering
              teams — from SMBs building culture to enterprises reducing attrition.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Software Engineers</CardTitle>
                <CardDescription>Individual contributors at any level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Engineers who do impactful work — system maintenance,
                  mentoring, technical problem-solving — that rarely shows up in
                  evaluations.
                </p>
                <p>
                  They want a <strong className="text-foreground">fairer path to promotion</strong> and an easier way
                  to discover internal growth opportunities without relying on
                  self-promotion or politics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hiring &amp; Team Managers</CardTitle>
                <CardDescription>People who fill roles and build teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Managers who currently search for talent by title, team name,
                  or personal familiarity — missing strong internal candidates
                  and defaulting to costly external hiring.
                </p>
                <p>
                  They need to <strong className="text-foreground">search by real skills</strong> and understand
                  candidate fit before scheduling conversations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Leadership &amp; Promotion Committees</CardTitle>
                <CardDescription>Decision-makers on career advancement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Committees and leaders who want promotion decisions grounded
                  in verifiable contribution evidence, not just manager
                  narratives or likeability.
                </p>
                <p>
                  They need <strong className="text-foreground">objective, evidence-based profiles</strong> to lower
                  the risk of overlooking high-impact contributors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* ───────────── SOCIAL PROOF / INSIGHTS ───────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">Customer Discovery</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Validated by Real Engineers &amp; Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our product direction was shaped by interviews with engineers and
            executives across companies of every size.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <MessageSquare className="mb-3 h-5 w-5 text-muted-foreground" />
              <blockquote className="text-sm italic text-muted-foreground">
                &ldquo;I have to personally pitch my work upward because my
                contributions are otherwise invisible to leadership.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-medium">
                — Software Engineer, Microsoft
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <MessageSquare className="mb-3 h-5 w-5 text-muted-foreground" />
              <blockquote className="text-sm italic text-muted-foreground">
                &ldquo;Internal infrastructure exists, but the discovery layer on
                top of it is broken — engineers have to build their own
                connections entirely.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-medium">
                — Senior Engineer, Amazon (8+ years)
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <MessageSquare className="mb-3 h-5 w-5 text-muted-foreground" />
              <blockquote className="text-sm italic text-muted-foreground">
                &ldquo;We have visibility gaps across our international
                teams — promotions end up depending on who has the loudest
                manager, not who does the best work.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-medium">
                — VP of People &amp; VP of Product, Jeeves (FinTech)
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <MessageSquare className="mb-3 h-5 w-5 text-muted-foreground" />
              <blockquote className="text-sm italic text-muted-foreground">
                &ldquo;SMBs are a strong entry point — smaller firms lack the
                resources or time to build internal tooling that makes expertise
                visible.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-medium">
                — Startup Founder, Customer Discovery Interview
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ───────────── FINAL CTA ───────────── */}
      <section
        id="cta"
        className="flex flex-col items-center gap-6 bg-primary px-6 py-20 text-center text-primary-foreground md:py-28"
      >
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Stop Losing Talent You Already Have
        </h2>
        <p className="max-w-xl text-lg opacity-90">
          Join the waitlist to get early access to OrgGraph. Help your engineers
          get recognized, your managers hire smarter, and your organization
          retain the expertise it needs to grow.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
          >
            Request a Demo
          </Button>
        </div>
        <p className="text-xs opacity-60">
          Currently in validation stage. We&apos;re onboarding pilot partners.
        </p>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="border-t bg-background px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <GitCommit className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold">OrgGraph</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OrgGraph. AI-powered internal talent discovery.
          </p>
        </div>
      </footer>
    </div>
  );
}
