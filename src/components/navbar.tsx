export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-base font-semibold tracking-tight text-[#0a0a0a]">
          OrgGraph.
        </span>
        <nav className="hidden gap-8 text-[13px] font-medium text-[#888] md:flex">
          <a href="#solution" className="hover:text-[#0a0a0a] transition-colors">
            Solutions
          </a>
          <a href="#features" className="hover:text-[#0a0a0a] transition-colors">
            Engineers
          </a>
          <a href="#audience" className="hover:text-[#0a0a0a] transition-colors">
            Enterprise
          </a>
          <a href="#testimonials" className="hover:text-[#0a0a0a] transition-colors">
            Evidence
          </a>
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-[#0a0a0a] px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-80"
        >
          Beta Access
        </a>
      </div>
    </header>
  );
}
