export function Footer() {
  return (
    <footer className="border-t border-[#eee] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <span className="text-[13px] font-semibold text-[#0a0a0a]">
          OrgGraph.
        </span>
        <p className="text-[11px] text-[#bbb]">
          &copy; {new Date().getFullYear()} OrgGraph. AI-powered internal talent
          discovery.
        </p>
      </div>
    </footer>
  );
}
