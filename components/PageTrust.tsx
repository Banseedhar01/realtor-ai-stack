type PageTrustProps = {
  lastUpdated: string;
  author: string;
};

export default function PageTrust({ lastUpdated, author }: PageTrustProps) {
  return (
    <div className="mt-5 inline-flex flex-wrap gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
      <span>
        <strong>Last updated:</strong> {lastUpdated}
      </span>
      <span className="hidden text-slate-400 sm:inline">|</span>
      <span>
        <strong>Author:</strong> {author}
      </span>
    </div>
  );
}
