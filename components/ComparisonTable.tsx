type ComparisonTableProps = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

export default function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  return (
    <div className="table-scroll-wrapper overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        {caption ? (
          <caption className="border-b border-slate-100 bg-white px-4 py-2.5 text-left text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-gradient-to-r from-slate-900 to-slate-800">
          <tr>
            {headers.map((header, i) => (
              <th
                key={header}
                className={`px-4 py-3.5 font-semibold text-slate-100 first:rounded-tl-2xl last:rounded-tr-2xl ${
                  i === 0 ? "min-w-[120px] text-primary-300" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className={`border-t border-slate-100 transition-colors hover:bg-primary-50/40 ${
                rowIndex % 2 === 1 ? "bg-slate-50" : ""
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`px-4 py-3 ${
                    cellIndex === 0
                      ? "table-label-cell font-semibold text-slate-900"
                      : "text-slate-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
