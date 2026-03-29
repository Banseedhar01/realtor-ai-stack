type PageTrustProps = {
  lastUpdated: string;
  author: string;
};

export default function PageTrust({ lastUpdated, author }: PageTrustProps) {
  return (
    <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-xl border border-accent-200 bg-accent-50/50 px-4 py-2.5 text-sm text-slate-700">
      <span className="flex items-center gap-1.5">
        <svg className="h-4 w-4 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <strong>Last updated:</strong> {lastUpdated}
      </span>
      <span className="hidden text-slate-300 sm:inline">|</span>
      <span>
        <strong>Author:</strong> {author}
      </span>
    </div>
  );
}
